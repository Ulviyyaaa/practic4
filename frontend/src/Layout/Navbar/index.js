import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function Navbar() {
  return (
    <>
      <div className="mainNav">
        <div className="navLogo">
          <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="icon" />
        </div>
        <div className="navLi">
          <Link className="lii" to={"/"}>Home</Link>
          <Link className="lii" to={"/add"}>Add</Link>
        </div>
        <div className="navBtn">
          <button className="btnNav">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
