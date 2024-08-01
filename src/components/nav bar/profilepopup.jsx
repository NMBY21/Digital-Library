import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Ensure you're using react-router
import './profilepopup.css';

const ProfilePopup = ({ onClose }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleManageAccountClick = () => {
    navigate('/manageaccount'); // Navigate to the manage account page
    onClose(); // Close the popup
  };

  const handleLogoutClick = () => {
    // Implement your logout logic here
    console.log('Logged out');
    onClose(); // Close the popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <h2>Profile Information</h2>
        <p>Name: Meba</p>
        <p>Email: neba.t.git@gmail.com</p>
        <button onClick={handleManageAccountClick}>Manage Account</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
};

ProfilePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopup;
