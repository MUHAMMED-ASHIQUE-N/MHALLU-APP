import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserTable from "../../components/common/AdminCommon/UserManagment/UserTable";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../src/firebase/firebaseConfig";
export default function UsersPage() {
    const [families, setFamilies] = useState([]);
    const [filteredFamilies, setFilteredFamilies] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchFamilies = async () => {
            try {
                const familiesCol = collection(firestore, "families");
                const familiesSnapshot = await getDocs(familiesCol);
                const familiesData = [];
                for (const familyDoc of familiesSnapshot.docs) {
                    const familyData = familyDoc.data();
                    const membersCol = collection(firestore, `families/${familyDoc.id}/members`);
                    const membersSnapshot = await getDocs(membersCol);
                    const membersData = membersSnapshot.docs.map((doc) => {
                        const d = doc.data();
                        return {
                            name: d.name || "",
                            phone: d.phone || "",
                            email: d.email || "",
                            bloodGroup: d.bloodGroup || "",
                            aadhar: d.aadhar || "",
                            pan: d.pan || "",
                            joinDate: d.createdAt?.toDate().toISOString().slice(0, 10) || "",
                            payment: d.payment || "",
                            address: d.address || "",
                        };
                    });
                    familiesData.push({
                        houseNumber: familyData.houseNumber || familyDoc.id,
                        address: familyData.address || "",
                        members: membersData,
                    });
                }
                setFamilies(familiesData);
                setFilteredFamilies(familiesData);
            }
            catch (err) {
                console.error("Error fetching families:", err);
            }
        };
        fetchFamilies();
    }, []);
    useEffect(() => {
        if (search.trim()) {
            const s = search.toLowerCase();
            setFilteredFamilies(families.filter((f) => f.houseNumber.toLowerCase().includes(s)));
        }
        else {
            setFilteredFamilies(families);
        }
    }, [search, families]);
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("div", { className: "mb-4", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", className: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300", placeholder: "Search by house number...", value: search, onChange: (e) => setSearch(e.target.value) }), _jsx(FaSearch, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300" })] }) }), _jsx(UserTable, { families: filteredFamilies })] }) }));
}
