import React from "react";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currYear}</p>
    </footer>
  );
}

export default Footer;
