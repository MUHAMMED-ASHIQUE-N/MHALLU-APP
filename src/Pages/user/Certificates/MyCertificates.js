import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Button from "../../../components/ui/button/Button";
import HeaderBar from "../../../Layout/user/HeaderBar";
import { Modal } from "../../../components/ui/Modal/index";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/form/input/InputField";
import TextArea from "../../../components/form/input/TextArea";
import { ButtonForm } from "../../../components/form/ButtonForm";
import Form from "../../../components/form/Form";
import { toast } from "react-toastify";
import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";
import { useUserAuth } from "../../../context/user/userAuthContext";
import CertificateCard from "../../../components/common/user/CertificateCard";
// ----- UI constants -----
const CERTIFICATE_TYPES = [
    { label: "Maarage Certificate", value: "maarage" },
    { label: "Mahallu Clearance", value: "mahallu" },
    { label: "Other Certificate", value: "other" },
];
// ----- Utility function -----
// ----- Components -----
const CertificateIcon = () => (_jsx("span", { role: "img", "aria-label": "certificate", className: "text-xl mr-2", children: "\uD83D\uDCDC" }));
const CertificateRequestModal = ({ isOpen, onClose, onSelect }) => (_jsxs(Modal, { isOpen: isOpen, onClose: onClose, className: "max-w-xs mx-auto py-6 px-4", showCloseButton: true, children: [_jsx("div", { className: "text-lg font-bold text-gray-700 mb-5 text-center", children: "Request Certificate" }), _jsx("div", { className: "flex flex-col gap-3", children: CERTIFICATE_TYPES.map((cert) => (_jsx(Button, { variant: "bg_lener", className: "w-full py-2 text-base font-semibold", onClick: () => onSelect(cert.value), children: cert.label }, cert.value))) })] }));
const CertificateRequestForm = ({ type, isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const { familyId, user } = useUserAuth();
    const certificateLabel = CERTIFICATE_TYPES.find((c) => c.value === type)?.label || "Certificate";
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !desc) {
            toast.error("Fill all the fields");
            return;
        }
        try {
            await addDoc(collection(firestore, "certificates"), {
                certificateType: certificateLabel,
                name,
                description: desc,
                createdAt: new Date(),
                status: "pending",
                familyId,
                userId: user?.uid,
            });
            toast.success("Requested");
            setDesc("");
            setName("");
            onClose();
        }
        catch (error) {
            console.error("Error in requesting certificates", error);
            toast.error("Request failed");
        }
    };
    return (_jsxs(Modal, { isOpen: isOpen, onClose: onClose, className: "max-w-xs mx-auto py-6 px-4", showCloseButton: true, children: [_jsxs("div", { className: "text-lg font-bold text-gray-700 my-5 text-center", children: ["Request ", certificateLabel] }), _jsxs(Form, { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-700 mb-1", children: "Name of person" }), _jsx(Input, { type: "text", value: name, onChange: e => setName(e.target.value), placeholder: "Enter name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-gray-700 mb-1", children: "Description" }), _jsx(TextArea, { value: desc, onChange: setDesc, placeholder: "Reason/description", rows: 3 })] }), _jsx(ButtonForm, { type: "submit", variant: "bg_lener", className: "w-full py-2 text-base font-semibold mt-2", children: "Submit Request" })] })] }));
};
// ----- Main Page -----
const MyCertificates = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formType, setFormType] = useState(null);
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const { familyId } = useUserAuth();
    const navigate = useNavigate();
    // Fetch family's certificates
    useEffect(() => {
        if (!familyId)
            return;
        setLoading(true);
        const q = query(collection(firestore, "certificates"), where("familyId", "==", familyId), where("status", "in", ["pending", "accepted", "rejected"]));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map(doc => {
                const d = doc.data();
                return {
                    id: doc.id,
                    certificateType: d.certificateType ?? "Unknown",
                    name: d.name ?? "",
                    status: d.status ?? "pending",
                    createdAt: d.createdAt?.toDate?.().toLocaleDateString() ?? "",
                    description: d.description ?? "",
                };
            }).sort((a, b) => {
                // Accepted first, then pending, then rejected, then by most recent
                const order = ["accepted", "pending", "rejected"];
                if (a.status !== b.status) {
                    return order.indexOf(a.status) - order.indexOf(b.status);
                }
                return (b.createdAt || "").localeCompare(a.createdAt || "");
            });
            console.log("cert", data);
            setCertificates(data);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [familyId]);
    return (_jsxs("div", { className: "relative min-h-dvh bg-gray-100 pb-8", children: [_jsx(HeaderBar, { title: "My Certificates" }), _jsxs("main", { className: "px-4 pt-4 max-w-sm mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between ", children: [_jsxs("div", { className: "flex items-center font-semibold text-base text-gray-700", children: [_jsx(CertificateIcon, {}), "Available Certificates"] }), _jsx(Button, { className: "text-sm font-semibold", variant: "bg_lener", onClick: () => setModalOpen(true), children: "+ Noc" })] }), _jsx("div", { className: "py-3 mb-12", children: _jsx("button", { onClick: () => navigate("/request-history"), className: "float-end text-stone-500 underline", children: "Request History" }) }), loading && _jsx("div", { className: "text-center text-gray-400 py-10", children: "Loading..." }), !loading && certificates.filter(cert => cert.status === "accepted").length === 0 && (_jsx("div", { className: "text-center text-gray-400 py-10", children: "No certificate requests found." })), certificates
                        .filter(cert => cert.status === "accepted")
                        .map(cert => (_jsx(CertificateCard, { onClick: () => navigate(`/certificate/${cert.id}`), status: cert.status, title: cert.certificateType, desc: cert.description, issuedOrReq: "Accepted", date: cert.createdAt }, cert.id)))] }), _jsx(CertificateRequestModal, { isOpen: modalOpen && !formType, onClose: () => setModalOpen(false), onSelect: type => setFormType(type) }), _jsx(CertificateRequestForm, { type: formType ?? "", isOpen: !!formType, onClose: () => {
                    setFormType(null);
                    setModalOpen(false);
                } })] }));
};
export default MyCertificates;
