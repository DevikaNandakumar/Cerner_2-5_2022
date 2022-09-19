// cerner_2tothe5th_2022
const { groupBy } = require("lodash");

const recordset = [
  {
    roleId: 1,
    roleTypeId: 1,
    resourceId: 12,
    resourceName: "Doe,John",
    resourceEmail: "John.Doe@client.com",
  },
  {
    roleId: 1,
    roleTypeId: 1,
    resourceId: 1,
    resourceName: "Doe,Jane",
    resourceEmail: "Jane.Doe@client.com",
  },
  {
    roleId: 2,
    roleTypeId: 1,
    resourceId: 2,
    resourceName: "Bob,Robert",
    resourceEmail: "Robert.Bob@client.com",
  },
  {
    roleId: 3,
    roleTypeId: 1,
    resourceId: 4,
    resourceName: "Little,Stuart",
    resourceEmail: "Stuart.Little@client.com",
  },
];

//Tranform function for converting the array of objects into a nested array of objects, grouping them by roleId
let result = Object.entries(groupBy(recordset, "roleId"));
result = result.map((resourceItem) => ({
  roleId: Number(resourceItem[0]),
  resources: resourceItem[1],
}));
console.info("Transformed Object", result);
