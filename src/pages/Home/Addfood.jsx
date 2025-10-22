// // // import React from 'react';

// // // const Addfood = () => {
// // //     return (
// // //         <div>
// // //              <div className="hero bg-base-200 min-h-screen">
// // //   <div className="hero-content flex-col lg:flex-row-reverse">
   
// // //     <form  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// // //       <div className="card-body">
// // //          <h1 className="text-4xl font-bold"> Add  Food!</h1>
// // //         <fieldset className="fieldset">

// // //         <label className="label">Food Name</label>
// // //           <input type="text" name="foodName" className="input" placeholder="Food Name" />

// // //           <label className="label">Food Url</label>
// // //           <input type="url" name="foodUrl" className="input" placeholder="Food Url" />

// // //           <label className="label">Price</label>
// // //           <input type="number" name="price" className="input" placeholder="Price" />

           
// // //           <label className="label">Quantity </label>
// // //           <input type="text" name="quantity"  className="input" placeholder="Quantity " />

               
// // //           <label className="label">Food Origin </label>
// // //           <input type="text" name="food origin"  className="input" placeholder="Food Origin (Country)" />
          

// // //                   <label className="label">Buyer Name</label>
// // //           <input type="text" name="buyerName" className="input" placeholder=" Buyer Name " />

// // //   <textarea placeholder="A short description of the food item" className="textarea textarea-neutral"></textarea>

// // //           <label className="label">Email</label>
// // //           <input type="email" name="email"  className="input" placeholder="Email" />
         
          


// // //           <button className="btn btn-neutral mt-4">Add Item</button> 
// // //         </fieldset>
// // //       </div>
// // //     </form>
// // //   </div>
// // // </div>
// // //         </div>
// // //     );
// // // };

// // // export default Addfood;


// // // import React, { useContext } from 'react';
// // // import Swal from 'sweetalert2';
// // // import { AuthContext } from '../../contexts/AuthContext';

// // // const Addfood = () => {
// // //   const { user } = useContext(AuthContext);

// // //   // const handleAddFood = (e) => {
// // //   //   e.preventDefault();
// // //   //   const form = e.target;
// // //   //   const formData = new FormData(form);
// // //   //   const foodData = Object.fromEntries(formData.entries());

// // //   //   // Fill in user name and email
// // //   //   foodData.buyerName = user?.displayName || 'Unknown';
// // //   //   foodData.email = user?.email || 'No Email';

// // //   //   fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess', {
// // //   //     method: 'POST',
// // //   //     headers: { 'Content-Type': 'application/json' },
// // //   //     body: JSON.stringify(foodData)
// // //   //   })
// // //   //     .then(res => res.json())
// // //   //     .then(data => {
// // //   //       if (data.insertedId) {
// // //   //         Swal.fire({
// // //   //           position: "top-end",
// // //   //           icon: "success",
// // //   //           title: "Food added successfully!",
// // //   //           showConfirmButton: false,
// // //   //           timer: 1500
// // //   //         });
// // //   //         form.reset();
// // //   //       }
// // //   //     })
// // //   //     .catch(err => console.error("Add food error:", err));
// // //   // };

// // //   //import Swal from 'sweetalert2';

// // // // const handleAddFood = (e) => {
// // // //   e.preventDefault();
// // // //   const form = e.target;
// // // //   const formData = new FormData(form);
// // // //   const foodData = Object.fromEntries(formData.entries());

// // // //   foodData.buyerName = user?.displayName || 'Unknown';
// // // //   foodData.email = user?.email || 'No Email';

// // // //   // 1️⃣ Save to DB
// // // //   fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// // // //     method: 'POST',
// // // //     headers: { 'Content-Type': 'application/json' },
// // // //     body: JSON.stringify(foodData)
// // // //   })
// // // //     .then(res => res.json())
// // // //     .then(data => {
// // // //       if (data.insertedId) {
// // // //         // 2️⃣ Show toast alert
// // // //         Swal.fire({
// // // //           position: 'top-end',
// // // //           icon: 'success',
// // // //           title: 'Food Card added successfully! From : mdtahsinislam13@gmail.com To : userlogin@gmail,com',
// // // //           showConfirmButton: false,
// // // //           timer: 1500
// // // //         });
// // // //         form.reset();

// // // //         // 3️⃣ Send Email
// // // //         fetch('https://resturent-management-server-site.vercel.app/send-email', {
// // // //           method: 'POST',
// // // //           headers: { 'Content-Type': 'application/json' },
// // // //           body: JSON.stringify({
// // // //             to: foodData.email, // logged-in user email
// // // //             subject: 'Food Added Successfully!',
// // // //             text: `Hi ${foodData.buyerName},\n\nYour food "${foodData.foodName}" has been added successfully.\n\nThanks, Restaurant Management`
// // // //           })
// // // //         });
// // // //       }
// // // //     })
// // // //     .catch(err => console.error('Add food error:', err));
// // // // };


// // // // const handleAddFood = (e) => {
// // // //   e.preventDefault();
// // // //   const form = e.target;
// // // //   const formData = new FormData(form);
// // // //   const foodData = Object.fromEntries(formData.entries());

// // // //   foodData.buyerName = user?.displayName || 'Unknown';
// // // //   foodData.email = user?.email || 'No Email';

// // // //   // 1️⃣ Save to DB
// // // //   fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// // // //     method: 'POST',
// // // //     headers: { 'Content-Type': 'application/json' },
// // // //     body: JSON.stringify(foodData)
// // // //   })
// // // //     .then(res => res.json())
// // // //     .then(data => {
// // // //       if (data.insertedId) {
// // // //         // 2️⃣ Show success alert
// // // //         Swal.fire({
// // // //           position: 'top-end',
// // // //           icon: 'success',
// // // //           title: 'Food added successfully!',
// // // //           showConfirmButton: false,
// // // //           timer: 1500
// // // //         });
// // // //         form.reset();

// // // //         // 3️⃣ Send Email with proper error handling
// // // //         const emailData = {
// // // //           to: user?.email, // Use logged-in user's email
// // // //           subject: 'Food Added Successfully!',
// // // //           text: `Hi ${foodData.buyerName},\n\nYour food "${foodData.foodName}" has been added successfully.\n\nPrice: $${foodData.price}\nQuantity: ${foodData.quantity}\n\nThanks,\nRestaurant Management Team`
// // // //         };

// // // //         fetch('https://resturent-management-server-site.vercel.app/send-email', {
// // // //           method: 'POST',
// // // //           headers: { 'Content-Type': 'application/json' },
// // // //           body: JSON.stringify(emailData)
// // // //         })
// // // //         .then(emailRes => emailRes.json())
// // // //         .then(emailResult => {
// // // //           if (emailResult.success) {
// // // //             console.log('✅ Email sent successfully');
// // // //           } else {
// // // //             console.error('❌ Email failed:', emailResult.error);
// // // //             // Optional: Show warning about email failure
// // // //             Swal.fire({
// // // //               position: 'top-end',
// // // //               icon: 'warning',
// // // //               title: 'Food added but email failed',
// // // //               showConfirmButton: false,
// // // //               timer: 2000
// // // //             });
// // // //           }
// // // //         })
// // // //         .catch(emailError => {
// // // //           console.error('❌ Email request failed:', emailError);
// // // //         });
// // // //       }
// // // //     })
// // // //     .catch(err => {
// // // //       console.error('Add food error:', err);
// // // //       Swal.fire({
// // // //         icon: 'error',
// // // //         title: 'Failed to add food',
// // // //         text: 'Please try again'
// // // //       });
// // // //     });
// // // // };
// // // // ... (imports remain the same)



// // //   // const handleAddFood = (e) => {
// // //   //   e.preventDefault();
// // //   //   const form = e.target;
// // //   //   const formData = new FormData(form);
// // //   //   const foodData = Object.fromEntries(formData.entries());

// // //   //   // Fill in user name and email
// // //   //   foodData.buyerName = user?.displayName || 'Unknown';
// // //   //   foodData.email = user?.email || 'No Email'; // This is the logged-in user's email, who is adding the food

// // //   //   // 1️⃣ Save to DB
// // //   //   fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// // //   //     method: 'POST',
// // //   //     headers: { 'Content-Type': 'application/json' },
// // //   //     body: JSON.stringify(foodData)
// // //   //   })
// // //   //     .then(res => res.json())
// // //   //     .then(data => {
// // //   //       if (data.insertedId) {
// // //   //         // Hardcoded email for the 'From' part as per your request
// // //   //         const senderEmail = 'mdtahsinislam13@gmail.com';
// // //   //         const recipientEmail = user?.email || 'logineduser@gmail.com'; // Use logged-in user's email

// // //   //         // 2️⃣ Show success alert with custom message
// // //   //         Swal.fire({
// // //   //           position: 'top-end',
// // //   //           icon: 'success',
// // //   //           // Update the title string as requested
// // //   //           title: `Food Card added successfully! From : ${senderEmail} To : ${recipientEmail}`,
// // //   //           showConfirmButton: false,
// // //   //           timer: 4000 // Increased timer to read the long message
// // //   //         });
// // //   //         form.reset();

// // //   //         // 3️⃣ Send Email
// // //   //         const emailData = {
// // //   //           to: recipientEmail,
// // //   //           subject: 'Food Added Successfully!',
// // //   //           text: `Hi ${foodData.buyerName},\n\nYour food "${foodData.foodName}" has been added successfully to the system.\n\nPrice: $${foodData.price}\nQuantity: ${foodData.quantity}\n\nThanks,\nRestaurant Management Team`
// // //   //         };

// // //   //         fetch('https://resturent-management-server-site.vercel.app/send-email', {
// // //   //           method: 'POST',
// // //   //           headers: { 'Content-Type': 'application/json' },
// // //   //           body: JSON.stringify(emailData)
// // //   //         })
// // //   //         .then(emailRes => emailRes.json())
// // //   //         .then(emailResult => {
// // //   //            if (emailResult.success) {
// // //   //              console.log('✅ Email sent successfully');
// // //   //            } else {
// // //   //              console.error('❌ Email failed:', emailResult.error);
// // //   //            }
// // //   //         })
// // //   //         .catch(emailError => {
// // //   //           console.error('❌ Email request failed:', emailError);
// // //   //         });
// // //   //       }
// // //   //     })
// // //   //     .catch(err => {
// // //   //       console.error('Add food error:', err);
// // //   //       Swal.fire({
// // //   //         icon: 'error',
// // //   //         title: 'Failed to add food',
// // //   //         text: 'Please check your connection and try again.'
// // //   //       });
// // //   //     });
// // //   // };
// // //   // ... (rest of the component remains the same)
// // // const handleAddFood = (e) => {
// // //   e.preventDefault();
// // //   const form = e.target;
// // //   const formData = new FormData(form);
// // //   const foodData = Object.fromEntries(formData.entries());

// // //   // Fill in user name and email
// // //   foodData.buyerName = user?.displayName || 'Unknown';
// // //   foodData.email = user?.email || 'No Email';

// // //   // 1️⃣ Save to DB
// // //   fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// // //     method: 'POST',
// // //     headers: { 'Content-Type': 'application/json' },
// // //     body: JSON.stringify(foodData)
// // //   })
// // //     .then(res => res.json())
// // //     .then(data => {
// // //       if (data.insertedId) {
// // //         // Show success message
// // //         Swal.fire({
// // //           position: 'top-end',
// // //           icon: 'success',
// // //           title: 'Food added successfully!',
// // //           showConfirmButton: false,
// // //           timer: 1500
// // //         });
// // //         form.reset();
// // //       }
// // //     })
// // //     .catch(err => {
// // //       console.error('Add food error:', err);
// // //       Swal.fire({
// // //         icon: 'error',
// // //         title: 'Failed to add food',
// // //         text: 'Please try again'
// // //       });
// // //     });
// // // };
// // //   return (
// // //     <div className="hero bg-base-200 min-h-screen mt-20">
// // //       <div className="hero-content flex-col lg:flex-row-reverse">
// // //         <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// // //           <div className="card-body">
// // //             <h1 className="text-4xl font-bold"  >Add Food!</h1>
// // //             <fieldset className="fieldset">
// // //               <label className="label">Food Name</label>
// // //               <input type="text" name="foodName" className="input" placeholder="Food Name" required />

// // //               <label className="label">Food Url</label>
// // //               <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

// // //               <label className="label">Price</label>
// // //               <input type="number" name="price" className="input" placeholder="Price" required />

// // //               <label className="label">Quantity</label>
// // //               <input type="text" name="quantity" className="input" placeholder="Quantity" required />

// // //               <label className="label">Food Origin</label>
// // //               <input type="text" name="foodOrigin" className="input" placeholder="Food Origin (Country)" required />

// // //               <label className="label">Buyer Name</label>
// // //               <input type="text" name="buyerName" className="input" defaultValue={user?.displayName || ''} readOnly />

// // //               <label className="label">Email</label>
// // //               <input type="email" name="email" className="input" defaultValue={user?.email || ''} readOnly />
// // //               <label className="label">Date</label>
// // //               <input type="datetime-local" name="buyingDate" className="input" required />

// // //               <label className="label">Description</label>
// // //               <textarea name="description" placeholder="Short food description" className="textarea textarea-neutral" required></textarea>

// // //               <button className="btn btn-neutral mt-4">Add Item</button>
// // //             </fieldset>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Addfood;


// // //gpt 
// // import React, { useContext } from 'react';
// // import Swal from 'sweetalert2';
// // import { AuthContext } from '../../contexts/AuthContext';

// // const Addfood = () => {
// //   const { user } = useContext(AuthContext);

// //   const handleAddFood = (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const formData = new FormData(form);
// //     const foodData = Object.fromEntries(formData.entries());

// //     foodData.buyerName = user?.displayName || 'Unknown';
// //     foodData.email = user?.email || 'No Email';

// //     // 1️⃣ Save to DB
// //     fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(foodData)
// //     })
// //       .then(res => res.json())
// //       .then(data => {
// //         if (data.insertedId) {
// //           Swal.fire({
// //             position: 'top-end',
// //             icon: 'success',
// //             title: `Food added successfully! Email sent to: ${foodData.email}`,
// //             showConfirmButton: false,
// //             timer: 2000
// //           });
// //           form.reset();
// //         }
// //       })
// //       .catch(err => {
// //         console.error('Add food error:', err);
// //         Swal.fire({
// //           icon: 'error',
// //           title: 'Failed to add food',
// //           text: 'Please try again'
// //         });
// //       });
// //   };

// //   return (
// //     <div className="hero bg-base-200 min-h-screen mt-20">
// //       <div className="hero-content flex-col lg:flex-row-reverse">
// //         <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shadow-2xl">
// //           <div className="card-body">
// //             <h1 className="text-4xl font-bold">Add Food!</h1>

// //             <label className="label">Food Name</label>
// //             <input type="text" name="foodName" className="input" placeholder="Food Name" required />

// //             <label className="label">Food Url</label>
// //             <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

// //             <label className="label">Price</label>
// //             <input type="number" name="price" className="input" placeholder="Price" required />

// //             <label className="label">Quantity</label>
// //             <input type="text" name="quantity" className="input" placeholder="Quantity" required />

// //             <label className="label">Food Origin</label>
// //             <input type="text" name="foodOrigin" className="input" placeholder="Food Origin" required />

// //             <label className="label">Buyer Name</label>
// //             <input type="text" name="buyerName" className="input" value={user?.displayName || ''} readOnly />

// //             <label className="label">Email</label>
// //             <input type="email" name="email" className="input" value={user?.email || ''} readOnly />

// //             <label className="label">Date</label>
// //             <input type="datetime-local" name="buyingDate" className="input" required />

// //             <label className="label">Description</label>
// //             <textarea name="description" placeholder="Short food description" className="textarea textarea-neutral" required></textarea>

// //             <button className="btn btn-neutral mt-4">Add Item</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addfood;

// //ccccccccccccccc
// // import React, { useContext } from 'react';
// // import Swal from 'sweetalert2';
// // import { AuthContext } from '../../contexts/AuthContext';

// // const Addfood = () => {
// //   const { user } = useContext(AuthContext);

// //   const handleAddFood = (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const formData = new FormData(form);
// //     const foodData = Object.fromEntries(formData.entries());

// //     foodData.buyerName = user?.displayName || 'Unknown';
// //     foodData.email = user?.email || 'No Email';
// // console.log('Sending food to email:', foodData.email);

// //     // Save to DB
// //     fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(foodData)
// //     })
// //       .then(res => res.json())
// //       .then(data => {
// //         if (data.insertedId) {
// //           Swal.fire({
// //             position: 'top-end',
// //             icon: 'success',
// //             title: `Food added successfully! Email sent to: ${foodData.email}`,
// //             showConfirmButton: false,
// //             timer: 2000
// //           });
// //           form.reset();
// //         }
// //       })
// //       .catch(err => {
// //         console.error('Add food error:', err);
// //         Swal.fire({
// //           icon: 'error',
// //           title: 'Failed to add food',
// //           text: 'Please try again'
// //         });
// //       });
// //   };

// //   return (
// //     <div className="hero bg-base-200 min-h-screen mt-20">
// //       <div className="hero-content flex-col lg:flex-row-reverse">
// //         <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shadow-2xl">
// //           <div className="card-body">
// //             <h1 className="text-4xl font-bold">Add Food!</h1>

// //             <label className="label">Food Name</label>
// //             <input type="text" name="foodName" className="input" placeholder="Food Name" required />

// //             <label className="label">Food Url</label>
// //             <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

// //             <label className="label">Price</label>
// //             <input type="number" name="price" className="input" placeholder="Price" required />

// //             <label className="label">Quantity</label>
// //             <input type="text" name="quantity" className="input" placeholder="Quantity" required />

// //             <label className="label">Food Origin</label>
// //             <input type="text" name="foodOrigin" className="input" placeholder="Food Origin" required />

// //             <label className="label">Buyer Name</label>
// //             <input type="text" name="buyerName" className="input" value={user?.displayName || ''} readOnly />

// //             <label className="label">Email</label>
// //             <input type="email" name="email" className="input" value={user?.email || ''} readOnly />

// //             <label className="label">Date</label>
// //             <input type="datetime-local" name="buyingDate" className="input" required />

// //             <label className="label">Description</label>
// //             <textarea name="description" placeholder="Short food description" className="textarea textarea-neutral" required></textarea>

// //             <button className="btn btn-neutral mt-4">Add Item</button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addfood;


// import React, { useContext } from 'react';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../contexts/AuthContext';

// const Addfood = () => {
//   const { user } = useContext(AuthContext);

//   const handleAddFood = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const foodData = Object.fromEntries(formData.entries());

//     foodData.buyerName = user?.displayName || 'Unknown';
//     foodData.email = user?.email || 'No Email';

//     console.log('Sending food to email:', foodData.email);

//     try {
//       const res = await fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(foodData),
//       });
//       const data = await res.json();

//       if (data.insertedId) {
//         // ✅ Toast Notification for user
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: `Food "${foodData.foodName}" added successfully! Email sent to ${foodData.email}`,
//           showConfirmButton: false,
//           timer: 2500,
//         });

//         form.reset();
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Failed to add food',
//           text: 'Please try again',
//         });
//       }
//     } catch (error) {
//       console.error('Add food error:', error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Something went wrong. Try again.',
//       });
//     }
//   };

//   return (
//     <div className="hero bg-base-200 min-h-screen mt-20">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-4xl font-bold">Add Food!</h1>

//             <label className="label">Food Name</label>
//             <input type="text" name="foodName" className="input" placeholder="Food Name" required />

//             <label className="label">Food Url</label>
//             <input type="url" name="foodUrl" className="input" placeholder="Food Url" required />

//             <label className="label">Price</label>
//             <input type="number" name="price" className="input" placeholder="Price" required />

//             <label className="label">Quantity</label>
//             <input type="text" name="quantity" className="input" placeholder="Quantity" required />

//             <label className="label">Food Origin</label>
//             <input type="text" name="foodOrigin" className="input" placeholder="Food Origin" required />

//             <label className="label">Buyer Name</label>
//             <input type="text" name="buyerName" className="input" value={user?.displayName || ''} readOnly />

//             <label className="label">Email</label>
//             <input type="email" name="email" className="input" value={user?.email || ''} readOnly />

//             <label className="label">Date</label>
//             <input type="datetime-local" name="buyingDate" className="input" required />

//             <label className="label">Description</label>
//             <textarea name="description" placeholder="Short food description" className="textarea textarea-neutral" required></textarea>

//             <button className="btn btn-neutral mt-4">Add Item</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addfood;


import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const Addfood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const foodData = {
      foodName: formData.get('foodName'),
      foodUrl: formData.get('foodUrl'),
      price: parseFloat(formData.get('price')),
      quantity: formData.get('quantity'),
      foodOrigin: formData.get('foodOrigin'),
      buyerName: user?.displayName || 'Unknown',
      email: user?.email || 'No Email',
      buyingDate: formData.get('buyingDate'),
      description: formData.get('description'),
      addedAt: new Date().toISOString()
    };

    console.log('Adding food for email:', foodData.email);
//
    try {
      const res = await fetch('https://resturent-management-server-site.vercel.app/foodpurchasess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodData),
      });
      
      const data = await res.json();

      if (data.insertedId) {
        let message = `Food "${foodData.foodName}" added successfully!`;
        
        if (foodData.email && foodData.email !== 'No Email') {
          if (data.emailSent) {
            message += ` Confirmation email sent to ${foodData.email}`;
          } else {
            message += ` (Email notification failed)`;
          }
        }

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 3000,
        });

        form.reset();
      } else {
        throw new Error('Failed to add food');
      }
    } catch (error) {
      console.error('Add food error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to add food',
        text: error.message || 'Please try again',
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handleAddFood} className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Add Food!</h1>

            <div className="form-control">
              <label className="label">Food Name</label>
              <input type="text" name="foodName" className="input input-bordered" placeholder="Food Name" required />
            </div>

            <div className="form-control">
              <label className="label">Food Image URL</label>
              <input type="url" name="foodUrl" className="input input-bordered" placeholder="Food Image URL" required />
            </div>

            <div className="form-control">
              <label className="label">Price</label>
              <input type="number" name="price" step="0.01" className="input input-bordered" placeholder="Price" required />
            </div>

            <div className="form-control">
              <label className="label">Quantity</label>
              <input type="text" name="quantity" className="input input-bordered" placeholder="Quantity" required />
            </div>

            <div className="form-control">
              <label className="label">Food Origin</label>
              <input type="text" name="foodOrigin" className="input input-bordered" placeholder="Food Origin" required />
            </div>

            <div className="form-control">
              <label className="label">Buyer Name</label>
              <input type="text" className="input input-bordered" value={user?.displayName || 'Not logged in'} readOnly />
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input type="email" className="input input-bordered" value={user?.email || 'No email'} readOnly />
            </div>

            <div className="form-control">
              <label className="label">Date</label>
              <input type="datetime-local" name="buyingDate" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">Description</label>
              <textarea name="description" placeholder="Short food description" className="textarea textarea-bordered" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Add Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addfood;