import {
  FileVideo,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CreatePost from "./CreatePost";
import { Button } from "./ui/button";
import { clearLikeNotifications } from "@/redux/rtnSlice"; // adjust path if needed

const LeftSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  // always an array
  const likeNotification = useSelector((store) =>
    Array.isArray(store.realTimeNotification.likeNotification)
      ? store.realTimeNotification.likeNotification
      : []
  );

  const [openCreate, setOpenCreate] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const sidebarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Search />, text: "Search" },
    { icon: <TrendingUp />, text: "Explore" },
    { icon: <MessageCircle />, text: "Message" },
    { icon: <Heart />, text: "Notifications" },
    { icon: <PlusSquare />, text: "Create" },
    {
      icon: (
        <Avatar>
          <AvatarImage src={user?.profilePicture} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
    },
    { icon: <LogOut />, text: "Logout" },
  ];

  const handleClick = (text) => {
    switch (text) {
      case "Logout":
        return logoutHandler();
      case "Create":
        return setOpenCreate(true);
      case "Profile":
        return navigate(`/profile/${user._id}`);
      case "Home":
        return navigate("/");
      case "Message":
        return navigate("/chat");
      case "Notifications":
        setShowNotif((v) => {
          // If closing the dropdown, clear notifications
          if (v) dispatch(clearLikeNotifications());
          return !v;
        });
        return;
      default:
        return;
    }
  };

  return (
    <div className="fixed top-0 left-0 px-6 py-4 w-[25%] h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-lg overflow-y-auto">
      <div className="flex flex-col space-y-8">
        <h1 className="text-3xl font-bold text-white">LOGO</h1>

        <div className="flex flex-col space-y-4">
          {sidebarItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(item.text)}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative"
            >
              <div className="text-white text-lg">{item.icon}</div>
              <span className="text-white font-semibold">{item.text}</span>

              {/* badge for Notifications */}
              {item.text === "Notifications" && likeNotification.length > 0 && (
                <span
                  className="ml-auto bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotif((v) => !v);
                  }}
                >
                  {likeNotification.length}
                </span>
              )}

              {/* Custom dropdown for notifications */}
              {item.text === "Notifications" && showNotif && (
                <div className="absolute left-24 top-0 mt-2 w-72 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl shadow-2xl border border-red-300 z-50 p-0">
                  <div className="py-2">
                    {likeNotification.length === 0 ? (
                      <p className="text-white text-center py-4">
                        No new notifications
                      </p>
                    ) : (
                      likeNotification.map((notification, idx) => (
                        <div
                          key={notification.userId + idx}
                          className="flex items-center gap-3 bg-white/90 hover:bg-white transition rounded-lg px-4 py-3 m-2 shadow group"
                        >
                          <Avatar className="w-8 h-8">
                            <AvatarImage
                              src={notification.userDetails?.profilePicture}
                              alt={notification.userDetails?.username}
                            />
                            <AvatarFallback>
                              {notification.userDetails?.username?.[0]?.toUpperCase() ||
                                "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-semibold text-gray-900 group-hover:text-red-600">
                              {notification.userDetails?.username}
                            </span>
                            <span className="text-gray-700 text-sm">
                              liked your post
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <CreatePost open={openCreate} setOpen={setOpenCreate} />
    </div>
  );
};

export default LeftSidebar;
