import React from "react";

const Footer = () => {
  return (
    <footer id="Footer" className="footer bg-[#323232] text-gray-300 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-2">
              GetSetGo is your one-stop destination for hassle-free flight
              bookings.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a href="#">Request</a>
              </li>
              <li>
                <a href="#">Flights</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-2">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">How to tutorial</a>
              </li>
              <li>
                <a href="#">Contact support</a>
              </li>
            </ul>
          </div>
          <div className="Contact text-white">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">Email: contact@getsetgo.com</p>
            <p className="">Phone: +1 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 GetSetGo Flight Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
