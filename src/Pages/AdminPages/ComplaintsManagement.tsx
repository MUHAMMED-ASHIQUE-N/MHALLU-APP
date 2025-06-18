import React, { useState } from "react";
import ChatList from "../../components/common/AdminCommon/ComplaintsManagement/ChatList";
import ChatWindow from "../../components/common/AdminCommon/ComplaintsManagement/ChatWindow";

export default function ComplaintsManagement() {
  const [selectedUserId, setSelectedUserId] = useState("1");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Chat List Section */}
      <div className="w-full md:w-1/3 h-full dark:bg-gray-900 bg-white shadow-md border-r transition duration-300">
        <ChatList
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
      </div>

      {/* Chat Window Section */}
      <div className="flex-1 h-full bg-[#f5f5dc] dark:bg-gray-900 overflow-y-auto transition duration-300">
        <ChatWindow userId={selectedUserId} />
      </div>
    </div>
  );
}
