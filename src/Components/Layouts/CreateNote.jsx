/* eslint-disable react/prop-types */
import NoteInput from "../Fragments/NoteInput";

const CreateNote = (props) => {
  const { addNote } = props;
  return (
    <div className=" bg-white mr-0 h-full  w-full py-20 px-10">
      <h1 className="text-4xl w-2/3">Yuk, Catat Semua yang Penting di Sini!</h1>
      <NoteInput addNote={addNote}></NoteInput>
    </div>
  );
};
export default CreateNote;
