import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardSvg from "../../../assets/icons/card-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import MessSvg from "../../../assets/icons/plate-knife-fork-icon.svg";
const PaymentCard = ({ icon, title, description, alt, onClick }) => (_jsxs("div", { className: "bg-white rounded-xl shadow-md flex items-center gap-4 px-5 py-8 mb-6 cursor-pointer", onClick: onClick, role: onClick ? "button" : undefined, tabIndex: onClick ? 0 : undefined, style: onClick ? { userSelect: "none" } : undefined, children: [_jsx("div", { className: "flex-shrink-0 w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center", children: _jsx("img", { src: icon, alt: alt, className: "w-14 h-14" }) }), _jsxs("div", { children: [_jsx("div", { className: "text-teal-700 font-semibold text-lg leading-tight", children: title }), _jsx("div", { className: "text-gray-500 text-sm", children: description })] })] }));
const PaymentHome = () => {
    const navigate = useNavigate();
    return (_jsx("div", { className: "relativebg-gray-100 pb-20", children: _jsxs("main", { className: "px-4 pt-8 pb-2 max-w-sm mx-auto", children: [_jsx(PaymentCard, { onClick: () => navigate("/monthly-payment"), icon: CardSvg, alt: "Monthly Payment", title: "Monthly Payment", description: "Regular monthly dues" }), _jsx(PaymentCard, { icon: MessSvg, alt: "Mess Payment", title: "Mess Payment", description: "Meal Plan Payment" })] }) }));
};
export default PaymentHome;
