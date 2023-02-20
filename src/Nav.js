import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [Show, handleShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${Show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => {
            navigate("/");
          }}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="nav_logo"
          alt=""
        ></img>
        <img
          onClick={() => {
            navigate("/profile");
          }}
          src=" https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="nav_avatar"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
