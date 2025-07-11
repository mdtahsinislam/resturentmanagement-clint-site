

// import React, { use } from 'react';
// import { Link } from 'react-router';
// import { AuthContext } from '../../contexts/AuthContext';

// const Login = () => {
//     const {createUser}=use(AuthContext)
//     console.log(createUser)

// const handlelogin =e=>{
//    e.preventDefault();
//    const form =e.target;
//    const formData=new FormData(form);
//    const email=formData.get('email');
//    const password=formData.get('password');
//    console.log(email,password);
// }

// //create user in the firebase
// createUser(email , password)
// .then (result =>{
//     console.log(result.user)
// })
// .catch(error =>{
//     console.log(error)
// })
//     return (
//         <div>
//             <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
   
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//          <h1 className="text-5xl font-bold">Login now!</h1>
//       <div className="card-body">
//         {/* Google */}
//    <button onClick={handlelogin} className="btn bg-white text-black border-[#e5e5e5]">
//     <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//       Login with Google
//    </button>
//    <div className="divider divider-secondary">OR</div>
//         <form onSubmit={handlelogin} className="fieldset">
//           <label className="label">Email</label>
//           <input type="email" name="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" name="password" className="input" placeholder="Password" />
//           <div><p className="">Don't have Account go to <Link to="/register" className='text-blue-500'><span>Register</span></Link>!</p></div>




//           <button className="btn btn-neutral mt-4">Login</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Login;




import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext); // ✅ use loginUser
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password) // ✅ Correct method
      .then((result) => {
        console.log("Logged in:", result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log("Google User:", result.user);
        navigate('/');
      })
      .catch(error => {
        console.error("Google Login Error:", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
          <div className="card-body">
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
              {/* Google SVG here */}
              Login with Google
            </button>
            <div className="divider divider-secondary">OR</div>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />
              <p className="mt-2">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 underline">Register</Link>
              </p>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
