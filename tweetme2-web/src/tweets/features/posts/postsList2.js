import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'
import { PostAuthor } from './PostAuthor'
import { selectAllPosts, fetchPosts } from './postsSlice2'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  console.log(posts)

  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = posts.map(post => {
    console.log(post.user.id)
    return (
      <article className="post-excerpt" key={post.id}>
        <h3 className="post-content" >{post.content}</h3>
        <div>
          <PostAuthor userId={post.user.id} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    )
  })
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}