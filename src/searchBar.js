import React, { Component } from "react";
import ImageList from "./imageList";
import unsplash from "./api/unsplash";
import { debounce } from "lodash";

class SearchBar extends Component {
  state = {
    term: "",
    images: []
  };

  // onFormSubmit = event => {
  //   event.preventDefault();

  //   this.props.onSubmit(this.state.term);
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.term, "state");
    console.log(prevState.term, "prevState");
  }

  onSearchSubmit = debounce(async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(response);
  }, 500);

  handleChange = term => {
    this.setState({ term }, () => this.onSearchSubmit(this.state.term));
  };

  // onSubmitDogs = debounce(() => {
  //   //this.handleChange.cancel();
  //   this.setState({
  //     term: "dogs"
  //   });

  //   this.props.onSubmit(this.state.term);
  // }, 500);

  render() {
    return (
      <div className="ui segment">
        <button onClick={this.onSubmitDogs}>Search for dogs</button>
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              //onChange={e => this.setState({ term: e.target.value })}
              onChange={e => this.handleChange(e.target.value)}
            />
          </div>
        </form>
        <div style={{ marginTop: "20px" }} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default SearchBar;
