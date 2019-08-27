import React, { Component } from "react";
import "./GoogleScholar.css";

class GoogleScholar extends Component {
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

      fetch("/googlescholar_backend/" + encodeURI(this.state.query))
        .then(response => response.json())
        .then(data => this.setState({ data: data, isLoading: false }))
        .catch(err => console.log(err));
    }
  };

  getResults() {
    if (this.state.isLoading) {
      return <div>Loading (takes a minute)...</div>;
    }
    if (this.state.data === null) {
      return <div>No input exists</div>;
    } else {
      var apiInfo = this.state.data;
      if (!apiInfo) {
        return <div>API broken</div>;
      } else if (apiInfo.length === 0) {
        return <div>API exists but no results</div>;
      } else {
        var arr = apiInfo.results;
        var finalString = "";
        arr.forEach(paper => {
          if (paper.title === "") {
            finalString += "Unknown title\n\n";
          } else {
            finalString += paper.title + " =>" + paper.url + "\n\n";
          }
        });
        return <pre>{finalString}</pre>;
      }
    }
  }

  render() {
    return (
      <div className="googleScholar">
        <p>Google Scholar Very Slow</p>
        <div id="search">
          <input
            type="text"
            name="query"
            onChange={this.changeHandler}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        {this.getResults()}
      </div>
    );
  }
}

export default GoogleScholar;
