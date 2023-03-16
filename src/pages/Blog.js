import React, { useState, useEffect } from "react";
import BlogNews from "../components/BlogNews";
import Footer from "../components/Footer";
import HomeNavBar from "../components/HomeNavBar";
import MenuReponsive from "../components/MenuReponsive";
import "../css/BlogPage.css";
import { getBlogs } from "../redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const [menuRepo, setMenuRepo] = useState(false);
  const [active, setActive] = useState(false);

  const { blogs } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const navigation = (e) => {
    if (!e.target.classList.contains(".menu")) {
      if (active) {
        setActive(false);
      }
    }
  };

  return (
    <div className="blog" onClick={navigation}>
      <HomeNavBar
        setMenuRepo={setMenuRepo}
        menuRepo={menuRepo}
        active={active}
        setActive={setActive}
      />
      <MenuReponsive setMenuRepo={setMenuRepo} menuRepo={menuRepo} />

      <h2 className="head">/shelf.</h2>

      <section className="container">
        {blogs &&
          blogs.map((blog, index) => <BlogNews blog={blog} key={index} />)}
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
