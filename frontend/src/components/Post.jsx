// // components/Post.jsx
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { formatDistanceToNow } from 'date-fns'

// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
// import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
// import { MoreHorizontal } from 'lucide-react'
// import { Button } from './ui/button'
// import CommentDialog from './CommentDialog'
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import 'sweetalert2/dist/sweetalert2.min.css'; 
// import { toast } from 'sonner'
// import axios from 'axios'
// import { setPosts, setSelectedPost } from '@/redux/postSlice'
// const Post = ({ post }) => {
//   // initialize likeCount from array length
//   if (!post) {
//     return <p className="text-center text-gray-500">Post not found.</p>;
// }
//   const initialLikes = Array.isArray(post.likes) ? post.likes.length : 0
//   const [likeCount, setLikeCount] = React.useState(initialLikes)
//   const [isLiked, setIsLiked] = React.useState(false)
//   const [isBookmarked, setIsBookmarked] = React.useState(false)
//   const [showOptions, setShowOptions] = React.useState(false)
//   const [hoveredButton, setHoveredButton] = React.useState(null)
//   const [isImageOpen, setIsImageOpen] = React.useState(false)
//   const [text, setText] = React.useState('')
//   const [open, setOpen] = React.useState(false)
//   const { user } = useSelector((store) => store.auth)
//   const [liked,setLiked] = React.useState(post.likes.includes(user?._id) || false)
//   const {posts} = useSelector((store) => store.post)
//     const dispatch = useDispatch();
//     const [comment, setComment] = React.useState(post?.comments || [])
//   // compute the “time ago” string
//   const timeAgo = post.createdAt
//     ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
//     : ''

//   const changeEventHandler = (e) => {
//     const inputText = e.target.value
//     // setText(inputText.trim() ? inputText : '')
//     setText(e.target.value);
//   }

//   const handleDelete = async () => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: "This action cannot be undone!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel',
//     });

//     if (result.isConfirmed) {
//         setShowOptions(false);
//         try {
//           // Perform delete action (e.g., API call)
//           console.log("Post ID to delete:", post._id)
//           const res = await axios.delete(`http://localhost:8000/api/v1/post/delete/${post._id}`, {withCredentials:true});
//           if(res.data.success) {
//             const updatedPosts = posts.filter((p) => p?._id !== post?._id)
//             dispatch(setPosts(updatedPosts))
//               Swal.fire('Deleted!', 'The post has been deleted.', res.data.message);
//           }
            
//         } catch (error) {
//           toast.error('Error deleting post:', error);
//         //   Swal.fire('Error!', 'Failed to delete the post.', 'error');
//         console.error('Error deleting post:', error);
//         }
//       }
//     };

//     const likeOrDislikeHandler = async () =>{
//         if (!user || !user._id) {
//             toast.error("You must be logged in to like or dislike posts.");
//             return;
//           }
//       try {
//         const action = liked ? 'dislike' : 'like'
//         const res = await axios.get(`http://localhost:8000/api/v1/post/${post?._id}/${action}`, {withCredentials:true});
//         if(res.data.success){
//             const updatedLikes = liked ? likeCount - 1 : likeCount + 1
//             setLikeCount(updatedLikes)
//             setLiked(!liked)

//             // update the post in the Redux store
//             const updatedPosts = posts.map(p =>
//                 p._id === post._id
//                   ? {
//                       ...p,
//                       likes: liked
//                         ? p?.likes.filter(id => id !== user?._id)
//                         : [...p?.likes, user?._id]
//                     }
//                   : p
//               )
//             dispatch(setPosts(updatedPosts));
//             toast.success(res.data.message);
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.message || error.message);
//       }  
//     }
//     const commentHandler = async () => {
//         console.log('🔥 commentHandler called, text =', text);
    
//         if (!user || !user._id) {
//             toast.error("You must be logged in to comment on posts.");
//             return;
//         }
    
//         try {
//             const res = await axios.post(
//                 `http://localhost:8000/api/v1/post/${post?._id}/comment`,
//                 { text },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     withCredentials: true,
//                 }
//             );
    
//             if (res.data.success) {
//                 console.log(res.data);
    
//                 const updatedComments = [...comment, res.data.comment];
//                 setComment(updatedComments);
    
//                 const updatedPosts = posts.map(p =>
//                     p._id === post._id ? { ...p, comments: updatedComments } : p
//                 );
    
//                 dispatch(setPosts(updatedPosts));
//                 setText("");
//                 setOpen(false);
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || error.message);
//         }
//     };
    

// return (
//     <div className="my-8 w-full max-w-md mx-auto relative">
//         <div
//             className={`flex flex-col bg-white p-6 rounded-2xl shadow-xl transition-transform duration-300 transform ${
//                 isImageOpen ? 'scale-95 blur-sm' : 'scale-100'
//             }`}
//         >
//             {/* Header */}
//             <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                     <Avatar className="w-12 h-12 border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center">
//                         <AvatarImage
//                             src={post.author.profilePicture}
//                             alt={`${post.author.username}'s profile`}
//                             className="object-cover w-full h-full"
//                         />
//                         <AvatarFallback className="bg-gray-300 text-gray-700 font-bold flex items-center justify-center w-full h-full">
//                             {post.author.username.charAt(0).toUpperCase()}
//                         </AvatarFallback>
//                     </Avatar>
//                     <div>
//                         <h1 className="text-lg font-semibold text-gray-900">
//                             {post.author.username}
//                         </h1>
//                         <p className="text-sm text-gray-500">{timeAgo}</p>
//                     </div>
//                 </div>

//                 {/* “More” menu */}
//                 <Dialog open={showOptions} onOpenChange={setShowOptions}>
//             <DialogTrigger asChild>
//               {!showOptions && (
//                 <MoreHorizontal
//                   className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
//                   onClick={() => setShowOptions(true)}
//                 />
//               )}
//             </DialogTrigger>
//             <DialogContent className="p-4 bg-white rounded-lg shadow-md border border-gray-200 absolute top-0 right-0 z-50">
//               {post?.author._id === user?._id ? (
//                 <Button
//                   variant="ghost"
//                   className="w-full text-red-600 font-bold hover:bg-gray-100"
//                   onClick={async () => {
//                     setShowOptions(false)
//                     await handleDelete()
//                   }}
//                 >
//                   Delete
//                 </Button>
//               ) : (
//                 <Button
//                   variant="ghost"
//                   className="w-full text-[#ED4956] font-bold hover:bg-gray-100"
//                   onClick={() => setShowOptions(false)}
//                 >
//                   Unfollow
//                 </Button>
//               )}
//             </DialogContent>
//           </Dialog>
//             </div>

//             {/* Image */}
//             <div className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md">
//                 <img
//                     src={post.image}
//                     alt="post content"
//                     className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
//                     onClick={() => setIsImageOpen(true)}
//                 />
//             </div>

//             {/* Caption */}
//             <div className="mt-4">
//                 <p className="text-gray-800 leading-relaxed">
//                     <span className="font-semibold">{post.author.username}</span>{' '}
//                     {post.caption}
//                 </p>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center justify-between mt-6 text-gray-600">
//                 {/* Like */}
//                 <button
//                     className={`flex items-center gap-2 ${
//                         liked
//                             ? 'text-red-500'
//                             : hoveredButton === 'like'
//                             ? 'text-red-400'
//                             : 'text-gray-600'
//                     }`}
//                     onClick={likeOrDislikeHandler}
//                     onMouseEnter={() => setHoveredButton('like')}
//                     onMouseLeave={() => setHoveredButton(null)}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill={liked ? 'currentColor' : 'none'}
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke={liked ? 'currentColor' : 'gray'}
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                         />
//                     </svg>
//                     <span className="text-sm font-medium">
//                         {likeCount === 0
//                             ? 'Like'
//                             : `${likeCount} Like${likeCount > 1 ? 's' : ''}`}
//                     </span>
//                 </button>

//                 {/* Comment */}
//                 <button
//                     className={`flex items-center gap-2 ${
//                         hoveredButton === 'comment' ? 'text-blue-500' : 'text-gray-600'
//                     }`}
//                     onClick={() =>{
//                         dispatch(setSelectedPost(post))
//                         setOpen(true)}}
//                     onMouseEnter={() => setHoveredButton('comment')}
//                     onMouseLeave={() => setHoveredButton(null)}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M7.5 12h9m-4.5-4.5v9"
//                         />
//                     </svg>
//                     Comments
//                 </button>

//                 {/* Share */}
//                 <button
//                     className={`flex items-center gap-2 ${
//                         hoveredButton === 'share' ? 'text-green-500' : 'text-gray-600'
//                     }`}
//                     onMouseEnter={() => setHoveredButton('share')}
//                     onMouseLeave={() => setHoveredButton(null)}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25V9m13.5 0v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2-2V7.75a2 2 0 012-2z"
//                         />
//                     </svg>
//                     Share
//                 </button>

//                 {/* Bookmark */}
//                 <button
//                     className={`flex items-center gap-2 ${
//                         isBookmarked
//                             ? 'text-yellow-500'
//                             : hoveredButton === 'bookmark'
//                             ? 'text-yellow-400'
//                             : 'text-gray-600'
//                     }`}
//                     onClick={() => setIsBookmarked(!isBookmarked)}
//                     onMouseEnter={() => setHoveredButton('bookmark')}
//                     onMouseLeave={() => setHoveredButton(null)}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill={isBookmarked ? 'currentColor' : 'none'}
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke={isBookmarked ? 'currentColor' : 'gray'}
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M5.75 5.75h12.5a2 2 0 
//                                  012 2v12.5a2 2 0 01-2 2H5.75a2 2 0 01-2-2V7.75a2 2 0 012-2z"
//                         />
//                     </svg>
//                     Bookmark
//                 </button>
//             </div>

//             {/* Add a Comment
//             <div className="flex items-center mt-4">
//                 <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     value={text}
//                     onChange={changeEventHandler}
//                     className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {text && (
//                     <span onClick={commentHandler} className="ml-2 text-blue-500 font-semibold cursor-pointer hover:underline">
//                         Post
//                     </span>
//                 )}
//             </div>
//         </div> */}


//         {/* Add a Comment */}
//             <div className="flex items-center mt-4">
//                 <input
//                     type="text"
//                     placeholder="Add a comment..."
//                     value={text}
//                     onChange={changeEventHandler}
//                     className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {text && (
//                     <span onClick={commentHandler} className="ml-2 text-blue-500 font-semibold cursor-pointer hover:underline">
//                         Post
//                     </span>
//                 )}
//             </div>

//             {/* Render Comments */}
//             <div className="flex flex-col gap-2 mt-4">
//                 {comment.map((c, idx) => (
//                     <div key={c._id || idx} className="flex items-center gap-2">
//                         <span className="font-semibold">{c.author?.username || "Unknown"}</span>
//                         <span>{c.text}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* Comment Dialog */}
//         {open && <CommentDialog open={open} setOpen={setOpen} />}

//         {/* Lightbox Image */}
//         {isImageOpen && (
//             <div
//                 className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//                 onClick={() => setIsImageOpen(false)}
//             >
//                 <img
//                     src={post.image}
//                     alt="post content large"
//                     className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
//                 />
//             </div>
//         )}
//     </div>
// );
// }

// export default Post




















// src/components/Post.jsx

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { formatDistanceToNow } from 'date-fns'
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from '@radix-ui/react-avatar'
// import {
//   Heart,
//   MessageCircle,
//   Send,
//   Bookmark,
//   MoreHorizontal,
// } from 'lucide-react'
// import { Button } from './ui/button'
// import CommentDialog from './CommentDialog'
// import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'
// import { toast } from 'sonner'
// import axios from 'axios'
// import { setPosts, setSelectedPost } from '@/redux/postSlice'

// const Post = ({ post }) => {
//   const dispatch = useDispatch()
//   const { user } = useSelector(s => s.auth)
//   const { posts } = useSelector(s => s.post)

//   const [likeCount, setLikeCount] = React.useState(
//     Array.isArray(post.likes) ? post.likes.length : 0
//   )
//   const [liked, setLiked] = React.useState(
//     Array.isArray(post.likes) && post.likes.includes(user?._id)
//   )
//   const [isBookmarked, setIsBookmarked] = React.useState(false)
//   const [showOptions, setShowOptions] = React.useState(false)
//   const [isImageOpen, setIsImageOpen] = React.useState(false)
//   const [text, setText] = React.useState('')
//   const [open, setOpen] = React.useState(false)
//   const [comment, setCommnet] = React.useState([]);
//   const timeAgo = post.createdAt
//     ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
//     : ''

//   const likeOrDislikeHandler = async () => {
//     if (!user?._id) {
//       toast.error('You must be logged in to like posts.')
//       return
//     }
//     try {
//       const action = liked ? 'dislike' : 'like'
//       const res = await axios.get(
//         `http://localhost:8000/api/v1/post/${post._id}/${action}`,
//         { withCredentials: true }
//       )
//       if (res.data.success) {
//         setLikeCount(c => (liked ? c - 1 : c + 1))
//         setLiked(l => !l)
//         dispatch(
//           setPosts(
//             posts.map(p =>
//               p._id === post._id
//                 ? {
//                     ...p,
//                     likes: liked
//                       ? p.likes.filter(id => id !== user._id)
//                       : [...p.likes, user._id],
//                   }
//                 : p
//             )
//           )
//         )
//         toast.success(res.data.message)
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || err.message)
//     }
//   }

//   const handleDelete = async () => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'This action cannot be undone!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//     })
//     if (result.isConfirmed) {
//       try {
//         const res = await axios.delete(
//           `http://localhost:8000/api/v1/post/delete/${post._id}`,
//           { withCredentials: true }
//         )
//         if (res.data.success) {
//           dispatch(setPosts(posts.filter(p => p._id !== post._id)))
//           Swal.fire('Deleted!', res.data.message, 'success')
//         }
//       } catch (err) {
//         toast.error(err.response?.data?.message || err.message)
//       }
//     }
//   }

//   const changeEventHandler = e => setText(e.target.value)

//   const commentHandler = async () => {
//     if (!user?._id) {
//       toast.error('You must be logged in to comment.')
//       return
//     }
//     try {
//       const res = await axios.post(
//         `http://localhost:8000/api/v1/post/${post._id}/comment`,
//         { text },
//         {
//           headers: { 'Content-Type': 'application/json' },
//           withCredentials: true,
//         }
//       )
//       if (res.data.success) {
//         // push into selectedPost for dialog
//         console.log('Comment added:', res.data)
//         setCommnet(prev => [...prev, res.data.comment])
//         dispatch(
//           setSelectedPost({
//             ...post,
//             comments: Array.isArray(post.comments)
//               ? [...post.comments, res.data.comment]
//               : [res.data.comment],
//           })
//         )
//         setText('')
//         setOpen(false)
//         toast.success(res.data.message)
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || err.message)
//     }
//   }

//   return (
//     <div className="my-8 w-full max-w-md mx-auto relative">
//       <div
//         className={`bg-white p-6 rounded-2xl shadow-xl transition-transform ${
//           isImageOpen ? 'scale-95 blur-sm' : ''
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6 relative">
//           <div className="flex items-center gap-4">
//             <Avatar className="w-12 h-12">
//               <AvatarImage src={post.author.profilePicture} />
//               <AvatarFallback>
//                 {post.author.username?.[0] || '?'}
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <h1 className="text-lg font-semibold">
//                 {post.author.username}
//               </h1>
//               <p className="text-sm text-gray-500">{timeAgo}</p>
//             </div>
//           </div>
//           <div className="relative">
//             <MoreHorizontal
//               onClick={() => setShowOptions(v => !v)}
//               className="cursor-pointer text-gray-500 hover:text-gray-800"
//             />
//             {showOptions && (
//               <div className="absolute right-0 top-6 bg-white rounded shadow p-2 z-10">
//                 {post.author._id === user._id ? (
//                   <Button
//                     variant="ghost"
//                     className="w-full text-red-600"
//                     onClick={handleDelete}
//                   >
//                     Delete
//                   </Button>
//                 ) : (
//                   <Button variant="ghost" className="w-full text-pink-600">
//                     Unfollow
//                   </Button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Image */}
//         <div
//           className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md"
//           onClick={() => setIsImageOpen(true)}
//         >
//           <img
//             src={post.image}
//             alt=""
//             className="w-full h-80 object-cover hover:scale-105 transition-transform"
//           />
//         </div>

//         {/* Caption */}
//         <p className="mt-4">
//           <span className="font-semibold">{post.author.username}</span>{' '}
//           {post.caption}
//         </p>

//         {/* Actions */}
//         <div className="flex items-center justify-between mt-6 text-gray-600">
//           <button
//             onClick={likeOrDislikeHandler}
//             className="flex items-center gap-2"
//           >
//             <Heart
//               className={`w-5 h-5 ${
//                 liked ? 'fill-red-500 text-red-500' : ''
//               }`}
//             />
//             <span className="text-sm font-medium">
//               {likeCount === 0
//                 ? 'Like'
//                 : `${likeCount} Like${likeCount > 1 ? 's' : ''}`}
//             </span>
//           </button>

//           <button
//             onClick={() => {
//               dispatch(setSelectedPost(post))
//               setOpen(true)
//             }}
//             className="flex items-center gap-2"
//           >
//             <MessageCircle className="w-5 h-5" />
//             <span>Comments</span>
//           </button>

//           <button className="flex items-center gap-2">
//             <Send className="w-5 h-5" />
//             <span>Share</span>
//           </button>

//           <button
//             onClick={() => setIsBookmarked(b => !b)}
//             className="flex items-center gap-2"
//           >
//             <Bookmark
//               className={`w-5 h-5 ${isBookmarked ? 'fill-black' : ''}`}
//             />
//             <span>Bookmark</span>
//           </button>
//         </div>

//         {/* Quick Add Comment */}
//         <div className="flex items-center mt-4">
//           <input
//             type="text"
//             placeholder="Add a comment..."
//             value={text}
//             onChange={changeEventHandler}
//             className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {text && (
//             <span
//               onClick={commentHandler}
//               className="ml-2 text-blue-500 font-semibold cursor-pointer hover:underline"
//             >
//               Post
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Comment Dialog */}
//       <CommentDialog open={open} setOpen={setOpen} comment={comment} setComment={setCommnet}/>

//       {/* Lightbox */}
//       {isImageOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={() => setIsImageOpen(false)}
//         >
//           <img
//             src={post.image}
//             alt=""
//             className="max-w-full max-h-full rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   )
// }

// export default Post











import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@radix-ui/react-avatar'
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from 'lucide-react'
import { Button } from './ui/button'
import CommentDialog from './CommentDialog'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { toast } from 'sonner'
import axios from 'axios'
import { setPosts, setSelectedPost } from '@/redux/postSlice'

const Post = ({ post }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(s => s.auth)
  const { posts } = useSelector(s => s.post)

  const [likeCount, setLikeCount] = React.useState(
    Array.isArray(post.likes) ? post.likes.length : 0
  )
  const [liked, setLiked] = React.useState(
    Array.isArray(post.likes) && post.likes.includes(user?._id)
  )
  const [isBookmarked, setIsBookmarked] = React.useState(false)
  const [showOptions, setShowOptions] = React.useState(false)
  const [isImageOpen, setIsImageOpen] = React.useState(false)
  const [text, setText] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [comment, setCommnet] = React.useState([])
  const timeAgo = post.createdAt
    ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
    : ''

  const likeOrDislikeHandler = async () => {
    if (!user?._id) {
      toast.error('You must be logged in to like posts.')
      return
    }
    try {
      const action = liked ? 'dislike' : 'like'
      const res = await axios.get(
        `http://localhost:8000/api/v1/post/${post._id}/${action}`,
        { withCredentials: true }
      )
      if (res.data.success) {
        setLikeCount(c => (liked ? c - 1 : c + 1))
        setLiked(l => !l)
        dispatch(
          setPosts(
            posts.map(p =>
              p._id === post._id
                ? {
                    ...p,
                    likes: liked
                      ? p.likes.filter(id => id !== user._id)
                      : [...p.likes, user._id],
                  }
                : p
            )
          )
        )
        toast.success(res.data.message)
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message)
    }
  }

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    })
    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:8000/api/v1/post/delete/${post._id}`,
          { withCredentials: true }
        )
        if (res.data.success) {
          dispatch(setPosts(posts.filter(p => p._id !== post._id)))
          Swal.fire('Deleted!', res.data.message, 'success')
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message)
      }
    }
  }

  const changeEventHandler = e => setText(e.target.value)

  const commentHandler = async () => {
    if (!user?._id) {
      toast.error('You must be logged in to comment.')
      return
    }
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/post/${post._id}/comment`,
        { text },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      if (res.data.success) {
        setCommnet(prev => [...prev, res.data.comment])
        dispatch(
          setSelectedPost({
            ...post,
            comments: Array.isArray(post.comments)
              ? [...post.comments, res.data.comment]
              : [res.data.comment],
          })
        )
        setText('')
        setOpen(false)
        toast.success(res.data.message)
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message)
    }
  }

  return (
    <div className="my-8 w-full max-w-md mx-auto relative">
      <div
        className={`bg-white p-6 rounded-2xl shadow-xl transition-transform ${
          isImageOpen ? 'scale-95 blur-sm' : ''
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative">
          <Link
            to={`/profile/${post.author._id}`}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={post.author.profilePicture} />
              <AvatarFallback>
                {post.author.username?.[0] || '?'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                {post.author.username}
              </h1>
              <p className="text-sm text-gray-500">{timeAgo}</p>
            </div>
          </Link>
          <div className="relative">
            <MoreHorizontal
              onClick={() => setShowOptions(v => !v)}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
            />
            {showOptions && (
              <div className="absolute right-0 top-6 bg-white rounded shadow p-2 z-10">
                {post.author._id === user._id ? (
                  <Button
                    variant="ghost"
                    className="w-full text-red-600"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button variant="ghost" className="w-full text-pink-600">
                    Unfollow
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div
          className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md"
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={post.image}
            alt=""
            className="w-full h-80 object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Caption */}
        <p className="mt-4">
          <span className="font-semibold">{post.author.username}</span>{' '}
          {post.caption}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 text-gray-600">
          <button
            onClick={likeOrDislikeHandler}
            className="flex items-center gap-2"
          >
            <Heart
              className={`w-5 h-5 ${
                liked ? 'fill-red-500 text-red-500' : ''
              }`}
            />
            <span className="text-sm font-medium">
              {likeCount === 0
                ? 'Like'
                : `${likeCount} Like${likeCount > 1 ? 's' : ''}`}
            </span>
          </button>

          <button
            onClick={() => {
              dispatch(setSelectedPost(post))
              setOpen(true)
            }}
            className="flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comments</span>
          </button>

          <button className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            <span>Share</span>
          </button>

          <button
            onClick={() => setIsBookmarked(b => !b)}
            className="flex items-center gap-2"
          >
            <Bookmark
              className={`w-5 h-5 ${isBookmarked ? 'fill-black' : ''}`}
            />
            <span>Bookmark</span>
          </button>
        </div>

        {/* Quick Add Comment */}
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={text}
            onChange={changeEventHandler}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {text && (
            <span
              onClick={commentHandler}
              className="ml-2 text-blue-500 font-semibold cursor-pointer hover:underline"
            >
              Post
            </span>
          )}
        </div>
      </div>

      {/* Comment Dialog */}
      <CommentDialog open={open} setOpen={setOpen} comment={comment} setComment={setCommnet} />

      {/* Lightbox */}
      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsImageOpen(false)}
        >
          <img
            src={post.image}
            alt=""
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Post
