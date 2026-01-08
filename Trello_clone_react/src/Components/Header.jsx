import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black-300 border">
      <div className="text-xl font-bold text-white">Trello Clone</div>

      <div className="flex items-center gap-2 mt-2 bg-red-100 p-2">
        <h4 className="text-sm font-medium">Remote Dev</h4>
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
