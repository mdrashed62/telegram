import { FaBars } from "react-icons/fa";
import React from "react";
import { Search } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
       <FaBars></FaBars>
        <div className="search__part">
        <Search></Search>
        <input
        className="input"
          type="text"
          placeholder="Search"
        />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
}

export default Sidebar;
