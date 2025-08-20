
//mt-[6%]
const WhatWeDo = () =>{

    const services = [
        {id: 1, srv: "EXPERTS IN RESIDENTIAL"},
        {id: 2, srv: "COMMERCIAL PROJECTS"},
        {id: 3, srv: "ARCHITECTURE"},
        {id: 4, srv: "INTERIOR DESIGN"},
        {id: 5, srv: "RENOVATION"},
        // {id: 1, srv: "Custom Homes and Remodels"},
        // {id: 2, srv: "Condo / Apartment Remodeling"},
        // {id: 3, srv: "Brownstone & Townhouse Renovations"},
        // {id: 4, srv: "Gut Rehabs"},
        // {id: 5, srv: "Private Home New Construction"},
        // {id: 6, srv: "Additions & Extensions"},
        // {id: 7, srv: "Complete Bathroom & Kitchen Remodeling"},
        // {id: 8, srv: "Kitchen & Bathroom Design Services"},
        // {id: 9, srv: "Architectural Floor Plans"},
        // {id: 10, src: "Flooring Installations"}
    ]

    return(
        <>
        <div className="">
            <div className="w-[100%] h-[400px]">
                <img className="absolute w-[100%] h-[400px]" src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" alt=""/>
                <h1 className="relative top-[50%] text-center text-5xl font-bold text-yellow-500 text-shadow-md">WHAT WE DO</h1>
            </div>

            <div className="w-[95%] md:w-[70%] m-auto space-y-4 p-[5%]">
                <p className="text-md font-medium text-gray-500">Singh Construction is a trusted interior construction and remodeling firm specializing in transforming commercial spaces into functional, appealing, and profitable environments for businesses. From office renovations to creating inviting lounges or retail areas, we tailor every project to meet the specific needs and vision of our clients.</p>
                <p className="text-md font-medium text-gray-500">Our work combines the expertise of skilled interior designers, contractors, and architects to deliver results that are both aesthetically pleasing and highly practical. Whether enhancing existing spaces or refining newly constructed buildings, we focus on creating environments that inspire productivity, attract customers, and add long-term value — all while ensuring quality craftsmanship and fair pricing.</p>
            </div>

            <hr className="border-t-1 w-[70%] m-auto border-gray-300"/>

            <div className="w-[95%] md:w-[70%] m-auto p-[5%] space-y-2">
                <h3 className="text-xl font-bold mb-[2%] underline">Service Provided</h3>
                {services.map((serve) => {
                    return(
                        <>
                        <li key={serve.id} className="text-md font-medium text-gray-500">{serve.srv}</li>
                        </>
                    )
                })}
            </div>

            <hr className="border-t-1 w-[70%] m-auto border-gray-300"/>

            <div className="w-[95%] md:w-[70%] m-auto p-[5%] space-y-2">
                <h3 className="text-xl font-bold mb-[2%] underline">Areas Served</h3>
                <p className="text-md font-medium text-gray-500">All Over In INDIA</p>
            </div>

            <hr className="border-t-1 w-[70%] m-auto border-gray-300"/>

            <div className="w-[95%] md:w-[70%] m-auto p-[5%] space-y-2">
                <h3 className="text-xl font-bold mb-[2%] underline">Our Proud Partners</h3>
                <div>
                    Add some Images here...
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatWeDo;