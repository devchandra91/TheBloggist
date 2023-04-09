import React from 'react';

function YourBlogsPage({handleCreateNewBlogClick}) {

  return (
    <div className="your-blogs-page">
      <div className="header">
        <div className="profile-info">
          <div className="profile-pic"></div>
          <p className="profile-name">John Doe</p>
        </div>
        <h1 className="page-title">Your Blogs</h1>
      </div>
      <div className="blog-list">
        <div className="blog-card">
          <div className="blog-img"></div>
          <div className="blog-content">
            <h2 className="blog-title">Blog Title</h2>
            <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis eget ex molestie convallis quis vel quam. Mauris fermentum ex vel eros molestie pharetra. Curabitur lobortis ipsum metus, ut malesuada justo lobortis a. Nullam auctor risus in risus porttitor, sed finibus dolor pellentesque. </p>
            <div className="blog-actions">
              <button className="blog-action-btn like-btn">Like</button>
              <button className="blog-action-btn comment-btn">Comment</button>
              <button className="blog-action-btn share-btn">Share</button>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img"></div>
          <div className="blog-content">
            <h2 className="blog-title">Blog Title</h2>
            <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis eget ex molestie convallis quis vel quam. Mauris fermentum ex vel eros molestie pharetra. Curabitur lobortis ipsum metus, ut malesuada justo lobortis a. Nullam auctor risus in risus porttitor, sed finibus dolor pellentesque. </p>
            <div className="blog-actions">
              <button className="blog-action-btn like-btn">Like</button>
              <button className="blog-action-btn comment-btn">Comment</button>
              <button className="blog-action-btn share-btn">Share</button>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-img"></div>
          <div className="blog-content">
            <h2 className="blog-title">Blog Title</h2>
            <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis eget ex molestie convallis quis vel quam. Mauris fermentum ex vel eros molestie pharetra. Curabitur lobortis ipsum metus, ut malesuada justo lobortis a. Nullam auctor risus in risus porttitor, sed finibus dolor pellentesque. </p>
            <div className="blog-actions">
              <button className="blog-action-btn like-btn">Like</button>
              <button className="blog-action-btn comment-btn">Comment</button>
              <button className="blog-action-btn share-btn">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourBlogsPage;
