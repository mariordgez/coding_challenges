var romanToInt = function (s) {
  const myRom = s.split('');
  let total = 0;
  for (let i = 0; i < myRom.length; i++) {
    if (myRom[i] === 'I') {
      if (myRom[i + 1] === 'V' || myRom[i + 1] === 'X') total -= 1;
      else total += 1;
    }
    if (myRom[i] === 'V') {
      total += 5;
    }
    if (myRom[i] === 'X') {
      if (myRom[i + 1] === 'L' || myRom[i + 1] === 'C') total -= 10;
      else total += 10;
    }
    if (myRom[i] === 'L') {
      total += 50;
    }
    if (myRom[i] === 'C') {
      if (myRom[i + 1] === 'D' || myRom[i + 1] === 'M') total -= 100;
      else total += 100;
    }

    if (myRom[i] === 'D') {
      total += 500;
    }
    if (myRom[i] === 'M') {
      total += 1000;
    }
  }
  return total;
};
var intToRoman = function (num) {
  const strArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const valArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanStr = '';
  let currentTotal = num;
  for (let i = 0; i < strArr.length; i++) {
    while (valArr[i] <= currentTotal) {
      currentTotal -= valArr[i];
      romanStr += strArr[i];
    }
  }
  return romanStr;
};
