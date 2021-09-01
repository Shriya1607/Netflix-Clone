import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./navbar.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_img">
        <img
          src={process.env.PUBLIC_URL + "/netflix-logo.png"}
          alt=""
          className="logo"
        />
      </div>
      <div className="navbar_middle">
        <p>Home</p>
        <p>TV shows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
      </div>
      <div className="navbar_right">
        <SearchIcon className="navbar_search"/>
        <p>Kids</p>
        <NotificationsActiveIcon className="navbar_notification" />
        <AccountBoxIcon className="navbar_account"/>
      </div>
    </div>
  );
}

export default Navbar;
