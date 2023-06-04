import React from 'react'
import BlogMain from './BlogMain'
import BlogAside from './BlogAside'
import classes from "./BlogWrapper.module.css"
const BlogWrapper = () => {
  return (
    <div className={classes.blogContainer}>
        <BlogMain />
        <BlogAside />
    </div>
  )
}

export default BlogWrapper