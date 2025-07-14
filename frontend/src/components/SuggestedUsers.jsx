import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuggestedUsers = () => {
  const suggestedUsers = useSelector((state) => state.auth?.suggestedUsers) || [];

  if (!suggestedUsers.length) {
    return (
      <div className="text-center text-gray-500 py-6">
        No suggestions for now.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 space-y-4 w-full max-w-xs">
      <h2 className="text-lg font-semibold text-gray-800 px-1">
        Suggested for you
      </h2>
      {suggestedUsers.map((user) => (
        <div
          key={user._id}
          className="group flex items-center justify-between p-3 bg-gray-50 rounded-xl
                     transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md"
        >
          {/* Wrap avatar+info in a Link */}
          <Link
            to={`/profile/${user._id}`}
            className="flex items-center gap-3 overflow-hidden hover:opacity-80 transition-opacity"
          >
            <img
              src={user.profilePicture || "/default-avatar.png"}
              alt={user.username}
              className="w-10 h-10 rounded-full border-2 border-gray-300
                         transition-all duration-200 ease-in-out group-hover:border-indigo-500"
            />
            <div className="truncate max-w-[130px]">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.username}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user.bio || "No bio available"}
              </p>
            </div>
          </Link>

          <button
            className="text-xs font-semibold px-3 py-1 rounded-full
                       bg-gradient-to-r from-indigo-500 to-blue-500 text-white
                       transition-transform duration-200 ease-out
                       group-hover:scale-105 hover:from-indigo-600 hover:to-blue-600"
            aria-label={`Follow ${user.username}`}
          >
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default SuggestedUsers;
