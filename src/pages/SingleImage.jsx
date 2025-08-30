import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";

const SingleImage = () => {
    const { id } = useParams()
    const [ image, setImage ] =  useState(null)

    async function fetchSingleImage(id){
        try {
            const res = await axios({
                method: "get",
                url: `https://singh-construction-design-bc.onrender.com/single_image/${id}`
            })
            //const res = await axios.get(`http://localhost:8080/single_image/${id}`)
            setImage(res?.data?.data)
        } catch (error) {
            console.log("Error in fetch single image", error.message)
        }
    }
console.log(image)
    useEffect(() => {
        fetchSingleImage(id)
    }, [id])

    if(!image){
        return <p>Loading...</p>
    }

    return(
        <>
        <div className="h-[90vh]">
            <div className="w-[100%] m-auto mt-[30%] md:mt-[50%] lg:mt-[8%] mb-[6%]">
                <img className="w-[100%] h-[500px] lg:w-auto lg:m-auto rounded-xl" src={image.url} alt="single image"/> 
            </div>
        </div>
        </>
    )
}

export default SingleImage;