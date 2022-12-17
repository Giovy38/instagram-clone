import DragAndDrop from "../components/DragAndDrop";

const ChangeProfilePhoto = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-3 ">
      <h1 className="text-lg font-bold">Change your profile photos</h1>
      <DragAndDrop isPost={false} buttonText={"Change Photo"} />
    </div>
  );
};

export default ChangeProfilePhoto;
