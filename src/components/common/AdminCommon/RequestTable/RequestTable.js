import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import RequestTableRow from "./RequestTableRow";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebaseConfig";
const RequestTable = () => {
    const [requestData, setRequestData] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "certificates"), (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                const rawData = doc.data();
                return {
                    id: doc.id,
                    certificateType: rawData.certificateType || "Unknown",
                    name: rawData.name || "Unknown",
                    description: rawData.description || "",
                    status: rawData.status || "pending",
                    createdAt: rawData.createdAt?.toDate?.().toISOString() || null,
                };
            });
            // Custom sort: Pending first, then by most recent
            const sorted = data.sort((a, b) => {
                if (a.status !== b.status) {
                    if (a.status === "pending")
                        return -1;
                    if (b.status === "pending")
                        return 1;
                    if (a.status === "accepted")
                        return -1;
                    if (b.status === "accepted")
                        return 1;
                }
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA;
            });
            setRequestData(sorted);
        }, (error) => {
            console.error("Real-time listener error:", error);
        });
        return () => unsubscribe();
    }, []);
    return (_jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300", children: _jsxs("table", { className: "min-w-full text-center", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700 transition-colors duration-300", children: [_jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200 text-left", children: "Request Type" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "User" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Status" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Date" }), _jsx("th", { className: "py-2 px-4 font-medium text-gray-700 dark:text-gray-200", children: "Actions" })] }) }), _jsx("tbody", { children: requestData.map((req) => (_jsx(RequestTableRow, { ...req }, req.id))) })] }) }));
};
export default RequestTable;
