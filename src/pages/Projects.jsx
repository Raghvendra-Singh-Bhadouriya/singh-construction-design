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

// if(loading){
//    return <Loading/>
// }
    return(
        <>
        <div className="mt-[6%]">
            <div className="w-[100%] h-[200px]">
                <img className="w-[100%] h-[200px]" src="https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg"/>
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
                    </>
                )}
            </div>
        </div>
        </>
    )
}

export default Projects;


// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Projects = () => {
//   const [projectData, setProjectData] = useState([]);
//   const [loading, setLoading] = useState(true); // ✅ new loading state

//   async function fetchProjectData() {
//     try {
//       let res = await axios.get(
//         `https://singh-construction-design-bc.onrender.com/projects`
//       );
//       setProjectData(res?.data?.data || []);
//     } catch (error) {
//       console.log("Error: ", error.message);
//     } finally {
//       setLoading(false); // ✅ stop loading after fetch
//     }
//   }

//   useEffect(() => {
//     fetchProjectData();
//   }, []);

//   return (
//     <>
//       <div className="mt-[6%]">
//         {/* Banner */}
//         <div className="w-[100%] h-[200px] relative">
//           <img
//             className="w-[100%] h-[200px] object-cover"
//             src="https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg"
//             alt="banner"
//           />
//           <h1 className="absolute inset-0 flex items-center justify-center text-4xl lg:text-6xl font-bold text-white text-shadow-md">
//             PROJECTS
//           </h1>
//         </div>

//         <hr className="border-t-1 w-[70%] m-auto mt-[5%] mb-[5%] border-gray-300" />

//         <div className="w-[100%] md:w-[70%] m-auto">
//           {/* ✅ Loading Skeleton */}
//           {loading && (
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
//               {Array.from({ length: 10 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="shadow rounded-lg p-2 animate-pulse bg-gray-300 h-[180px]"
//                 ></div>
//               ))}
//             </div>
//           )}

//           {/* ✅ Actual Data */}
//           {!loading &&
//             projectData.map((project, i) => (
//               <div key={i}>
//                 <h3 className="text-base sm:text-lg font-bold mb-[2%] text-gray-500">
//                   {project.address.street}, {project.address.city},{" "}
//                   {project.address.state}, {project.address.pincode}
//                 </h3>

//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
//                   {project.image.map((projectImg) => (
//                     <div
//                       key={projectImg._id}
//                       className="shadow rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                     >
//                       <Link to={`/single_image/${projectImg._id}`}>
//                         <img
//                           src={projectImg.url}
//                           alt="project"
//                           className="w-full h-[180px] object-cover rounded-lg"
//                         />
//                       </Link>
//                     </div>
//                   ))}
//                 </div>

//                 <hr className="border-t-1 w-[100%] m-auto mt-[5%] mb-[5%] border-gray-300" />
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;
