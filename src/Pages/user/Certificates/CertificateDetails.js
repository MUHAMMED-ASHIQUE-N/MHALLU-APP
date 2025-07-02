import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderBar from "../../../Layout/user/HeaderBar";
import { firestore } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../../../components/common/Loading";
import { toast } from "react-toastify";
const CertificateDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [certificate, setCertificate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);
    useEffect(() => {
        if (!id) {
            navigate(-1);
            return;
        }
        setLoading(true);
        const fetchCertificate = async () => {
            try {
                const ref = doc(firestore, "certificates", id);
                const snap = await getDoc(ref);
                if (snap.exists()) {
                    const data = snap.data();
                    const cert = {
                        id: snap.id,
                        certificateType: data.certificateType ?? "Unknown",
                        name: data.name ?? "",
                        status: data.status ?? "pending",
                        createdAt: data.createdAt?.toDate?.().toLocaleDateString() ?? "",
                        description: data.description ?? ""
                    };
                    setCertificate(cert);
                }
                else {
                    setCertificate(null);
                }
            }
            catch (err) {
                setCertificate(null);
            }
            finally {
                setLoading(false);
            }
        };
        fetchCertificate();
    }, [id, navigate]);
    const handleDownload = async () => {
        toast.success("Preparing your download...");
        setIsDownloading(true);
        try {
            // Simulate download process
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Here you would implement the actual download logic
            toast.success("Certificate downloaded successfully!");
        }
        catch (error) {
            toast.error("Failed to download certificate. Please try again.");
        }
        finally {
            setIsDownloading(false);
        }
        ;
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100", children: [_jsx(HeaderBar, { title: "Certificate Details" }), _jsxs("main", { className: "px-4 py-6 max-w-2xl mx-auto", children: [loading && (_jsx("div", { className: "flex items-center justify-center py-20", children: _jsxs("div", { className: "text-center space-y-4", children: [_jsx(Loading, {}), _jsx("p", { className: "text-slate-600 text-sm font-medium", children: "Loading certificate details..." })] }) })), !loading && !certificate && (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center", children: _jsx("svg", { className: "w-10 h-10 text-slate-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }), _jsx("h3", { className: "text-xl font-semibold text-slate-800 mb-2", children: "Certificate Not Found" }), _jsx("p", { className: "text-slate-500 mb-6", children: "The requested certificate could not be located." }), _jsx("button", { onClick: () => navigate(-1), className: "px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium", children: "Go Back" })] })), !loading && certificate && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300", children: [_jsx("div", { className: "flex items-start justify-between mb-6", children: _jsx("div", { className: "flex-1", children: _jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg", children: _jsx("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }) }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-slate-800 leading-tight", children: certificate.certificateType }), _jsx("p", { className: "text-slate-600 font-medium", children: "Digital Certificate" })] })] }) }) }), _jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-semibold text-slate-600 uppercase tracking-wide", children: "Recipient Name" }), _jsxs("div", { className: "flex items-center gap-3 p-4 bg-slate-50 rounded-xl border", children: [_jsx("div", { className: "w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center", children: _jsx("svg", { className: "w-4 h-4 text-slate-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }) }), _jsx("span", { className: "font-semibold text-slate-800", children: certificate.name })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-semibold text-slate-600 uppercase tracking-wide", children: "Issue Date" }), _jsxs("div", { className: "flex items-center gap-3 p-4 bg-slate-50 rounded-xl border", children: [_jsx("div", { className: "w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center", children: _jsx("svg", { className: "w-4 h-4 text-slate-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }), _jsx("span", { className: "font-semibold text-slate-800", children: certificate.createdAt })] })] })] }), certificate.description && (_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-semibold text-slate-600 uppercase tracking-wide", children: "Description" }), _jsx("div", { className: "p-4 bg-slate-50 rounded-xl border", children: _jsx("p", { className: "text-slate-700 leading-relaxed", children: certificate.description }) })] }))] })] }), _jsx("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6", children: certificate.status === "accepted" ? (_jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: "w-16 h-16 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg", children: _jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-slate-800 mb-2", children: "Ready to Download" }), _jsx("p", { className: "text-slate-600 mb-6", children: "Your certificate has been approved and is ready for download." })] }), _jsx("button", { onClick: handleDownload, disabled: isDownloading, className: "w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3", children: isDownloading ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }), "Preparing Download..."] })) : (_jsxs(_Fragment, { children: [_jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }), "Download Certificate"] })) })] })) : (_jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: `w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg ${certificate.status === "pending"
                                                ? "bg-gradient-to-br from-amber-400 to-orange-500"
                                                : "bg-gradient-to-br from-red-400 to-red-600"}`, children: _jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: certificate.status === "pending" ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" })) }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-slate-800 mb-2", children: certificate.status === "pending" ? "Under Review" : "Request Rejected" }), _jsx("p", { className: "text-slate-600", children: certificate.status === "pending"
                                                        ? "Your certificate request is being processed. You'll be able to download it once approved."
                                                        : "Your certificate request was not approved. Please contact support for more information." })] })] })) })] }))] })] }));
};
export default CertificateDetails;
