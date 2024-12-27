import React from "react";
import ListCards from "../Components/Layouts/ListCards";
import { getInitialData } from "../utils/index";
import CreateNote from "../Components/Layouts/CreateNote";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }

  addNoteHandler(noteNew) {
    const { title, body } = noteNew;
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
    console.log(this.state.notes);
  }

  deleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        notes,
      };
    });
  }

  render() {
    return (
      <div className="flex flex-row h-screen w-screen">
        <div className="w-4/6 h-full overflow-y-scroll">
          <ListCards
            notes={this.state.notes}
            onDelete={this.deleteNoteHandler}
          ></ListCards>
        </div>
        <div className=" w-2/6 ">
          <CreateNote addNote={this.addNoteHandler}></CreateNote>
        </div>
      </div>
    );
  }
}

export default HomePage;
