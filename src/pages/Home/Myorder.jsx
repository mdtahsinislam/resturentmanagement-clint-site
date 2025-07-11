



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Myorder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    fetch(` https://resturent-management-server-site.vercel.app/myfoods?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('Failed to load orders:', err));
  };

  useEffect(() => {
    if (user?.email) {
      fetchOrders();
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This order will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(` https://resturent-management-server-site.vercel.app/foodpurchasess/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Order has been deleted.", "success");
              fetchOrders();
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2
        className="text-orange-500 font-semibold text-2xl sm:text-3xl md:text-4xl mt-1 mb-5 leading-8 tracking-tight text-center"
        style={{ fontFamily: '"My Soul", cursive' }}
      >
        My Orders
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="table w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-[#D3ECCD] shadow-md text-xs sm:text-sm md:text-base">
              <th className="py-2 px-2">#</th>
              <th className="py-2 px-2">Food</th>
              <th className="py-2 px-2">Image</th>
              <th className="py-2 px-2">Quantity</th>
              <th className="py-2 px-2">Price</th>
              <th className="py-2 px-2">Ordered At</th>
              <th className="py-2 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id} className="hover:bg-gray-100 text-center">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{order.foodName}</td>
                  <td className="p-2">
                    <img
                      src={order.foodUrl}
                      alt={order.foodName}
                      className="h-12 w-12 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-2">{order.quantity}</td>
                  <td className="p-2">${order.price}</td>
                  <td className="p-2 whitespace-nowrap">
                    {new Date(order.buyingDate).toLocaleString()}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorder;
