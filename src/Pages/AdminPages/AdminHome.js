import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StatCard from "../../components/common/AdminCommon/Dashboard/StatCard";
import ActivityItem from "../../components/common/AdminCommon/Dashboard/ActivityItem";
import QuickStats from "../../components/common/AdminCommon/Dashboard/QuickStats";
import { HiOutlineUsers, HiOutlineBell, HiOutlineDocumentText, } from "react-icons/hi2";
import { LuIndianRupee } from "react-icons/lu";
const activities = [
    { title: "New user registration", time: "2 minutes ago" },
    { title: "New payment received", time: "10 minutes ago" },
    { title: "New complaint submitted", time: "1 hour ago" },
];
export default function Dashboard() {
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-8", children: [_jsx(StatCard, { title: "Total Users", value: "1,234", icon: _jsx(HiOutlineUsers, { size: 32 }), iconColor: "text-emerald-600" }), _jsx(StatCard, { title: "Pending Requests", value: "56", icon: _jsx(HiOutlineDocumentText, { size: 32 }), iconColor: "text-red-500" }), _jsx(StatCard, { title: "Monthly Revenue", value: "\u20B92,45,000", icon: _jsx(LuIndianRupee, { size: 32 }), iconColor: "text-green-500" }), _jsx(StatCard, { title: "Active Notifications", value: "12", icon: _jsx(HiOutlineBell, { size: 32 }), iconColor: "text-green-600" })] }), _jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8 transition-colors duration-300", children: [_jsx("div", { className: "text-base font-semibold mb-4 text-gray-800 dark:text-white", children: "Recent Activities" }), _jsx("div", { children: activities.map((act, idx) => (_jsx(ActivityItem, { title: act.title, time: act.time }, idx))) })] }), _jsx(QuickStats, {})] }) }));
}
