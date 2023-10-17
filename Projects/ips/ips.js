// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  function valueOf(array) {
    array = array.reverse();
    let value = 0;
    for (let i = 0; i < array.length; i++) {
      value += Number(array[i]) * (256 ** (i));
    }
    return value;
  }

  return valueOf(end.split(".")) - valueOf(start.split("."));
}

console.log(ipsBetween("10.11.12.13", "10.11.13.0"));
console.log(ipsBetween("150.0.0.0", "150.0.0.1",));
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));
console.log(ipsBetween("170.0.0.0", "170.1.0.0"));
console.log(ipsBetween("180.0.0.0", "181.0.0.0"));


