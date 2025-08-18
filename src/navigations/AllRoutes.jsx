import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import WhatWeDo from "../pages/WhatWeDo";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Projects";
import SingleImage from "../pages/SingleImage";
import UploadDataForm from "../pages/UploadDataForm";
import SingleVideo from "../pages/SingleVideo";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/single_image/:id" element={<SingleImage/>} />
            <Route path="/single_video/:id" element={<SingleVideo/>} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/upload_project_data" element={<UploadDataForm/>} />
        </Routes>
    )
}

export default AllRoutes;