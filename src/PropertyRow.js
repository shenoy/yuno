import React from "react";
import Compliance from "./Compliance";
import TableHeader from "./TableHeader";
import FireCheck from "./FireCheck";
import ComplianceCheck from "./ComplianceCheck";
class PropertyRow extends React.Component {
  render() {
    return (
      <div className="tableWrapper">
        <TableHeader />
        {this.props.buildings.map((el, index) => (
          <div key={index} className="propertyRow">
            <div className="box">{el.propertyId}</div>
            <div className="box">{el.name}</div>
            <Compliance comp={el} />
            <div className="box">{el.nextCheckOn}</div>
          </div>
        ))}
        <div className="checkRow">
          <FireCheck buildings={this.props.buildings} />
          <ComplianceCheck buildings={this.props.buildings} />
        </div>
      </div>
    );
  }
}

export default PropertyRow;
