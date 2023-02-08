import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear} made with love by Akash Pande</p>
    </footer>
  );
}
export default Footer;
