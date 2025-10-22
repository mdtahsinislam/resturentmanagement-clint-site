// import React from 'react';
// import Swal from 'sweetalert2';

// const Foodpurchase = () => {


// const handelAddfoodpurchase = (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const formData = new FormData(form);
//   const foodData = Object.fromEntries(formData.entries());
//   console.log(foodData);

//   fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(foodData)
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log('After adding food data', data);
//       if (data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Your purchase has been saved!",
//           showConfirmButton: false,
//           timer: 1500
//         });
//         form.reset();
//       }
//     })
//     .catch(err => {
//       console.error('Error:', err);
//     });
// };


    
//     return (
//         <div>
           

//             <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
   
//     <form onSubmit={handelAddfoodpurchase} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//          <h1 className="text-4xl font-bold">Food Purchase!</h1>
//         <fieldset className="fieldset">

//         <label className="label">Food Name</label>
//           <input type="text" name="foodName" className="input" placeholder="Food Name" />

//           <label className="label">Food Url</label>
//           <input type="url" name="foodUrl" className="input" placeholder="Food Url" />

//           <label className="label">Price</label>
//           <input type="number" name="price" className="input" placeholder="Price" />

           
//           <label className="label">Quantity </label>
//           <input type="text" name="quantity"  className="input" placeholder="Quantity " />

                        

//                   <label className="label">Buyer Name</label>
//           <input type="text" name="buyerName" className="input" placeholder=" Buyer Name " />



//           <label className="label">Email</label>
//           <input type="email" name="email"  className="input" placeholder="Email" />
         
//            <label className="label">Buying Date </label>
//            <input type="datetime-local" name="buyingDate" className="input" />


//           <button className="btn btn-neutral mt-4">Purchase</button> 
//         </fieldset>
//       </div>
//     </form>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Foodpurchase;






import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const Foodpurchase = () => {
  const { user } = useContext(AuthContext);

  // const handelAddfoodpurchase = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const foodData = Object.fromEntries(formData.entries());

  //   // Inject logged-in user data manually (in case form field is tampered)
  //   foodData.buyerName = user?.displayName || 'Unknown';
  //   foodData.email = user?.email || 'No Email';

  //   console.log(foodData);

  //   fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(foodData)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.insertedId) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Your purchase has been saved!",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         form.reset();
  //       }
  //     })
  //     .catch(err => {
  //       console.error('Error:', err);
  //     });
  // };

  const handelAddfoodpurchase = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const foodData = Object.fromEntries(formData.entries());

  // Inject logged-in user data
  foodData.buyerName = user?.displayName || 'Unknown';
  foodData.email = user?.email || 'No Email';

  fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(foodData)
  })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        let message = "Your purchase has been saved!";

        if (data.emailSent) {
          message += " ✅ Confirmation email sent!";
        } else {
          message += " ⚠️ Email notification failed!";
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 2000
        });

        form.reset();
      }
    })
    .catch(err => {
      console.error('Error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Failed to add purchase',
        text: err.message || 'Please try again',
      });
    });
};

  return (
    <div className="hero bg-base-200 min-h-screen mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handelAddfoodpurchase} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Food Purchase!</h1>
            <fieldset className="fieldset">
              <label className="label">Food Name</label>
              <input type="text" name="foodName" className="input" placeholder="Food Name" required />

              <label className="label">Food Url</label>
              <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

              <label className="label">Price</label>
              <input type="number" name="price" className="input" placeholder="Price" required />

              <label className="label">Quantity</label>
              <input type="text" name="quantity" className="input" placeholder="Quantity" required />

              <label className="label">Buyer Name</label>
              <input
                type="text"
                name="buyerName"
                className="input"
                value={user?.displayName || ''}
                readOnly
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                value={user?.email || ''}
                readOnly
              />

              <label className="label">Buying Date</label>
              <input type="datetime-local" name="buyingDate" className="input" required />

              <button className="btn btn-neutral mt-4">Purchase</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Foodpurchase;




