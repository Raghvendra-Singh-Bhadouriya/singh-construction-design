

const ContactUs = () => {


//https://cdn-icons-png.flaticon.com/128/16566/16566143.png
//https://cdn-icons-png.flaticon.com/128/15713/15713420.png
//https://cdn-icons-png.flaticon.com/128/5968/5968534.png
    const socialConnect = [
        {
            id: 1,
            img: "https://cdn-icons-png.flaticon.com/512/3059/3059455.png",
            link1: "mailto:shivam769763@gmail.com",
            link2: "",
            text1: "shivam769763@gmail.com",
            text2: ""
        },
        {
            id: 2,
            img: "https://cdn-icons-png.flaticon.com/512/11771/11771089.png",
            link1: "tel:+917272959586",
            link2: "tel:+918889523621",
            text1: "+91 7272959586",
            text2: "+91 8889523621"
        },
        {
            id: 3,
            img: "https://cdn-icons-png.flaticon.com/512/3817/3817206.png",
            link1: "https://wa.me/7272959586",
            link2: "",
            text1: "7272959586",
            text2: ""
        },
        {
            id:4,
            img:"https://cdn-icons-png.flaticon.com/512/12617/12617671.png",
            link1: "https://www.instagram.com/singh.constructionindore?igsh=MXQ4d256ZTA1NXB1dg==",
            link2: "",
            text1: "singh.constructionindore",
            text2: ""
        }
    ]
    return(
        <>
        <div className="mt-[12%] md:mt-[10%] lg:mt-[6%]">
            <div className="w-[100%] h-[200px]">
                <img className="w-[100%] h-[200px] absolute" src="https://yt3.googleusercontent.com/xCRnLF9mrLmKFQIvCraCIsjXGmrAH8bAMIAKmMPg6ug_AwKgibyeiOBGY7Pqf9qbkSZl0yynaw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" />
                <h1 className="relative top-[40%] text-center text-4xl lg:text-6xl font-bold text-white text-shadow-md">CONTACT US</h1>
            </div>

            <div class="bg-gray-900 text-white p-[6%] shadow-lg text-center">
                <div className="w-[80%] m-auto">
                <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>

                {socialConnect.map((connect) => {
                    return(
                        <>
                        <div class="flex items-center justify-between sm:w-[100%] md:w-[80%] lg-w-[50%] m-auto mb-4">
                            <img src={connect.img}
                            className="w-[10%]"
                            />
                            <div className="felx">
                                <a href={connect.link1} class="text-lg hover:text-yellow-400 transition">{connect.text1}</a>
                                <span>, </span>
                                <a href={connect.link1} class="text-lg hover:text-yellow-400 transition">{connect.text2}</a>
                            </div>
                           
                        </div>
                        </>
                    )
                })}

                {/* <div class="flex items-center justify-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2l3.5 7L6 14l4 7h4l4-7-2.5-2L19 5h2" />
                    </svg>
                    <a href="tel:+918319109574" class="text-lg hover:text-yellow-400 transition">+91 98765 43210</a>
                </div> */}

                {/* <div class="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                    </svg>
                    <a href="mailto:shivam769763@gmail.com" class="text-lg hover:text-yellow-400 transition">shivam769763@gmail.com</a>
               </div> */}
               </div>
            </div>


            
        </div>
        </>
    )
}

export default ContactUs;