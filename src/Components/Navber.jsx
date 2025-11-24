"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {menuOpen && (
              <ul className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow z-10">
                {links}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 ml-2">
            ShopEase
          </Link>
        </div>

        {/* CENTER - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end lg:flex gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost text-gray-700 hover:text-blue-600">
                {user.name}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
              >
                <li><Link href="/add-product" className="hover:text-blue-600">Add Product</Link></li>
                <li><Link href="/manage-products" className="hover:text-blue-600">Manage Products</Link></li>
                <li><button className="text-left w-full hover:text-red-600">Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm bg-blue-600 border-none text-white hover:bg-blue-700">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
