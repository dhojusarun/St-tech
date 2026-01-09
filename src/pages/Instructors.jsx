import React from "react";
import { NavLink } from "react-router-dom";
import Nancy from "../assets/Homeimage/Nancy.png";
import Henry from "../assets/Homeimage/Henry.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Ethan from "../assets/Homeimage/Ethan.png";

function Instructors() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-around p-8">
        <h1 className="text-2xl font-medium">Instructors</h1>

        <select className="border rounded-xl bg-[#939393] text-white ">
          <option value="All">All Courses</option>
          <option value="Ui/ux">UI/UX</option>
          <option value="Graphics">Graphics</option>
          <option value="DataScience">DataScience</option>
          <option value="Mern">Mern</option>
          <option value="Web">Web Development</option>
        </select>
      </div>

      {/* Nancy */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10">
        <div className="flex items-center gap-3">
          <img
            src={Nancy}
            alt="nancy"
            className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
          />
          <div>
            <p className="font-semibold">NANCY WHITE</p>
            <p >
              Courses: UI/UX Design, Graphic Design, Digital Marketing
            </p>
          </div>
        </div>

        <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
          <NavLink
            to="/instructorprofile"
            className="no-underline text-white "
          >
            Visit Profile
          </NavLink>
        </button>
      </div>

      {/* Henry */}
      <div className="flex justify-between items-center p-5 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10">
        <div className="flex items-center gap-3">
          <img
            src={Henry}
            alt="Henry"
            className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
          />
          <div>
            <p className="font-semibold">HENRY SMITH</p>
            <p >
              Courses: Data Science, MERN Stack
            </p>
          </div>
        </div>

      <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
          <NavLink
            to="/henryinstructor"
            className="no-underline text-white "
          >
            Visit Profile
          </NavLink>
        </button>
      </div>

      {/* Charlotte */}
      <div className="flex justify-between items-center p-5 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10">
        <div className="flex items-center gap-3">
          <img
            src={Charlotte}
            alt="Charlotte"
            className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
          />
          <div>
            <p className="font-semibold">CHARLOTTE</p>
            <p>
              Courses: Web Development, Brand Management
            </p>
          </div>
        </div>

      <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
          <NavLink
            to="/charlotteinstructor"
            className="no-underline text-white "
          >
            Visit Profile
          </NavLink>
        </button>
      </div>

      {/* Jordan */}
      <div className="flex justify-between items-center p-5 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10">
        <div className="flex items-center gap-3">
          <img
            src={Jordan}
            alt="Jordan"
            className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
          />
          <div>
            <p className="font-semibold">JORDAN</p>
            <p >
              Courses: Project Management, Public Speaking & Presentation Skills
            </p>
          </div>
        </div>

       <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
          <NavLink
            to="/jordaninstructor"
            className="no-underline text-white "
          >
            Visit Profile
          </NavLink>
        </button>
      </div>

      {/* Ethan */}
      <div className="flex justify-between items-center p-5 bg-white shadow-md w-[850px] h-[90px] rounded-sm ml-[330px] m-10">
        <div className="flex items-center gap-3">
          <img
            src={Ethan}
            alt="Ethan"
            className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-dotted border-[#003372]"
          />
          <div>
            <p className="font-semibold">ETHAN</p>
            <p >
              Courses: Business Analytics, 3D Modeling and Animation
            </p>
          </div>
        </div>

     <button className="bg-[#003372] text-white w-[110px] h-[29px] rounded-lg">
          <NavLink
            to="/ethaninstructor"
            className="no-underline text-white "
          >
            Visit Profile
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default Instructors;
