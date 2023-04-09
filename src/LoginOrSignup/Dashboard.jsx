import React, { useState } from "react";
import YourBlogsPage from "./YourBlogsPage";
import YourFeedPage from "./YourFeedPage";
import YourProfilePage from "./YourProfilePage";
import CreateNewBlog from "./CreateNewBlog";

const Dashboard = ({ handleLogout, user }) => {
  const [showYourBlogs, setShowYourBlogs] = useState(false);
  const [showYourFeed, setShowYourFeed] = useState(true);
  const [showYourProfile, setShowYourProfile] = useState(false);

  const handleYourBlogsClick = () => {
    setShowYourBlogs(true);
    setShowYourFeed(false);
    setShowYourProfile(false);
    setIsCreateBlogOpen(false);
  };

  const handleYourFeedClick = () => {
    // handle "Your Feed" button click
    setShowYourFeed(true);
    setShowYourBlogs(false);
    setShowYourProfile(false);
    setIsCreateBlogOpen(false);
  };

  const handleYourProfileClick = () => {
    // handle "Your Profile" button click
    setShowYourFeed(false);
    setShowYourBlogs(false);
    setShowYourProfile(true);
    setIsCreateBlogOpen(false);
  };

  const [isCreateBlogOpen, setIsCreateBlogOpen] = useState(false);

  function handleCreateBlogClick() {
    setIsCreateBlogOpen(true);
    setShowYourFeed(false);
    setShowYourBlogs(false);
    setShowYourProfile(false);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "#e8e8e8",
          backgroundImage: `url(${user.profileWallpaper})`,
          backgroundSize: "cover",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            overflow: "hidden",
            marginRight: "20px"
          }}
        >
          <img
            src={user.profilePicture}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <h2 style={{ color: "#ffffff", fontSize: "32px" }}>{user.name}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleYourBlogsClick}>Your Blogs</button>
        <button onClick={handleYourFeedClick}>Your Feed</button>
        <button onClick={handleYourProfileClick}>Your Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {showYourBlogs && <YourBlogsPage />}
      {showYourFeed && <YourFeedPage />}
      {showYourProfile && <YourProfilePage />}
      {showYourBlogs && (
        <button onClick={handleCreateBlogClick} className="new-blog-btn">
          Create a new blog
        </button>
      )}
      {isCreateBlogOpen && <CreateNewBlog />}
    </div>
  );
};

export default Dashboard;
