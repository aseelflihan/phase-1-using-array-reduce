const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const sum = function (preValue, currentValue) {
    return preValue + currentValue;
  };
  
  const totalBatteries = batteryBatches.reduce(sum, 0);
  
  console.log(totalBatteries);