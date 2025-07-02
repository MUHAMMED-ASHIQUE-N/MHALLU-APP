import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { CalenderIcon, ChevronDownIcon, GridIcon, HorizontaLDots, ListIcon, PageIcon, TableIcon, UserCircleIcon, } from "../../assets/icons";
import { useSidebar } from "../../context/admin/SidebarContext";
const navItems = [
    {
        icon: _jsx(GridIcon, {}),
        name: "Dashboard",
        path: "/admin/dashboard",
    },
    {
        icon: _jsx(UserCircleIcon, {}),
        name: "User Management",
        subItems: [
            { name: "All Users", path: "/admin/all-users" },
            { name: "Head of Families", path: "/admin/users" },
        ],
    },
    {
        icon: _jsx(ListIcon, {}),
        name: "Request Management",
        path: "/admin/requests",
    },
    {
        icon: _jsx(ListIcon, {}),
        name: "Family creation ",
        path: "/admin/family-creation",
    },
    {
        icon: _jsx(CalenderIcon, {}),
        name: "Notification Management",
        path: "/admin/notifications",
    },
    {
        icon: _jsx(TableIcon, {}),
        name: "Payment Management",
        path: "/admin/payments",
    },
    {
        icon: _jsx(PageIcon, {}),
        name: "Complaints Management",
        path: "/admin/complaints",
    },
];
const AppSidebar = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const location = useLocation();
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [subMenuHeight, setSubMenuHeight] = useState({});
    const subMenuRefs = useRef({});
    const isActive = useCallback((path) => location.pathname === path, [location.pathname]);
    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `main-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prev) => ({
                    ...prev,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);
    const handleSubmenuToggle = (index, menuType) => {
        setOpenSubmenu((prev) => prev && prev.type === menuType && prev.index === index ? null : { type: menuType, index });
    };
    // Inside renderMenuItems function:
    const renderMenuItems = (items) => (_jsx("ul", { className: "flex flex-col gap-2", children: items.map((nav, index) => {
            const activeSubmenu = openSubmenu?.index === index;
            const isNavActive = nav.path && isActive(nav.path) ? true : activeSubmenu;
            return (_jsxs("li", { children: [nav.subItems ? (_jsxs("button", { onClick: () => handleSubmenuToggle(index, "main"), className: `menu-item group flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 w-full ${activeSubmenu
                            ? "bg-white text-[#26A489]"
                            : "text-white hover:bg-white/10"}`, children: [_jsx("span", { className: "menu-item-icon-size", children: nav.icon }), (isExpanded || isHovered || isMobileOpen) && (_jsxs(_Fragment, { children: [_jsx("span", { className: "menu-item-text", children: nav.name }), _jsx(ChevronDownIcon, { className: `ml-auto w-5 h-5 transition-transform duration-200 ${activeSubmenu ? "rotate-180" : ""}` })] }))] })) : (nav.path && (_jsxs(Link, { to: nav.path, className: `menu-item group flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 ${isNavActive
                            ? "bg-white text-[#26A489]"
                            : "text-white hover:bg-white/10"}`, children: [_jsx("span", { className: "menu-item-icon-size", children: nav.icon }), (isExpanded || isHovered || isMobileOpen) && (_jsx("span", { className: "menu-item-text", children: nav.name }))] }))), nav.subItems && (isExpanded || isHovered || isMobileOpen) && (_jsx("div", { ref: (el) => {
                            subMenuRefs.current[`main-${index}`] = el;
                        }, className: "overflow-hidden transition-all duration-300", style: {
                            height: activeSubmenu
                                ? `${subMenuHeight[`main-${index}`]}px`
                                : "0px",
                        }, children: _jsx("ul", { className: "mt-2 space-y-1 ml-9", children: nav.subItems.map((subItem) => (_jsx("li", { children: _jsxs(Link, { to: subItem.path, className: `menu-dropdown-item flex items-center gap-2 px-2 py-1 rounded transition ${isActive(subItem.path)
                                        ? "bg-white text-[#26A489]"
                                        : activeSubmenu
                                            ? "text-[#26A489] hover:bg-white/80"
                                            : "text-white hover:bg-white/10"}`, children: [_jsx("span", { className: `w-2 h-2 rounded-full transition ${isActive(subItem.path)
                                                ? "bg-[#26A489]"
                                                : activeSubmenu
                                                    ? "bg-[#26A489]/50"
                                                    : "bg-white/50"}` }), subItem.name] }) }, subItem.name))) }) }))] }, nav.name));
        }) }));
    return (_jsxs("aside", { className: `fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-[#0F766E] dark:bg-gray-900 dark:border-gray-800 text-white h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
                ? "w-[290px]"
                : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`, onMouseEnter: () => !isExpanded && setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsx("div", { className: `py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`, children: _jsx(Link, { to: "/", children: isExpanded || isHovered || isMobileOpen ? (_jsx("img", { src: "/images/logo/logo.svg", alt: "Logo", width: 150, height: 40 })) : (_jsx("img", { src: "/images/logo/logo-icon.svg", alt: "Logo", width: 32, height: 32 })) }) }), _jsx("div", { className: "flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar", children: _jsx("nav", { className: "mb-6", children: _jsx("div", { className: "flex flex-col gap-4", children: _jsxs("div", { children: [_jsx("h2", { className: `mb-4 text-xs uppercase flex leading-[20px] ${!isExpanded && !isHovered
                                        ? "lg:justify-center"
                                        : "justify-start"} text-gray-300`, children: isExpanded || isHovered || isMobileOpen ? "Menu" : _jsx(HorizontaLDots, {}) }), renderMenuItems(navItems)] }) }) }) })] }));
};
export default AppSidebar;
