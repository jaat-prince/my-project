import Image from "next/image";
import Link from "next/link";
import React from "react";
import { listData } from "../helper/Helper";
import { DayIcon } from "../helper/Icon";
import Themetoogle from "./ThemeToggle";

function Navbar() {
  return (
    <>
      <div className="flex items-center max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto py-6 justify-between border-b">
        <Link href={"/"} className="w-[64px]">
          <Image
            src={"/assets/png/Logo.png"}
            width={64}
            height={64}
            alt="logo"
            className="w-full"
          />
        </Link>
        <div>
          <ul className="flex items-center gap-4">
            {listData.map((item, index) => (
              <li key={index}>
                <Link
                  href={"/"}
                  className="text-xl font-semibold !leading-[140%] hover:bg-[linear-gradient(to_right,#00ff00_4%,#ffff00_100%)] hover:text-transparent bg-clip-text transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Themetoogle />
      </div>
    </>
  );
}

export default Navbar;
