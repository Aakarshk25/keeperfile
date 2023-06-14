import React from "react";

const realTime = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyrigt COLLGe @{realTime}</p>
      </footer>
    </div>
  );
}
export default Footer;
