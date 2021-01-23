import React from "react";
import "./App.css";
import Table from "./Table";
import propertyList from "./properties.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Table buildings={propertyList} />
      </div>
    );
  }
}

export default App;
