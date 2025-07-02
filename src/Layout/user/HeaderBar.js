import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const BackButton = ({ onClick }) => {
    const navigate = useNavigate();
    return (_jsx("button", { "aria-label": "Go back", onClick: onClick ?? (() => navigate(-1)), className: "flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 shadow-md hover:bg-white/20 transition duration-300", tabIndex: 0, type: "button", children: _jsx("svg", { width: 24, height: 24, fill: "none", viewBox: "0 0 24 24", children: _jsx("path", { d: "M15 18l-6-6 6-6", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
};
const HeaderBar = ({ title, onBack, bgClassName = "bg-primary" }) => (_jsx("div", { className: `w-full px-4 py-4 ${bgClassName}`, children: _jsxs("div", { className: "flex items-center justify-between relative", children: [_jsx(BackButton, { onClick: onBack }), _jsx("h1", { className: "absolute left-1/2 transform -translate-x-1/2 text-white text-lg font-bold", children: title }), _jsx("span", { className: "w-10 h-10" }), " "] }) }));
export default HeaderBar;
