import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Navbar = () => {
  return (
    <div className="flex m-0 fixed justify-between items-center w-full p-10 text-lg">
      <div>DevProps</div>
      <div className="flex space-x-10">
        <a href="#">Explore</a>
        <a href="#">Events</a>
        <a href="#">Accelerate</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex space-x-5">
        <div>
          <img src="#" alt="" />
          <div>
            <p className="text-sm">Upcoming</p>
            <p className="text-xs">batch name</p>
          </div>
        </div>
        <div>
          <NotificationsNoneIcon />
        </div>
        <div className=" flex space-x-3">
          <img src="#" alt="" className="bg-black h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm">Darshan</p>
            <p className="text-xs">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
