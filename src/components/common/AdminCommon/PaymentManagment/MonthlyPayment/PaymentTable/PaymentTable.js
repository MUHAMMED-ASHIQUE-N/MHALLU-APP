import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
const payments = [
    {
        user: "kadhar",
        amount: "₹5,000",
        type: "Monthly",
        dueDate: "2024-06-15",
        status: "Paid",
    },
    {
        user: "kadhar",
        amount: "₹5,000",
        type: "Monthly",
        dueDate: "2024-06-15",
        status: "UnPaid",
    },
    {
        user: "kadhar",
        amount: "₹5,000",
        type: "Monthly",
        dueDate: "2024-06-15",
        status: "Paid",
    },
    {
        user: "kadhar",
        amount: "₹5,000",
        type: "Monthly",
        dueDate: "2024-06-15",
        status: "Paid",
    },
];
const statusClass = (status) => status === "Paid"
    ? "bg-green-100 text-green-600 border border-green-400"
    : "bg-red-100 text-red-600 border border-red-400";
const PaymentTable = () => {
    return (_jsxs("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-8 transition duration-300", children: [_jsxs("div", { className: "flex flex-wrap gap-4 mb-4 w-full max-w-3xl", children: [_jsxs("button", { className: "flex items-center gap-2 px-5 py-2 bg-teal-600 text-white rounded-md shadow transition duration-300 hover:bg-teal-700 hover:scale-105 font-medium", children: [_jsx(FaPlus, {}), " Add Payments"] }), _jsxs("select", { className: "ml-auto px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow text-gray-700 dark:text-gray-300 transition duration-300 focus:ring-2 focus:ring-emerald-500", children: [_jsx("option", { children: "Filter" }), _jsx("option", { children: "Paid" }), _jsx("option", { children: "UnPaid" })] })] }), _jsx("div", { className: "w-full max-w-6xl bg-white dark:bg-gray-800 rounded-md shadow-md overflow-x-auto transition duration-300", children: _jsxs("table", { className: "min-w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700 transition", children: [_jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "User" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "Amount" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "Type" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "Due Date" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "Status" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200", children: "Actions" })] }) }), _jsx("tbody", { children: payments.map((p, i) => (_jsxs("tr", { className: "border-b dark:border-gray-700 last:border-b-0 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300", children: [_jsx("td", { className: "px-4 py-3 text-gray-800 dark:text-gray-300", children: p.user }), _jsx("td", { className: "px-4 py-3 text-gray-800 dark:text-gray-300", children: p.amount }), _jsx("td", { className: "px-4 py-3 text-gray-800 dark:text-gray-300", children: p.type }), _jsx("td", { className: "px-4 py-3 text-gray-800 dark:text-gray-300", children: p.dueDate }), _jsx("td", { className: "px-4 py-3", children: _jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium inline-block ${statusClass(p.status)}`, children: p.status }) }), _jsxs("td", { className: "px-4 py-3 flex gap-4 items-center", children: [_jsx("button", { className: "text-teal-600 hover:text-teal-800 transition duration-300 hover:scale-110", title: "View", children: _jsx(FaEye, {}) }), _jsx("button", { className: "text-blue-500 hover:text-blue-700 transition duration-300 hover:scale-110", title: "Edit", children: _jsx(FaEdit, {}) }), _jsx("button", { className: "text-red-500 hover:text-red-700 transition duration-300 hover:scale-110", title: "Delete", children: _jsx(FaTrash, {}) })] })] }, i))) })] }) })] }));
};
export default PaymentTable;
