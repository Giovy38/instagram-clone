import logo from "../img/writeLogo.jpg";
import video from "../img/loginVid.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../store/action/handleAuth";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [emailEmpty, setEmailEmpty] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const token = useSelector((state) => state.authReducer.token);
  const error = useSelector((state) => state.authReducer.error);

  const dispatch = useDispatch();

  const isEmailEmpty = (e) => {
    setEmailEmpty(e.target.value);
    if (emailEmpty !== "" && passwordEmpty !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const isPasswordEmpty = (e) => {
    setPasswordEmpty(e.target.value);
    if (emailEmpty !== "" && passwordEmpty !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const isSignUp = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(emailEmpty, passwordEmpty, isSignUp));
    setEmailEmpty("");
    setPasswordEmpty("");
  };

  let shouldRedirect = null;
  if (token) {
    shouldRedirect = <Navigate replace to="/" />;
  }

  return (
    <div className="flex items-center justify-center">
      {shouldRedirect}
      {/* RIGHT VIDEO DIV */}
      <div className="overflow-hidden w-[300px] h-[500px] justify-center items-center hidden tablet-n:flex">
        <img className="" src={video} alt="" />
      </div>
      {/* LEFT INFO DIV */}
      <div>
        <div className="flex flex-col items-center justify-center">
          {/* IMG, EMAIL AND PASSWORD DIV */}
          <div className="flex flex-col items-center justify-center border-2 border-slate-300 border-solid m-3 p-3 w-[300px]">
            <img className="mb-16" src={logo} alt="" />
            <form className="flex flex-col justify-center gap-5" action="*">
              <input
                className="h-10 rounded-md w-[224px] border-2 border-solid border-slate-400 pl-2 font-mono "
                type="email"
                onChange={isEmailEmpty}
                placeholder="Email"
              />
              <input
                className="h-10 rounded-md w-[224px] border-2 border-solid border-slate-400 pl-2 font-mono "
                type="password"
                onChange={isPasswordEmpty}
                placeholder="Password"
              />
              {error ? (
                <p className="text-red-600">Username o password errati</p>
              ) : null}
              <button
                onClick={handleSubmit}
                className={
                  isEmpty
                    ? "bg-blue-400 h-10 rounded-md text-white font cursor-pointer"
                    : "bg-blue-600 h-10 rounded-md text-white font cursor-pointer"
                }
              >
                SignIn
              </button>
            </form>
          </div>
          {/* SIGNUP DIV */}
          <div className="border-2 border-solid border-slate-300 m-3 p-6 flex items-center justify-center w-[300px]">
            <h4>
              Non hai un account?
              <Link to="/signup">
                <span className="text-blue-400 font-bold">Iscriviti</span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
