/* eslint-disable react/prop-types */
import Card from "../Fragments/Card";
import { showFormattedDate } from "../../utils";
const ListCards = (props) => {
  const { notes, onDelete } = props;
  return (
    <div className="container flex flex-wrap gap-6  m-0">
      {notes.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          content={note.body}
          time={showFormattedDate(note.createdAt)}
          id={note.id}
          onDelete={onDelete}
        ></Card>
      ))}
    </div>
  );
};

export default ListCards;
