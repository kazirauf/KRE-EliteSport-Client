/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Features/Auth/authAPI";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectCurrentUser, setUser } from "../Redux/Features/Auth/authSlice";
import "./sign.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userInfo = { email, password };
      const res = await login(userInfo).unwrap();

      console.log(res);

      dispatch(setUser({ user: res?.data, token: res?.token }));

      toast.success("Logged in successfully");

      navigate("/");
    } catch (err: any) {
      if (err.data.success === false) {
        toast.error(err.data.message);
      }
    }
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input  type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your password"/>
            </div>
            <button
                  disabled={isLoading}
                  type="submit"
                  className="mt-5  px-20 py-2 tracking-wider  bg-black text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blackfont-bold transition-colors duration-300 transform"
                >
                  {isLoading ? (
                    <button    className="mt-5  px-20 py-2 tracking-wider  bg-black text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-blackfont-bold transition-colors duration-300 transform">Loading...</button>
                  ) : (
                    "Login"
                  )}
                </button>
          
        
          </form>
         
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
            So go to sign up and create a new account and join with us
            </p>
            <Link
                  to={"/registration"}
                 className="btn transparent" id="sign-up-btn"
                >
                  sign up
                </Link>
         
          </div>
          <img
            src="https://raw.githubusercontent.com/sefyudem/Sliding-Sign-In-Sign-Up-Form/955c6482aeeb2f0e77c1f3c66354da3bc4d7a72d/img/log.svg"
            className="image"
            alt=""
          />
        </div>
       
      </div>
    </div>
  
  );
};

export default Login;
