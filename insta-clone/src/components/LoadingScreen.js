import logo from "../img/logo.png";
import footerLogo from "../img/fromMeta.jpg";

const LoadingScreen = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="flex items-end justify-center h-[50vh] ">
        <img className="h-20 w-20" src={logo} alt="" />
      </div>
      <div className="h-[40vh] flex justify-center items-end">
        <img className="h-24" src={footerLogo} alt="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
