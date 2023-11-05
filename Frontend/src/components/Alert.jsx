import { useContext } from "react";
import NoteContext from "../context/context";
function Alert() {
  const context = useContext(NoteContext);
  const { display, type, message } = context.showAlert;
  return (
    <div className={`h-[50px] bg-${type}-700 ${display} z-10 absolute mt-12 w-full`}>
      <div className="mx-4 h-fit pt-1">{message}</div>
    </div>
  )
}

export default Alert
