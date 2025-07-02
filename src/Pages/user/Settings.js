import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../../Layout/user/AppNavbar";
import Button from "../../components/ui/button/Button";
import { useUserAuth } from "../../context/user/userAuthContext";
const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { logout } = useUserAuth();
    const navigate = useNavigate();
    const handleThemeToggle = () => {
        setDarkMode((prev) => !prev);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    };
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true }); // Redirect after logout
        }
        catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (_jsxs("div", { className: " bg-gray-100 dark:bg-gray-900 pb-16", children: [_jsx("h2", { className: "text-slate-900 text-xl font-bold flex-1 text-center py-4", children: "Settings" }), _jsxs("main", { className: "px-4 pt-6 max-w-sm mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg px-4 py-3 mb-5 shadow", children: [_jsx("span", { className: "font-medium text-gray-800 dark:text-gray-200", children: "Dark Theme" }), _jsx("button", { onClick: handleThemeToggle, className: `w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-200 ${darkMode ? "bg-teal-600" : "bg-gray-300"}`, "aria-pressed": darkMode, "aria-label": "Toggle theme", children: _jsx("span", { className: `h-4 w-4 bg-white rounded-full shadow transform transition-transform duration-200 ${darkMode ? "translate-x-6" : ""}` }) })] }), _jsx(Button, { onClick: handleLogout, variant: "bg_lener", className: "w-full  text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-150", children: "Logout" })] }), _jsx(AppNavbar, {})] }));
};
export default Settings;
