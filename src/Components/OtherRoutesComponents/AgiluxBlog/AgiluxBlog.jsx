import React, { useState } from "react";
import "./AgiluxBlog.css";
import AgiluxBlogs from "./AgiluxBlogContent"; // Blog data with JSX content

const AgiluxBlog = () => {
  // State to handle the current main blog
  const [currentBlog, setCurrentBlog] = useState(AgiluxBlogs[0]);

  // Function to handle blog click and set it as the main blog
  const handleBlogClick = (blog) => {
    setCurrentBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section style={{ paddingTop: "0px" }}>
        <div className="AgiluxBlogContainer">
          {/* Main blog content */}
          <div className="BlackOverlay"></div>
          <div className="BlogMainColumn">
            <img src={currentBlog.image} style={{ width: "100%", borderRadius: "10px" }} alt={currentBlog.title} loading="lazy"/>
            <h2><b>{currentBlog.title}</b></h2>
            <div>{currentBlog.content}</div>
          </div>

          {/* Sidebar with other blogs */}
          <div className="BlogSidebarColumn">
            
            <div className="BlogSidebarGrid">
            <h4>/ Explore Blogs</h4>
              {AgiluxBlogs.filter((blog) => blog.id !== currentBlog.id).map((blog) => (
                <div
                  key={blog.id}
                  className="BlogSidebarItem"
                  onClick={() => handleBlogClick(blog)}
                >
                  <img src={blog.image} style={{ width: "100%" }} alt={blog.title} loading="lazy"/>
                  <br /><br />
                  <h4><b>{blog.title}</b></h4>
                  <span style={{fontSize:"12px"}}>/ Agilux Solutions</span>
                  {/* <p>{blog.content.props.children[0].props.children.slice(0, 60)}...</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgiluxBlog;
