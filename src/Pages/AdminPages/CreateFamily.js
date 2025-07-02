import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { initSecondaryAuth, firestore } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { collection, doc, setDoc, serverTimestamp, getDoc, } from "firebase/firestore";
import { useUserAuth } from "../../context/user/userAuthContext";
const EMAIL_DOMAIN = "mahallu-app.local";
const BLOOD_GROUPS = [
    "",
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-",
    "A1+", "A1-", "A2+", "A2-",
    "A1B+", "A1B-", "A2B+", "A2B-",
    "Bombay Blood Group",
];
const CreateFamily = () => {
    const { user: adminUser, role } = useUserAuth();
    const [houseNumber, setHouseNumber] = useState("");
    const [password, setPassword] = useState("");
    const [members, setMembers] = useState([
        { name: "", relation: "" },
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const handleMemberChange = (idx, field, value) => {
        setMembers((prev) => {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], [field]: value };
            return copy;
        });
    };
    const addMemberField = () => {
        setMembers((prev) => [
            ...prev,
            { name: "", relation: "" },
        ]);
    };
    const removeMemberField = (idx) => {
        setMembers((prev) => prev.filter((_, i) => i !== idx));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMsg(null);
        if (!adminUser || role !== "admin") {
            setError("Unauthorized");
            return;
        }
        if (!houseNumber.trim() || !password) {
            setError("House number and password are required");
            return;
        }
        setLoading(true);
        try {
            const familyDocRef = doc(firestore, "families", houseNumber);
            const snap = await getDoc(familyDocRef);
            if (snap.exists()) {
                throw new Error("House number already exists");
            }
            const { auth: secondaryAuth, delete: deleteSecondary } = initSecondaryAuth();
            const email = `${houseNumber}@${EMAIL_DOMAIN}`;
            let userCredential;
            try {
                userCredential = await createUserWithEmailAndPassword(secondaryAuth, email, password);
            }
            catch (err) {
                throw new Error(`Failed to create auth user: ${err.message}`);
            }
            finally {
                await deleteSecondary();
            }
            const familyUid = userCredential.user.uid;
            const familyData = {
                houseNumber,
                createdBy: adminUser.uid,
                createdAt: serverTimestamp(),
            };
            await setDoc(familyDocRef, familyData);
            const membersColRef = collection(familyDocRef, "members");
            for (const member of members) {
                if (member.name.trim()) {
                    const memberDocRef = doc(membersColRef);
                    const { name, relation, email, phone, bloodGroup, education, dob } = member;
                    await setDoc(memberDocRef, {
                        name: name.trim(),
                        relation: relation.trim(),
                        email: email?.trim() || "",
                        phone: phone?.trim() || "", // Save phone number
                        bloodGroup: bloodGroup || "",
                        education: education?.trim() || "",
                        dob: dob || "",
                        createdAt: serverTimestamp(),
                    });
                }
            }
            const userDocRef = doc(firestore, "users", familyUid);
            await setDoc(userDocRef, {
                role: "family",
                familyId: houseNumber,
                createdAt: serverTimestamp(),
            });
            setSuccessMsg("Family created successfully");
            setHouseNumber("");
            setPassword("");
            setMembers([{ name: "", relation: "" }]);
        }
        catch (err) {
            console.error(err);
            setError(err.message || "Failed to create family");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto mt-10 p-6 border rounded shadow", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Create New Family" }), error && _jsx("p", { className: "text-red-600 mb-2", children: error }), successMsg && _jsx("p", { className: "text-green-600 mb-2", children: successMsg }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { className: "block mb-1", children: "House Number" }), _jsx("input", { type: "text", value: houseNumber, onChange: (e) => setHouseNumber(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true }), _jsx("label", { className: "block mb-1", children: "Password for Family Login" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true }), _jsxs("div", { className: "mb-4", children: [_jsx("h3", { className: "font-medium", children: "Family Members" }), members.map((m, idx) => (_jsxs("div", { className: "border rounded p-3 mb-3", children: [_jsxs("div", { className: "flex space-x-2 items-center mb-2", children: [_jsx("input", { type: "text", placeholder: "Name", value: m.name, onChange: (e) => handleMemberChange(idx, "name", e.target.value), className: "flex-1 p-2 border rounded", required: true }), _jsx("input", { type: "text", placeholder: "Relation", value: m.relation, onChange: (e) => handleMemberChange(idx, "relation", e.target.value), className: "flex-1 p-2 border rounded", required: true }), members.length > 1 && (_jsx("button", { type: "button", onClick: () => removeMemberField(idx), className: "text-red-600", children: "Remove" }))] }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-2", children: [_jsx("input", { type: "email", placeholder: "Email (optional)", value: m.email || "", onChange: (e) => handleMemberChange(idx, "email", e.target.value), className: "flex-1 p-2 border rounded" }), _jsx("input", { type: "tel", placeholder: "Phone (optional)", value: m.phone || "", onChange: (e) => handleMemberChange(idx, "phone", e.target.value), className: "flex-1 p-2 border rounded" }), _jsx("select", { value: m.bloodGroup || "", onChange: (e) => handleMemberChange(idx, "bloodGroup", e.target.value), className: "flex-1 p-2 border rounded", children: BLOOD_GROUPS.map((bg) => (_jsx("option", { value: bg, children: bg ? bg : "Select Blood Group (optional)" }, bg))) }), _jsx("input", { type: "text", placeholder: "Education (optional)", value: m.education || "", onChange: (e) => handleMemberChange(idx, "education", e.target.value), className: "flex-1 p-2 border rounded" }), _jsx("input", { type: "date", placeholder: "DOB (optional)", value: m.dob || "", onChange: (e) => handleMemberChange(idx, "dob", e.target.value), className: "flex-1 p-2 border rounded", max: new Date().toISOString().slice(0, 10) })] })] }, idx))), _jsx("button", { type: "button", onClick: addMemberField, className: "mt-2 text-blue-500", children: "+ Add Member" })] }), _jsx("button", { type: "submit", disabled: loading, className: "px-4 py-2 bg-green-500 text-white rounded", children: loading ? "Creating..." : "Create Family" })] })] }));
};
export default CreateFamily;
