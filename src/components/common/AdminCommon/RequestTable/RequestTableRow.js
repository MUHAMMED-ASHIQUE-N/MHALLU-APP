import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Modal } from "../../../ui/Modal/index";
import { Calendar, User } from "lucide-react";
import Button from "../../../ui/button/Button";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebaseConfig";
const statusColor = {
    pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
    accepted: "bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-emerald-800",
    rejected: "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
};
const statusLabel = {
    pending: "Pending",
    accepted: "Accepted",
    rejected: "Rejected",
};
const RequestTableRow = ({ certificateType, createdAt, status, name, description, id, }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const handleRequest = async (docId, newStatus) => {
        try {
            const ref = doc(firestore, "certificates", docId);
            await updateDoc(ref, { status: newStatus });
            closeModal();
        }
        catch (error) {
            console.error(error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("tr", { className: "border-b dark:border-gray-700 last:border-b-0 transition-colors duration-300", children: [_jsx("td", { className: "py-2 px-4 font-medium text-gray-800 dark:text-gray-200 text-left", children: certificateType }), _jsx("td", { className: "py-2 px-4 text-gray-700 dark:text-gray-300", children: name }), _jsx("td", { className: "py-2 px-4", children: _jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`, children: statusLabel[status] }) }), _jsx("td", { className: "py-2 px-4 text-gray-700 dark:text-gray-300", children: createdAt ? new Date(createdAt).toLocaleDateString() : "N/A" }), _jsx("td", { className: "py-2 text-center", children: _jsx("button", { onClick: openModal, className: "text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition", title: "View", children: _jsx(FaEye, {}) }) })] }), _jsx(Modal, { isOpen: isModalOpen, onClose: closeModal, isFullscreen: false, className: "p-6 max-w-2xl mx-auto", children: _jsxs("div", { className: "py-6", children: [_jsxs("div", { className: "flex justify-between items-center  py-5", children: [_jsx("h1", { className: "text-2xl font-bold", children: certificateType }), _jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`, children: statusLabel[status] })] }), _jsxs("div", { className: "flex flex-col md:flex-row gap-10 justify-between", children: [_jsxs("div", { className: "flex items-center gap-4 bg-gray-50 py-2 w-full px-2 rounded-xl", children: [_jsx(User, { className: "text-primary" }), _jsxs("div", { className: "flex flex-col items-start", children: [_jsx("h2", { className: "text-gray-700 ", children: "Sender" }), _jsx("p", { className: "font-semibold text-gray-800", children: name })] })] }), _jsxs("div", { className: "flex items-center gap-4 bg-gray-50 py-2 w-full px-2 rounded-xl", children: [_jsx(Calendar, { className: "text-primary" }), _jsxs("div", { className: "flex flex-col items-start", children: [_jsx("h2", { className: "text-gray-700", children: "Date Submitted" }), _jsxs("p", { className: "font-semibold  text-gray-800", children: [createdAt ? new Date(createdAt).toLocaleDateString() : "N/A", "                "] })] })] })] }), _jsx("h1", { className: "text-left text-lg font-semibold py-4", children: "Description" }), _jsx("div", { className: "text-left bg-gray-50 py-2 w-full px-2 rounded-xl", children: _jsx("p", { className: "leading-relaxed tracking-wide", style: { wordSpacing: "0.25rem" }, children: description }) }), _jsxs("div", { className: "flex justify-end gap-4 mt-4", children: [_jsx(Button, { className: "text-red-700", size: "sm", variant: "outline", onClick: () => handleRequest(id, "rejected"), children: "Reject" }), _jsx(Button, { onClick: () => handleRequest(id, "accepted"), size: "sm", variant: "bg_lener", children: "Accept" })] })] }) })] }));
};
export default RequestTableRow;
