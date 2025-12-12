// default export
import React from 'react';
import '../ApplicationComponents/styles/Header.css';
export default function HeaderComponent() {
  return (
      <header className="app-header"> 
        <div className="header-greeting">
          <h5>Hello,Ahmad!</h5>
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search for songs, artists, and more..."
          />
        </div>

        <div className="header-actions">
          <button className="user-profile-btn">Profile</button>
        </div>
      </header>
    );
}
