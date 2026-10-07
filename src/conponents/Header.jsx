import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaBookmark, FaHistory } from "react-icons/fa";

function Header({ onMenuClick }) {
  return (
    <div className="header-home flex w-full justify-center bg-[#272a2f]">
      <div className="container flex h-[60px] w-full max-w-[1280px] items-center px-3 sm:px-5">

        {/* MENU */}
        <button
          onClick={onMenuClick}
          className="mr-3 shrink-0 cursor-pointer text-white transition hover:text-[#55b8ec] sm:mr-6"
        >
          <IoMdMenu size={32} />
        </button>

        {/* LOGO */}
        <div className="mr-3 shrink-0 whitespace-nowrap text-base font-bold sm:mr-6 sm:text-xl">
          <span className="text-[#4da3e8]">
            KHEANG.MOVIE
          </span>
        </div>

        {/* SEARCH */}
        <div className="flex h-[34px] min-w-0 flex-1 overflow-hidden rounded-sm border border-white sm:h-[36px] sm:max-w-[350px]">
          <input
            type="text"
            placeholder="Search for movies"
            className="min-w-0 flex-1 bg-white px-2 text-[11px] text-gray-600 outline-none sm:text-xs"
          />

          <button className="flex shrink-0 items-center justify-center bg-white px-2 text-black">
            <IoSearch size={16} />
          </button>

          <button className="shrink-0 bg-[#55585d] px-2 text-[11px] text-white sm:px-3 sm:text-xs">
            Find
          </button>
        </div>

        {/* WATCH HISTORY */}
        <div className="ml-5 hidden cursor-pointer whitespace-nowrap text-center text-white md:block">
          <FaHistory
            size={17}
            className="mx-auto text-[#55b8ec]"
          />

          <p className="mt-0.5 text-[10px]">
            Watch History
          </p>
        </div>

        {/* FAVORITE */}
        <div className="ml-5 hidden cursor-pointer whitespace-nowrap text-center text-white md:block">
          <FaBookmark
            size={17}
            className="mx-auto text-[#55b8ec]"
          />

          <p className="mt-0.5 text-[10px]">
            Favorite Movies
          </p>
        </div>

        {/* LOGIN */}
        <button className="ml-3 shrink-0 whitespace-nowrap rounded bg-[#55b8ec] px-2.5 py-1.5 text-[11px] text-white hover:bg-[#3fa8df] sm:ml-auto sm:px-3 sm:text-xs">
          Login
        </button>

      </div>
    </div>
  );
}

export default Header;