import React from "react";
import "../css/Blog.css";
import { textify, paramId } from "../utils/textify";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const BlogComponent = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <div className="blog-section">
      <div className="logo">
        <h1>Blog</h1>
      </div>
      <div className="header">
        <h1>Recent Writings</h1>
        <p>
          Documenting the process is just as important as building the project.
          Occasionally, I share some valuable lessons I've learnt so far in my
          career. Here are some of my most recent publications.
        </p>
      </div>
      <div className="lists">
        {blogs &&
          blogs.slice(0, 3).map((blog, index) => (
            <Link
              className="list"
              to={`/shelf/${blog && paramId(blog)}`}
              key={index}
            >
              <div className="container">
                <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
                <div className="more">
                  <p>Read article</p>
                </div>
              </div>
              <div className="content">
                <h2>{blog && blog.blogTitle}</h2>
                <p>{textify(blog && blog.blogSummerise, 200)}</p>
              </div>
            </Link>
          ))}
        <Link className="list">
          <div className="container">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="more">
              <p>Read article</p>
            </div>
          </div>
          <div className="content">
            <h2>Understanding the Almighty Big- O</h2>
            <p>
              {textify(
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              a repellat iure omnis repellendus nobis fugiat consequuntur,
              corrupti deleniti vero, sequi laudantium veniam distinctio. Sed
              explicabo commodi, corporis deleniti veritatis tempore, magnam
              quasi iste consequuntur`,
                200
              )}
            </p>
          </div>
        </Link>
        <Link className="list">
          <div className="container">
            <img src="/images/pexels-bryan-catota-3756766.jpg" alt="" />
            <div className="more">
              <p>Read article</p>
            </div>
          </div>
          <div className="content">
            <h2>Understanding the Almighty Big- O</h2>
            <p>
              {textify(
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              a repellat iure omnis repellendus nobis fugiat consequuntur,
              corrupti deleniti vero, sequi laudantium veniam distinctio. Sed
              explicabo commodi, corporis deleniti veritatis tempore, magnam
              quasi iste consequuntur`,
                200
              )}
            </p>
          </div>
        </Link>
      </div>
      <div className="read">
        <Link to="/shelf">
          Read More
          <div className="arrow">
            <div className="bar"></div>
            <FaChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
