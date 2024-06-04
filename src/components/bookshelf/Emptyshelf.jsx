import React from "react";
import "../../App.css";
const Emptyshelf = () => {
  return (
    <div className="w-full flex flex-col items-center mb-4  mx-auto p-6">
      <img
        className="w-48 h-64 img"
        src="https://th.bing.com/th/id/OIP.HEE2X4YKMN5Ylp_CNCKuZAHaHa?pid=ImgDet&rs=1"
        alt="empty"
      />
      <p className="text-2xl italic">Nothing to show please add some books</p>
    </div>
  );
};

export default Emptyshelf;
