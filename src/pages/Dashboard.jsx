import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "../App.css"






const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
    //className="absolute left-[0px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-4xl shadow-lg cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors z-50"
      className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center absolute left-[0px] top-1/2 cursor-pointer z-50 shadow-lg text-4xl"
      onClick={onClick}
    >
      {/* &#8592; */} &lt;
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center absolute right-[0px] top-1/2 cursor-pointer z-50 shadow-lg text-4xl"
      onClick={onClick}
    >
      {/* &#8594; */} &gt;
    </div>
  );
};

const Dashboard = () => {

    const [dashboardSliderData, setDashboardSliderData] = useState([])

    async function fetchdashBoardSliderData(){
        try {
            const res = await axios.get(`/db.json`)
            console.log(res?.data?.dashboardSlider)
            setDashboardSliderData(res?.data?.dashboardSlider)
        } catch (error) {
            console.log("Error: ", error.message)
        }
    }

    useEffect(() => {
        fetchdashBoardSliderData()
    }, [])

    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out", 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    };


    return(
        <>
        <div >
            <div className="w-[100%] m-auto mt-[15%] md:mt-[10%] lg:mt-[6%] ">
                <Slider {...settings}>
                    {dashboardSliderData.map((items) => {
                        return(
                            <>
                            <div className="w-[100%] " key={items.id}>
                                <img className="w-[100%] h-[450px] object-cover" src={items.url}/>
                            </div>
                            </>
                        )
                    })}
                </Slider>
            </div>

            <div className="p-[5%]">
                <div className="">
                    <p className="text-md lg:text-xl font-bold text-gray-500 text-center">Construction • RemodeLing • Flooring • Architectural Designing</p>
                    <div className="w-[30%] m-auto mt-[5%] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80">
                        <img
                        src="/singh_construction_logo.png"
                        className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;