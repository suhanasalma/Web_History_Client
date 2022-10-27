
import React from 'react';
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { ContextDetails } from "../../Context/ContextProvide";
import { useLocation } from "react-router-dom";


const Login = () => {
  const [email,setEmail] = useState()
  const navigate = useNavigate();
  const [error ,setError] = useState('')

  const location = useLocation()
  let from = location.state?.from?.pathname || "/account";


  const { user, signInEmailPass, passwordReset } =
    useContext(ContextDetails);
  const login = (e) => {
    e.preventDefault();
    const form = e.target;
      const email = e.target.email.value;
      const password = e.target.password.value;
      signInEmailPass(email,password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        if (user.emailVerified) {
           navigate(from, { replace: true });
        } else {
          alert("your email is not varified");
        }
        form.reset()
        // ...
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })


  };

  const getEmail = (e) =>{
  
    const userEmail = e.target.value;
    setEmail(userEmail);
  }
  console.log(email);

  const changePassword = () => {
    passwordReset(email)
      .then(() => {
        alert('please check your Email to reset password')
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="course-cotainer">
        <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
          Hello {user?.displayName}
        </h1>
      </div>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                New Here?
                <p className="text-rose-600 font-bold">
                  <Link to="/register">Create Account</Link>
                </p>
              </p>
            </div>
            <form
              onSubmit={login}
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onBlur={getEmail}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      onClick={changePassword}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <p className='text-red-400'>{error}</p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;