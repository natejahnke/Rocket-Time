import React from "react";

const Header = props => (
  <div className="header">
    <h1 className="logo">{props.title}</h1>
  </div>
);

Header.defaultProps = {
  title: "Rocket Time"
};

export default Header;
