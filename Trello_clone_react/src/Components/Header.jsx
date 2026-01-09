import React from "react";
import { User } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-800 h-[3rem]">
      <div className="text-xl font-bold text-white ">Trello Clone</div>

      <div className="flex items-center gap-2 ">
        <h4 className="text-sm font-medium text-white">Remote Dev</h4>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
          <User size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
