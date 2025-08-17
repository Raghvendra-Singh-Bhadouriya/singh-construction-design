// import React, { useState, useReducer } from "react"
// import axios from "axios";

// const initialState = {
//     street:"",
//     city:"",
//     state:"",
//     pincode:"",
//     country:"India"
// }

// const reducer = () => {
//     switch (dfd) {
//         case value:
    
//         default:
//             break;
//     }
// }

// const UploadDataForm = () => {

//     const [ state, dispatch ] = useReducer(reducer, initialState);
//     const [ files, setFiles ] = useState([]);

//     async function postProjectData(){
//         try {
//             let res = await axios.post(`https://singh-construction-design-bc.onrender.com/add_project`)
//         } catch (error) {
            
//         }
//     }

//     function handleSubmit(e){
//         e.preventDefault();

//         postProjectData()

//     }
//     return(
//         <>
//         <div className="h-[100vh]">
//             <div className="border border-black w-[30%] m-auto mt-[10%] p-[2%]">
//                 <form onSubmit={handleSubmit} className="">
//                     <p className="text-xl font-bold">Address:</p>
//                     <label className="font-bold">Street: </label><br/>
//                     <input
//                     type="text"
//                     placeholder="Enter street"
//                     required
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     onChange={(e) => 
//                         dispatch({

//                         })}
//                     />
//                     <br/>
//                     <label className="font-bold">City: </label><br/>
//                     <input
//                     type="text"
//                     placeholder="Enter city"
//                     required
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     />
//                     <br/>
//                     <label className="font-bold">State: </label><br/>
//                     <input
//                     type="text"
//                     placeholder="Enter state"
//                     required
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     />
//                     <br/>
//                     <label className="font-bold">Pincode: </label><br/>
//                     <input
//                     type="text"
//                     placeholder="Enter pincode"
//                     required
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     />
//                     <br/>
//                     <label className="font-bold">Country: </label><br/>
//                     <input
//                     type="text"
//                     placeholder="Enter country"
//                     required
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     />
//                     <br/>
//                     <label className="font-bold">Images: </label><br/>
//                     <input
//                     type="file"
//                     multiple 
//                     className="border w-[100%] h-[6vh] p-2 rounded-lg "
//                     />
//                     <button 
//                     type="submit"
//                     className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg"
//                     >
//                         Add Project
//                     </button>
//                 </form>
//             </div>
//         </div>
//         </>
//     )
// }

// export default UploadDataForm;


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
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    setFiles(prevFiles => [...prevFiles, ...e.target.files]);
  };

  // Submit form data
  const postProjectData = async () => {
    try {
      const formData = new FormData();

      // Append address fields
      for (let key in state) {
        formData.append(key, state[key]);
      }

      // Append all selected images
      files.forEach((file) => {
        formData.append("images", file);
      });

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
       setFiles([]);
    } catch (error) {
      console.error(error);
      alert("Error uploading project");
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
              multiple accept="image/*"
              onChange={handleFileChange}
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
