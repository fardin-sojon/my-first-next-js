import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 text-gray-700 p-10">
        <div className="container mx-auto footer sm:footer-horizontal">
          {/* Services */}
          <nav>
            <h6 className="footer-title text-blue-600 font-bold">Services</h6>
            <a className="link link-hover hover:text-blue-600">Branding</a>
            <a className="link link-hover hover:text-blue-600">Design</a>
            <a className="link link-hover hover:text-blue-600">Marketing</a>
            <a className="link link-hover hover:text-blue-600">Advertisement</a>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title text-blue-600 font-bold">Company</h6>
            <a className="link link-hover hover:text-blue-600">About us</a>
            <a className="link link-hover hover:text-blue-600">Contact</a>
            <a className="link link-hover hover:text-blue-600">Jobs</a>
            <a className="link link-hover hover:text-blue-600">Press kit</a>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title text-blue-600 font-bold">Legal</h6>
            <a className="link link-hover hover:text-blue-600">Terms of use</a>
            <a className="link link-hover hover:text-blue-600">
              Privacy policy
            </a>
            <a className="link link-hover hover:text-blue-600">Cookie policy</a>
          </nav>

          {/* Newsletter */}
          <form>
            <h6 className="footer-title text-blue-600 font-bold">Newsletter</h6>
            <fieldset className="w-80">
              <label className="text-gray-600">Enter your email address</label>
              <div className="join mt-2">
                <input
                  type="text"
                  placeholder="username@gmail.com"
                  className="input join-item bg-gray-100 border-2 border-blue-500 text-blue-600 focus:border-blue-700"
                />

                <button className="btn bg-blue-600 border-none text-white hover:bg-blue-700 join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-600 font-semibold">ShopEase</span> — All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
