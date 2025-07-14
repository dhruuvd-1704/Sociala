// import React from "react";
// import { Avatar } from "./ui/avatar.jsx";
// import { useSelector } from "react-redux";
// import useGetUserProfile from "@/hooks/useGetUserProfile";
// import { useParams } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
// // import "./Profile.css";

// const Profile = () => {
//   const { id: userId } = useParams();
//   const loading = useGetUserProfile(userId);
//   const { userProfile } = useSelector((store) => store.auth);

//   if (loading) {
//     return (
//       <div className="text-center mt-20 text-lg text-gray-500">
//         Loading profile…
//       </div>
//     );
//   }

//   if (!userProfile) {
//     return (
//       <div className="text-center mt-20 text-lg text-red-500">
//         User not found.
//       </div>
//     );
//   }

//   const { username, email, bio, posts = [], followers = [], following = [] } =
//     userProfile;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4 sm:p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6">
        
//         {/* Profile Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
//           <div className="flex items-center gap-5">
//             <Avatar>
//               <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-semibold text-white">
//                 {username?.[0] || "U"}
//               </div>
//             </Avatar>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">{username}</h1>
//               <p className="text-sm text-gray-500">{email}</p>
//               <p className="mt-1 text-sm text-gray-600">{bio || "No bio."}</p>
//             </div>
//           </div>
          
//           <div className="flex gap-8 text-center text-gray-700">
//             <div>
//               <p className="text-xl font-semibold">{posts.length}</p>
//               <p className="text-sm">Posts</p>
//             </div>
//             <div>
//               <p className="text-xl font-semibold">{followers.length}</p>
//               <p className="text-sm">Followers</p>
//             </div>
//             <div>
//               <p className="text-xl font-semibold">{following.length}</p>
//               <p className="text-sm">Following</p>
//             </div>
//           </div>
//         </div>

//         {/* Posts Section */}
//         <hr className="my-6 border-gray-300" />
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Posts</h2>

//         {posts.length === 0 ? (
//           <p className="text-gray-500 italic">No posts yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {posts.map((post, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//               >
//                 <img
//                   src={post.image}
//                   alt={post.caption}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <p className="text-gray-800 text-sm truncate">
//                     {post.caption}
//                   </p>
//                   <div className="mt-2 flex items-center gap-1 text-pink-500 text-sm">
//                     <FaHeart />
//                     <span>{post.likes?.length || 0} likes</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;








// import React from "react";
// import { Avatar } from "./ui/avatar.jsx";
// import { useSelector } from "react-redux";
// import useGetUserProfile from "@/hooks/useGetUserProfile";
// import { useParams } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// const Profile = () => {
//   const { id: userId } = useParams();
//   const loading = useGetUserProfile(userId);
//   const { userProfile } = useSelector((store) => store.auth);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-purple-200">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mb-4"></div>
//         <span className="text-lg text-gray-700 font-semibold">Loading profile…</span>
//       </div>
//     );
//   }

// const isLoggedInUserProfile = false;
// const isFollowing = true;
//   if (!userProfile) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-purple-200">
//         <span className="text-2xl text-red-500 font-bold">User not found.</span>
//       </div>
//     );
//   }

//   const { username, email, bio, posts = [], followers = [], following = [] } =
//     userProfile;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-white p-4 sm:p-8">
//       <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100">
//         {/* Profile Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 mb-8">
//           <div className="flex items-center gap-6">
//             <Avatar>
//               <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-4xl font-extrabold text-white shadow-lg border-4 border-white">
//                 {username?.[0]?.toUpperCase() || "U"}
//               </div>
//             </Avatar>
//             <div>
//               <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">{username}</h1>
//               <p className="text-md text-gray-500">{email}</p>
//               <p className="mt-2 text-base text-gray-700 italic">{bio || "No bio."}</p>
//             </div>
//           </div>
//           <div className="flex gap-10 text-center">
//             <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
//               <p className="text-2xl font-bold text-indigo-700">{posts.length}</p>
//               <p className="text-sm text-gray-600">Posts</p>
//             </div>
//             <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
//               <p className="text-2xl font-bold text-indigo-700">{followers.length}</p>
//               <p className="text-sm text-gray-600">Followers</p>
//             </div>
//             <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
//               <p className="text-2xl font-bold text-indigo-700">{following.length}</p>
//               <p className="text-sm text-gray-600">Following</p>
//             </div>
//           </div>
//         </div>

//          {/* Edit Profile Button */}
//          {isLoggedInUserProfile ? (
//   <div className="flex justify-end mt-4">
//     <button
//       className="px-6 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
//     >
//       Edit Profile
//     </button>
//   </div>
// ) : isFollowing ? (
//   <div className="flex justify-end mt-4">
//     <button
//       className="px-6 py-2 mx-1 cursor-pointer bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
//     >
//       Unfollow
//     </button>
//      <button
//       className="px-6 py-2 cursor-pointer mx-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
//     >
//       Message
//     </button>
//   </div>  // ← this closing tag was missing
// ) : (
//   <div className="flex justify-end mt-4">
//     <button
//       className="px-6 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200"
//     >
//       Follow
//     </button>
//   </div>
// )}
        

//         {/* Posts Section */}
//         <hr className="my-8 border-purple-200" />
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//           <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Posts</span>
//           <span className="text-lg text-gray-400">({posts.length})</span>
//         </h2>

//         {posts.length === 0 ? (
//           <p className="text-gray-500 italic text-center py-12">No posts yet.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {posts.map((post, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-purple-100 group"
//               >
//                 <div className="relative">
//                   <img
//                     src={post.image}
//                     alt={post.caption}
//                     className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 flex items-center gap-1 shadow text-pink-500 text-xs font-semibold">
//                     <FaHeart className="text-pink-400" />
//                     <span>{post.likes?.length || 0}</span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <p className="text-gray-800 text-base font-medium truncate">{post.caption}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;









import React, { useState } from "react";
import { Avatar } from "./ui/avatar.jsx";
import { useSelector } from "react-redux";
import useGetUserProfile from "@/hooks/useGetUserProfile";
import { useParams } from "react-router-dom";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Profile = () => {
  const { id: userId } = useParams();
  const loading = useGetUserProfile(userId);
  const { userProfile ,user} = useSelector((store) => store.auth);
const navigate = useNavigate();
  // Toggle state: "posts" or "bookmarks"
  const [activeTab, setActiveTab] = useState("posts");

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-purple-200">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mb-4"></div>
        <span className="text-lg text-gray-700 font-semibold">Loading profile…</span>
      </div>
    );
  }

  const isLoggedInUserProfile = user?._id === userProfile?._id;
  const isFollowing = true;

  if (!userProfile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 to-purple-200">
        <span className="text-2xl text-red-500 font-bold">User not found.</span>
      </div>
    );
  }

  const {
    profilePicture,
    username,
    email,
    bio,
    posts = [],
    bookmarks = [],     // your bookmarked posts array
    followers = [],
    following = [],
  } = userProfile;

  // Which array to show in the grid
  const displayed = activeTab === "posts" ? posts : bookmarks;
  const title     = activeTab === "posts" ? "Posts" : "Bookmarked";
  const Icon      = activeTab === "posts" ? FaHeart : FaBookmark;

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-100 to-white p-4 sm:p-8 flex justify-center">
      <div className="max-w-4xl w-full h-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100 flex flex-col">
        
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 mb-8">
          <div className="flex items-center gap-6">
           {/* Profile Picture */}
{profilePicture ? (
  <img
    src={profilePicture}
    alt={username}
    className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl bg-gray-200"
    style={{ minWidth: "8rem", minHeight: "8rem" }}
  />
) : (
  <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 flex items-center justify-center text-6xl md:text-7xl font-extrabold text-white shadow-2xl border-4 border-white"
    style={{ minWidth: "8rem", minHeight: "8rem" }}
  >
    {username?.[0]?.toUpperCase() || "U"}
  </div>
)}
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">{username}</h1>
              <p className="text-md text-gray-500">{email}</p>
              <p className="mt-2 text-base text-gray-700 italic">{bio || "No bio."}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 text-center">
            <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
              <p className="text-2xl font-bold text-indigo-700">{posts.length}</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
              <p className="text-2xl font-bold text-indigo-700">{followers.length}</p>
              <p className="text-sm text-gray-600">Followers</p>
            </div>
            <div className="bg-gradient-to-tr from-pink-200 to-indigo-200 rounded-xl px-6 py-3 shadow">
              <p className="text-2xl font-bold text-indigo-700">{following.length}</p>
              <p className="text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        {isLoggedInUserProfile ? (
          <div className="flex justify-end mt-4">
         <Link to='/account/edit'> <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200" >
              Edit Profile
            </button></Link>  
          </div>
        ) : isFollowing ? (
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 mx-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200">
              Unfollow
            </button>
            <button className="px-6 py-2 mx-1 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200">
              Message
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-4">
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition-all duration-200">
              Follow
            </button>
          </div>
        )}

        {/* Divider */}
        <hr className="my-8 border-purple-200" />

        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={()=>setActiveTab("posts")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
              activeTab === "posts"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <FaHeart /> <span>Posts</span>
          </button>
          <button
            onClick={() => setActiveTab("bookmarks")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
              activeTab === "bookmarks"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <FaBookmark /> <span>Bookmarked</span>
          </button>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Icon className="text-pink-400" />
          <span>{title} ({displayed.length})</span>
        </h2>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto">
          {displayed.length === 0 ? (
            <p className="text-gray-500 italic text-center py-12">
              No {activeTab === "posts" ? "posts" : "bookmarked posts"} yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {displayed.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-purple-100 group"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 flex items-center gap-1 shadow text-pink-500 text-xs font-semibold">
                      <FaHeart className="text-pink-400" />
                      <span>{item.likes?.length || 0}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-800 text-base font-medium truncate">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
