/* eslint-disable react/prop-types */
import React from "react";
import Input from "../Elements/Input/Input";
import InputTextArea from "../Elements/Input/InputTextArea";
import Button from "../Elements/Button";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTitleChange(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }
  onBodyChange(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }
  render() {
    return (
      <div>
        <form
          action="#
                  "
          onSubmit={this.handleSubmit}
        >
          <div className="flex flex-col gap-y-7 mt-10">
            <Input
              type="text"
              placeholder="Ini adalah Judul"
              value={this.state.title}
              onChange={this.onTitleChange}
            />

            <InputTextArea
              name="note"
              placeholder="Tuliskan Catatan Kamu Disini"
              value={this.state.body}
              onChange={this.onBodyChange}
            />
            <Button
              type="submit"
              style="bg-primary rounded-md py-4 border border-transparent hover:bg-white hover:border-primary hover:shadow-sm transition duration-300"
            >
              Buat
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteInput;
