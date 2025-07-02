import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ChatList from "../../components/common/AdminCommon/ComplaintsManagement/ChatList";
import ChatWindow from "../../components/common/AdminCommon/ComplaintsManagement/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";
import Loading from "../../components/common/Loading";
import EroorPage from "../error/index";
import { setComplaints } from "../../redux/complaints/FetchComplaints"; // you'll create this
export const ComplaintsManagement = () => {
    const [selectedUserId, setSelectedUserId] = useState("1");
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.complaints);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "complaints"), (snapshot) => {
            const complaints = snapshot.docs.map((doc) => {
                const rawData = doc.data();
                return {
                    id: doc.id,
                    ...rawData,
                    createdAt: rawData.createdAt?.toDate().toISOString() || null,
                };
            });
            dispatch(setComplaints(complaints));
        }, (err) => {
            console.error("Live update error", err);
        });
        return () => unsubscribe(); // clean up on unmount
    }, [dispatch]);
    if (loading)
        return _jsx(Loading, {});
    if (error)
        return _jsx(EroorPage, {});
    return (_jsxs("div", { className: "flex h-screen overflow-hidden", children: [_jsx("div", { className: "w-full md:w-1/3 h-full dark:bg-gray-900 bg-white shadow-md border-r transition duration-300", children: _jsx(ChatList, { selectedUserId: selectedUserId, setSelectedUserId: setSelectedUserId }) }), _jsx("div", { className: "flex-1 h-full bg-[#f5f5dc] dark:bg-gray-900 overflow-y-auto transition duration-300", children: _jsx(ChatWindow, { userId: selectedUserId }) })] }));
};
export default ComplaintsManagement;
