// // import React from 'react';
// // import { FaUserCircle, FaUtensils } from 'react-icons/fa';
// // import { Link } from 'react-router';

// // const NavBar = () => {
// //     return (
// //         <div className=''>
// //             {/* bg-[#10898d] */}
// //             <div className="navbar bg-[#10898d] shadow-lg flex justify-between">
// //                 <div className='flex justify-between items-center w-full px-4 py-2'>

// //                     <div className='flex items-center'>
// //                         <img  className='w-15 h-15' src="https://i.ibb.co/6cGPgK0z/IMG-20250708-213512.jpg    " alt="" />
// //                         <h1 className='text-white font-extrabold '> Restaurant Management </h1>
// //                     </div>

// //                     <div className='text-white  font-extrabold space-x-6 flex'>
// //                        <Link to='/'><button className='btn btn-ghost'><h1 className=''>Home</h1></button></Link> 
// //                      <Link to="/allfoods"><button className='btn btn-ghost'><h1>All Foods</h1></button></Link>
// //                   <Link to="/singlefood"><button className='btn btn-ghost'><h1>Single Food</h1></button></Link>
// //                   <Link to="/foodpurchase"><button className='btn btn-ghost'><h1>Food Purchase</h1></button></Link>         
// //                     <Link to="/gallery"><button className='btn btn-ghost'><h1>Gallery</h1></button></Link>   
                     
// //                     </div>

                    

// //                     <div className='flex items-center gap-2'>
// //                         {/* <FaUserCircle size={40} color="#fff" /> */}
   


// //       <div className="dropdown dropdown-end">
// //   <div tabIndex={0} role="button" className="rounded-field">
// //    <FaUserCircle size={40} color="#fff" />  {/* show profile image */}
// //   </div>
// //   <ul
// //     tabIndex={0}
// //     className="menu dropdown-content bg-base-200 text-black font-bold rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
// //   >
// //     <li><Link to="/myfood">My Food</Link></li>
// //     <li><Link to="/addfood">Add Food</Link></li>
// //     <li><Link to="/myorder">My Order</Link></li>
// //   </ul>
// // </div>

// //                        <Link to="/login"> <button className="btn btn-neutral">Login</button></Link>
// //                         <Link to="/register"> <button className="btn btn-neutral">Register</button></Link>
                       
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default NavBar;



// import React, { useContext } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log('User logged out');
//       })
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="navbar bg-[#10898d] shadow-lg px-4 py-2 justify-between">
//       <div className="flex items-center gap-4">
//         <img className='w-14 h-14' src="https://i.ibb.co/6cGPgK0z/IMG-20250708-213512.jpg" alt="Logo" />
//         <h1 className="text-white font-extrabold">Restaurant Management</h1>
//       </div>

//       <div className="text-white font-extrabold space-x-6">
//         <Link to="/"><button className="btn btn-ghost">Home</button></Link>
//         <Link to="/allfoods"><button className="btn btn-ghost">All Foods</button></Link>
//         <Link to="/singlefood"><button className="btn btn-ghost">Single Food</button></Link>
//         <Link to="/foodpurchase"><button className="btn btn-ghost">Food Purchase</button></Link>
//         <Link to="/gallery"><button className="btn btn-ghost">Gallery</button></Link>
//       </div>

//       <div className="flex items-center gap-2">
//         {user ? (
//           <>
//             <div className="dropdown dropdown-end">
//              <div className='flex gap-1.5'>
//                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                 <div className="w-15 rounded-full">
//                   <img src={user.photoURL || 'https://i.ibb.co/VB4D0sH/user.png'} alt="User" />
//                 </div>
                
//               </div>
//               <div>
//                  <button className='btn btn-neutral ' onClick={handleLogOut}>Logout</button>
//               </div>
//              </div>
//               <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
               
//                 <li><Link to="/addfood">Add Food</Link></li>
//                  <li><Link to="/myfood">My Food</Link></li>
//                 <li><Link to="/myorder">My Order</Link></li>
               
//               </ul>
//             </div>
//           </>
//         ) : (
//           <>
//             <Link to="/login"><button className="btn btn-neutral">Login</button></Link>
//             <Link to="/register"><button className="btn btn-neutral">Register</button></Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
// //please do this responsive for any device

import React, { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('User logged out'))
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-[#10898d] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <img className="w-12 h-12" src="https://i.ibb.co/6cGPgK0z/IMG-20250708-213512.jpg" alt="Logo" />
          <h1 className="text-white font-bold text-xl">Restaurant Management</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="text-white font-semibold md:flex md:space-x-6 mt-4 md:mt-0">
            <Link to="/" className="block px-2 py-1 hover:text-gray-300">Home</Link>
            <Link to="/allfoods" className="block px-2 py-1 hover:text-gray-300">All Foods</Link>
            <Link to="/singlefood" className="block px-2 py-1 hover:text-gray-300">Single Food</Link>
            {/* <Link to="/foodpurchase" className="block px-2 py-1 hover:text-gray-300">Food Purchase</Link> */}
            {/* {user && (
  <Link to="/foodpurchase" className="block px-2 py-1 hover:text-gray-300">Food Purchase</Link>
)} */}

            <Link to="/gallery" className="block px-2 py-1 hover:text-gray-300">Gallery</Link>
          </div>

          {/* Auth/User */}
          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:flex-row items-center gap-3">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL || 'https://i.ibb.co/VB4D0sH/user.png'} alt="User" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold"
                  >
                    <li><Link to="/addfood">Add Food</Link></li>
                    <li><Link to="/myfood">My Food</Link></li>
                    <li><Link to="/myorder">My Order</Link></li>
                  </ul>
                </div>
                <button onClick={handleLogOut} className="btn btn-sm btn-neutral">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login"><button className="btn btn-sm btn-neutral">Login</button></Link>
                <Link to="/register"><button className="btn btn-sm btn-neutral">Register</button></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// this code is correct not change my code i want if user login or register than show the  Food Purchase outher wise not show 