import React, { Component } from "react";
import Display from "./components/DisplayBoard";
import "./App.css";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      strike: 0,
      ball: 0,
      hit: 0,
      foul: 0
    };
  }

  strikeCounter = () => {
    this.setState({
      strike: this.state.strike + 1
    })
  };

  ballCounter = () => {
    this.setState({
      ball: this.state.ball + 1
    })
  };

  foulCounter = () => {
    this.setState({
      foul: this.state.foul + 1
    })
  };

  hitCounter = () => {
    this.setState({
      hit: this.state.hit + 1
    })
  };

  render() {

    return (
      <div className="App">
        <Display
        state={this.state}
         strike={this.strikeCounter}
          ball={this.ballCounter}
           foulr={this.foulCounter}
            hit={this.hitCounter} />
      </div>
    );
  }
}

export default App;
