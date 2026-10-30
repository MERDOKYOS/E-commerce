import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
      <div>
        <img src={assets.logo} alt="logo" className="mb-5 w-36" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl vel tincidunt lacinia, nunc est aliquam nisl, eget aliquam nunc
        </p>
      </div>
      <div className="text-xl font-medium mb-5">
        <p className="font-semibold mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="font-medium text-xl mb-5">Get In Touch</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>0900901325</li>
          <li>contact@company.com</li>
          <li>123 Main Street, City</li>
        </ul>
      </div>

      <div className="col-span-full">
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          &copy; 2026 Merde Shoes Store All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
