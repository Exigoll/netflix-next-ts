import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee"
             alt="Netflix logo"
             width={100}
             height={100}
             className="cursor-pointer object-contain" />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My list</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline"
                    width={20}
                    height={20} />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon width={20}
                  height={20} />
        <Link href="/account">
          <img className="cursor-pointer rounded"
               src="https://rb.gy/g1pwyx"
               alt="" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
