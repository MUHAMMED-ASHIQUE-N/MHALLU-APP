import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import QrSvg from "../../../assets/icons/QR_Code_Example.svg";
import RazorpaySvg from "../../../assets/icons/razorpay-icon.svg";
import AppNavbar from "../../../Layout/user/AppNavbar";
import HeaderBar from "../../../Layout/user/HeaderBar";
// You can replace with a dedicated BackButton component if you have one
const PaymentOption = ({ icon, title, subtitle, onClick }) => (_jsxs("div", { onClick: onClick, className: "flex items-center gap-3 bg-white rounded-xl shadow px-4 py-6 mb-4", children: [_jsx("img", { src: icon, alt: title, className: "w-14 h-14" }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-teal-700", children: title }), _jsx("div", { className: "text-xs text-gray-500", children: subtitle })] })] }));
const MonthlyPayment = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "relative min-h-dvh bg-gray-100 pb-20", children: [_jsx(HeaderBar, { title: "Monthly Payment", bgClassName: "bg-primary" }), _jsxs("main", { className: "px-4 pt-6 max-w-sm mx-auto", children: [_jsxs("div", { className: "rounded-xl shadow-md bg-gradient-to-br from-[#0f766e] to-[#059669] px-6  py-12 mb-7 flex flex-col items-center text-white", children: [_jsx("div", { className: "text-base mb-1 opacity-90", children: "Amount Due" }), _jsx("div", { className: "text-3xl font-bold mb-1", children: "\u20B9200" }), _jsx("div", { className: "text-sm font-semibold opacity-90", children: "Due: June 15, 2025" })] }), _jsx(PaymentOption, { onClick: () => navigate("/qr-code-payment"), icon: QrSvg, title: "QR Code", subtitle: "Scan & Pay instantly" }), _jsx(PaymentOption, { onClick: () => navigate("/upi-payment"), icon: RazorpaySvg, title: "Razorpay", subtitle: "UPI, Cards, Net Banking" })] }), _jsx(AppNavbar, {})] }));
};
export default MonthlyPayment;
