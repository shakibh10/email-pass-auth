import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {


  const[showpassword,setShowpassword]=useState(false);


  const handleSignUp=(e)=>{
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
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        PLease Sign up Now!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <form onSubmit={handleSignUp} className="card-body">
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
             type={showpassword?"text":"password"}
             name="password"
             placeholder="password"
             className="input input-bordered w-full"
             required />

             <span className="absolute right-2" onClick={()=>setShowpassword(!showpassword)}>
                {
                  showpassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                }
             </span>
          </div>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
      <p>Already Signed Up? Please <Link to="/login">Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;