import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const DragAndDrop = ({ isPost, buttonText }) => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const createPost = (e) => {
    e.preventDefault();
    try {
      Axios.post(
        `https://insta-clone-42ea1-default-rtdb.firebaseio.com/post.json`,
        {
          poisId: uuidv4(),
          postImgUrl: files[0].preview,
          postDescription: description,
        }
      );

      navigate("/");
    } catch (error) {
      alert(error);
    }

    console.log(files[0].preview);
    console.log(description);
  };

  const createDescription = (e) => {
    setDescription(e.target.value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const image = files.map((file) => (
    <div key={file.name}>
      <div className="flex flex-col justify-center items-center ">
        <img
          className="max-w-[140px] max-h-[140px] mb-1"
          src={file.preview}
          alt="preview"
        />
        <form className="w-full flex flex-col items-center" action="">
          {isPost ? (
            <textarea
              className="rounded-xl mt-2 p-2 resize-none w-full bg-slate-100"
              name="description"
              placeholder="Post description"
              onChange={createDescription}
              cols="33"
              rows="3"
            ></textarea>
          ) : null}

          <button
            onClick={createPost}
            className="bg-blue-400 p-2 rounded-md min-w-[96px] w-auto  mt-2"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  ));

  return (
    <div className=" h-full p-2 flex items-center justify-center flex-col gap-2">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="font-bold flex items-center justify-center border-2 border-dashed rounded-md text-center border-black h-28">
          Trascina le foto qui
          <br /> o
        </p>
        <p className="text-center text-white font-semibold mt-2 bg-blue-500 p-2 rounded-lg cursor-pointer">
          Seleziona dal computer
        </p>
      </div>
      <div className="w-full">{image}</div>
    </div>
  );
};

export default DragAndDrop;
