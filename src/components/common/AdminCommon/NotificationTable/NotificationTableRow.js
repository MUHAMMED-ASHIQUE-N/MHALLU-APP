import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
const statusColor = {
    Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-emerald-800",
    Inactive: "bg-gray-200 text-gray-700 dark:bg-gray-500 dark:text-gray-100",
};
const NotificationTableRow = ({ title, message, status, date, }) => (_jsxs("tr", { className: "border-b last:border-b-0 border-gray-200 dark:border-gray-600 transition-colors duration-300", children: [_jsx("td", { className: "py-2 px-4 font-bold text-gray-800 dark:text-gray-100", children: title }), _jsx("td", { className: "py-2 px-4 text-gray-700 dark:text-gray-200", children: message }), _jsx("td", { className: "py-2 px-4", children: _jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`, children: status }) }), _jsx("td", { className: "py-2 px-4 text-gray-700 dark:text-gray-200", children: date }), _jsxs("td", { className: "py-2 px-4 flex items-center gap-3", children: [_jsx("button", { className: "text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300", title: "View", children: _jsx(FaEye, {}) }), _jsx("button", { className: "text-blue-500 hover:text-blue-700 dark:hover:text-blue-300", title: "Edit", children: _jsx(FaEdit, {}) }), _jsx("button", { className: "text-red-500 hover:text-red-700 dark:hover:text-red-300", title: "Delete", children: _jsx(FaTrash, {}) })] })] }));
export default NotificationTableRow;
