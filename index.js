const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Use reduce to sum up the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Starting with an initial value of 0


// Export the variable if needed
module.exports = totalBatteries;
