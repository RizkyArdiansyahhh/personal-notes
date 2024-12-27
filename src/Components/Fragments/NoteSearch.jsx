/* eslint-disable react/prop-types */
import React from "react";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  onSearchChange(e) {
    this.setState(() => {
      return {
        search: e.target.value,
      };
    });
  }
  handleSubmitSearch(e) {
    e.preventDefault();
    this.props.searchNotes(this.state.search);
    this.setState({
      search: "",
    });
  }
  render() {
    return (
      <form action="#" onSubmit={this.handleSubmitSearch}>
        <div className="flex flex-row gap-x-2">
          <Input
            type="text"
            placeholder="Cari Catatan..."
            value={this.state.search}
            style="w-96"
            onChange={this.onSearchChange}
          />
          <Button
            type="submit"
            style="bg-primary border border-transparent rounded-md px-3 py-2 hover:bg-white hover:border-primary transition duration-200"
          >
            Cari
          </Button>
        </div>
      </form>
    );
  }
}

export default NoteSearch;
