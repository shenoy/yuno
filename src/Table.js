import React from "react";
import PropertyRow from "./PropertyRow";
import Calculator from "./Calculator";

class Table extends React.Component {
  render() {
    return (
      <div className="table">
        <h1>Yuno</h1>
        <PropertyRow buildings={this.props.buildings} />
        <Calculator buildings={this.props.buildings} />
      </div>
    );
  }
}
export default Table;
