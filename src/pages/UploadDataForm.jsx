import React, { useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  street: "",
  city: "",
  state: "",
  pincode: "",
  country: "India"
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const UploadDataForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);


  const handleImageChange = (e) => {
  const filesArray = Array.from(e.target.files);
  setImages(prev => [...prev, ...filesArray]);
};

const handleVideoChange = (e) => {
  const filesArray = Array.from(e.target.files);
  setVideos(prev => [...prev, ...filesArray]);
};

  // Submit form data
  const postProjectData = async () => {
    try {
      const formData = new FormData();

      // Append address fields
      Object.keys(state).forEach((key) => {
        formData.append(key, state[key]);
      });

      images.forEach(file => formData.append("images", file));
      videos.forEach(file => formData.append("videos", file));

      const res = await axios.post(
        "https://singh-construction-design-bc.onrender.com/add_project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

       console.log("Response:", res.data);
       console.log("form", formData)
       alert("Project uploaded successfully!");
       dispatch({ type: "RESET" });

       setImages([]);
       setVideos([]);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error("Backend error:", error.response.data);
        alert(`Error: ${error.response.data.message || 'Server Error'}`);
      } else {
        console.error(error);
        alert("Error uploading project");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProjectData();
  };

  return (
    <div className="h-[100vh] flex justify-center items-start mt-[10%]">
      <div className="border border-black w-[30%] p-[2%] rounded-lg">
        <form onSubmit={handleSubmit}>
          <p className="text-xl font-bold mb-2">Address:</p>

          {["street", "city", "state", "pincode", "country"].map((field) => (
            <div key={field} className="mb-2">
              <label className="font-bold capitalize">{field}:</label>
              <input
                type="text"
                placeholder={`Enter ${field}`}
                required
                value={state[field]}
                onChange={(e) =>
                  dispatch({ type: "SET_FIELD", field, value: e.target.value })
                }
                className="border w-full h-[6vh] p-2 rounded-lg"
              />
            </div>
          ))}

          <div className="mb-2">
            <label className="font-bold">Images:</label>
            <input
              type="file"
              multiple 
              accept="image/*"
              onChange={handleImageChange}
              className="border w-full h-[6vh] p-2 rounded-lg"
            />
            <label className="font-bold">Videos:</label>
            <input 
              type="file"
              multiple 
              accept="video/*"
              onChange={handleVideoChange}
              className="border w-full h-[6vh] p-2 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDataForm;