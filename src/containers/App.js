import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      duck: robots,
      searchfield: "",
    };
  }

  // doesnt do anything really..
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ duck: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // Logs what the user has typed
    // console.log(event.target.value);
  };
  render() {
    const { duck, searchfield } = this.state;
    const filteredRobots = duck.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });

    return !duck.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2"> ROBOT FRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
