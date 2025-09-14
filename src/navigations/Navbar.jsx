import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { OpenCloseContext } from "../context/opencloseContext";

const Navbar = () => {
    const { sideBarOpen, Open } = useContext(OpenCloseContext)
console.log(sideBarOpen)
    return(
        <>
        <nav className="hidden md:block shadow-2xl fixed w-full top-[0%] backdrop-blur-sm z-50">
            <div className="flex justify-between mr-[2%] ml-[2%] ">
                <div className="w-[6%] md:w-[10%] lg:w-[6%] bg-white/0 backdrop-blur-sm">
                    <img className="w-[100%] bg-white/0 backdrop-blur-sm"
                    src="/20250906_022553-removebg-preview.png" alt="20250906_022553-removebg-preview.png"/>
                </div>
                <div className=" w-[70%] lg:w-[50%] xl:w-[40%]">
                    <div className="flex items-center justify-between h-full">
                        <Link to="/">
                            <p className="font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">DASHBOARD</p>
                        </Link>
                        <Link to="/what-we-do">
                        <p className="font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">WHAT WE DO</p>
                        </Link>
                        <Link to="/projects">
                        <p className="font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">PROJECTS</p>
                        </Link>
                        <Link to="contact-us">
                        <p className="font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300">CONTACT US</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

{/* ===========================Second Navbar================================== */}
{/* bg-[rgba(176,180,184,0.5)] */}
        <nav className=" shadow-2xl fixed w-full top-[0%] backdrop-blur-sm z-50 block sm:hidden">
            <div className="flex justify-between ml-[2%] mr-[2%]">
                <div className="w-[18%] bg-white/0 backdrop-blur-sm">
                    <img src="/20250906_022553-removebg-preview.png" alt="20250906_022553-removebg-preview.png"
                    className="w-[100%] bg-white/0 backdrop-blur-sm"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <FaBars
                    onClick={Open}
                    className="text-center text-2xl text-yellow-500 cursor-pointer" 
                    />
                </div>
            </div>
        </nav>

        {sideBarOpen && <SideBar />}
        
        </>
    )
}

export default Navbar;