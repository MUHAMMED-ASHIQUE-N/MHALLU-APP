import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import RequestTable from "../../../src/components/common/AdminCommon/RequestTable/RequestTable";
const RequestsPages = () => {
    const [search, setSearch] = useState("");
    // Future: pass search/filter to RequestTable as needed
    return (_jsx("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:gap-6 mb-6", children: [_jsx("div", { className: "flex-1", children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white transition-colors duration-300", placeholder: "Search user..." }), _jsx(FaSearch, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" })] }) }), _jsx("div", { className: "w-full md:w-64", children: _jsxs("div", { className: "relative", children: [_jsx("select", { className: "appearance-none w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white transition-colors duration-300", defaultValue: "all", children: _jsx("option", { value: "all", children: "All Requests" }) }), _jsx(IoChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 pointer-events-none" })] }) })] }), _jsx(RequestTable /* search={search} filter={} */, {})] }) }));
};
export default RequestsPages;
