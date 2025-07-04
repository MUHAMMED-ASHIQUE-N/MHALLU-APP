// ChatList.tsx
import React from "react";
import UserListItem from "./UserListItem";
import SortingDropdown from "./SortingDropdown";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";


type Props = {
  selectedUserId: string;
  setSelectedUserId: (id: string) => void;
};

export const ChatList: React.FC<Props> = ({ selectedUserId, setSelectedUserId }) => {
  const { data } = useSelector((state: RootState) => state.complaints);
     console.log("Fetched complaints:", data);

  return (
    <div className="bg-[#c6f7ef] dark:bg-gray-900 w-full h-full p-4">
      <SortingDropdown />
      <div>
        {data.map((user, idx) => (
          <UserListItem
            key={user.id + idx}
            user={
              {
                id: user.id,
                name: user.name || "Unknown User",
                avatar: user.avatar || "https://via.placeholder.com/150",
              }
            }
            chat={{
              userId: user.id,
              unreadCount: 0,
              lastMessageTime: new Date(user.createdAt).toLocaleString(),
            }}
            selected={selectedUserId === user.id}
            onClick={() => setSelectedUserId(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;