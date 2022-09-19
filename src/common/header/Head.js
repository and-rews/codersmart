import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";

const Head = () => {
  return (
    <div className="top-container">
      <section className="topbar">
        <div className="t-text"> Free Delivery Over ₵100 All Products</div>
        <div>
          <NavLink className="navlink">
            {" "}
            <FontAwesomeIcon icon={faUser} id="usericon" /> &nbsp; Sign in{" "}
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Head;
