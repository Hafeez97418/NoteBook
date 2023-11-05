import NoteContext from "./context";
import React from "react";
import { NoteRoute } from "./controllers/note";
import { signUp, login } from "./controllers/user";
import { useState } from "react";
function AppState(props) {
   const [showAlert, setAlert] = useState({
     display: "hidden",
   });
   const toggleAlert =async (display, type, message) => {
     setAlert({
       display,
       type,
       message,
     });
    setTimeout(() => {
       setAlert({
         display: "hidden",
       });
     }, 3000);
  };
  const [Notes, setNotes] = useState([]);
  const [Hide, setHide] = useState("hidden");
  const [Id, setId] = useState(null)
  return (
  
    <NoteContext.Provider
      value={{
        signUp,
        login,
        NoteRoute,
        showAlert,
        toggleAlert,
        Notes,
        setNotes,
        Hide,
        setHide,
        Id,
        setId,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}

export default AppState;
