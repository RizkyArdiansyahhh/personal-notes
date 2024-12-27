/* eslint-disable react/prop-types */
import NoteSearch from "../Fragments/NoteSearch";

const SeacrhNotesLayout = (props) => {
  const { searchNotes } = props;
  return (
    <div className="flex flex-row justify-between items-center mb-7 mt-3 px-2">
      <p className="text-xl font-semibold">
        Notes<span className="text-primary">es!</span>
      </p>
      <NoteSearch searchNotes={searchNotes}></NoteSearch>
    </div>
  );
};
export default SeacrhNotesLayout;
