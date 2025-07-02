import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/pages/Login.tsx
import { useState } from "react";
import { useUserAuth } from "../context/user/userAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonForm } from "../components/form/ButtonForm";
// const EMAIL_DOMAIN = "mahallu-app.local";
const Login = () => {
    const { loginWithHouseNumber } = useUserAuth();
    const [isAdminTab, setIsAdminTab] = useState(false);
    const [houseNumber, setHouseNumber] = useState("");
    const [password, setPassword] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || (isAdminTab ? "/admin/dashboard" : "/");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            if (isAdminTab) {
                // Admin: sign in with email/password directly
                await signInWithEmailAndPassword(auth, adminEmail, adminPassword);
            }
            else {
                // Family: sign in via house number
                await loginWithHouseNumber(houseNumber, password);
            }
            // After sign-in, onAuthStateChanged in context fetches role.
            // We can navigate here, but better: wait until role is set and then navigate via effect or check role in a useEffect.
            navigate(from, { replace: true });
        }
        catch (err) {
            console.error(err);
            setError(err.message || "Login failed");
        }
    };
    return (_jsxs("div", { className: "max-w-md mx-auto mt-20 p-6 border rounded shadow", children: [_jsxs("div", { className: "flex mb-4", children: [_jsx("button", { className: `flex-1 py-2 ${!isAdminTab ? "border-b-2 border-blue-500" : ""}`, onClick: () => { setIsAdminTab(false); setError(null); }, children: "Family Login" }), _jsx("button", { className: `flex-1 py-2 ${isAdminTab ? "border-b-2 border-blue-500" : ""}`, onClick: () => { setIsAdminTab(true); setError(null); }, children: "Admin Login" })] }), _jsxs("form", { onSubmit: handleSubmit, children: [!isAdminTab ? (_jsxs(_Fragment, { children: [_jsx("label", { className: "block mb-1", children: "House Number" }), _jsx("input", { type: "text", value: houseNumber, onChange: (e) => setHouseNumber(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true }), _jsx("label", { className: "block mb-1", children: "Password" }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true })] })) : (_jsxs(_Fragment, { children: [_jsx("label", { className: "block mb-1", children: "Admin Email" }), _jsx("input", { type: "email", value: adminEmail, onChange: (e) => setAdminEmail(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true }), _jsx("label", { className: "block mb-1", children: "Password" }), _jsx("input", { type: "password", value: adminPassword, onChange: (e) => setAdminPassword(e.target.value), className: "w-full mb-3 p-2 border rounded", required: true })] })), error && _jsx("p", { className: "text-red-600 mb-2", children: error }), _jsx("div", { className: "w-full py-4", children: _jsx(ButtonForm, { type: "submit", variant: "bg_lener", className: "w-full", children: "Login" }) })] })] }));
};
export default Login;
