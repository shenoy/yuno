const buildings = [
  {
    propertyId: 1,
    name: "The Shard",
    complianceChecks: [{ electrical: 2500.5 }, { structural: 7250 }],
    nextCheckOn: "2021-03-04T12:13:14Z",
  },
  {
    propertyId: 2,
    name: "The Gherkin",
    complianceChecks: [{ fire: 1000 }, { electrical: 3000.25 }],
    nextCheckOn: "2021-04-21",
  },
  {
    propertyId: 3,
    name: "The Walkie Talkie",
    complianceChecks: [{ fire: 1500.25 }, { structural: 7000 }],
    nextCheckOn: "2021-09-20",
  },
];

const compl = buildings
  .map((x) => x.complianceChecks)
  .flat()
  .map((x) => Object.values(x))
  .flat()
  .reduce((a, b) => a + b, 0);
// console.log("values =========", val);
