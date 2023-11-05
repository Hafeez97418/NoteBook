import Button from "../components/Buttons_";
import { useState, useEffect, useContext } from "react";
import NoteContext from "../context/context";
const Notes = (props) => {
  const context = useContext(NoteContext);
  const { NoteRoute, Notes, setNotes, setHide, setId, toggleAlert } = context;

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  const fetchNotes = async () => {
    let Note = await NoteRoute.readnotes();
    return setNotes(Note);
  };
  const OnDelete = async (id) => {
    NoteRoute.deletenotes(id).then((result) => {
      if (result.sucess == false) {
        toggleAlert("block", "red", result.message);
      } else {
        toggleAlert("block", "green", result.message);
        const newnote = Notes.filter((note) => {
          return note._id !== id;
        });
        setNotes(newnote);
      }
    });
  };
  useEffect(() => {
    fetchNotes();
    reset();
  }, []);

  return (
    <div key={seed} className={`${props.style}`}>
      <h1 className="self-start text-3xl m-4">your Notes</h1>
      {Notes.length == 0
        ? "no notes yet "
        : Notes.map((result) => {
            return (
              <div
                className="text-white sm:w-1/2 "
                key={`${result._id + seed}`}
              >
                <div className="m-4 bg-white text-black h-fit flex flex-col items-center">
                  <h1 className="self-start text-2xl ml-2">{result.title}</h1>
                  <div className="bg-black w-full text-white border-2 rounded-lg pt-4 px-2">
                    <p className="w-full text-lg mb-2">{result.description}</p>
                    <div className="text-bold text-sm text-yellow-500 mb-3">
                      {result.tag}
                    </div>
                  </div>
                  <span className="text-white w-full">
                    <Button
                      text="Edit"
                      click={() => {
                        setHide("block");
                        setId(`${result._id}`);
                      }}
                    />
                    <Button text="Delete" click={() => {
                      OnDelete(result._id)
                    }} />
                  </span>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Notes;
