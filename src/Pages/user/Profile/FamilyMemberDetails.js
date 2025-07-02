import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";
import { useUserAuth } from "../../../../src/context/user/userAuthContext";
import AppNavbar from "../../../Layout/user/AppNavbar";
import HeaderBar from "../../../Layout/user/HeaderBar";
// Calculate age from dob
const calculateAge = (dob) => {
    if (!dob)
        return null;
    const [year, month, day] = dob.split('-').map(Number);
    if (isNaN(year) || isNaN(month) || isNaN(day))
        return null;
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date(2025, 6, 2); // Example date: July 2, 2025
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        return age - 1;
    }
    return age;
};
// Generic info row
const InfoRow = ({ label, value, bold, }) => (_jsxs("div", { className: "mb-3", children: [_jsx("div", { className: "text-xs text-gray-500", children: label }), _jsx("div", { className: `bg-gray-100 rounded-lg px-4 py-3 mt-1 text-base ${bold ? "font-semibold" : ""}`, children: value })] }));
// For side-by-side info
const InfoGrid = ({ items }) => (_jsx("div", { className: "flex gap-3 mb-4", children: items.map((item) => (_jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-xs text-gray-500", children: item.label }), _jsx("div", { className: "bg-gray-100 rounded-lg px-4 py-2 mt-1 font-semibold text-base", children: item.value })] }, item.label))) }));
const FamilyMemberDetails = () => {
    const { id: memberId } = useParams(); // Get member ID from URL
    const { familyId } = useUserAuth(); // Get family ID from context
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch member data when component mounts or IDs change
    useEffect(() => {
        const fetchMember = async () => {
            if (!familyId || !memberId) {
                setError("Invalid family or member ID");
                setLoading(false);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const memberDocRef = doc(firestore, "families", familyId, "members", memberId);
                const snap = await getDoc(memberDocRef);
                if (snap.exists()) {
                    setMember({ id: snap.id, ...snap.data() });
                }
                else {
                    setError("Member not found");
                }
            }
            catch (err) {
                console.error("Error fetching member:", err);
                setError("Failed to fetch member details");
            }
            finally {
                setLoading(false);
            }
        };
        fetchMember();
    }, [familyId, memberId]);
    // Render loading state
    if (loading) {
        return _jsx("div", { className: "text-center py-10", children: "Loading..." });
    }
    // Render error state or if member is not found
    if (error || !member) {
        return _jsx("div", { className: "text-center py-10 text-red-600", children: error || "Member not found" });
    }
    // Calculate age from dob
    const age = calculateAge(member.dob);
    return (_jsxs("div", { className: "min-h-dvh bg-white pb-16", children: [_jsx(HeaderBar, { title: "Family Member Details" }), _jsxs("main", { className: "px-4 pt-6 mx-auto", children: [_jsxs("div", { className: "text-center mb-3", children: [_jsx("div", { className: "text-lg font-bold text-gray-900", children: member.name }), _jsx("div", { className: "text-teal-700 text-sm font-medium", children: member.relation })] }), _jsx(InfoGrid, { items: [
                            { label: "Age", value: age !== null ? `${age} years` : "N/A" },
                            { label: "Blood Group", value: member.bloodGroup || "N/A" },
                        ] }), member.education && _jsx(InfoRow, { label: "Education", value: member.education }), member.phone && _jsx(InfoRow, { label: "Phone number", value: member.phone }), member.email && _jsx(InfoRow, { label: "Email", value: member.email }), member.dob && _jsx(InfoRow, { label: "Date of Birth", value: member.dob })] }), _jsx(AppNavbar, {})] }));
};
export default FamilyMemberDetails;
