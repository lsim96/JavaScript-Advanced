let digitsOfNum = (num) => {
  let i = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    i++;
  }
  return i;
};

let oddOrEven = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

let posOrNeg = (num) => {
  if (Math.sign(num) > 0) {
    return "Positive";
  } else if (Math.sign(num) < 0) {
    return "Negative";
  }
};

let finalFunction = (num) => {
  let result1 = digitsOfNum(num);
  let result2 = oddOrEven(num);
  let result3 = posOrNeg(num);
  return {
    result1,
    result2,
    result3,
  };
};

console.log(finalFunction(12345));
