"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/items">Items</Link></li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );

  return (
    <nav className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
              {links}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          ShopEase
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* User/Login */}
      <div className="navbar-end lg:flex gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              {user.name}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/add-product">Add Product</Link>
              </li>
              <li>
                <Link href="/manage-products">Manage Products</Link>
              </li>
              <li>
                <button className="text-left w-full">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm btn-outline">
              Register
            </Link>
          </>
        )}
      </div>
      </div>
    </nav>
  );
}
