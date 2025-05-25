import Link from 'next/link';
import React from 'react'

const PostList = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
    const posts = await response.json();
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) =>(
            <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
