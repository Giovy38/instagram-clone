import logo from "../img/writeLogo.jpg";
import video from "../img/loginVid.gif";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center">
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
                placeholder="Email"
              />
              <input
                className="h-10 rounded-md w-[224px] border-2 border-solid border-slate-400 pl-2 font-mono "
                type="password"
                placeholder="Password"
              />
              <button
                className={
                  "bg-blue-400 h-10 rounded-md text-white font cursor-pointer"
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
