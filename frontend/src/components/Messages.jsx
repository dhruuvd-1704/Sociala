// import useGetAllMessages from "@/hooks/useGetAllMessages";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Messages = ({ selectedUser }) => {
//   // Dummy messages for demonstration
//   useGetAllMessages();
//   const messages = useSelector((store) => store.chat);

//   return (
//     <div className="overflow-y-auto flex-1 p-4">
//       {/* Profile preview at the top */}
//       <div className="flex flex-col items-center justify-center mb-8">
//         {selectedUser.profilePicture ? (
//           <img
//             src={selectedUser.profilePicture}
//             alt="profile"
//             className="h-20 w-20 rounded-full object-cover border-2 border-indigo-300 shadow mb-2"
//           />
//         ) : (
//           <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-3xl font-bold text-white shadow border-2 border-indigo-300 mb-2">
//             {selectedUser.username?.[0]?.toUpperCase() || "U"}
//           </div>
//         )}
//         <span className="font-semibold text-lg">{selectedUser?.username}</span>
//         <Link to={`/profile/${selectedUser?._id}`}>
//           <button className="h-8 my-2 px-4 bg-indigo-500 text-white rounded-full text-sm hover:bg-pink-500 transition">
//             View profile
//           </button>
//         </Link>
//       </div>
//       {/* Messages */}
//       <div className="flex flex-col gap-4">
//         {messages &&
//           messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
//                 msg.fromMe
//                   ? "self-end bg-gradient-to-r from-indigo-400 to-pink-400 text-white"
//                   : "self-start bg-gray-200 text-gray-800"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import useGetAllMessages from "@/hooks/useGetAllMessages";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Messages = ({ selectedUser }) => {
//   useGetAllMessages();

//   // Always get messages as an array
//   // const messages = useSelector((store) =>
//   //   Array.isArray(store.chat.messages) ? store.chat.messages : []
//   // );
//   const { messages } = useSelector((store) => store.chat || []);

//   return (
//     <div className="overflow-y-auto flex-1 p-4">
//       {/* Profile preview at the top */}
//       <div className="flex flex-col items-center justify-center mb-8">
//         {selectedUser.profilePicture ? (
//           <img
//             src={selectedUser.profilePicture}
//             alt="profile"
//             className="h-20 w-20 rounded-full object-cover border-2 border-indigo-300 shadow mb-2"
//           />
//         ) : (
//           <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-3xl font-bold text-white shadow border-2 border-indigo-300 mb-2">
//             {selectedUser.username?.[0]?.toUpperCase() || "U"}
//           </div>
//         )}
//         <span className="font-semibold text-lg">{selectedUser?.username}</span>
//         <Link to={`/profile/${selectedUser?._id}`}>
//           <button className="h-8 my-2 px-4 bg-indigo-500 text-white rounded-full text-sm hover:bg-pink-500 transition">
//             View profile
//           </button>
//         </Link>
//       </div>
//       {/* Messages */}
//       <div className="flex flex-col gap-4">
//         {messages.length === 0 ? (
//           <div className="text-center text-gray-400 italic">
//             No messages yet.
//           </div>
//         ) : (
//           messages.map((msg) => (
//             <div
//               key={msg._id || msg.id}
//               className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
//                 msg.fromMe
//                   ? "self-end bg-gradient-to-r from-indigo-400 to-pink-400 text-white"
//                   : "self-start bg-gray-200 text-gray-800"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Messages;

import useGetAllMessages from "@/hooks/useGetAllMessages";
import useGetRTM from "@/hooks/useGetRTM";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Messages = ({ selectedUser }) => {
  useGetRTM();
  useGetAllMessages();

  // always an array—even if store.chat.messages was undefined
  const messages = useSelector((store) =>
    Array.isArray(store.chat?.messages) ? store.chat.messages : []
  );

  return (
    <div className="overflow-y-auto flex-1 p-4">
      {/* Profile preview */}
      <div className="flex flex-col items-center justify-center mb-8">
        {selectedUser.profilePicture ? (
          <img
            src={selectedUser.profilePicture}
            alt="profile"
            className="h-20 w-20 rounded-full object-cover border-2 border-indigo-300 shadow mb-2"
          />
        ) : (
          <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-3xl font-bold text-white shadow border-2 border-indigo-300 mb-2">
            {selectedUser.username?.[0]?.toUpperCase() || "U"}
          </div>
        )}
        <span className="font-semibold text-lg">{selectedUser?.username}</span>
        <Link to={`/profile/${selectedUser?._id}`}>
          <button className="h-8 my-2 px-4 bg-indigo-500 text-white rounded-full text-sm hover:bg-pink-500 transition">
            View profile
          </button>
        </Link>
      </div>

      {/* Messages list */}
      <div className="flex flex-col gap-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 italic">
            No messages yet.
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
                // you'll still need to shape each msg in the hook
                msg.senderId === selectedUser._id
                  ? "self-start bg-gray-200 text-gray-800"
                  : "self-end bg-gradient-to-r from-indigo-400 to-pink-400 text-white"
              }`}
            >
              {msg.message /* or msg.text if you renamed it */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
