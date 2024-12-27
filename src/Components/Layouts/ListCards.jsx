/* eslint-disable react/prop-types */
import Card from "../Fragments/Card";
import { showFormattedDate } from "../../utils";

const ListCards = (props) => {
  const { notes, onDelete } = props;

  return (
    <div className="container flex flex-wrap gap-6 m-0">
      {notes.length === 0 ? (
        <div className="h-screen flex justify-center items-center w-4/6">
          {" "}
          <p className="text-3xl font-bold text-slate-700">
            Ups! Sepertinya Anda belum menambahkan catatan.
          </p>
        </div>
      ) : (
        notes.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            content={note.body}
            time={showFormattedDate(note.createdAt)}
            id={note.id}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default ListCards;
