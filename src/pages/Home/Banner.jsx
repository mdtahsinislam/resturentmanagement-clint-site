// import React, { useState } from 'react';
// import { Link } from 'react-router';

// const Banner = () => {
//   const [activeItem, setActiveItem] = useState('item1'); // State to track active carousel item

//   const handleRadioChange = (itemId) => {
//     setActiveItem(itemId);
//     // Manually trigger the carousel navigation since we are not using href directly on the radio input
//     document.getElementById(itemId).scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {/* Carousel */}
//       <div className="carousel w-full h-[600px]">
//         <div id="item1" className="carousel-item w-full ">
//           <img
//             src="https://i.ibb.co/B50dV5xs/food1.jpg"
//             className="w-full relative"
//             alt="Carousel Item 1" // Add alt text for accessibility
//              />
//              <div className='absolute  items-center ml-96 mt-36 text-4xl text-white gap-3.5 '>
//                 <h1>Welcome to Foodie Palace 🍽️</h1>
//                 <p className='mb-2'>Effortlessly manage menus, staff, and customer orders with our all-in-one restaurant system..</p>
            

//               <Link to="/allfoods"><button className="bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-2 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
//                Explore our Restaurant
//               </button></Link>

//                 </div> 
//         </div>
//         <div id="item2" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/yc549CGt/food2.jpg"
//             className="w-full"
//             alt="Carousel Item 2"
//           />
          
//         </div>
//         <div id="item3" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/zW3fCZG4/food3.jpg"
//             className="w-full"
//             alt="Carousel Item 3"
//           />
//         </div>
//         <div id="item4" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/CK2m0WQJ/13.jpg"
//             className="w-full"
//             alt="Carousel Item 4"
//           />
//         </div>
//       </div>

//       {/* Navigation using styled radio buttons */}
//       <div className="flex justify-center gap-2 py-4">
//         <input
//           type="radio"
//           name="carousel-radio" // All radio buttons in a group should have the same name
//           className="radio radio-success bg-white cursor-pointer"
//           checked={activeItem === 'item1'}
//           onChange={() => handleRadioChange('item1')}
//         />
//         <input
//           type="radio"
//           name="carousel-radio"
//           className="radio radio-success bg-white cursor-pointer"
//           checked={activeItem === 'item2'}
//           onChange={() => handleRadioChange('item2')}
//         />
//         <input
//           type="radio"
//           name="carousel-radio"
//           className="radio radio-success bg-white cursor-pointer"
//           checked={activeItem === 'item3'}
//           onChange={() => handleRadioChange('item3')}
//         />
//         <input
//           type="radio"
//           name="carousel-radio"
//           className="radio radio-success bg-white cursor-pointer"
//           checked={activeItem === 'item4'}
//           onChange={() => handleRadioChange('item4')}
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;  



//please do this responsive for any device







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // fixed import

// const Banner = () => {
//   const [activeItem, setActiveItem] = useState('item1');

//   const handleRadioChange = (itemId) => {
//     setActiveItem(itemId);
//     document.getElementById(itemId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="mt-20">
//       {/* Carousel */}
//       <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        
//         <div id="item1" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/B50dV5xs/food1.jpg"
//             className="w-full h-full object-cover"
//             alt="Carousel Item 1"
//           />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
//             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
//               Welcome to Foodie Palace 🍽️
//             </h1>
//             <p className="text-sm sm:text-base mb-4 max-w-md mx-auto">
//               Effortlessly manage menus, staff, and customer orders with our all-in-one restaurant system..
//             </p>
//             <Link to="/allfoods">
//               <button className="bg-gradient-to-r from-yellow-400 to-red-500 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
//                 Explore our Restaurant Food
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div id="item2" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/yc549CGt/food2.jpg"
//             className="w-full h-full object-cover"
//             alt="Carousel Item 2"
//           />
//         </div>

//         {/* Slide 3 */}
//         <div id="item3" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/zW3fCZG4/food3.jpg"
//             className="w-full h-full object-cover"
//             alt="Carousel Item 3"
//           />
//         </div>

//         {/* Slide 4 */}
//         <div id="item4" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/CK2m0WQJ/13.jpg"
//             className="w-full h-full object-cover"
//             alt="Carousel Item 4"
//           />
//         </div>
//       </div>

//       {/* Carousel Navigation */}
//       <div className="flex justify-center gap-2 py-4">
//         {['item1', 'item2', 'item3', 'item4'].map((itemId) => (
//           <input
//             key={itemId}
//             type="radio"
//             name="carousel-radio"
//             className="radio radio-success bg-white cursor-pointer"
//             checked={activeItem === itemId}
//             onChange={() => handleRadioChange(itemId)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;






import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // fixed import

const Banner = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const handleRadioChange = (itemId) => {
    setActiveItem(itemId);
    document.getElementById(itemId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-20">
      {/* Carousel */}
      <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/B50dV5xs/food1.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 1"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Welcome to Foodie Palace 🍽️
            </h1>
            <p className="text-sm sm:text-base mb-4 max-w-md mx-auto">
              Effortlessly manage menus, staff, and customer orders with our all-in-one restaurant system..
            </p>
            <Link to="/allfoods">
              <button className="bg-gradient-to-r from-yellow-400 to-red-500 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
                Explore our Restaurant Food
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/yc549CGt/food2.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 2"
          />
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/zW3fCZG4/food3.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 3"
          />
        </div>

        {/* Slide 4 */}
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/CK2m0WQJ/13.jpg"
            className="w-full h-full object-cover"
            alt="Carousel Item 4"
          />
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center gap-2 py-4">
        {['item1', 'item2', 'item3', 'item4'].map((itemId) => (
          <input
            key={itemId}
            type="radio"
            name="carousel-radio"
            className="radio radio-success bg-white cursor-pointer"
            checked={activeItem === itemId}
            onChange={() => handleRadioChange(itemId)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;