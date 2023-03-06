// task 1
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }

// task 2

function squareSum(numbers) {
    return numbers.reduce(function(sum, num) {
      return sum + (num * num);
    }, 0);
  }

  // task 3

  function nearestSq(n) {
    const sqrt = Math.sqrt(n);
    const lowerSq = Math.floor(sqrt) ** 2;
    const upperSq = Math.ceil(sqrt) ** 2;
    return n - lowerSq < upperSq - n ? lowerSq : upperSq;
  }
  
  // task 4

  function solution(str){
    return str.split('').reverse().join('');  
  }

  // task 5

  function addLength(str) {
    const words = str.split(" ");
    const result = [];
    for (let i = 0; i < words.length; i++) {
      result.push(words[i] + " " + words[i].length);
    }
    return result;
  }

  // task 6

  function mango(quantity, price) {
    const offerQuantity = Math.floor(quantity / 3) * 2;
    const regularQuantity = quantity % 3;
    const totalQuantity = offerQuantity + regularQuantity;
    return totalQuantity * price;
  }
  
  // task 7

  function litres(time) {
    return Math.floor(time * 0.5);
  }

  // task 8

  function invert(array) {
    return array.map(x => -x);
  }

  // task 9

  function powersOfTwo(n){
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  
  // task 10

  function grow(arr) {
    return arr.reduce((acc, curr) => acc * curr);
  }
  