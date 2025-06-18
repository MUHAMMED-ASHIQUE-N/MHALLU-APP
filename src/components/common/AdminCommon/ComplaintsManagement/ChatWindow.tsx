import React from "react";
import MessageBubble from "./MessageBubble";
import { messages } from "../../../../data/chats";
import { users} from "../../../../data/users";
import chatimg from "../../../../assets/images/pexels-justin-shaifer-501272-1222271.jpg";


type Props = {
  userId: string;
};

function getGroupedMessages(userId: string) {
  const userMsgs = messages.filter(m => m.userId === userId);
  const byDate: { [date: string]: typeof userMsgs } = {};
  userMsgs.forEach(msg => {
    if (!byDate[msg.date]) byDate[msg.date] = [];
    byDate[msg.date].push(msg);
  });
  return byDate;
}

export const ChatWindow: React.FC<Props> = ({ userId }) => {
  const user = users.find(u => u.id === userId);
  if (!user) return <div className="h-full flex items-center justify-center">Select a user</div>;
  const grouped = getGroupedMessages(userId);

  return (
    <div className="flex flex-col h-full bg-[url('/assets/whatsapp-bg.png')] bg-cover">
      <div className="flex items-center p-5 pb-3 border-b dark:bg-gray-900 bg-white/90">
        <img src={chatimg || user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-semibold dark:text-gray-300 text-lg">{user.name}</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {Object.entries(grouped).map(([date, msgs]) => (
          <div key={date} className="mb-6">
            <div className="flex justify-center mb-2">
              <span className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-500">
                {date}
              </span>
            </div>
            {msgs.map(msg => (
              <MessageBubble key={msg.id} message={msg} user={user} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;