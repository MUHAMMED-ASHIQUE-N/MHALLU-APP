import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const StatCard = ({ title, value, icon, iconColor }) => (_jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center max-w-[350px] min-h-[180px] transition-colors duration-300", children: [_jsx("span", { className: "text-gray-800 dark:text-white text-base mb-8", children: title }), _jsx("span", { className: "text-2xl font-semibold mb-8 text-gray-800 dark:text-white", children: value }), _jsx("span", { className: iconColor, children: icon })] }));
export default StatCard;
