import React from "react";
import UserListItem from "./UserListItem";
import SortingDropdown from "./SortingDropdown";
import { chatPreviews } from "../../../../data/chats";
import { users } from "../../../../data/users";

type Props = {
  selectedUserId: string;
  setSelectedUserId: (id: string) => void;
};

export const ChatList: React.FC<Props> = ({ selectedUserId, setSelectedUserId }) => {
  return (
    <div className="bg-[#c6f7ef] dark:bg-gray-900 w-full h-full p-4">
      <SortingDropdown />
      <div>
        {chatPreviews.map((chat, idx) => {
          const user = users.find(u => u.id === chat.userId)!;
          return (
            <UserListItem
              key={user.id + idx}
              user={user}
              chat={chat}
              selected={selectedUserId === user.id}
              onClick={() => setSelectedUserId(user.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;