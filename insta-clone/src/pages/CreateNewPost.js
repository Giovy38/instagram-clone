import image from "../img/fotoEvideo.jpg";

const CreateNewPost = () => {
  return (
    <div>
      <div className="border-2 border-solid border-black m-5 rounded-xl h-[60vh]">
        <h3 className="text-center font-bold border-b-2 border-solid border-slate-400 py-5">
          Crea un nuovo post
        </h3>
        <div className="flex items-center justify-center">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
