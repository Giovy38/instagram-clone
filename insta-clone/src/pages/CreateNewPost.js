import image from "../img/fotoEvideo.jpg";
import DragAndDrop from "../components/DragAndDrop";

const CreateNewPost = () => {
  return (
    <div className="flex justify-center">
      <div className="border-2 border-solid border-black m-5 rounded-xl h-[88vh] overflow-hidden w-full max-w-[425px]">
        <h3 className="text-center font-bold border-b-2 border-solid border-slate-400 py-5">
          Crea un nuovo post
        </h3>
        <div className="flex items-center justify-center">
          <img className="w-24" src={image} alt="" />
        </div>
        <div className="h-auto">
          <DragAndDrop />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
