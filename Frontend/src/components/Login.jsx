import Button from "../components/Buttons_";
import { useContext, useState} from "react";
import NoteContext from "../context/context";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();
  const context = useContext(NoteContext);
  const [object, setObject] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = async () => {
    await context.login(object).then( async (result) => {
      if (result.sucess == false) {
        context.toggleAlert("block", "red", result.message);
      } else {
        Navigate("/");
        window.location.reload()
      }
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setObject({
        email: value,
        password: object.password,
      });
    }
    if (name === "password") {
      setObject({
        email: object.email,
        password: value,
      });
    }
  };
  return (
    <div className=" w-full flex flex-col items-center justify-center mt-12">
      <h1 className="text-3xl m-4 font-bold">Login</h1>
      <div className="w-[90vw] flex flex-col items-center m-auto custom-slate rounded-lg border-2 p-3 sm:w-1/2 sm:m-4">
        <div action="/api/v1" className="w-full py-7">
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
        </div>
        <div className="w-full">
          <Button text="Submit" click={handleOnSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
