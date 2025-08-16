import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom"



const Projects = () => {
    const [ projectData, setProjectData ] = useState([])


    async function fetchProjectData(){
        try {
            let res = await axios({
                method: "get",
                url: `https://singh-construction-design-bc.onrender.com/projects`
            })
            //console.log(res?.data?.data)
            setProjectData(res?.data?.data)
        } catch (error) {
            console.log("Error: ", error.message)
        }
    }

    useEffect(() => {
        fetchProjectData()
    }, [])

console.log(projectData)
    return(
        <>
        <div className="mt-[6%]">
            <div className="w-[100%] h-[200px]">
                <img className="w-[100%] h-[200px]" src="https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg"/>
                <h1 className="relative top-[-70%] text-center text-4xl lg:text-6xl font-bold text-white text-shadow-md">PROJECTS</h1>
            </div>

            <hr className="border-t-1 w-[70%] m-auto mt-[5%] mb-[5%] border-gray-300"/>

            
            <div className="w-[100%] md:w-[70%] m-auto">
                {projectData.map((project) => {
                    return(
                        <>
                        <h3 className="text-base sm:text-lg  font-bold mb-[2%] text-gray-500">{project.address.street}, {project.address.city}, {project.address.state}, {project.address.pincode}</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {project.image.map((projectImg) => {
                                return(
                                    <>
                                    <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80">
                                        <Link to={`/single_image/${projectImg._id}`}>
                                            <img src={projectImg.url}
                                            className="w-[100%] h-[180px] rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80"
                                            />
                                        </Link>
                                    </div>
                                    </>
                                )
                            })}
                        </div>

                        <hr className="border-t-1 w-[100%] m-auto mt-[5%] mb-[5%] border-gray-300"/>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Projects;