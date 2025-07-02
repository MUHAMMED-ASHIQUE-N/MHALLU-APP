import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaPlus } from "react-icons/fa";
import NotificationTable from "../../components/common/AdminCommon/NotificationTable/NotificationTable";
export default function NotificationPage() {
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("div", { className: "mb-4", children: _jsxs("button", { className: "flex items-center bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-lg text-base shadow-md transition-colors duration-300", children: [_jsx(FaPlus, { className: "mr-2" }), " Add Notifications"] }) }), _jsx(NotificationTable, {})] }) }));
}
