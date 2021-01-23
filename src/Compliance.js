import React from "react";
class Compliance extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.comp.complianceChecks.map((el) => (
          <div key={el}>
            {Object.entries(el)[0][0].charAt(0).toUpperCase() +
              Object.entries(el)[0][0].substring(1)}
            ({Object.entries(el)[0][1]})
          </div>
        ))}
      </div>
    );
  }
}
export default Compliance;
