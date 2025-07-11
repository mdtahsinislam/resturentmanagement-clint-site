import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const UpdateFood = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data?.email === user?.email) {
          setFood(data);
        } else {
          Swal.fire("Unauthorized", "You can only update your own food!", "error");
          navigate("/myfood");
        }
      });
  }, [id, user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {
      foodName: form.foodName.value,
      foodUrl: form.foodUrl.value,
      price: parseFloat(form.price.value),
      quantity: form.quantity.value,
      buyingDate: form.buyingDate.value,
    };

    fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFood)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Food info updated successfully.", "success");
          navigate("/myfood");
        }
      });
  };

  if (!food) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-base-200 p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Update Food</h2>
      <form onSubmit={handleUpdate}>
        <label className="label">Food Name</label>
        <input name="foodName" defaultValue={food.foodName} className="input input-bordered w-full" required />

        <label className="label">Food URL</label>
        <input name="foodUrl" defaultValue={food.foodUrl} className="input input-bordered w-full" required />

        <label className="label">Price</label>
        <input type="number" name="price" defaultValue={food.price} className="input input-bordered w-full" required />

        <label className="label">Quantity</label>
        <input name="quantity" defaultValue={food.quantity} className="input input-bordered w-full" required />

        <label className="label">Buying Date</label>
        <input type="datetime-local" name="buyingDate" defaultValue={food.buyingDate} className="input input-bordered w-full" required />

        <button type="submit" className="btn btn-primary mt-4">Update Food</button>
      </form>
    </div>
  );
};

export default UpdateFood;
