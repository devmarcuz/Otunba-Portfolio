import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/BlogNews.css";
import { textify, datify, paramId } from "../utils/textify";

const BlogNews = ({ blog }) => {
  return (
    <div className="news">
      <div className="date">
        <p>{blog && datify(blog.createdAt)}</p>
      </div>
      <div className="content">
        <h1>{blog && blog.blogTitle}</h1>
        <Link to={`/shelf/${blog && paramId(blog)}`} className="img">
          <img src="/images/pexels-mikotoraw-photographer-3639496.jpg" alt="" />
        </Link>
        <p>{textify(blog && blog.blogSummerise, 340)}</p>
        <div className="read">
          <Link to={`/shelf/${blog && paramId(blog)}`}>
            continue reading
            <div className="arrow">
              <div className="bar"></div>
              <FaChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
