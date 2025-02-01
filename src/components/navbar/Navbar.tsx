"use client";

import Link from "next/link";
import SideNavbar from "./SideNavbar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY || window.scrollY <= 100) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`drawer sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-white w-full relative border-b-2 border-gray-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 lg:justify-start justify-center">
            <Link href="/">
              <Image
                src={"/newsacquire.png"}
                alt="NewsAcquire Logo"
                height={48}
                width={200}
              />
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal font-semibold">
              <li>
                <Link
                  href="/"
                  className={`focus:bg-white focus:text-blue-700 ${
                    pathname == "/" ? "text-blue-700" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/section/fashion"
                  className={`focus:bg-white focus:text-blue-700 ${
                    pathname == "/section/fashion" ? "text-blue-700" : ""
                  }`}
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/section/food"
                  className={`focus:bg-white focus:text-blue-700 ${
                    pathname == "/section/food" ? "text-blue-700" : ""
                  }`}
                >
                  Food
                </Link>
              </li>
              <li>
                <Link
                  href="/section/sports"
                  className={`focus:bg-white focus:text-blue-700 ${
                    pathname == "/section/sports" ? "text-blue-700" : ""
                  }`}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/section/technology"
                  className={`focus:bg-white focus:text-blue-700 ${
                    pathname == "/section/technology" ? "text-blue-700" : ""
                  }`}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SideNavbar />
    </nav>
  );
}
