import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StatCard from "./StatCard";
import { HiOutlineUsers, HiOutlineDocumentText } from "react-icons/hi2";
import { LuIndianRupee } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowDownLeft } from "react-icons/bs";
const StatGrid = () => (_jsxs("div", { className: "flex flex-col gap-10", children: [_jsxs("div", { className: "flex flex-wrap gap-10 mb-2", children: [_jsx(StatCard, { label: "Total Users", value: "1,234", icon: _jsx(HiOutlineUsers, { size: 32 }), iconColor: "text-emerald-600" }), _jsx(StatCard, { label: "Completed Users", value: "1,000", icon: _jsx(FaCheckCircle, { size: 28 }), iconColor: "text-cyan-400" })] }), _jsxs("div", { className: "flex flex-wrap gap-10 mb-2", children: [_jsx(StatCard, { label: "Pending Users", value: _jsx("span", { className: "text-red-500", children: "234" }), icon: _jsx(HiOutlineDocumentText, { size: 30 }), iconColor: "text-red-500" }), _jsx(StatCard, { label: "Total Money Received", value: "\u20B92,45,000", icon: _jsx(LuIndianRupee, { size: 30 }), iconColor: "text-green-500" })] }), _jsx("div", { className: "flex flex-wrap gap-10", children: _jsx(StatCard, { label: "Pending Money", value: "1,43,000", icon: _jsx(BsArrowDownLeft, { size: 28 }), iconColor: "text-blue-500" }) })] }));
export default StatGrid;
