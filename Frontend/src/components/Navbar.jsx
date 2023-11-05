import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [toggle, setToggle] = useState("hidden");
  const { Auth } = props;
  const NavLinks = 
      <ul className="sm:flex sm:items-center mb-2 sm:m-0">
        <li className="mx-3 hover:text-cyan-600 mb-2 sm:mb-0">
        <Link to={Auth == undefined || Auth == null ? "#" : "/"} className={`hover:underline hover:decoration-2`}>
            Home
          </Link>
        </li>

        <li className="mx-3 hover:text-cyan-600 my-2 ">
          <Link
            to={Auth == undefined || Auth==null? "#" : "/Notes"}
            className="hover:underline hover:decoration-2"
          >
            Notes
          </Link>
        </li>
        <li className="mx-3 hover:text-cyan-600 my-2 ">
          <Link to="/Login" className="hover:underline hover:decoration-2">
            Login
          </Link>
        </li>
        <li className="mx-3 hover:text-cyan-600 my-2 ">
          <Link to="/SignUp" className="hover:underline hover:decoration-2">
            SignUp
          </Link>
        </li>
      </ul>
  return (
    <div className=" z-10 absolute top-0 w-full">
      <div className="bg-black w-full text-white h-12 flex items-center ">
        <h3 className="ml-2 text-yellow-500 font-bold text-lg cursor-pointer">
          NoteBook
        </h3>
        <div className="hidden sm:block align-self-center w-fit sm:absolute sm:right-[10vw]">
          {NavLinks}
        </div>
        <div
          className="absolute right-4 hover:border-2 text-center hover:border-cyan-700 p-1 hover:text-cyan-700 rounded-md w-10 sm:hidden"
          onClick={() => {
            toggle == "hidden"
              ? setToggle("block transition-all duration-1000 ease-in-out")
              : setToggle("hidden");
          }}
        >
          &#9776;
        </div>
      </div>
      <div className={`${toggle} bg-black w-full text-white sm:hidden h-fit`}>
        <span className="mb-4">{NavLinks}</span>
        <hr className="ml-2 w-[90%] py-[2px] mb-4" />
      </div>
    </div>
  );
}

export default Navbar;
