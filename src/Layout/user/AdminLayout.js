import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarProvider, useSidebar } from "../../context/admin/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
// import { ThemeProvider } from "../context/ThemeContext";
const LayoutContent = () => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    return (_jsxs("div", { className: "min-h-screen xl:flex", children: [_jsxs("div", { children: [_jsx(AppSidebar, {}), _jsx(Backdrop, {})] }), _jsxs("div", { className: `flex-1 transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"} ${isMobileOpen ? "ml-0" : ""}`, children: [_jsx(AppHeader, {}), _jsx("div", { className: "mx-auto  ", children: _jsx(Outlet, {}) })] })] }));
};
const AdminLayout = () => {
    return (
    // <ThemeProvider>
    _jsx(SidebarProvider, { children: _jsx(LayoutContent, {}) })
    // </ThemeProvider>
    );
};
export default AdminLayout;
