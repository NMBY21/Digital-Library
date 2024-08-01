// src/pages/ManageAccount.jsx
import React, { useState } from 'react';
import './ManageAccount.css'; // Ensure this path is correct
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon
import About from './About';

const ManageAccount = () => {
  const [activeLink, setActiveLink] = useState(''); // To manage which link is active

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link
  };

  return (
    <div className="manage-account-page">
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h1 className="user-name">User Name</h1>
      </div>

      <div className="links-section">
        <a 
          href="#"
          className={`link ${activeLink === 'ebook' ? 'active' : ''}`}
          onClick={() => handleLinkClick('ebook')}
        >
          eBook
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'magazine' ? 'active' : ''}`}
          onClick={() => handleLinkClick('magazine')}
        >
          Magazine
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'video' ? 'active' : ''}`}
          onClick={() => handleLinkClick('video')}
        >
          Video
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'audio' ? 'active' : ''}`}
          onClick={() => handleLinkClick('audio')}
        >
          Audio
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'bookmark' ? 'active' : ''}`}
          onClick={() => handleLinkClick('bookmark')}
        >
          Bookmark
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => handleLinkClick('about')}
        >
          About
        </a>
      </div>

      <hr className="separator" />

      <div className="content-section">
        {/* Display content based on active link */}
        {activeLink === '' }
        {activeLink === 'ebook' }
        {activeLink === 'magazine' }
        {activeLink === 'video'  }
        {activeLink === 'audio' }
        {activeLink === 'bookmark' }
        {activeLink === 'about' && <About />}
      </div>
    </div>
  );
};

export default ManageAccount;
