import React from "react";
import Button from "./Buttons_";
import { useContext, useState } from "react";
import NoteContext from "../context/context";
function UpdateNote(props) {
  const context = useContext(NoteContext);
  const { setHide, NoteRoute, Id, toggleAlert, Notes } = context;
  const [obj, setobj] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    let { title, description, tag } = obj;
    // console.log(`name: ${name} val:${value}`);
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
    NoteRoute.updatenotes(obj, Id).then(async (result) => {
      if (result.sucess == false) {
        toggleAlert("block", "red", result.message[0].msg);
      } else {
        toggleAlert("block", "green", result.message);
        let N = await Notes.find((r) => {
          return r._id === Id;
        });
        let index = Notes.indexOf(N);
        Notes[index].title = result.object.title;
        Notes[index].description = result.object.description;
        Notes[index].tag = result.object.tag;
      }
    });
  };
  return (
    <div
      className={`z-10 absolute top-[16vh] left-[16vw] w-fit md:left-1/4 bg-black md:w-1/2 h-fit m-auto ${props.type}`}
    >
      <div className="w-full">
        <div className="my-2 pb-4 h-fit m-4">
          <div className="flex justify-between">
            <h1 className=" text-bold  text-3xl">Update Notes Here</h1>
            <span
              onClick={() => {
                setHide("hidden");
              }}
              className="cursor-pointer"
            >
              &#10060;
            </span>
          </div>
          <div className="mx-auto">
            <div>
              <h3 className="font-mono hover:text-yellow-600 text-lg">
                Title:
              </h3>
              <input
                type="text"
                className="custom-slate w-[90%] border hover:border-yellow-500 rounded-md p-1"
                name="title"
                onChange={HandleOnChange}
              />
              <h3 className="font-mono hover:text-yellow-600 text-lg">
                description:
              </h3>
              <textarea
                type="text"
                className="h-64 custom-slate  w-[90%] border hover:border-yellow-500 rounded-md p-2"
                name="description"
                onChange={HandleOnChange}
              />

              <h3 className="font-mono hover:text-yellow-600 text-lg">tag:</h3>
              <div className="flex">
                <input
                  type="text"
                  className=" custom-slate  sm:w-[30%] border hover:border-yellow-500 rounded-md p-1"
                  name="tag"
                  onChange={HandleOnChange}
                />
                <Button
                  text="save"
                  click={HandleOnSubmit}
                  style="h-fit m-0 p-0 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateNote;
