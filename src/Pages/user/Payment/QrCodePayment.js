import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// You can substitute this with your actual QR SVG path or data URI
import QrImage from "../../../assets/icons/QR_Code_Example.svg";
import HeaderBar from "../../../Layout/user/HeaderBar";
const AmountCard = () => (_jsxs("div", { className: "w-full rounded-xl shadow-md bg-gradient-to-br from-[#0f766e] to-[#059669] px-6  py-12 mb-7 flex flex-col items-center text-white", children: [_jsx("div", { className: "text-base mb-1 opacity-90", children: "Amount Due" }), _jsx("div", { className: "text-3xl font-bold mb-1", children: "\u20B9200" }), _jsx("div", { className: "text-sm font-semibold opacity-90", children: "Due: June 15, 2025" })] }));
const QrCodePayment = () => (_jsxs("div", { className: "relative min-h-dvh bg-gray-100 pb-20", children: [_jsx(HeaderBar, { title: "Qr Code Payment" }), _jsxs("main", { className: "px-4 pt-6 max-w-sm mx-auto flex flex-col items-center", children: [_jsx(AmountCard, {}), _jsx("div", { className: "bg-white rounded-xl shadow flex flex-col items-center p-4 my-12 mb-6 border", children: _jsx("img", { src: QrImage, alt: "QR Code", className: "w-64  h-64 object-contain" }) }), _jsx("div", { className: "text-center text-teal-700 text-sm font-medium", children: "Scan with any UPI app" })] })] }));
export default QrCodePayment;
