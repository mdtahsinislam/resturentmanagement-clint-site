// import React from 'react';

// const Topfoodcard = () => {
//     return (
//         <div>
//                <div className="card bg-base-100 w-96 shadow-sm">
//   <figure className="px-10 pt-10">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes"
//       className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">foodUrl</h2>
//     <p>foodName</p>
//     <p>price</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Details</button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Topfoodcard;

//////card
// import React from 'react';
// import { Link } from 'react-router';

// const Topfoodcard = ({ food }) => {
//     const { foodUrl, foodName, price } = food;

//     return (
//         <div className="card bg-base-100 w-96 shadow-sm">
//             <figure className="px-10 pt-10">
//                 <img
//                     src={foodUrl}
//                     alt={foodName}
//                     className="rounded-xl h-48 w-full object-cover" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">Food Name: {foodName}</h2>
//                 <p className="text-lg text-gray-700 font-semibold">Price: ${price}</p>
//                 <div className="card-actions">

//         <Link to="/singlefood"><button className="btn btn-primary">Details</button></Link>

                   
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Topfoodcard;



// Topfoodcard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ ঠিক import

const Topfoodcard = ({ food }) => {
  const { _id, foodUrl, foodName, price } = food;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={foodUrl}
          alt={foodName}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Food Name: {foodName}</h2>
        <p className="text-lg text-gray-700 font-semibold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/singlefood/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topfoodcard;


