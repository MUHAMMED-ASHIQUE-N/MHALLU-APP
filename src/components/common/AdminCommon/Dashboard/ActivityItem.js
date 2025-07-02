import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiOutlineCheckCircle } from "react-icons/hi2";
const ActivityItem = ({ title, time }) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-3 flex items-start transition-colors duration-300", children: [_jsx("span", { className: "mt-1 mr-3 text-[#26A489]", children: _jsx(HiOutlineCheckCircle, { size: 22 }) }), _jsxs("div", { children: [_jsx("div", { className: "text-gray-800 dark:text-white text-sm font-medium", children: title }), _jsx("div", { className: "text-xs text-gray-500 dark:text-gray-300", children: time })] })] }));
export default ActivityItem;
