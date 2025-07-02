import { jsx as _jsx } from "react/jsx-runtime";
// src/context/AppProviders.tsx
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./user/userAuthContext";
import { ThemeProvider } from "./admin/ThemeContext";
const AppProviders = () => {
    return (_jsx(AuthProvider, { children: _jsx(ThemeProvider, { children: _jsx(Outlet, {}) }) }));
};
export default AppProviders;
