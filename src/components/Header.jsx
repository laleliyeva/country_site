import Sidebar from "./Sidebar";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

function Header({ sidebarStatus, changeRegion, data }) {
  const uniqueRegions = [...new Set(data.map((country) => country.region))];
  const [darkMode, setDarkMode] = useState(false);
  function handleTheme(){
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="p-4 ">
      <div className="container flex items-center justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <Sidebar sidebarStatus={sidebarStatus} />
        <ul className="items-stretch hidden space-x-3 md:flex">
          {uniqueRegions.slice(0, 4).map((region) => {
            return (
              <li onClick={() => changeRegion(region)} className="flex ">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  {region}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <LiaGlobeAmericasSolid
            onClick={() => changeRegion(null)}
            className="dark:text-violet-600 text-6xl"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          {uniqueRegions.slice(4).map((region) => {
            return (
              <li onClick={() => changeRegion(region)} className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  {region}
                </a>
              </li>
            );
          })}
        </ul>
        <button title="Button" type="button" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {darkMode ? (
          <IoSunnyOutline onClick={handleTheme} size={25} />
        ) : (
          <IoMoonOutline onClick={handleTheme} size={25} />
        )}
      </div>
    </header>
  );
}

export default Header;
