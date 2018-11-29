import React, { Component } from "react";
import SearchBar from "./searchBar";
import "./App.css";
import unsplash from "./api/unsplash";
import ImageList from "./imageList";
import { debounce } from "lodash";
class App extends Component {
  state = {
    images: []
  };

  // onSearchSubmit = debounce(async term => {
  //   const response = await unsplash.get("/search/photos", {
  //     params: { query: term }
  //   });
  //   this.setState({ images: response.data.results });
  //   console.log(response);
  // }, 1500);

  // shouldComponentUpdate()
  render() {
    console.log(this.props.term);
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
