const ftoc = function(temperature) {
  const ans = (temperature - 32) * 5/9;  
  return +(Math.round(ans + "e+1") + "e-1");
};

const ctof = function(temperature) {
  const ans = (temperature * 9/5) + 32;
  return +(Math.round(ans + "e+1") + "e-1");
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
