import React from "react"
import BlogBox from "./BlogBox"

const BlogList = ({ posts }) => {
  return (
    <div className="grid my-6 md:grid-cols-3 lg:grid-cols-4 m-auto mb-8">
      {posts &&
        posts.map(post => {
          return <BlogBox key={post.node.frontmatter.path} post={post.node.frontmatter} />
        })}
    </div>
  )
}

// ORIGINAL=           return <BlogBox post={post.node.frontmatter} />


export default BlogList
