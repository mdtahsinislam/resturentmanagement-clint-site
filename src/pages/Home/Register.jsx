import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.init';


const Register = () => {

const navigate = useNavigate();
    
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    const userProfileForMongo = { name, email, password, photoURL };

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      });

      const response = await fetch(' https://resturent-management-server-site.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userProfileForMongo)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save user data to MongoDB');
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration complete!",
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/'); // ✅ Go to home after registration

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An unexpected error occurred. Please try again.",
      });
    }
  };
    return (
        <div>
                          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-5xl font-bold">Register now!</h1>
      <div className="card-body">
        {/* Google */}
  
 
        <form onSubmit={handleRegister} className="fieldset">

<label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />

<label className="label">Photo</label>
         <input type="url" name="photoURL" className="input" placeholder="Photo URL" />




          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          

   <div><p className="">You already have Account go to <Link to="/login" className='text-blue-500'><span>Login</span></Link>!</p></div>

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;  
