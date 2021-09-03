import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./navbar.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    // <div className={`navbar ${show && "nav_black"}`}>
    //   <div className="navbar_img">
    //     <img
    //       src={process.env.PUBLIC_URL + "/netflix-logo.png"}
    //       alt=""
    //       className="logo"
    //     />
    //   </div>
    //   <div className="navbar_middle">
    //     <p>Home</p>
    //     <p>TV shows</p>
    //     <p>Movies</p>
    //     <p>New & Popular</p>
    //     <p>My List</p>
    //   </div>
    //   <div className="navbar_right">
    //     <SearchIcon className="navbar_search" />
    //     <p>Kids</p>
    //     <NotificationsActiveIcon className="navbar_notification" />
    //     <AccountBoxIcon className="navbar_account" />
    //   </div>
    // </div>
    <div className={`nav ${show && "nav_black"}`}>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/netflix-logo.png"}
          alt="Netflix Logo"
          className="nav_logo"
        />
        <div className="nav_links">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
        </div>
      </div>
      <div className="nav_links profile">
        <SearchIcon style={{ marginRight: "1.25rem" }} />
        <p>KIDS</p>
        <NotificationsIcon className="navbar_notification" />
        <img
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
