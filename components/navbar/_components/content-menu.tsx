import React from "react";
import Link from "next/link";
import { ContentMenuProps } from "../types";

const ContentMenu : React.FC<ContentMenuProps> = ({ options })=> {
  return <div className="min-w-50 p-2 border border-gray-200 rounded-[40px] bg-white absolute left-0 top-full flex justify-start">
    <ul className="flex flex-col items-start pl-2 space-y-1 py-4">
        {
            options.map((option, index)=>(
                <Link href={option.href} key={index}>
                    <div className="cursor-pointer flex flex-col gap-4 hover:bg-gray-100 w-48 p-2 rounded-3xl">
                        <div className="flex gap-4">
                            <div>
                                {option.emoji}
                            </div>
                            <div>
                                {option.label}
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </ul>
  </div>;
}

export default ContentMenu;
