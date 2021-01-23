import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const initialCost = this.props.buildings
      .map((x) => x.complianceChecks)
      .flat()
      .map((x) => Object.values(x))
      .flat()
      .reduce((a, b) => parseFloat(a) + parseFloat(b));
    this.state = { input: "", cost: initialCost };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.value) {
      console.log(e.target.value);
      this.setState({ input: e.target.value });
    } else if (isNaN(this.state.input)) {
      alert("Please enter a valid number");
    } else {
      alert("Do you want to enter a new number?");
    }
  }
  handleSubmit(e) {
    console.log(this.state.input);
    this.setState({ cost: parseFloat(this.state.input) + this.state.cost });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <form onSubmit={this.handleSubmit}>
            <label>Enter additional costs: </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="input" value="Submit">
              Submit
            </button>
          </form>
        </div>
        <div className="result">
          <div>Total yearly costs: £{this.state.cost}</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
