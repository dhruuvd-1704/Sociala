import sharp from "sharp";
import { Post } from "../models/post.model.js";
import cloudinary from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import { Comment } from "../models/comment.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const addNewPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const image = req.file;
    const userId = req.id;

    if (!image) {
      return res.status(400).json({
        message: "image required!",
      });
    }
    //image upload
    const optimizedImageBuffer = await sharp(image.buffer)
      .resize({ width: 800, height: 800, fit: "inside" })
      .toFormat("jpeg", { quality: 80 })
      .toBuffer();

    //buffer to datauri
    const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString(
      "base64"
    )}`;

    const cloudResopnse = await cloudinary.uploader.upload(fileUri);

    const post = await Post.create({
      caption,
      image: cloudResopnse.secure_url,
      author: userId,
    });
    const user = await User.findById(userId);
    if (user) {
      user.posts.push(post._id);
      await user.save();
    }
    await post.populate({ path: "author", select: "-password" });

    return res.status(201).json({
      message: "New post added",
      post,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({ path: "author", select: "username profilePicture" })
      .populate({
        path: "comments",
        sort: { createdAt: -1 },
        populate: {
          path: "author",
          select: "username, profilePicture",
        },
      });
    return res.status(200).json({
      posts,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (req, res) => {
  try {
    const authorId = req.id;
    const posts = await Post.find({ author: authorId })
      .sort({ createdAt: -1 })
      .populate({
        path: "author",
        select: "username, profilePicture",
      })
      .populate({
        path: "comments",
        sort: { createdAt: -1 },
        populate: {
          path: "author",
          select: "username,profilePicture",
        },
      });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const likeKarneWalaUserKiId = req.id;
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "post not found",
        success: true,
      });
    }

    //like logic started
    await post.updateOne({ $addToSet: { likes: likeKarneWalaUserKiId } });
    await post.save();

    //implementing socket.io for real time notification
    const user = await User.findById(likeKarneWalaUserKiId).select(
      "username profilePicture"
    );
    const postOwnerId = post.author.toString();
    if (postOwnerId !== likeKarneWalaUserKiId) {
      //emit a notification event
      const notification = {
        type: "like",
        userId: likeKarneWalaUserKiId,
        postId: post._id,
        userDetails: user,
        message: `${user.username} liked your post`,
      };
      const postOwnerSocketId = getReceiverSocketId(postOwnerId);
      io.to(postOwnerSocketId).emit("notification", notification);
      return res.status(200).json({ message: "post liked", success: true });
    }
  } catch (error) {
    console.log(error);
  }
};

export const dislikePost = async (req, res) => {
  try {
    const likeKarneWalaUserKiId = req.id;
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "post not found",
        success: true,
      });
    }

    //like logic started
    await post.updateOne({ $pull: { likes: likeKarneWalaUserKiId } });
    await post.save();

    //implementing socket.io for real time notification
    // will be added here later //

    return res.status(200).json({ message: "post disliked", success: true });
  } catch (error) {
    console.log(error);
  }
};

// export const addComment = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const commentKarneWalaUserKiId = req.id;

//     const { text } = req.body;
//     const post = await Post.findById(postId);
//     if (!post) {
//       return res.status(404).json({
//         message: "Post not found",
//         success: false,
//       });
//     }
//     if (!text) {
//       return res.status(400).json({
//         message: "text is required",
//         success: false,
//       });
//     }
//     const comment = await Comment.create({
//       text,
//       author: commentKarneWalaUserKiId,
//       post: postId,
//     });
//     await comment.populate({
//       path: "author",
//       select: "username profilePicture",
//     });
//     // post.comments.push(comment._id);
//     post.comments.push(comment._id); // add the comment to the beginning of the array
//     await post.save();
//     return res.status(201).json({
//       message: "Comment Added",
//       comment,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getCommentsOfPost = async (req, res) => {
//   try {
//     const postId = req.params.id;
//     const comments = await Comment.find({ post: postId }).populate(
//       "author",
//       "username profilePicture"

//       // { path: "author", select: "username profilePicture" }
//     );

//     if (!comments) {
//       return res.status(404).json({
//         message: "No comments found for this post",
//         success: false,
//       });
//     }
//     return res.status(200).json({
//       message: "Comment added successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// controllers/postController.js

// import Post from "../models/Post.js";
// import Comment from "../models/Comment.js";

/**
 * Add a comment to a post.
 * - Creates a Comment document
 * - Populates its author field (username & profilePicture)
 * - Inserts its _id into the beginning of the Post.comments array
 * - Returns the populated comment in the response
 */
export const addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const commentKrneWalaUserKiId = req.id;

    const { text } = req.body;

    const post = await Post.findById(postId);

    if (!text)
      return res
        .status(400)
        .json({ message: "text is required", success: false });

    const comment = await Comment.create({
      text,
      author: commentKrneWalaUserKiId,
      post: postId,
    });

    await comment.populate({
      path: "author",
      select: "username profilePicture",
    });

    post.comments.push(comment._id);
    await post.save();

    return res.status(201).json({
      message: "Comment Added",
      comment,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get all comments for a given post.
 * - Finds all Comment documents with post === postId
 * - Populates their author fields
 * - Returns the array in the response
 */
export const getCommentsOfPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const comments = await Comment.find({ post: postId }).populate(
      "author",
      "username profilePicture"
    );

    if (!comments)
      return res
        .status(404)
        .json({ message: "No comments found for this post", success: false });

    return res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const authorId = req.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({
        message: "post not found",
        success: false,
      });
    }

    // check if the loggedin user is owner of the code
    if (post.author.toString() !== authorId) {
      return res.status(403).json({
        message: "unauthorized attempt to delete",
      });
    }

    await Post.findByIdAndDelete(postId);
    //still after deleting too the postId might be stored in the user section, hence we need to delete that too
    // removing the postId from the user
    let user = await User.findById(authorId);
    user.posts = user.posts.filter((id) => id.toString() !== postId);
    await user.save();

    //delete associated comments
    await Comment.deleteMany({ post: postId });
    return res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const authorId = req.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "post not found",
        success: false,
      });
    }
    const user = await User.findById(authorId);
    // if already in the bookmark then remove bookmark
    if (user.bookmarks.includes(post._id)) {
      await user.updateOne({ $pull: { bookmarks: post._id } });
      await user.sace();
      return res.status(200).json({
        type: "unsaved",
        message: "Post removed from bookmark",
        success: true,
      });
    } else {
      await user.updateOne({ $addToSet: { bookmarks: post._id } });
      await user.sace();
      return res.status(200).json({
        type: "saved",
        message: "Post added to bookmark",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
