import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UserListItem from "./UserListItem";
import SortingDropdown from "./SortingDropdown";
import { useSelector } from "react-redux";
export const ChatList = ({ selectedUserId, setSelectedUserId }) => {
    const { data } = useSelector((state) => state.complaints);
    console.log("Fetched complaints:", data);
    return (_jsxs("div", { className: "bg-[#c6f7ef] dark:bg-gray-900 w-full h-full p-4", children: [_jsx(SortingDropdown, {}), _jsx("div", { children: data.map((user, idx) => (_jsx(UserListItem, { user: {
                        id: user.id,
                        name: user.name || "Unknown User",
                        avatar: user.avatar || "https://via.placeholder.com/150",
                    }, chat: {
                        userId: user.id,
                        unreadCount: 0,
                        lastMessageTime: new Date(user.createdAt).toLocaleString(),
                    }, selected: selectedUserId === user.id, onClick: () => setSelectedUserId(user.id) }, user.id + idx))) })] }));
};
export default ChatList;
