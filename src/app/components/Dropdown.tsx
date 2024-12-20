"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

interface DropdownItem {
  href: string;
  text: string;
}

interface CustomDropdownProps {
  label: string;
  items: DropdownItem[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isDropdownVisible = isOpen || isHovered;

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-[22px] cursor-pointer focus:outline-none relative group"
      >
        <span className="group-hover:text-orange-500 transition-all duration-300">
          {label}
        </span>
        <span className="transition-transform duration-300 text-[18px]">
          {isDropdownVisible ? <FaMinus className="group-hover:text-orange-500"/> : <FaPlus />}
        </span>
        {/* Line effect */}
        <div className="absolute bottom-[-2px] left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300"></div>
      </button>

      {isDropdownVisible && (
        <div className="absolute left-0 sm:mt-2 w-64 sm:bg-white bg-transparent sm:dark:bg-neutral-800 sm:border border-none sm:border-gray-200 dark:border-neutral-700 sm:shadow-lg rounded-md p-4 z-50">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="text-[18px] py-2 sm:hover:bg-gray-100 sm:dark:hover:bg-neutral-700 rounded cursor-pointer">
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
