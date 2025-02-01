import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <aside className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-white min-h-full sm:w-80 w-64 p-4 font-semibold">
        <li>
          <Link href="/">
            <Image
              src={"/newsacquire.png"}
              alt="NewsAcquire Logo"
              height={80}
              width={180}
            />
          </Link>
        </li>
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
    </aside>
  );
}
