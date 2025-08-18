import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";

const SingleVideo = () => {
    const { id } = useParams()
    const [ video, setVideo ] =  useState(null)

    async function fetchSingleVideo(id){
        try {
            const res = await axios({
                method: "get",
                url: `http://localhost:8080/single_video/${id}`
            })
            //const res = await axios.get(`http://localhost:8080/single_image/${id}`)
            setVideo(res?.data?.data)
        } catch (error) {
            console.log("Error in fetch single image", error.message)
        }
    }
    console.log(video)
    useEffect(() => {
        fetchSingleVideo(id)
    }, [id])

    if(!video){
        return <p>Loading...</p>
    }

    return(
        <>
        <div className="">
            <div className="sm:w-[80%] lg:w-[20%] h-[100vh] m-auto mt-[8%] mb-[6%]">
                <video
                className="w-full rounded-lg object-cover"
                controls
                preload="metadata"
                >
                    <source src={video.url} type="video/mp4" />
                    <source src={video.url.replace(".mp4", ".ogg")} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
                                      
        </>
    )
}

export default SingleVideo;