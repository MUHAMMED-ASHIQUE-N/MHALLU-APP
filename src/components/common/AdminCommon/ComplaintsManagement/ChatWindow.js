import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import chatimg from "../../../../assets/images/avathar.png";
export const ChatWindow = ({ userId }) => {
    const { data: users } = useSelector((state) => state.complaints);
    const user = users.find((u) => u.id === userId);
    if (!user) {
        return _jsx("div", { className: "h-full flex items-center justify-center", children: "Select a user" });
    }
    return (_jsxs("div", { className: "flex flex-col h-full bg-[url('/assets/whatsapp-bg.png')] bg-cover", children: [_jsxs("div", { className: "flex items-center p-5 pb-3 border-b dark:bg-gray-900 bg-white/90", children: [_jsx("img", { src: chatimg || user.avatar, alt: user.name, className: "w-10 h-10 rounded-full mr-3 border" }), _jsx("span", { className: "font-semibold dark:text-gray-300 text-lg", children: user.name || "Anonimus" })] }), _jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [_jsx("div", { className: "flex justify-center mb-2", children: _jsx("span", { className: "bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-500", children: new Date(user.createdAt).toLocaleDateString() }) }), _jsxs("div", { className: "flex items-start mb-3", children: [_jsx("img", { src: chatimg || user.avatar, alt: user.name, className: "w-8 h-8 rounded-full mr-3 self-start" }), _jsxs("div", { children: [_jsx("div", { className: "rounded-xl dark:bg-gray-900 dark:border-gray-700 border bg-white px-5 py-3 shadow max-w-xs\r\n              transition duration-200 hover:scale-[1.02] hover:shadow-lg", children: _jsx("div", { className: "text-gray-700 dark:text-gray-300 text-sm", children: user.complaints || "No complaint message" }) }), _jsx("div", { className: "text-xs text-gray-400 mt-1 ml-1", children: new Date(user.createdAt).toLocaleTimeString() })] })] })] })] }));
};
export default ChatWindow;
