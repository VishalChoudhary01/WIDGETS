import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Experience from "./Experience";
import Recommended from "./Recommended";
import { FaRegQuestionCircle } from "react-icons/fa";

const TabComponent = () => {
  return (
    
    <Router>

    <section className="w-full h-[300px] scrollable-container flex my-5  rounded-3xl bg-[#363c43] py-6 pr-10 shadow-lg shadow-black">
    <section className="w-[8%] h-full grid justify-center ">
      <FaRegQuestionCircle  className="text-[1.6em] text-[#99a3af]"/>
      <section className="grid grid-cols-2 gap-y-3 grid-rows-3 w-8 h-8">
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
        <section className="bg-gray-500 w-3 h-3 rounded-sm"></section>
      </section>
    </section>
    <section className="w-[90%]">
      <section className="rounded-2xl relative flex w-full h-16  justify-center  items-center gap-x-4 pl-4 p py-2 bg-[#171717]">
      <NavLink to="/" className={({isActive})=>`px-8 text absolute  font-semibold left-5 py-3  rounded-2xl  transition-all duration-300 ease-out ${isActive?"font-bold Tab-shadow scale-105 bg-[#363c43] text-white":"text-neutral-400"}`}>About Me</NavLink>
      <NavLink to="/experience" className={({isActive})=>`px-8 text absolute  font-semibold  py-3  rounded-2xl  transition-all duration-300 ease-out ${isActive?"font-bold Tab-shadow scale-105 bg-[#363c43] text-white":"text-neutral-400"}`}>Experiences</NavLink>
      <NavLink
              to="/recommended"
              className={({ isActive }) =>
                `px-4 text font-semibold py-3 absolute right-4 rounded-2xl transition-all duration-300 ease-out ${isActive ? "font-bold scale-105 bg-[#363c43] Tab-shadow text-white" : "bg-transparent text-neutral-400"}`
              }
            >
              Recommended
            </NavLink>
      </section>
      <section className="w-full h-[210px] py-4 text-[#969696] text-lg scrollable-container">
      <Routes>
            <Route path="/" element={<About />} end />
            <Route path="/experience" element={<Experience />} />
            <Route path="/recommended" element={<Recommended />} />
          </Routes>
      </section>
    </section>
    
    </section>

    </Router>

  );
};

export default TabComponent;
