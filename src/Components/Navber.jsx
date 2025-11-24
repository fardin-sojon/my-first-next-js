"use client";

import Image from "next/image";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logOut } = useAuth();

  const active = (href) =>
    pathname === href
      ? "text-blue-600 border-2 border-blue rounded font-semibold"
      : "text-gray-700 hover:text-blue-600";

  const links = (
    <>
      <li><Link href="/" className={active("/")}>Home</Link></li>
      <li><Link href="/items" className={active("/items")}>Items</Link></li>
      <li><Link href="/about" className={active("/about")}>About</Link></li>
      <li><Link href="/contact" className={active("/contact")}>Contact</Link></li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto navbar">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mx-1 hover:text-blue-600 lg:hidden text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {menuOpen && (
              <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow z-10">
                {links}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">ShopEase</Link>
        </div>

        {/* CENTER - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end lg:flex gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              {/* Hover trigger */}
              <label
                tabIndex={0}
                className="flex items-center gap-2 border-2 rounded-full border-blue-500 hover:bg-gray-100 cursor-pointer"
              >
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    {user.displayName ? user.displayName[0] : user.email[0]}
                  </div>
                )}
              </label>

              {/* Dropdown content */}
              <ul
                tabIndex={0}
                className="dropdown-content menu border-t-3 border-blue-600 p-2 shadow bg-white rounded-box w-56 mt-2 text-blue-600 hover:shadow-lg"
              >
                <li className="px-4 py-2 text-blue-600 font-semibold border-b border-gray-100">
                  {user.displayName || "User Name"}
                </li>
                <li className="px-4 py-2 text-gray-700 border-b border-gray-100">{user.email}</li>
                <li>
                  <Link
                    href="/dashbourd/add-product"
                    className="block px-4 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashbourd/manage-products"
                    className="block px-4 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Manage Products
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm bg-blue-600 border-none text-white hover:bg-blue-700">Login</Link>
              <Link href="/register" className="btn btn-sm btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
