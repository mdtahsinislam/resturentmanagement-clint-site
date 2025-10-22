// import React from 'react';

// const Allfoods = () => {
//     return (
//         <div>
            
// <div className='max-w-7xl mx-auto'>
//          <div
//   className="h-20 flex items-center justify-center bg-cover bg-center mt-3"
//   style={{ backgroundImage: "url('https://i.imghippo.com/files/WyCQ3571ntg.jpg')" }}
// >
//   <h1 className="text-white text-3xl font-bold">All foods</h1>
// </div>
// <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel, repellat soluta sed beatae nobis aliquid aliquam magni doloremque, ad aspernatur quae velit assumenda. Reiciendis sunt odio iste laborum cupiditate quaerat quae ducimus voluptas fuga debitis nemo fugiat delectus maiores a, architecto aspernatur veritatis unde ea ullam! Quod ut cum ducimus recusandae, pariatur repudiandae assumenda asperiores, error doloribus natus iure illum veritatis reiciendis sequi aperiam nisi doloremque! Dignissimos aliquam molestiae consectetur ut officia ipsum maiores quidem, nobis accusamus nulla quis dolores nihil, facere id, recusandae a necessitatibus laborum sapiente saepe quaerat? Iusto voluptatibus ipsum odit? Quibusdam ducimus necessitatibus et nihil beatae quae voluptatem dolorem soluta odit voluptates incidunt deleniti iure nulla labore, laudantium, maiores aspernatur sit adipisci neque cum. Dolor id voluptates, porro labore, vero doloremque animi ipsam necessitatibus voluptate assumenda iste excepturi. Totam dicta enim, est aliquid ex minima harum fugiat porro sunt nulla amet officiis? Officiis deserunt ducimus quas perferendis praesentium voluptates veniam nam esse aliquam quisquam vel, tempore architecto, adipisci repudiandae sapiente doloremque dolore nostrum, quos ullam qui magnam harum molestias? Pariatur fugiat veniam blanditiis voluptatem? Error aliquam esse, perferendis blanditiis impedit harum eveniet dolorum nulla. Aspernatur cumque delectus voluptatem molestias quibusdam id illo vel deserunt neque?


// </h1>

// {/* Card format like this  to show all data which i stored in db  */}
// <div className="card w-96 bg-base-100 shadow-sm">
//   <div className="card-body">
//     <span className="badge badge-xs badge-warning">Most Popular</span>
//     <div className="flex justify-between">
//       <h2 className="text-3xl font-bold">Premium</h2>
//       <span className="text-xl">$29/mo</span>
//     </div>
//     <ul className="mt-6 flex flex-col gap-2 text-xs">
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>High-resolution image generation</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>Customizable style templates</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>Batch processing capabilities</span>
//       </li>
//       <li>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span>AI-driven image enhancements</span>
//       </li>
//       <li className="opacity-50">
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span className="line-through">Seamless cloud integration</span>
//       </li>
//       <li className="opacity-50">
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//         <span className="line-through">Real-time collaboration tools</span>
//       </li>
//     </ul>
//     <div className="mt-6">
//       <button className="btn btn-primary btn-block">Subscribe</button>
//     </div>
//   </div>
// </div>
// </div>

            
//         </div>
//     );
// };

// export default Allfoods;








import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Allfoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess')
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error('Failed to fetch food data:', err));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="h-20 flex items-center justify-center bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('https://i.imghippo.com/files/WyCQ3571ntg.jpg')" }}
      >
        <h1 className="text-white text-3xl font-bold">All Foods</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-10">
        {foods.map((food) => (
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
          
          <Link to={`/singlefood/${food._id}`}>

            <button className="btn btn-primary">Details</button>   
          </Link>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allfoods;
 //in this file i show all food now i want to myfood file to show only login users added food in card 