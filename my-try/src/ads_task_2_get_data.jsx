// import React, { useState } from 'react';


// function Details() {
//     const [formatData, setFormatData] = useState({
//         Firstname: '',
//         Lastname: '',
//         Email: '',
//         Number: ''
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormatData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data Submitted:', formatData);

//         // Clear the form after submission
//         setFormatData({
//             Firstname: '',
//             Lastname: '',
//             Email: '',
//             Number: ''
//         });
//     };

//     return (
//         <div>
//             <h1>Fill your Details</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>First Name</label><br />
//                 <input
//                     type="text"
//                     name="Firstname"
//                     placeholder="Enter your first name"
//                     value={formatData.Firstname}
//                     onChange={handleChange}
//                 /><br />

//                 <label>Last Name</label><br />
//                 <input
//                     type="text"
//                     name="Lastname"
//                     placeholder="Enter your last name"
//                     value={formatData.Lastname}
//                     onChange={handleChange}
//                 /><br />

//                 <label>Email</label><br />
//                 <input
//                     type="email"
//                     name="Email"
//                     placeholder="Enter your email address"
//                     value={formatData.Email}
//                     onChange={handleChange}
//                 /><br />

//                 <label>Number</label><br />
//                 <input
//                     type="tel"
//                     name="Number"
//                     placeholder="Enter your mobile number"
//                     value={formatData.Number}
//                     onChange={handleChange}
//                     required

//                 /><br /><br />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GetUserCardData() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to greeting page with formData
    navigate("/greeting", { state: formData });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create User Card
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Generate Greeting Card
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetUserCardData;
