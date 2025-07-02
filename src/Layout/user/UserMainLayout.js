import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import AppNavbar from "./AppNavbar";
const UserMainLayout = () => {
    return (_jsxs("div", { className: "min-h-dvh flex flex-col bg-gray-50", children: [_jsx(Header, {}), _jsx(Outlet, {}), _jsx(AppNavbar, {})] }));
};
export default UserMainLayout;
