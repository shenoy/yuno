function ComplianceCheck(props) {
  return (
    <div>
      <div className="title">Compliance Safety Checks required</div>
      <div>
        {props.buildings.map((el) => (
          <div key={el}>
            <div className="box2">
              The {el.name}, next due on {el.nextCheckOn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComplianceCheck;
