import Notes from "./Notes";
import CreateNote from "./CreateNote";
import UpdateNote from "./UpdateNote";
import { useNavigate } from "react-router-dom";
import {useEffect ,useContext} from "react";
import NoteContext from "../context/context";
function Home(props) {
  const context = useContext(NoteContext);
  const { Hide } = context;
  const Navigate = useNavigate();
  if (props.Auth == null || props.Auth == undefined) {
    useEffect(() => {
      Navigate("/SignUp");
    }, []);
  } else {
    return (
      <div className="mt-12">
        <UpdateNote type={Hide} />
        <CreateNote />
        <Notes />
      </div>
    );
  }
}

export default Home;
