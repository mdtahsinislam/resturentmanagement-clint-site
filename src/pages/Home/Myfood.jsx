// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";

// const Myfood = () => {
//     return (
//         <div>
//             <div className='max-w-7xl mx-auto'>
//                 <div
//         className="h-20 flex items-center justify-center bg-cover bg-center mt-3"
//         style={{ backgroundImage: "url('https://i.imghippo.com/files/WyCQ3571ntg.jpg')" }}
//       >
//         <h1 className="text-white text-3xl font-bold">My Foods</h1>
//       </div>
      
//             </div>

//             </div>
        
//     );
// };

// export default Myfood;


// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { Link } from 'react-router-dom';




const Myfood = () => {
  const { user } = useContext(AuthContext); // get current user
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(` https://resturent-management-server-site.vercel.app/myfoods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyFoods(data))
        .catch(err => console.error('Error fetching my foods:', err));
    }
  }, [user]);

  return (
    <div className='max-w-7xl mx-auto'>
      <div
        className="h-20 flex items-center justify-center bg-cover bg-center mt-3"
        style={{ backgroundImage: "url('https://i.imghippo.com/files/WyCQ3571ntg.jpg')" }}
      >
        <h1 className="text-white text-3xl font-bold">My Foods</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-10">
        {myFoods.map((food) => (
          <div key={food._id} className="card w-80 bg-base-100 shadow-md">
            <figure>
              <img src={food.foodUrl} alt={food.foodName} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.foodName}</h2>
              <p>Buyer: {food.buyerName}</p>
              <p>Price: ${food.price}</p>
              <p>Email: {food.email}</p>
              <p>Quantity: {food.quantity}</p>
              <p className="text-sm text-gray-500">Date: {new Date(food.buyingDate).toLocaleString()}</p>
              <div className="card-actions">
                <Link to={`/updatefood/${food._id}`}>
  <button className="btn btn-primary">Update</button>
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myfood;

// an update button/icon.
// 📝 clicking the update button/icon will redirect to the update page or open a modal. There will be a form that has the food info and an update button. When clicking the update button the product info will be updated. Don’t let other users update your added food items.

