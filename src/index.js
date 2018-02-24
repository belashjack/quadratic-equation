module.exports = function solveEquation(equation) {
  let arrOfSquareRoots = [];
  let equationArray = equation.split(' ');
  let a = +equationArray[0], 
      b = equationArray[3] === '-' ? -equationArray[4]: +equationArray[4], 
      c = equationArray[7] === '-' ? -equationArray[8]: +equationArray[8];
  let D = b*b - 4*a*c;
  let squareRoot1 = Math.round((-b + Math.sqrt(D))/(2 * a));
  arrOfSquareRoots.push(squareRoot1);
  let squareRoot2 = Math.round((-b - Math.sqrt(D))/(2 * a));
  arrOfSquareRoots.push(squareRoot2);
  return arrOfSquareRoots.sort((a, b) => a - b);
}