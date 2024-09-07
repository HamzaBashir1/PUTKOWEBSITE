// "use client"; // This directive is used for Next.js to indicate that this file is client-side

// import React, { useState, useEffect } from 'react';

// const AdminProfile = ({ user }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     photo: null,
//     gender: '',
//     bloodType: '',
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name,
//         email: user.email,
//         photo: user.photo,
//         gender: user.gender,
//         bloodType: user.bloodType,
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="mt-10">
//       <form>
//         <div className="mb-5">
//           <input
//             type="text"
//             placeholder="Full Name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
//               placeholder:text-textColor rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-5">
//           <input
//             type="email"
//             placeholder="Enter Your Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
//               placeholder:text-textColor rounded-md"
//             readOnly
//           />
//         </div>

//         <div className="mb-5">
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
//               placeholder:text-textColor rounded-md"
//           />
//         </div>

//         <div className="mb-5">
//           <input
//             type="text"
//             placeholder="Blood Type"
//             name="bloodType"
//             value={formData.bloodType}
//             onChange={handleInputChange}
//             className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
//               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
//               placeholder:text-textColor rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-5 flex items-center justify-between">
//           <label className="text-headingColor font-bold text-[16px] leading-7">
//             Gender:
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//               className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
//             >
//               <option value="">Select</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </label>
//         </div>

//         <div className="mb-5 flex items-center gap-3">
//           {formData.photo && (
//             <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
//               <img src={formData.photo} alt="Profile Photo" className="w-full rounded-full" />
//             </figure>
//           )}

//           <div className="relative w-[130px] h-[50px]">
//             <input
//               type="file"
//               name="photo"
//               id="customFile"
//               className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"
//             />
//             <label
//               htmlFor="customFile"
//               className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
//             >
//               {formData.photo ? formData.photo.split('/').pop() : 'Upload Photo'}
//             </label>
//           </div>
//         </div>

//         <div className="mt-7">
//           <button
//             type="submit"
//             className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
//           >
//             Update
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AdminProfile;
