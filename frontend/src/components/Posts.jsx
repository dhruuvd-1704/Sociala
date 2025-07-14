// src/components/Posts.jsx

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setPosts } from '@/redux/postSlice'
import Post from './Post'

const Posts = () => {
  const dispatch = useDispatch()
  // Guard against `undefined` by defaulting to an empty array
  const posts = useSelector(store => store.post.posts) || []

  // Fetch all posts on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/api/v1/post/all',
          { withCredentials: true }
        )
        if (res.data.success && Array.isArray(res.data.posts)) {
          dispatch(setPosts(res.data.posts))
        }
      } catch (err) {
        console.error('Failed to fetch posts:', err)
      }
    }
    fetchPosts()
  }, [dispatch])

  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No posts to display.
      </p>
    )
  }

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts
