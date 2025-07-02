import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import  LargeScreenUi  from "../../components/common/LargeScreenUi";
// import  useIsSmallScreen  from "../../hooks/useIsSmallScreen";
import CardSvg from "../../assets/icons/card-svgrepo-com.svg";
import MessSvg from "../../assets/icons/kitchen-cooker-utensils-svgrepo-com.svg";
import NOCSvg from "../../assets/icons/memo-svgrepo-com.svg";
import ComplaintsSvg from "../../assets/icons/comment-2-svgrepo-com.svg";
import { ServiceCard } from "../../components/common/ServiceCard";
import { useNavigate } from "react-router-dom";
export const UserHome = () => {
    // const isSmallScreen = useIsSmallScreen();
    const navigate = useNavigate();
    // if (isSmallScreen) {
    //   return <LargeScreenUi />;
    // }
    return (_jsxs("div", { className: "bg-white min-h-dvh mx-auto container max-w-2xl", children: [_jsx("div", { className: "p-4", children: _jsx("div", { className: "bg-black rounded-2xl overflow-hidden h-48", children: _jsx("img", { src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop", alt: "Mosque at night", className: "w-full h-full object-cover animate-pulse\r\n            transition duration-500 ease-in-out transform hover:scale-105" }) }) }), _jsx("div", { className: "px-5 pt-4 ", children: _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsx(ServiceCard, { onClick: () => navigate("/payment"), icon: CardSvg, labelLines: ["Monthly", "Payment"] }), _jsx(ServiceCard, { icon: MessSvg, labelLines: ["MESS", "Payment"] }), _jsx(ServiceCard, { onClick: () => navigate("/my-certificates"), icon: NOCSvg, labelLines: ["NOC", "Request"] }), _jsx(ServiceCard, { icon: ComplaintsSvg, onClick: () => navigate("/complaints-box"), labelLines: ["Complaints /", "Suggestions"] })] }) })] }));
};
export default UserHome;
