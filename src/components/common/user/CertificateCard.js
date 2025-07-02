import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const statusStyles = {
    accepted: "bg-green-50 text-green-700",
    pending: "bg-yellow-50 text-yellow-800",
    rejected: "bg-red-50 text-red-700",
};
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
const CertificateCard = ({ status, title, desc, issuedOrReq, date, onClick }) => (_jsx("div", { onClick: onClick, className: "cursor-pointer border-l-6 border-primary bg-white rounded-xl shadow-md px-4 py-6 mb-4 transition hover:bg-gray-50", tabIndex: 0, role: onClick ? "button" : undefined, "aria-pressed": false, children: _jsxs("div", { className: "pl-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "font-semibold text-gray-800", children: title }), _jsx("span", { className: `px-3 py-0.5 rounded-full text-xs font-semibold ml-2 ${statusStyles[status]}`, children: issuedOrReq })] }), _jsx("div", { className: "text-sm text-gray-500", children: truncateText(desc, 80) }), _jsxs("div", { className: "text-xs text-gray-400 mt-1", children: [status === "accepted" ? "Issued" : "Requested", ": ", date] })] }) }));
export default CertificateCard;
