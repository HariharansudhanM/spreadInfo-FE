import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/landing page">
      <img src="/logo.png" className="logo img-fluid" />
    </Link>
  );
}

export default Logo;
