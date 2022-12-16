import logo from "../img/writeLogo.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* SIGNUP DIV */}
      <div className="flex flex-col items-center justify-center border-2 border-slate-300 border-solid m-3 max-w-[300px] tablet-n:max-w-[500px]">
        <img src={logo} alt="" />
        <h3 className="text-center text-slate-500 font-bold text-lg mb-3">
          Iscriviti per vedere le foto e i video dei tuoi amici.
        </h3>
        <form
          className="flex items-center justify-center flex-col mb-3 gap-3 p-2"
          action=""
        >
          <input
            className="border-2 border-slate-400 border-solid bg-slate-100 h-10 p-2 w-full"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-2 border-slate-400 border-solid bg-slate-100 h-10 p-2 w-full"
            type="text"
            placeholder="Nome e Cognome"
          />
          <input
            className="border-2 border-slate-400 border-solid bg-slate-100 h-10 p-2 w-full"
            type="text"
            placeholder="Nome Utente"
          />
          <input
            className="border-2 border-slate-400 border-solid bg-slate-100 h-10 p-2 w-full"
            type="password"
            placeholder="Password"
          />

          <p className="text-center text-slate-400 mb-5">
            Le persone che usano i nostri servizi potrebbero aver caricato le
            tue informazioni di contatto su Instagram.{" "}
            <a
              className="text-blue-400 cursor-pointer"
              href="https://www.facebook.com/help/instagram/261704639352628"
            >
              Scopri di più
            </a>
          </p>
          <p className="text-center text-slate-400 mb-5">
            Iscrivendoti, accetti le nostre{" "}
            <a
              className="text-blue-400 cursor-pointer"
              href="https://help.instagram.com/581066165581870/?locale=it_IT"
            >
              Condizioni
            </a>{" "}
            . Scopri in che modo raccogliamo, usiamo e condividiamo i tuoi dati
            nella nostra{" "}
            <a
              className="text-blue-400 cursor-pointer"
              href="https://www.facebook.com/privacy/policy"
            >
              Informativa sulla privacy
            </a>{" "}
            e in che modo usiamo cookie e tecnologie simili nella nostra{" "}
            <a
              className="text-blue-400 cursor-pointer"
              href="https://help.instagram.com/1896641480634370/"
            >
              Normativa sui cookie
            </a>{" "}
            .
          </p>

          <button
            className={
              "bg-blue-400 h-10 rounded-md text-white font cursor-pointer w-full mb-5"
            }
          >
            SignUp
          </button>
        </form>
      </div>
      {/* SINGIN DIV */}
      <div className="border-2 border-slate-300 w-full max-w-[300px] m-3 mb-5 flex items-center justify-center p-5 tablet-n:max-w-[500px]">
        <h4>
          Hai un account?{" "}
          <Link to="/signin">
            <span className="text-blue-400 font-bold">Accedi</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
