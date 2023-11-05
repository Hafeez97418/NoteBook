import React from "react";
import Button from "./Buttons_";
import { useContext, useState } from "react";
import NoteContext from "../context/context";
function CreateNote() {
  const context = useContext(NoteContext);
  const { NoteRoute, toggleAlert, Notes } = context;
  const [obj, setobj] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    let { title, description, tag } = obj;
    if (name === "title") {
      setobj({
        title: value,
        description,
        tag,
      });
    }
    if (name === "description") {
      setobj({
        title,
        description: value,
        tag,
      });
    }
    if (name === "tag") {
      setobj({
        title,
        description,
        tag: value,
      });
    }
  };
  const HandleOnSubmit = async () => {
    NoteRoute.createnotes(obj).then((result) => {
      if (result.sucess == false) {
        toggleAlert("block", "red", result.message[0].msg);
      } else {
        toggleAlert("block", "green", result.message);
        Notes.push(result.object);
      }
    });
  };
  return (
    <div className="w-full">
      <div className="my-2 pb-4 h-fit m-4">
        <h1 className=" text-bold  text-3xl">Enter Your Notes Here:</h1>
        <div className="mx-auto">
          <div className="py-2 ">
            <h3 className="font-mono hover:text-yellow-600 text-lg">Title:</h3>
            <input
              type="text"
              className="custom-slate w-[90%] border hover:border-yellow-500 rounded-md p-1"
              onChange={HandleOnChange}
              name="title"
            />
            <h3 className="font-mono hover:text-yellow-600 text-lg">
              description:
            </h3>
            <textarea
              type="text"
              className="h-64 custom-slate  w-[90%] border hover:border-yellow-500 rounded-md p-2"
              onChange={HandleOnChange}
              name="description"
            />

            <h3 className="font-mono hover:text-yellow-600 text-lg">tag:</h3>
            <div className="flex">
              <input
                type="text"
                className=" custom-slate  sm:w-[30%] border hover:border-yellow-500 rounded-md p-1"
                onChange={HandleOnChange}
                name="tag"
              />
              <Button text="add" click={HandleOnSubmit} style="h-fit m-0 p-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
