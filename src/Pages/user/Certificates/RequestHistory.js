import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import HeaderBar from "../../../Layout/user/HeaderBar";
import { useUserAuth } from "../../../context/user/userAuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";
import CertificateCard from "../../../../src/components/common/user/CertificateCard";
// Example emoji icon, replace with your SVG if needed
const CertificateIcon = () => (_jsx("span", { role: "img", "aria-label": "certificate", className: "text-xl mr-2", children: "\uD83D\uDCDC" }));
const statusLabel = {
    accepted: "Accepted",
    pending: "Pending",
    rejected: "Rejected"
};
const RequestHistory = () => {
    const { familyId } = useUserAuth();
    const [certRequests, setCertRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!familyId)
            return;
        setLoading(true);
        const q = query(collection(firestore, "certificates"), where("familyId", "==", familyId));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map(doc => {
                const d = doc.data();
                return {
                    id: doc.id,
                    certificateType: d.certificateType || "Unknown",
                    name: d.name || "",
                    status: d.status || "pending",
                    createdAt: d.createdAt?.toDate?.().toLocaleDateString() || "",
                    description: d.description || ""
                };
            }).sort((a, b) => {
                // Show pending > accepted > rejected, then newest first
                const order = ["pending", "accepted", "rejected"];
                if (a.status !== b.status) {
                    return order.indexOf(a.status) - order.indexOf(b.status);
                }
                return (b.createdAt || "").localeCompare(a.createdAt || "");
            });
            setCertRequests(data);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [familyId]);
    return (_jsxs("div", { className: "relative min-h-dvh bg-gray-100 pb-8", children: [_jsx(HeaderBar, { title: "Request History" }), _jsxs("main", { className: "px-4 pt-4 max-w-sm mx-auto", children: [_jsxs("div", { className: "flex items-center font-semibold text-base text-gray-700 mb-8", children: [_jsx(CertificateIcon, {}), "Request History"] }), loading && _jsx("div", { className: "text-center text-gray-400 py-10", children: "Loading..." }), !loading && certRequests.length === 0 && (_jsx("div", { className: "text-center text-gray-400 py-10", children: "No certificate requests found." })), certRequests.map(req => (_jsx(CertificateCard, { status: req.status, title: req.certificateType, desc: req.description, issuedOrReq: statusLabel[req.status], date: req.createdAt || "" }, req.id)))] })] }));
};
export default RequestHistory;
