import React from 'react';

function YourFeedPage() {
  return (
    <div className="your-feed-page">
      <div className="header">
        <h1 className="page-title">Your Feed</h1>
        <button className="discover-btn">Discover</button>
      </div>
      <div className="card-list">
        <div className="card">
          <div className="card-header">
            <div className="profile-pic"></div>
            <p className="profile-name">John Doe</p>
          </div>
          <div className="card-content">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis eget ex molestie convallis quis vel quam.</p>
          </div>
          <div className="card-actions">
            <button className="card-action-btn like-btn">Like</button>
            <button className="card-action-btn comment-btn">Comment</button>
            <button className="card-action-btn share-btn">Share</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="profile-pic"></div>
            <p className="profile-name">Jane Doe</p>
          </div>
          <div className="card-content">
            <p className="card-text">Mauris fermentum ex vel eros molestie pharetra. Curabitur lobortis ipsum metus, ut malesuada justo lobortis a. Nullam auctor risus in risus porttitor, sed finibus dolor pellentesque. </p>
          </div>
          <div className="card-actions">
            <button className="card-action-btn like-btn">Like</button>
            <button className="card-action-btn comment-btn">Comment</button>
            <button className="card-action-btn share-btn">Share</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="profile-pic"></div>
            <p className="profile-name">Bob Smith</p>
          </div>
          <div className="card-content">
            <p className="card-text">Sed finibus dolor pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis eget ex molestie convallis quis vel quam.</p>
          </div>
          <div className="card-actions">
            <button className="card-action-btn like-btn">Like</button>
            <button className="card-action-btn comment-btn">Comment</button>
            <button className="card-action-btn share-btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourFeedPage;
