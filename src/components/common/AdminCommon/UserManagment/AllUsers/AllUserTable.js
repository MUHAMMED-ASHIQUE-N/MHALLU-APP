import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AllUserTableRow from "./AllUserTableRow";
const UserTable = ({ users }) => {
    return (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300", children: _jsxs("table", { className: "min-w-full text-left", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700", children: [_jsx("th", { className: "py-2 px-4 font-medium text-gray-800 dark:text-white", children: "Name" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-800 dark:text-white", children: "Phone" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-800 dark:text-white", children: "Blood Group" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-800 dark:text-white", children: "Age" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-800 dark:text-white", children: "Actions" })] }) }), _jsx("tbody", { children: users.map((user, idx) => (_jsx(AllUserTableRow, { ...user }, idx))) })] }) }));
};
export default UserTable;
