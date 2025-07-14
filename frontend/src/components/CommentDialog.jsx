// import { Dialog, DialogContent } from '@radix-ui/react-dialog';
// import React from 'react';

// const CommentDialog = ({ open, setOpen }) => {
//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <div
//                 className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center"
//                 style={{ zIndex: 1000 }}
//             >
//                 <DialogContent
//                     className="bg-white p-6 rounded-lg shadow-lg w-[80vw] max-h-[80vh] overflow-hidden flex"
//                     onPointerDownOutside={() => setOpen(false)} // Ensures the dialog closes on outside click
//                 >
//                     <div className="flex flex-row w-full">
//                         {/* Left Section: Image */}
//                         <div className="flex-shrink-0 w-1/2 pr-4">
//                             <img
//                                 src="https://images.unsplash.com/photo-1741514374526-8bc710b6b312?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt="post_img"
//                                 className="w-full h-auto rounded-md"
//                                 style={{ objectFit: 'contain' }}
//                             />
//                         </div>

//                         {/* Right Section: Comments */}
//                         <div className="flex-grow w-1/2 pl-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//                             <div className="flex flex-col space-y-4">
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username1</p>
//                                         <p className="text-gray-600">This is a sample comment.</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username2</p>
//                                         <p className="text-gray-600">Another comment goes here!</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username3</p>
//                                         <p className="text-gray-600">Loving this post!</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </div>
//         </Dialog>
//     );
// };

// export default CommentDialog;



// import { Dialog, DialogContent } from '@radix-ui/react-dialog';
// import React from 'react';

// const CommentDialog = ({ open, setOpen }) => {
//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <div
//                 className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center"
//                 style={{ zIndex: 1000 }}
//             >
//                 <DialogContent
//                     className="bg-white p-6 rounded-lg shadow-lg w-[80vw] h-[80vh] flex"
//                     onPointerDownOutside={() => setOpen(false)} // Ensures the dialog closes on outside click
//                 >
//                     <div className="flex flex-row w-full h-full">
//                         {/* Left Section: Image */}
//                         <div className="flex-shrink-0 w-1/2 h-full">
//                             <img
//                                 src="https://images.unsplash.com/photo-1741514374526-8bc710b6b312?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt="post_img"
//                                 className="w-full h-full object-cover rounded-md"
//                             />
//                         </div>

//                         {/* Right Section: Comments */}
//                         <div className="flex-grow w-1/2 pl-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//                             <div className="flex flex-col space-y-4">
//                                 {/* Example Comments */}
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username1</p>
//                                         <p className="text-gray-600">This is a sample comment.</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username2</p>
//                                         <p className="text-gray-600">Another comment goes here!</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-3">
//                                     <img
//                                         src="https://via.placeholder.com/40"
//                                         alt="user_avatar"
//                                         className="w-10 h-10 rounded-full"
//                                     />
//                                     <div>
//                                         <p className="font-semibold">username3</p>
//                                         <p className="text-gray-600">Loving this post!</p>
//                                     </div>
//                                 </div>
//                                 {/* Add more comments dynamically */}
//                             </div>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </div>
//         </Dialog>
//     );
// };

// export default CommentDialog;



// import { Dialog, DialogContent } from '@radix-ui/react-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
// import React from 'react';

// const CommentDialog = ({ open, setOpen }) => {
//     const comments = [
//         { username: 'jpduminy', avatar: '', text: '🔥🔥🔥🔥' },
//         { username: '_ajnas_ab', avatar: '', text: '2026 ❤️ impact player ABD 🔥' },
//         { username: 'snappyditss', avatar: '', text: 'Ohhh my AB 😍' },
//         { username: 'stuartbroad', avatar: '', text: 'How good is that 🔥' },
//         { username: 'bryanhabana', avatar: '', text: '😍😍😍' },
//         { username: 'jessekriel15', avatar: '', text: 'Unreal!!! 🙌😍' },
//     ];

//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <div
//                 className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center"
//                 style={{ zIndex: 1000 }}
//             >
//                 <DialogContent
//                     className="bg-white p-0 rounded-lg shadow-lg w-[80vw] h-[80vh] flex"
//                     onPointerDownOutside={() => setOpen(false)} // Ensures the dialog closes on outside click
//                 >
//                     <div className="flex flex-row w-full h-full">
//                         {/* Left Section: Image */}
//                         <div className="flex-shrink-0 w-1/2 h-full">
//                             <img
//                                 src="https://images.unsplash.com/photo-1741514374526-8bc710b6b312?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 alt="post_img"
//                                 className="w-full h-full object-cover rounded-md"
//                             />
//                         </div>

//                         {/* Right Section: Comments */}
//                         <div className="flex-grow w-1/2 pl-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//                             <div className="flex flex-col space-y-4">
//                                 {comments.map((comment, index) => (
//                                     <div key={index} className="flex items-start space-x-3">
//                                         {/* Avatar for User */}
//                                         <Avatar className="w-10 h-10">
//                                             <AvatarImage
//                                                 src={comment.avatar || 'https://via.placeholder.com/40'}
//                                                 alt={`${comment.username}'s avatar`}
//                                             />
//                                             <AvatarFallback className="bg-gray-300 text-gray-700 font-bold">
//                                                 {comment.username.charAt(0).toUpperCase()}
//                                             </AvatarFallback>
//                                         </Avatar>
//                                         {/* Comment Content */}
//                                         <div>
//                                             <p className="font-semibold">{comment.username}</p>
//                                             <p className="text-gray-600">{comment.text}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </div>
//         </Dialog>
//     );
// };

// export default CommentDialog;









// import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
// import React, { useState } from 'react';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { setSelectedPost } from '@/redux/postSlice';

// const CommentDialog = ({ open, setOpen }) => {
//     const [showOptions, setShowOptions] = useState(false); // State for MoreHorizontal dropdown
//     const [text, setText] = React.useState('');
//     const {setSelectedPost} = useSelector(store => store.post);
//      const changeEventHandler = (e) => {
//          const inputText = e.target.value;
//          if(inputText.trim()) setText(e.target.value);
//          else setText('');
    
//      }
//      const commentHandler = async () =>{
//         alert('Comment posted!');
//      }

//     const currentUser = {
//         username: 'abdevilliers17',
//         avatar: '',
//         caption: 'Augusta, Georgia',
//     };

//     // const comments = [
//     //     { username: 'jpduminy', avatar: '', text: '🔥🔥🔥🔥' },
//     //     { username: '_ajnas_ab', avatar: '', text: '2026 ❤️ impact player ABD 🔥' },
//     //     { username: 'snappyditss', avatar: '', text: 'Ohhh my AB 😍' },
//     //     { username: 'stuartbroad', avatar: '', text: 'How good is that 🔥' },
//     //     { username: 'bryanhabana', avatar: '', text: '😍😍😍' },
//     //     { username: 'jessekriel15', avatar: '', text: 'Unreal!!! 🙌😍' },
//     // ];

//     const comments = setSelectedPost?.comments;

//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <div
//                 className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center"
//                 style={{ zIndex: 1000 }}
//             >
//                 <DialogContent
//                     className="bg-white p-0 rounded-lg shadow-lg w-[80vw] h-[80vh] flex"
//                     onPointerDownOutside={() => setOpen(false)} // Ensures the dialog closes on outside click
//                 >
//                     <div className="flex flex-row w-full h-full">
//                         {/* Left Section: Image */}
//                         <div className="flex-shrink-0 w-1/2 h-full">
//                             <img
//                                 src={setSelectedPost?.image || 'https://res.cloudinary.com/dyfp3ojcc/image/upload/v1746032724/d66qo8qixogspaattra3.jpg'}
//                                 alt="post_img"
//                                 className="w-full h-full object-cover rounded-md"
//                             />
//                         </div>

//                         {/* Right Section: Comments */}
//                         <div className="flex-grow w-1/2 pl-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 relative">
//                             <div className="flex flex-col space-y-4 pb-16">
//                                 {/* Current User Caption */}
//                                 <div className="flex items-start space-x-3 border-b pb-4 mb-4 p-3 relative">
//                                     <Avatar className="w-10 h-10">
//                                         <AvatarImage
//                                             src={setSelectedPost?.author?.ProfilePicture || 'https://via.placeholder.com/40'}
//                                             alt={`${setSelectedPost?.author?.username}'s avatar`}
//                                         />
//                                         <AvatarFallback className="bg-gray-300 text-gray-700 font-bold">
//                                             {setSelectedPost?.author?.username.charAt(0).toUpperCase()}
//                                         </AvatarFallback>
//                                     </Avatar>
//                                     <div className="flex-grow">
//                                         <p className="font-semibold">{setSelectedPost?.author?.username}</p>
//                                         <p className="text-gray-600">{setSelectedPost?.caption}</p>
//                                     </div>
//                                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                                         <Dialog open={showOptions} onOpenChange={setShowOptions}>
//                                             <DialogTrigger asChild>
//                                                 <MoreHorizontal
//                                                     className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
//                                                     onClick={() => setShowOptions(true)}
//                                                 />
//                                             </DialogTrigger>
//                                             <DialogContent
//                                                 className="absolute right-0 mt-2 bg-white rounded-lg shadow-md border border-gray-200 w-40"
//                                                 onPointerDownOutside={() => setShowOptions(false)} // Close dropdown on outside click
//                                             >
//                                                 <button
//                                                     className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                                     onClick={() => setShowOptions(false)} // Close dropdown on button click
//                                                 >
//                                                     Edit Caption
//                                                 </button>
//                                                 <button
//                                                     className="w-full text-left px-4 py-2 text-pink-700 hover:bg-gray-100"
//                                                     onClick={() => setShowOptions(false)} // Close dropdown on button click
//                                                 >
//                                                     Unfollow
//                                                 </button>
//                                             </DialogContent>
//                                         </Dialog>
//                                     </div>
//                                 </div>

//                                 {/* Comments Section */}
//                                 {comments.map((comment, index) => (
//                                     <div key={index} className="flex items-start space-x-3">
//                                         {/* Avatar for User */}
//                                         <Avatar className="w-10 h-10">
//                                             <AvatarImage
//                                                 src={comment.avatar || 'https://via.placeholder.com/40'}
//                                                 alt={`${comment.username}'s avatar`}
//                                             />
//                                             <AvatarFallback className="bg-gray-300 text-gray-700 font-bold">
//                                                 {comment.username.charAt(0).toUpperCase()}
//                                             </AvatarFallback>
//                                         </Avatar>
//                                         {/* Comment Content */}
//                                         <div>
//                                             <p className="font-semibold">{comment.username}</p>
//                                             <p className="text-gray-600">{comment.text}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t flex items-center">
//                                 <input
//                                     type="text"
//                                     placeholder="Add a comment..."
//                                     value={text}
//                                     onChange={changeEventHandler}
//                                     className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 />
//                                 {text && (
//                                     <span onClick={commentHandler} className="ml-2 text-blue-500 font-semibold cursor-pointer hover:underline">
//                                         Post
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </div>
//         </Dialog>
//     );
// };

// export default CommentDialog;






// components/CommentDialog.jsx

// import React, { useState } from 'react'
// import {
//   Dialog,
//   DialogPortal,
//   DialogOverlay,
//   DialogContent,
// } from '@radix-ui/react-dialog'
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
// import { MoreHorizontal } from 'lucide-react'
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios'
// import { toast } from 'sonner'
// import { setPosts } from '@/redux/postSlice'

// const CommentDialog = ({ open, setOpen }) => {
//   const dispatch = useDispatch()
//   const selectedPost = useSelector(s => s.post.selectedPost)
//   const user = useSelector(s => s.auth.user)
//   const [text, setText] = useState('')

//   // If no post is selected yet, don’t render anything
//   if (!selectedPost) return null

//   const comments = Array.isArray(selectedPost.comments)
//     ? selectedPost.comments
//     : []

//   // const commentHandler = async () => {
//   //   if (!user?._id) {
//   //     toast.error('Please log in to comment.')
//   //     return
//   //   }
//   //   try {
//   //     const res = await axios.post(
//   //       `http://localhost:8000/api/v1/post/${selectedPost._id}/comment`,
//   //       { text },
//   //       {
//   //         headers: { 'Content-Type': 'application/json' },
//   //         withCredentials: true,
//   //       }
//   //     )
//   //     if (res.data.success) {
//   //       // Update the Redux posts array
//   //       dispatch(
//   //         setPosts(prev =>
//   //           prev.map(p =>
//   //             p._id === selectedPost._id
//   //               ? { ...p, comments: [...comments, res.data.comment] }
//   //               : p
//   //           )
//   //         )
//   //       )
//   //       setText('')
//   //       toast.success(res.data.message)
//   //     }
//   //   } catch (err) {
//   //     toast.error(err.response?.data?.message || err.message)
//   //   }
//   // }





  
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogPortal>
//         <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
//         <DialogContent
//           className="fixed z-50 top-1/2 left-1/2 w-[80vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg flex overflow-hidden"
//           onEscapeKeyDown={() => setOpen(false)}
//           onPointerDownOutside={() => setOpen(false)}
//         >
//           {/* Left: Post Image */}
//           <div className="w-1/2 h-full">
//             <img
//               src={
//                 selectedPost.image ||
//                 'https://via.placeholder.com/600x800?text=No+Image'
//               }
//               alt="post"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right: Comments */}
//           <div className="w-1/2 flex flex-col">
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b">
//               <div className="flex items-center gap-3">
//                 <Avatar className="w-10 h-10">
//                   <AvatarImage
//                     src={
//                       selectedPost.author?.profilePicture ||
//                       'https://via.placeholder.com/40'
//                     }
//                     alt={`${selectedPost.author?.username || 'User'}’s avatar`}
//                   />
//                   <AvatarFallback>
//                     {selectedPost.author?.username?.[0]?.toUpperCase() ||
//                       'U'}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold">
//                     {selectedPost.author?.username || 'Unknown'}
//                   </p>
//                   <p className="text-gray-600">{selectedPost.caption}</p>
//                 </div>
//               </div>
//               <MoreHorizontal className="cursor-pointer text-gray-500" />
//             </div>

//             {/* Comments List */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {comments.map((c, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <Avatar className="w-8 h-8">
//                     <AvatarImage
//                       src={
//                         c.user?.profilePicture ||
//                         'https://via.placeholder.com/40'
//                       }
//                       alt={`${c.user?.username || 'User'}’s avatar`}
//                     />
//                     <AvatarFallback>
//                       {c.user?.username?.[0]?.toUpperCase() || 'U'}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <p className="font-semibold">
//                       {c.user?.username || 'Unknown'}
//                     </p>
//                     <p className="text-gray-700">{c.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Add Comment Input */}
//             <div className="p-4 border-t flex items-center">
//               <input
//                 type="text"
//                 placeholder="Add a comment..."
//                 value={text}
//                 onChange={e => setText(e.target.value)}
//                 className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {text && (
//                 <button
//                   onClick={commentHandler}
//                   className="ml-4 text-blue-500 font-semibold"
//                 >
//                   Post
//                 </button>
//               )}
//             </div>
//           </div>
//         </DialogContent>
//       </DialogPortal>
//     </Dialog>
//   )
// }

// export default CommentDialog











// src/components/CommentDialog.jsx

import React, { useState } from 'react'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
} from '@radix-ui/react-dialog'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@radix-ui/react-avatar'
import { MoreHorizontal } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { setPosts, setSelectedPost } from '@/redux/postSlice'

const CommentDialog = ({ open, setOpen ,comment}) => {
  const dispatch = useDispatch()
  const selectedPost = useSelector(s => s.post.selectedPost)
  const user = useSelector(s => s.auth.user)
  const [text, setText] = useState('')

  if (!selectedPost) return null

  const comments = Array.isArray(selectedPost.comments)
    ? selectedPost.comments
    : []

  const commentHandler = async () => {
    if (!user?._id) {
      toast.error('You must be logged in to comment.')
      return
    }
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/post/${selectedPost._id}/comment`,
        { text },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      if (data.success) {
        const newComment = data.comment

        // 1) update global posts array
        dispatch(
          setPosts(prev =>
            prev.map(p =>
              p._id === selectedPost._id
                ? { ...p, comments: [...comments, newComment] }
                : p
            )
          )
        )

        // 2) update selectedPost in Redux
        dispatch(
          setSelectedPost({
            ...selectedPost,
            comments: [...comments, newComment],
          })
        )

        setText('')
        toast.success(data.message)
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-40" />
        <DialogContent
          className="fixed z-50 top-1/2 left-1/2 w-[80vw] h-[80vh] 
                      -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg
                      shadow-lg flex overflow-hidden"
          onEscapeKeyDown={() => setOpen(false)}
          onPointerDownOutside={() => setOpen(false)}
        >
          {/* Left: Image */}
          <div className="w-1/2 h-full">
            <img
              src={selectedPost.image || ''}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Comments */}
          <div className="w-1/2 flex flex-col">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={selectedPost.author?.profilePicture || ''}
                    alt={selectedPost.author?.username || ''}
                  />
                  <AvatarFallback>
                    {selectedPost.author?.username?.[0]?.toUpperCase() ||
                      '?'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">
                    {selectedPost.author?.username || 'Unknown'}
                  </p>
                  <p className="text-gray-600">{selectedPost.caption}</p>
                </div>
              </div>
              <MoreHorizontal className="cursor-pointer text-gray-500" />
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {comments.map(comment => {
                // unify old/new shape
                // console.log(comment)
                const who = comment.author ?? comment.user ?? {}
                const name = who.username || 'Unknown'
                const pic = who.profilePicture || ''
                return (
                  <div key={comment._id} className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={pic} alt={name} />
                      <AvatarFallback>
                        {name[0]?.toUpperCase() || '?'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Add Comment Input */}
            <div className="p-4 border-t flex items-center">
              <input
                type="text"
                placeholder="Add a comment..."
                value={text}
                onChange={e => setText(e.target.value)}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {text && (
                <button
                  onClick={commentHandler}
                  className="ml-4 text-blue-500 font-semibold"
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default CommentDialog
