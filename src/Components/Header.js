import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo1 from '../Images/flags3.png';


const Header = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogoClick = () => {
    
    navigate('/'); // Navigate to the home screen when the logo is clicked
  };


  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={Logo1}
          alt="Logo"
          className="logo"
          onClick={() => {
            handleLogoClick(); 
            navigate('/'); // Navigate to the home screen when the logo is clicked
          }}
        />
      </div>
    </header>
  );
};

export default Header;
