import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import React,{ useContext } from "react";
import { OpenCloseContext } from "../context/opencloseContext";


const SideBar = () => {
    const { Close } = useContext(OpenCloseContext)

    return(
        <>
        <nav className="fixed w-full h-screen z-50 top-0 bg-[rgba(176,180,184,0.5)]">
            <div className="absolute right-0 top-0 w-[60%] h-full bg-black">
            <IoMdClose
            onClick={Close}
            className="absolute top-4 right-4 text-2xl text-yellow-500 cursor-pointer" />

                <hr className="border-t-1 w-full m-auto mt-[20%] mb-[5%] border-gray-300"/>

                    <div className="mt-[20%] h-full">
                        <Link to="/">
                        
                            <p 
                            className="ml-[5%] mb-[10%] font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300"
                            onClick={Close}
                            >
                                DASHBOARD
                            </p>
                        </Link>
                        <Link to="/what-we-do">
                            <p 
                            className="ml-[5%] mb-[10%] font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300"
                            onClick={Close}
                            >
                                WHAT WE DO
                            </p>
                        </Link>
                        <Link to="/projects">
                            <p 
                            className="ml-[5%] mb-[10%] font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300"
                            onClick={Close}
                            >
                                PROJECTS
                            </p>
                        </Link>
                        <Link to="contact-us">
                            <p
                            className="ml-[5%] mb-[10%] font-bold text-yellow-500 hover:text-yellow-300 transition-colors duration-300"
                            onClick={Close}
                            >
                                CONTACT US
                            </p>
                        </Link>
                    </div>
            </div>
            
        </nav>
        </>
    )
}

export default SideBar;