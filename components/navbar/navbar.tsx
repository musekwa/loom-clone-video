import React from "react";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/navigation-menu-bar";
import ActionButtons from "./_components/action-buttons";

const Navbar = () => {
  return (
    <div className="
      flex items-center 
      justify-between 
      lg:px-5 sticky top-0 z-50
       bg-white h-24
       "
      >
      <div className="px-4">
        <div className="w-40 lg:w-20">
          <Logo />
        </div>
      </div>
      <div className="flex items-center">
        <NavigationMenuBar />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Navbar;
