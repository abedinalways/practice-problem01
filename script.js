let value;
let remainder;
let inchValue;
function converter(height) {
  value = parseInt(height/12);
  remainder = height % 12;
  inchValue = remainder;
  let result = value + ' ft ' + inchValue + ' inch';
  return result;
  // console.log(`feet: ${value} inch: ${inchValue}`) 
}
let manHeight = converter(67);
console.log(manHeight);


