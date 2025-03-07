import React, { useState, useRef, useEffect } from "react";
import TopbarSearch from "./TopbarSearch";

const Topbar = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-white md:px-[40px] px-[26px] md:border-b md:border-[#e6eff5]">
      <header className="topbar-min-h flex items-center justify-between font-inter">
        <a href="#" onClick={toggleSidebar} className="md:hidden">
          <img src="/assets/icons/menu.svg" alt="Menu" />
        </a>

        <h1 className="font-semibold md:text-3xl text-lg text-[#343c6a]">
          Overview
        </h1>

        <div className="flex items-center gap-8">
          <div className="hidden lg:block">
            <TopbarSearch
              searchTerm={searchTerm}
              onChange={handleInputChange}
            />
          </div>

          <a href="#" className="topbar-icon">
            <img src="/assets/icons/settings.svg" alt="Settings" />
          </a>

          <a href="#" className="topbar-icon">
            <img src="/assets/icons/notification.svg" alt="Notifications" />
          </a>

          <div ref={dropdownRef} className="relative">
            <img
              src="/assets/images/avatar.png"
              alt="Avatar"
              className="rounded-full md:w-[60px] md:h-[60px] w-[35px] h-[35px] cursor-pointer"
              onClick={toggleDropdown}
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-md overflow-hidden shadow-lg z-10 text-lg">
                <a
                  href="#"
                  className="block px-8 py-4 text-gray-700 hover:bg-gray-100 hover:text-[#2d60ff]"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-8 py-4 text-gray-700 hover:bg-gray-100  hover:text-[#2d60ff]"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="block lg:hidden pb-4">
        <TopbarSearch searchTerm={searchTerm} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Topbar;
