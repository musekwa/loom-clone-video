"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./dropdown-menu";

const ActionButtons = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="flex items-center md:justify-end lg:space-x-6 lg:pl-10">
      <div className="flex lg:space-x-6">
        <Link href={"/pricing"} className="hidden lg:flex items-center w-max ">
          <div className="font-light text-sm">Pricing</div>
        </Link>
        <Link href={"/pricing"} className="hidden lg:flex items-center w-max">
          <div className="font-light inline text-sm">Sign In</div>
        </Link>
      </div>
      <div className="flex lg:space-x-4 items-center">
        <Link href={"/free"}>
          <Button
            className="
            hidden lg:flex text-sm font-light 
            rounded-full border-4 border-indigo-400/90 
            py-6
            lg:py-2
             bg-[#565add] hover:scale-110 transition-all
            duration-300 shadow-md hover:shadow-indigo-300
        "
          >
            Get Bird for free
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button
            className="
            hidden
            text-[#565add]
            py-6
            lg:py-2
            text-sm
            font-light
            rounded-[40px]
            bg-[#eff0ff]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            md:hidden
            lg:flex
            hover:shadow-indigo-300
        "
          >
            Contact Sales
          </Button>
        </Link>
      </div>
      <div className="px-8">
        {dropdownVisible && (
          <div
            onClick={toggleDropdown}
            className="bg-[#565add] p-3 rounded-full lg:hidden cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
          </div>
        )}
        {!dropdownVisible && (
          <div
            onClick={toggleDropdown}
            className="bg-[#eff0ff] p-3 rounded-full lg:hidden cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />
          </div>
        )}
      </div>
      {
        dropdownVisible && <DropdownMenu onClose={closeDropdown} />
      }
    </div>
  );
};

export default ActionButtons;
