function fireFilter(el) {
  let arr = el.complianceChecks.filter((x) => x.hasOwnProperty("fire"));
  return arr.length > 0;
}

function FireCheck(props) {
  return (
    <div>
      <div className="title">Fire Safety Checks required</div>
      {props.buildings
        .filter((el) => fireFilter(el))
        .map((el) => (
          <div key={el}>
            <div className="box2">
              The {el.name}, next due on {el.nextCheckOn}
            </div>
          </div>
        ))}
    </div>
  );
}

export default FireCheck;
