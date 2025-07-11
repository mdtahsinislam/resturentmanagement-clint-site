// import React from 'react';

// const Addfood = () => {
//     return (
//         <div>
//              <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
   
//     <form  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//          <h1 className="text-4xl font-bold"> Add  Food!</h1>
//         <fieldset className="fieldset">

//         <label className="label">Food Name</label>
//           <input type="text" name="foodName" className="input" placeholder="Food Name" />

//           <label className="label">Food Url</label>
//           <input type="url" name="foodUrl" className="input" placeholder="Food Url" />

//           <label className="label">Price</label>
//           <input type="number" name="price" className="input" placeholder="Price" />

           
//           <label className="label">Quantity </label>
//           <input type="text" name="quantity"  className="input" placeholder="Quantity " />

               
//           <label className="label">Food Origin </label>
//           <input type="text" name="food origin"  className="input" placeholder="Food Origin (Country)" />
          

//                   <label className="label">Buyer Name</label>
//           <input type="text" name="buyerName" className="input" placeholder=" Buyer Name " />

//   <textarea placeholder="A short description of the food item" className="textarea textarea-neutral"></textarea>

//           <label className="label">Email</label>
//           <input type="email" name="email"  className="input" placeholder="Email" />
         
          


//           <button className="btn btn-neutral mt-4">Add Item</button> 
//         </fieldset>
//       </div>
//     </form>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Addfood;


import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const Addfood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const foodData = Object.fromEntries(formData.entries());

    // Fill in user name and email
    foodData.buyerName = user?.displayName || 'Unknown';
    foodData.email = user?.email || 'No Email';

    fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(foodData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food added successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch(err => console.error("Add food error:", err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold"  >Add Food!</h1>
            <fieldset className="fieldset">
              <label className="label">Food Name</label>
              <input type="text" name="foodName" className="input" placeholder="Food Name" required />

              <label className="label">Food Url</label>
              <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

              <label className="label">Price</label>
              <input type="number" name="price" className="input" placeholder="Price" required />

              <label className="label">Quantity</label>
              <input type="text" name="quantity" className="input" placeholder="Quantity" required />

              <label className="label">Food Origin</label>
              <input type="text" name="foodOrigin" className="input" placeholder="Food Origin (Country)" required />

              <label className="label">Buyer Name</label>
              <input type="text" name="buyerName" className="input" defaultValue={user?.displayName || ''} readOnly />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" defaultValue={user?.email || ''} readOnly />
              <label className="label">Date</label>
              <input type="datetime-local" name="buyingDate" className="input" required />

              <label className="label">Description</label>
              <textarea name="description" placeholder="Short food description" className="textarea textarea-neutral" required></textarea>

              <button className="btn btn-neutral mt-4">Add Item</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addfood;
