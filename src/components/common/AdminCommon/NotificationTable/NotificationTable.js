import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NotificationTableRow from "./NotificationTableRow";
const notifications = [
    {
        title: "Community Meeting",
        message: "Monthly community meeting scheduled",
        status: "Active",
        date: "2024-06-10",
    },
    {
        title: "Eid Celebration",
        message: "Eid celebration arrangements",
        status: "Inactive",
        date: "2024-06-10",
    },
    {
        title: "Community Meeting",
        message: "Monthly community meeting scheduled",
        status: "Active",
        date: "2024-06-10",
    },
    {
        title: "Community Meeting",
        message: "Monthly community meeting scheduled",
        status: "Active",
        date: "2024-06-10",
    },
];
const NotificationTable = () => (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300", children: _jsxs("table", { className: "min-w-full text-left", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700 transition-colors duration-300", children: [_jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Title" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Message" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Status" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Date" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Actions" })] }) }), _jsx("tbody", { children: notifications.map((noti, idx) => (_jsx(NotificationTableRow, { ...noti, status: noti.status }, idx))) })] }) }));
export default NotificationTable;
