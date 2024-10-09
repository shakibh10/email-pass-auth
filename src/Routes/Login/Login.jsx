import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {

  const[showme,setShowme]=useState(false);



  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;

    console.log(email,password);


  }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Login and Enjoy our services
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <div className="flex items-center relative">
          <input 
           type={showme?"text":"password"}
           name="password"
           placeholder="password"
           className="input input-bordered w-full"
           required />

           <span className="absolute right-2" onClick={()=>setShowme(!showme)}>
              {
                  showme?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
              }
           </span>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Have not Sign Up Yet? Please <Link to="/signup">Sign Up</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;