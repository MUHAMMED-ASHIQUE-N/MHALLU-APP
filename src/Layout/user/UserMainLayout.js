import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Header from "./HeaderBar";
import AppNavbar from "./AppNavbar";
const UserMainLayout = () => {
    return (_jsxs("div", { children: [_jsx(Header, { title: null }), _jsx(Outlet, {}), _jsx(AppNavbar, {})] }));
};
export default UserMainLayout;
