import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../../../src/context/user/userAuthContext";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../../../Layout/user/AppNavbar";
// Info icons for address, members, phone
const InfoIcon = ({ type }) => {
    switch (type) {
        case "location":
            return (_jsxs("svg", { className: "w-5 h-5 text-teal-700", fill: "none", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M12 21s-6-5.686-6-10A6 6 0 1112 21z", stroke: "currentColor", strokeWidth: 1.7 }), _jsx("circle", { cx: "12", cy: "11", r: "2.5", stroke: "currentColor", strokeWidth: 1.7 })] }));
        case "members":
            return (_jsxs("svg", { className: "w-5 h-5 text-teal-700", fill: "none", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M16 19v-2a4 4 0 00-8 0v2", stroke: "currentColor", strokeWidth: 1.7 }), _jsx("circle", { cx: "12", cy: "7", r: "4", stroke: "currentColor", strokeWidth: 1.7 })] }));
        case "phone":
            return (_jsx("svg", { className: "w-5 h-5 text-teal-700", fill: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: "M22 16.92V21a1 1 0 01-1.1 1A19.72 19.72 0 013 5.1 1 1 0 014 4h4.09a1 1 0 011 .75l1.09 4.36a1 1 0 01-.29 1L8.21 11.79a16 16 0 006 6l1.7-1.7a1 1 0 011-.29l4.36 1.09a1 1 0 01.75 1V16.92z", stroke: "currentColor", strokeWidth: 1.7 }) }));
        default:
            return null;
    }
};
// Edit icon for card
const EditIcon = () => (_jsx("svg", { className: "w-5 h-5 text-teal-700", fill: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: "M16.862 3.487a2.13 2.13 0 113.015 3.015l-11.27 11.27-3.42.38.38-3.42 11.295-11.245z", stroke: "currentColor", strokeWidth: 1.7, strokeLinejoin: "round" }) }));
// Calculate age from dob
const calculateAge = (dob) => {
    if (!dob)
        return null;
    const [year, month, day] = dob.split('-').map(Number);
    if (isNaN(year) || isNaN(month) || isNaN(day))
        return null;
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date(2025, 6, 2); // July 2, 2025, as per system date
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
};
// Updated FamilyMemberCard to use dob and calculate age
const FamilyMemberCard = ({ name, relation, dob, onClick }) => {
    const age = calculateAge(dob);
    return (_jsx("div", { onClick: onClick, className: "border-l-6 border-primary bg-white rounded-xl shadow px-4 py-5 mb-4 mx-2 cursor-pointer", children: _jsxs("div", { className: "pl-4", children: [_jsx("div", { className: "font-semibold text-lg text-gray-900", children: name }), _jsx("div", { className: "text-sm text-gray-600", children: `Age: ${age !== null ? age : 'N/A'} - ${relation}` })] }) }));
};
const FamilyInformation = () => {
    const { familyId } = useUserAuth();
    const [members, setMembers] = useState([]);
    const [familyPhone, setFamilyPhone] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMembers = async () => {
            if (!familyId) {
                setError("Please log in as a family");
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const membersCol = collection(firestore, "families", familyId, "members");
                const snap = await getDocs(membersCol);
                const membersData = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMembers(membersData);
                // Set family phone: prefer Guardian's phone, else first member's phone
                const guardian = membersData.find(m => m.relation.toLowerCase() === "guardian");
                setFamilyPhone(guardian?.phone || membersData[0]?.phone || null);
            }
            catch (err) {
                console.error("Error fetching members:", err);
                setError("Failed to fetch family members");
            }
            finally {
                setLoading(false);
            }
        };
        fetchMembers();
    }, [familyId]);
    if (loading) {
        return _jsx("div", { className: "text-center py-10", children: "Loading..." });
    }
    if (error) {
        return _jsx("div", { className: "text-center py-10 text-red-600", children: error });
    }
    if (!familyId) {
        return _jsx("div", { className: "text-center py-10", children: "Please log in as a family" });
    }
    return (_jsxs("div", { className: "bg-gray-100 pb-20 relative", children: [_jsx("h2", { className: "text-slate-900 text-center py-4 text-2xl font-extrabold", children: "Family Information" }), _jsxs("main", { className: "px-4 max-w-md mx-auto", children: [_jsx("div", { className: "relative bg-white rounded-2xl shadow px-5 py-6 mb-6", children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("div", { className: "font-bold text-lg text-gray-900 mb-1", children: familyId }), _jsxs("div", { className: "flex items-center text-sm text-gray-600 mb-1", children: [_jsx(InfoIcon, { type: "members" }), _jsx("span", { className: "ml-2", children: `${members.length} Member${members.length !== 1 ? 's' : ''}` })] }), familyPhone && (_jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [_jsx(InfoIcon, { type: "phone" }), _jsx("span", { className: "ml-2", children: familyPhone })] }))] }), _jsx("button", { className: "rounded-full p-1.5 bg-teal-50 hover:bg-teal-100 shadow", "aria-label": "Edit", type: "button", children: _jsx(EditIcon, {}) })] }) }), _jsxs("div", { className: "flex items-center gap-2 mb-3 mt-2 px-2", children: [_jsxs("svg", { className: "w-6 h-6 text-teal-700", fill: "none", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M16 19v-2a4 4 0 00-8 0v2", stroke: "currentColor", strokeWidth: 1.7 }), _jsx("circle", { cx: "12", cy: "7", r: "4", stroke: "currentColor", strokeWidth: 1.7 }), _jsx("circle", { cx: "6", cy: "17", r: "4", stroke: "currentColor", strokeWidth: 1.7 }), _jsx("circle", { cx: "18", cy: "17", r: "4", stroke: "currentColor", strokeWidth: 1.7 })] }), _jsx("span", { className: "font-bold text-lg text-teal-800", children: "Family Members" })] }), _jsx("div", { className: "bg-teal-100 rounded-2xl py-4 mb-20 shadow-inner", children: members.length > 0 ? (members.map((member) => (_jsx(FamilyMemberCard, { name: member.name, relation: member.relation, dob: member.dob, onClick: () => navigate(`/family-member/${member.id}`) }, member.id)))) : (_jsx("div", { className: "text-center text-gray-600 py-4", children: "No members found" })) })] }), _jsx(AppNavbar, {})] }));
};
export default FamilyInformation;
