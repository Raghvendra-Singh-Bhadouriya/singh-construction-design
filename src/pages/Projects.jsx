import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom"
import Loading from "../components/Loading";



const Projects = () => {
    const [ projectData, setProjectData ] = useState([])
    const [ loading, setLoading ] = useState(false)



    async function fetchProjectData(){
        setLoading(true)
        try {
            let res = await axios({
                method: "get",
                url: `https://singh-construction-design-bc.onrender.com/projects`
            })
            //console.log(res?.data?.data)
            setProjectData(res?.data?.data)
        } catch (error) {
            console.log("Error: ", error.message)
        } finally {
            setLoading(false)
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
                <img className="w-[100%] h-[200px]" src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg"/>
                <h1 className="relative top-[-70%] text-center text-4xl lg:text-6xl font-bold text-white text-shadow-md">PROJECTS</h1>
            </div>

            <hr className="border-t-1 w-[70%] m-auto mt-[5%] mb-[5%] border-gray-300"/>

            
            <div className="w-[100%] md:w-[70%] m-auto">
                {loading ? (
                    <Loading />
                    ) : (
                    <>
                    {projectData.map((project) => {
                        return(
                        <>
                            <h3 className="text-base sm:text-lg  font-bold mb-[2%] text-gray-500">
                                {project.address.street}, {project.address.city}, {project.address.state}, {project.address.pincode}
                            </h3>

                            {/* Images */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                                {project?.image?.map((projectImg) => {
                                    return(
                                    <>
                                        <div key={projectImg._id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80">
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

                            {/* Videos */}
                            <p className="text-gray-500 mt-[5%] mb-[1%] font-bold">Videos</p>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                                {project?.video?.map((projectVdo) => (
                                    <div
                                    key={projectVdo._id}
                                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80 rounded-lg"
                                    >
                                        <Link to={`/single_video/${projectVdo._id}`}>
                                            <video
                                                className="w-full rounded-lg object-cover"
                                                //controls
                                                preload="metadata"
                                            >
                                                <source src={projectVdo.url} type="video/mp4" />
                                                <source src={projectVdo.url.replace(".mp4", ".ogg")} type="video/ogg" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </Link>
                                    </div>
                                ))}
                            </div>
  
                            
                            <hr className="border-t-1 w-[100%] m-auto mt-[5%] mb-[5%] border-gray-300"/>
                        </>
                        )
                    })}
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Projects;

// https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg  =>  Wooden ply image.
// https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg  =>  Stone wall image.
// https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg  =>  Bricks wall image.
// https://images.pexels.com/photos/268966/pexels-photo-268966.jpeg