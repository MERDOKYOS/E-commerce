import React from "react";
import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchange"
          className="w-12 mb-5 m-auto"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-600">
          We Offer a Simple and Fast Exchange Process
        </p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          alt="return"
          className="w-12 mb-5 m-auto"
        />
        <p className="font-semibold">Return Policy</p>
        <p className="text-gray-600">
          Return Your Product Within 7 Days of Purchase
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="support"
          className="w-12 mb-5 m-auto"
        />
        <p className="font-semibold">24/7 Customer Support</p>
        <p className="text-gray-600">
          Our Team is Available 24/7 to Assist You
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;
