import React from "react";
import { CardList } from "./components/card-list/card-list";
import SearchBox from "./components/search-box/serach-box";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //binding the context of component with functions
    //this.handelChange = this.handelChange.bind(this);
  }

  componentDidMount() {
    async function myFetch() {
      return await fetch("https://jsonplaceholder.typicode.com/userspopo");
    }
    myFetch()
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((e) => console.log(e));
  }

  handelChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="app">
        <h1>Monsters rolodex</h1>
        <SearchBox
          placeholder="Seach Your Monsters"
          handelchange={this.handelChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
export default App;
