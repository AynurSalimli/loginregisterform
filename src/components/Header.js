import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="./register">
        <i class="fa-solid fa-user"></i>
      </Link>
    </div>
  );
};

export default Header;
