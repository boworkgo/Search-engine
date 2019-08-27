import React, { Component } from "react";
import "./GoogleReddit.css";
import meme from "./../assets/images/meme.jpg";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    };
  }

  changeHandler = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleKeyDown = e => {
    const baseUrl = "https://www.google.com/search?q=";
    if (e.key === "Enter") {
      window.open(baseUrl + encodeURI(this.state.query) + "+site:reddit.com");
    }
  };

  render() {
    return (
      <div id="search">
        <input
          type="text"
          name="query"
          onChange={this.changeHandler}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

class GoogleReddit extends Component {
  render() {
    return (
      <div className="googleReddit">
        <p className="title">Google Reddit</p>
        <div className="search">
          <Search />
        </div>
        <img src={meme} alt="meme" />
      </div>
    );
  }
}

export default GoogleReddit;
