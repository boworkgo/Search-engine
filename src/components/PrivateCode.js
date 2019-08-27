import React, { Component } from "react";

class Upload extends Component {
  render() {
    return (
      <form action="/upload" method="post" encType="multipart/form-data">
        <input type="file" name="code" id="fileinput" />
        <input type="submit" value="Upload" />
      </form>
    );
  }
}

class Search extends Component {
  state = {
    data: null,
    isLoading: false,
    query: ""
  };

  changeHandler = e => {
    this.setState({ query: e.target.value });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.setState({ isLoading: true });
      fetch("/execute/" + encodeURI(this.state.query))
        .then(response =>
          response
            .text()
            .then(text => this.setState({ data: text, isLoading: false }))
        )
        .catch(err => console.log(err));
    }
    this.setState({ isLoading: false });
  };

  getResults() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    if (!this.state.data) {
      return <div>No input exists</div>;
    } else {
      return <pre>{this.state.data}</pre>;
    }
  }

  render() {
    return (
      <div className="search">
        Your snippet of code:
        <input
          type="text"
          name="query"
          onChange={this.changeHandler}
          onKeyDown={this.handleKeyDown}
        />
        <div className="result">{this.getResults()}</div>
      </div>
    );
  }
}

class PrivateCode extends Component {
  render() {
    return (
      <div>
        Private Code
        <p className="description">
          Description: Search for files previously uploaded based on snippets of
          code.
        </p>
        <Upload />
        <Search />
      </div>
    );
  }
}

export default PrivateCode;
