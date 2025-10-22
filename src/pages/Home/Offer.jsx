// import React from 'react';

// const Offer = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-gray-100 py-12">
//             <section className="max-w-7xl mx-auto h-[300px] flex items-center justify-center relative rounded-lg shadow-lg overflow-hidden">
//                 {/* Background Image for the offer section */}
//                 <img
//                     src="https://i.ibb.co/sdP4hDr3/friday.jpg"
//                     alt="Friday Special Offer Background"
//                     className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75" // Darken image slightly for text readability
//                 />

//                 {/* Content Overlay */}
//                 <div className="relative z-10 text-white text-center p-6 md:p-8">
//                            <p className="text-4xl md:text-4xl text-pink-500 font-bold uppercase tracking-wider mb-2">
//   Exclusive <span className="text-[#FED172]">$50% OFF 🔥🎉</span> on Your First Order!
// </p>


//                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
//                         Fantastic Fridays are Here!
//                     </h2>
//                     <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
//                         Indulge in our exquisite Friday Dinner Special – perfect for unwinding after a long week.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
//                             View Menu
//                         </button>
//                         <button className="bg-white text-orange-600 hover:bg-gray-200 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
//                             Reserve a Table
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Offer;


import React from 'react';

const Offer = () => {
  return (
    <div className="relative w-full overflow-hidden text-base-content py-12">
      <section className="max-w-7xl mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center relative rounded-lg shadow-lg overflow-hidden px-4 sm:px-6">
        {/* Background Image */}
        <img
          src="https://i.ibb.co/sdP4hDr3/friday.jpg"
          alt="Friday Special Offer Background"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-75"
        />

        {/* Content Overlay */}
        <div className="relative z-10 text-white text-center p-4 sm:p-6 md:p-8">
          <p className="text-2xl sm:text-3xl md:text-4xl text-pink-500 font-bold uppercase tracking-wider mb-3">
            Exclusive <span className="text-[#FED172]">$50% OFF 🔥🎉</span> on Your First Order!
          </p>

          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Fantastic Fridays are Here!
          </h2>

          <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6">
            Indulge in our exquisite Friday Dinner Special – perfect for unwinding after a long week.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              View Menu
            </button>
            <button className="bg-white text-orange-600 hover:bg-gray-200 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Reserve a Table
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
