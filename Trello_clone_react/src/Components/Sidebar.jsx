import React from "react";
import { User } from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col  w-80 bg-gray-950 border-r border-gray-200 text-white px-2 pr-6 py-4">
        <h3 className="text-sm font-semibold border-amber-50 border-b-1 pb-2">
          Remote Dev's Workspace{" "}
          <span className="text-xs">
            <User size={25} />
          </span>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
