import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TopTabs = ({ activeTab, setActiveTab }) => (_jsxs("div", { className: "flex justify-center items-center gap-4 mb-1 mt-2", children: [_jsx("button", { className: `uppercase text-xs font-medium pb-1 border-b-2 transition duration-300 ${activeTab === "monthly"
                ? "text-emerald-700 dark:text-emerald-400 border-emerald-700"
                : "text-gray-700 dark:text-gray-300 border-transparent hover:text-emerald-600"}`, onClick: () => setActiveTab("monthly"), children: "Monthly Payment" }), _jsx("button", { className: `uppercase text-xs font-medium pb-1 border-b-2 transition duration-300 ${activeTab === "mess"
                ? "text-emerald-700 dark:text-emerald-400 border-emerald-700"
                : "text-gray-700 dark:text-gray-300 border-transparent hover:text-emerald-600"}`, onClick: () => setActiveTab("mess"), children: "Mess Payment" })] }));
export default TopTabs;
