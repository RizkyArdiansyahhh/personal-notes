import React from "react";
import ListCards from "../Components/Layouts/ListCards";
import { getInitialData } from "../utils/index";
import CreateNote from "../Components/Layouts/CreateNote";
import SearchNotesLayout from "../Components/Layouts/SeacrhNotesLayout";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.searchNoteHandler = this.searchNoteHandler.bind(this);
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
  searchNoteHandler(title) {
    if (title.trim() === "") {
      this.setState(() => {
        return {
          notes: getInitialData(),
        };
      });
    } else {
      const filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
      this.setState(() => {
        return {
          notes: filteredNotes,
        };
      });
    }
  }

  render() {
    return (
      <div className="flex flex-row h-screen w-screen">
        <div className="w-4/6 h-full overflow-y-scroll">
          <SearchNotesLayout
            searchNotes={this.searchNoteHandler}
          ></SearchNotesLayout>
          <div className="w-full h-[1px] bg-slate-600 mb-10"></div>
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
