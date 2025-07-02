import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import chatimg from "../../../../assets/images/avathar.png";
export const UserListItem = ({ user, chat, selected, onClick }) => (_jsxs("button", { className: `flex items-center px-4 py-3 rounded-xl shadow dark:bg-gray-900 bg-white transition w-full mb-4
      ${selected ? "ring-2 ring-teal-400" : ""}
      hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02] duration-200`, onClick: onClick, children: [_jsx("img", { src: chatimg || user.avatar, alt: user.name, className: "w-10 h-10 rounded-full mr-3 border" }), _jsxs("div", { className: "flex-1 text-left", children: [_jsx("div", { className: "font-medium dark:text-gray-300 text-base", children: user.name }), _jsx("div", { className: "text-xs text-gray-400", children: chat.lastMessageTime })] }), _jsx("div", { className: "flex flex-col items-center gap-2 ml-2", children: _jsx("span", { className: "text-xs bg-teal-500 text-white rounded-full px-2 py-0.5 font-semibold", children: chat.unreadCount }) })] }));
export default UserListItem;
