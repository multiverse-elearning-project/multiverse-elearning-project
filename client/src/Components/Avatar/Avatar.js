import React from "react";
import "./Avatar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Avatar({ profileImg, name }) {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <img
          src={profileImg || "/student.avif"}
          alt="profile pic"
          className="avatarpic"
        />
        <p className="greeting">{`Welcome ${name || "guest"}`}</p>
      </div>
      <MoreVertIcon className="threedots"/>
    </div>
  );
}

export default Avatar;
