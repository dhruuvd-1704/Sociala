import React from "react";
import { useSelector } from "react-redux";
import SuggestedUsers from "./SuggestedUsers";

const RightSidebar = () => {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <aside
      className="group sticky top-24 self-start w-80 bg-white p-6 rounded-xl shadow-lg
                 transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl"
      style={{ maxHeight: "calc(100vh - 6rem)" }}
    >
      {/* Logged-in user */}
      {authUser && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={authUser.avatarUrl || "/default-avatar.png"}
              alt={authUser.username}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 
                         transition-all duration-200 ease-in-out group-hover:border-indigo-500"
            />
            <div className="overflow-hidden">
              <p className="font-semibold text-gray-900 truncate">
                {authUser.username}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {authUser.fullName || authUser.bio || ""}
              </p>
            </div>
          </div>
          <button className="text-sm font-medium text-blue-500 hover:text-indigo-600 
                             transition-colors duration-200">
            Switch
          </button>
        </div>
      )}

      {/* Suggestions header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-600">Suggested for you</p>
        <button className="text-xs font-semibold text-gray-900 hover:underline">
          See All
        </button>
      </div>

      {/* Scrollable suggestions list */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 14rem)" }}
      >
        <SuggestedUsers />
      </div>
    </aside>
  );
};

export default RightSidebar;
