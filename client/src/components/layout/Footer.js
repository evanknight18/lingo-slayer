import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Music of the Spheres</p>
      <ul>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/YourPage" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
        {/* Add other links as needed */}
      </ul>
    </footer>
  );
};

export default Footer;
