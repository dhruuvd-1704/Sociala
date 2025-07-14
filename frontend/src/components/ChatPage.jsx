// import { setSelectedUser } from "@/redux/authSlice";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Messages from "./Messages";

// const chatPage = () => {
//   const { user, suggestedUsers, selectedUser } = useSelector(
//     (store) => store.auth
//   );
//   const { onlineUsers } = useSelector(
//     store => store.chat;
//   );
//   const isOnline = false;
//   const dispatch = useDispatch();
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-white flex justify-center items-center py-8">
//       <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl border border-purple-100 flex flex-col md:flex-row overflow-hidden">
//         {/* Sidebar */}
//         <aside className="w-full md:w-1/3 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 flex flex-col gap-6">
//           <h2 className="text-2xl font-bold text-indigo-700 mb-4">Chats</h2>
//           <div className="flex-1 overflow-y-auto">
//             {suggestedUsers.length === 0 ? (
//               <div className="text-gray-500 text-center py-8">
//                 No users to chat with.
//               </div>
//             ) : (
//               <ul className="space-y-4">
//                 {suggestedUsers.map((u) => {
//                   const isOnline = onlineUsers.includes(u._id);
//                   return (
//                     <li key={u._id}>
//                       <div
//                         onClick={() => dispatch(setSelectedUser(u))}
//                         className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-50 transition group cursor-pointer"
//                       >
//                         {u.profilePicture ? (
//                           <img
//                             src={u.profilePicture}
//                             alt={u.username}
//                             className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300 shadow"
//                           />
//                         ) : (
//                           <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-xl font-bold text-white shadow border-2 border-indigo-300">
//                             {u.username?.[0]?.toUpperCase() || "U"}
//                           </div>
//                         )}
//                         <div>
//                           <div className="font-semibold text-gray-800 group-hover:text-indigo-700">
//                             {u.username}
//                           </div>
//                           <span
//                             className={`text-xs font-bold ${
//                               isOnline ? "text-green-600" : "text-red-600"
//                             }`}
//                           >
//                             {isOnline ? "Online" : "Offline"}
//                           </span>
//                           <div className="text-xs text-gray-500">{u.email}</div>
//                         </div>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </div>
//         </aside>
//         {/* Main Chat Area */}
//         {selectedUser ? (
//           <main className="flex-1 flex flex-col h-[70vh]">
//             {/* Chat Header */}
//             <div className="flex items-center gap-4 p-6 border-b border-purple-100 bg-gradient-to-r from-indigo-50 to-purple-50">
//               {selectedUser.profilePicture ? (
//                 <img
//                   src={selectedUser.profilePicture}
//                   alt={selectedUser.username}
//                   className="w-14 h-14 rounded-full object-cover border-2 border-indigo-300 shadow"
//                 />
//               ) : (
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-2xl font-bold text-white shadow border-2 border-indigo-300">
//                   {selectedUser.username?.[0]?.toUpperCase() || "U"}
//                 </div>
//               )}
//               <div>
//                 <div className="font-semibold text-gray-800 text-lg">
//                   {selectedUser.username}
//                 </div>
//                 <div className="text-xs text-gray-500">
//                   {selectedUser.email}
//                 </div>
//               </div>
//             </div>
//             {/* Chat Messages Area */}
//             {/* <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-white/70"> */}
//             {/* Example message bubbles */}
//             {/* <div className="self-start max-w-xs bg-indigo-100 rounded-2xl px-4 py-2 text-gray-800 shadow"> */}
//             {/* Hi {selectedUser.username}! */}
//             {/* </div> */}
//             {/* <div className="self-end max-w-xs bg-pink-100 rounded-2xl px-4 py-2 text-gray-800 shadow"> */}
//             {/* Hello! */}
//             {/* </div> */}
//             {/* Add your dynamic messages here */}
//             {/* </div> */}
//             <Messages selectedUser={selectedUser} />
//             {/* Chat Input */}
//             <form className="flex items-center gap-4 p-4 border-t border-purple-100 bg-white/80">
//               <input
//                 type="text"
//                 placeholder="Type your message..."
//                 className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
//                 disabled
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
//                 disabled
//               >
//                 Send
//               </button>
//             </form>
//           </main>
//         ) : (
//           <main className="flex-1 flex flex-col items-center justify-center p-8">
//             <div className="text-3xl font-extrabold text-indigo-700 mb-2">
//               Welcome to Chat
//             </div>
//             <div className="text-gray-500 text-lg text-center">
//               Select a user from the left to start chatting.
//             </div>
//           </main>
//         )}
//       </div>
//     </div>
//   );
// };

// export default chatPage;

import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setSelectedUser } from "@/redux/authSlice";
import Messages from "./Messages";
import { CircleGauge } from "lucide-react";
import axios from "axios";
import { setMessages } from "@/redux/chatSlice";

const ChatPage = () => {
  const dispatch = useDispatch();
  const [textMessage, setTextMessage] = useState("");
  // Pull auth state
  const { user, suggestedUsers, selectedUser } = useSelector(
    (store) => store.auth
  );
  // const messages = useSelector((store) => store.chat.messages);
  // Pull chat state
  const { onlineUsers, messages } = useSelector((store) => store.chat);

  // Handler to prevent form reload
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: dispatch send message action
  };
  const sendMessageHandler = async (receiverId) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${receiverId}`,
        {
          message: textMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setTextMessage("");
        // Optionally, you can dispatch an action to update the chat state
        // dispatch(addMessage(res.data.message));
        dispatch(setMessages([...messages, res.data.newMessage]));
        setTextMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setSelectedUser(null));
    };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-white flex justify-center items-center py-8">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl border border-purple-100 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 bg-gradient-to-br from-indigo-100 to-purple-100 p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Chats</h2>
          <div className="flex-1 overflow-y-auto">
            {suggestedUsers.length === 0 ? (
              <div className="text-gray-500 text-center py-8">
                No users to chat with.
              </div>
            ) : (
              <ul className="space-y-4">
                {suggestedUsers.map((u) => {
                  const isUserOnline = onlineUsers.includes(u._id);
                  return (
                    <li key={u._id}>
                      <div
                        onClick={() => dispatch(setSelectedUser(u))}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-50 transition cursor-pointer"
                      >
                        {u.profilePicture ? (
                          <img
                            src={u.profilePicture}
                            alt={u.username}
                            className="w-12 h-12 rounded-full object-cover border-2 border-indigo-300 shadow"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-xl font-bold text-white shadow border-2 border-indigo-300">
                            {u.username?.[0]?.toUpperCase() || "U"}
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-indigo-700">
                            {u.username}
                          </div>
                          <span
                            className={`text-xs font-bold ${
                              isUserOnline ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {isUserOnline ? "Online" : "Offline"}
                          </span>
                          <div className="text-xs text-gray-500">{u.email}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </aside>

        {/* Main Chat Area */}
        {selectedUser ? (
          <main className="flex-1 flex flex-col h-[70vh]">
            {/* Chat Header */}
            <div className="flex items-center gap-4 p-6 border-b border-purple-100 bg-gradient-to-r from-indigo-50 to-purple-50">
              {selectedUser.profilePicture ? (
                <img
                  src={selectedUser.profilePicture}
                  alt={selectedUser.username}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-300 shadow"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-2xl font-bold text-white shadow border-2 border-indigo-300">
                  {selectedUser.username?.[0]?.toUpperCase() || "U"}
                </div>
              )}
              <div>
                <div className="font-semibold text-gray-800 text-lg">
                  {selectedUser.username}
                </div>
                <div className="text-xs text-gray-500">
                  {selectedUser.email}
                </div>
              </div>
            </div>

            {/* Messages List */}
            <Messages selectedUser={selectedUser} />

            {/* Chat Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-4 p-4 border-t border-purple-100 bg-white/80"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
                onClick={() => sendMessageHandler(selectedUser._id)}
              >
                Send
              </button>
            </form>
          </main>
        ) : (
          <main className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="text-3xl font-extrabold text-indigo-700 mb-2">
              Welcome to Chat
            </div>
            <div className="text-gray-500 text-lg text-center">
              Select a user from the left to start chatting.
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
