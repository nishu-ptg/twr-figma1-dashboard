import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", name: "Dashboard" },
    { id: "transactions", name: "Transactions" },
    { id: "accounts", name: "Accounts" },
    { id: "investments", name: "Investments" },
    { id: "credit-cards", name: "Credit Cards" },
    { id: "loans", name: "Loans" },
    { id: "services", name: "Services" },
    { id: "my-privileges", name: "My Privileges" },
    { id: "settings", name: "Settings" },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <nav className="flex flex-col py-[10px] space-y-[2px] relative">
      {/* Active Indicator */}
      <div
        className="absolute left-[-6px] w-[12px] h-[62px] bg-[#2d60ff] rounded-full transition-all duration-300"
        style={{
          transform: `translateY(${
            navItems.findIndex((item) => item.id === activeItem) * 64
          }px)`,
        }}
      ></div>

      {navItems.map((item) => (
        <NavbarItem
          key={item.id}
          item={item}
          isActive={activeItem === item.id}
          onClick={handleItemClick}
        />
      ))}
    </nav>
  );
};

export default Navbar;
