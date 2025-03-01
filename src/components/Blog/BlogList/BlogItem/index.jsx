import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../Chip";
import "../BlogItem/style.css";
import { Button } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => (
  <div className="blogItem-wrap">
    <img className="blogItem-cover" src={cover} alt="cover" />
    <Chip label={category} />
    <h3>{title}</h3>
    <p className="blogItem-desc">{description}</p>
    <footer>
      <div className="blogItem-author">
        <div className="author-img">
          <img src={authorAvatar} alt="avatar" />
        </div>
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <Button className="blogItem-button">
          {" "}
          Selengkapnya{" "}
          <MdNavigateNext color="#f97044" style={{ margin: "0.1rem" }} />{" "}
        </Button>
      </Link>
    </footer>
  </div>
);

export default BlogItem;
