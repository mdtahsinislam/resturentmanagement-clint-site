




import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';


const Singlefood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`)
      .then(res => res.json())
      .then(data => setFood(data));
  }, [id]);

  if (!food) return <div>Loading...</div>;

  return (
    <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-md">
      <img src={food.foodUrl} alt={food.foodName} className="w-full h-64 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-4">{food.foodName}</h2>
      <p className="text-lg text-gray-700 mt-2">Price: ${food.price}</p>
      <p className="text-md text-gray-600 mt-1">Quantity: {food.quantity}</p>
      <p className="text-md text-gray-600 mt-1">Buyer: {food.buyerName}</p>
      <p className="text-md text-gray-600 mt-1">Email: {food.email}</p>
      <p className="text-md text-gray-600 mt-1">Purchase Date: {food.buyingDate}</p>
      <p className="text-md font-semibold mt-2">Purchase Count: {food.purchaseCount || 0}</p>

      {/* <p className="text-md font-semibold mt-2">Purchase Count: 0</p>  */}

      <div className="mt-6">
        <Link to="/foodpurchase">
         <div className="mt-6">
  <button
    className="btn btn-accent"
    onClick={() => {
      fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}/purchase`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(() => {
          // Refresh the food data to reflect updated count
          fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`)
            .then(res => res.json())
            .then(data => {
              setFood(data);
              // After updating count, redirect
              window.location.href = "/foodpurchase";
            });
        })
        .catch(err => console.error("Error updating purchase count:", err));
    }}
  >
    Purchase
  </button>
</div>

        </Link>
      </div>
    </div>
  );
};

export default Singlefood;

// this code is correct not change my code i want if user login or register than show the   Purchase button outher wise not show 

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router';
// import { onAuthStateChanged } from 'firebase/auth';
// //import { auth } from '../firebase/firebase.init'; // adjust path based on your project
// import {auth} from '../../firebase/firebase.init';
// const Singlefood = () => {
//   const { id } = useParams();
//   const [food, setFood] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch food data
//     fetch(`https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`)
//       .then(res => res.json())
//       .then(data => setFood(data));
//   }, [id]);

//   useEffect(() => {
//     // Check user login state
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (!food) return <div>Loading...</div>;

//   return (
//     <div className="p-8 max-w-xl mx-auto bg-white shadow-md rounded-md">
//       <img src={food.foodUrl} alt={food.foodName} className="w-full h-64 object-cover rounded" />
//       <h2 className="text-3xl font-bold mt-4">{food.foodName}</h2>
//       <p className="text-lg text-gray-700 mt-2">Price: ${food.price}</p>
//       <p className="text-md text-gray-600 mt-1">Quantity: {food.quantity}</p>
//       <p className="text-md text-gray-600 mt-1">Buyer: {food.buyerName}</p>
//       <p className="text-md text-gray-600 mt-1">Email: {food.email}</p>
//       <p className="text-md text-gray-600 mt-1">Purchase Date: {food.buyingDate}</p>
//       <p className="text-md font-semibold mt-2">Purchase Count: {food.purchaseCount || 0}</p>

      
//         <div className="mt-6">
          
//             <div className="mt-6">
//               <Link to="/foodpurchase">
//               <button
//                 className="btn btn-accent"
//                 onClick={() => {
//                   fetch(`https://resturent-management-server-site.vercel.app/foodpurchasess/${id}/purchase`, {
//                     method: 'PATCH',
//                     headers: { 'Content-Type': 'application/json' }
//                   })
//                     .then(res => res.json())
//                     .then(() => {
//                       // Refresh the food data to reflect updated count
//                       fetch(`https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`)
//                         .then(res => res.json())
//                         .then(data => {
//                           setFood(data);
//                           // After updating count, redirect
//                           window.location.href = "/foodpurchase";
//                         });
//                     })
//                     .catch(err => console.error("Error updating purchase count:", err));
//                 }}
//               >
//                 Purchase
//               </button>
//                </Link>
//             </div>
         
//         </div>
   
//     </div>
//   );
// };

// export default Singlefood;

