import React from "react";
import BlogItem from "../BlogList/BlogItem/index";
import "../BlogList/style.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap container">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
