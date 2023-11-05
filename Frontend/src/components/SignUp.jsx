import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/context";
import Button from "./Buttons_";
const SignUp = () => {
  const Navigate = useNavigate();
  const context = useContext(NoteContext);
  const [object, setObject] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnSubmit = async () => {
    await context.signUp(object).then((result) => {
      if (result.sucess == false) {
        context.toggleAlert("block", "red", result.message);
      } else {
        Navigate("/");
        window.location.reload();
      }
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setObject({
        name: value,
        email: object.email,
        password: object.password,
      });
    }
    if (name === "email") {
      setObject({
        name: object.name,
        email: value,
        password: object.password,
      });
    }
    if (name === "password") {
      setObject({
        name: object.name,
        email: object.email,
        password: value,
      });
    }
  };
  return (
    <div className=" w-full flex flex-col items-center justify-center mt-12">
      <h1 className="text-3xl m-4 font-bold">SignUp</h1>
      <div className="w-[90vw] flex flex-col items-center m-auto custom-slate rounded-lg border-2 p-3 sm:w-1/2 sm:m-4">
        <form className="w-full py-4">
          <h1 className="text-xl m-2 ">Name</h1>
          <input
            type="text"
            className="w-[90%] p-1 rounded-lg text-black"
            name="name"
            onChange={handleOnChange}
          />
          <h1 className="text-xl m-2 ">email</h1>
          <input
            type="text"
            className="w-[90%] p-1 rounded-lg text-black"
            name="email"
            onChange={handleOnChange}
          />
          <h1 className="text-xl m-2 ">password</h1>
          <input
            type="text"
            className="w-[90%] p-1 rounded-lg text-black"
            name="password"
            onChange={handleOnChange}
          />
        </form>
        <div className="my-2 w-full">
          <Button text="Submit" click={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
