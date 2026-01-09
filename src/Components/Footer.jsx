import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Homeimage/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#002859] via-[#003A81] to-[#0056BF]">
        <div className="flex justify-around p-10 text-white">
          {/* Footer 1 */}
          <div>
            <div className="flex items-center italic gap-2 text-xl">
              <img src={Logo} alt="Logo" />
              <h1>S.T. Tech</h1>
            </div>
            <br />
            <p>
              <b>S.T. Tech</b> is an e-learning platform offering practical,
              <br />
              engaging, and accessible courses designed to help <br />
              students build skills and achieve their goals.
            </p>
          </div>

          {/* Footer 2 */}
          <div>
            <h3>About</h3>
            <br />
            <ul className="space-y-1">
              <li className="list-none">Blog</li>
              <li className="list-none">About Us</li>
              <li className="list-none">Team</li>
              <li className="list-none">Instructors</li>
              <li className="list-none">Privacy Policy</li>
              <li className="list-none">Terms & conditions</li>
            </ul>
          </div>

          {/* Footer 3 */}
          <div>
            <h3>Links</h3>
            <br />
            <ul className="space-y-1">
              <li className="list-none">Home</li>
              <li className="list-none">Dashboard</li>
              <li className="list-none">FAQs</li>
              <li className="list-none">Services</li>
              <li className="list-none">Why us?</li>
            </ul>
          </div>

          {/* Footer 4 */}
          <div>
            <h3>Programs</h3>
            <br />
            <ul className="space-y-1">
              <li className="list-none">IT Courses</li>
              <li className="list-none">Designing Courses</li>
              <li className="list-none">Marketing Courses</li>
              <li className="list-none">Business Courses</li>
              <li className="list-none">Public Development Courses</li>
              <li className="list-none">Creative Arts Courses</li>
            </ul>
          </div>

          {/* Footer 5 */}
          <div>
            <h3>Address</h3>
            <br />
            <ul className="space-y-2">
              <li className="flex items-center gap-2 list-none">
                <FaLocationDot /> Location
              </li>
              <li className="flex items-center gap-2 list-none">
                <MdCall /> Call +977 9800000000
              </li>
              <li className="flex items-center gap-2 list-none">
                <IoIosMail /> example@gmail.com
              </li>
              <li className="flex items-center gap-2 list-none">
                <FaCalendarAlt /> Monday-Friday
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Section */}
        <div className="m-5 leading-8">
          <h2 className="text-white">FOLLOW US ON</h2>

          <div className="flex gap-3 p-2">
            <FaFacebook className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
            <FaInstagram className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
            <FaLinkedin className="text-blue-600 bg-white border-2 border-gray-300 rounded-full w-5 h-5" />
          </div>

          <hr className="h-[1px] bg-white border-none w-full" />
        </div>

        {/* Bottom */}
        <div className="flex justify-between text-white p-3">
          <p>Refund & Return Policy</p>
          <p>&copy; 2024 S.T. Tech. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
