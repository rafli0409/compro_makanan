import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../Blog/ConfigData/data";
import Chip from "../Blog/Chip";
import "../Blog/style.css";
import { Link } from "react-router-dom";
import EmptyList from "./EmptyList/Index";
import { MdNavigateBefore } from "react-icons/md";
import Description from "./BlogDescription/Description";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <div className="blog-wrap-cover">
            <img src={blog.cover} alt="cover" />
          </div>

          <Description data={blog.descriptions} />

          {/* <Description data={blog.descriptions} /> */}

          {/* <div className="blog-description">
            <p className="blog-desc">{blog.description}</p>
            <p className="blog-desc" style={{ fontWeight: "bold" }}>
              {blog.description}
            </p>
          </div> */}
          {/* <div className="blog-description">
            {blog.desc.map((data) => (
              <div>
                <p className="blog-desc">{data.para1}</p>
                <p className="blog-desc" style={{ fontWeight: "bold" }}>
                  {data.para2}
                </p>
              </div>
            ))}
          </div> */}
          <Link className="blog-goBack" to="/berita">
            <MdNavigateBefore size="1.5rem" color="#f97044" /> Kembali
          </Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
