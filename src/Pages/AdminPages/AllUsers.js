import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserTable from "../../components/common/AdminCommon/UserManagment/AllUsers/AllUserTable";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../src/firebase/firebaseConfig";
const BLOOD_GROUPS = [
    "",
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-",
    "A1+", "A1-", "A2+", "A2-",
    "A1B+", "A1B-", "A2B+", "A2B-",
    "Bombay Blood Group",
];
const calculateAge = (dob) => {
    if (!dob)
        return null;
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        age--;
    return age;
};
export default function AllUsersPage() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [ageFrom, setAgeFrom] = useState("");
    const [ageTo, setAgeTo] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const familiesCol = collection(firestore, "families");
                const familiesSnapshot = await getDocs(familiesCol);
                const usersData = [];
                for (const familyDoc of familiesSnapshot.docs) {
                    const membersCol = collection(firestore, `families/${familyDoc.id}/members`);
                    const membersSnapshot = await getDocs(membersCol);
                    membersSnapshot.forEach((doc) => {
                        const d = doc.data();
                        const age = calculateAge(d.dob);
                        usersData.push({
                            name: d.name || "",
                            phone: d.phone || "",
                            email: d.email || "",
                            bloodGroup: d.bloodGroup || "",
                            aadhar: d.aadhar || "",
                            pan: d.pan || "",
                            joinDate: d.createdAt?.toDate().toISOString().slice(0, 10) || "",
                            payment: d.payment || "",
                            address: d.address || "",
                            dob: d.dob || "",
                            age: age !== null ? age : undefined,
                        });
                    });
                }
                setUsers(usersData);
                setFilteredUsers(usersData);
            }
            catch (err) {
                console.error("Error fetching users:", err);
            }
        };
        fetchUsers();
    }, []);
    useEffect(() => {
        let filtered = users;
        // Search filter by name or phone
        if (search.trim()) {
            const s = search.toLowerCase();
            filtered = filtered.filter((u) => u.name.toLowerCase().includes(s) || u.phone.toLowerCase().includes(s));
        }
        // Age filter
        if (ageFrom || ageTo) {
            filtered = filtered.filter((u) => {
                if (u.age === undefined)
                    return false;
                if (ageFrom && u.age < Number(ageFrom))
                    return false;
                if (ageTo && u.age > Number(ageTo))
                    return false;
                return true;
            });
        }
        // Blood group filter
        if (bloodGroup) {
            filtered = filtered.filter((u) => u.bloodGroup === bloodGroup);
        }
        setFilteredUsers(filtered);
    }, [search, ageFrom, ageTo, bloodGroup, users]);
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsxs("div", { className: "flex flex-wrap gap-3 mb-4 items-center", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", className: "w-52 px-3 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300", placeholder: "Search by name or phone", value: search, onChange: (e) => setSearch(e.target.value) }), _jsx(FaSearch, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300" })] }), _jsx("input", { type: "number", className: "w-24 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300", placeholder: "Age from", value: ageFrom, onChange: (e) => setAgeFrom(e.target.value), min: 0 }), _jsx("input", { type: "number", className: "w-24 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300", placeholder: "Age to", value: ageTo, onChange: (e) => setAgeTo(e.target.value), min: 0 }), _jsx("select", { className: "w-40 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300", value: bloodGroup, onChange: (e) => setBloodGroup(e.target.value), children: BLOOD_GROUPS.map((bg) => (_jsx("option", { value: bg, children: bg ? bg : "All Blood Groups" }, bg))) })] }), _jsx(UserTable, { users: filteredUsers })] }) }));
}
