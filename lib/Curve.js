const { REGEX_OPERATIONS, FORMAT_EQUATION } = require("../constants/regex.js");
const ABC = require("../utils/ABC.js");
const { hasVariable, clearString, attributes } = require("./QuadraticEquation.js");

const crossPointX = (equation) => {
  if ( !FORMAT_EQUATION.test(equation) ) throw new Error("invalid equation");
  let [a, b, c] = equation.split(" ").map((v) => {
    if ( hasVariable(v, "x") ) return clearString(clearString(v, "x"), "²") !== "" ? ( !isNaN(Number(clearString(clearString(v, "x"), "²"))) ? Number(clearString(clearString(v, "x"), "²")) : 0 - Number(clearString(clearString(v, "x"), "²").replace(REGEX_OPERATIONS, "")) ) : 1 ;
    else return v
  }).filter((v) => v !== "").map((v) => Number(v))
  const object = {
    a: a,
    b: b,
    c: c
  }
  const { x1, x2 } = ABC(object)
  return {
    coordinates: [
        {
          x: x1,
          y: 0
        },
        {
          x: x2,
          y: 0
        }
      ]
  }
}

const crossPointY = (equation, x = 0) => {
  // if ( !FORMAT_EQUATION.test(equation) ) throw new Error("invalid equation");
  let [a, b, c] = equation.split(" ").map((v) => {
    if ( hasVariable(v, "x") ) return clearString(clearString(v, "x"), "²") !== "" ? ( !isNaN(Number(clearString(clearString(v, "x"), "²"))) ? Number(clearString(clearString(v, "x"), "²")) : 0 - Number(clearString(clearString(v, "x"), "²").replace(REGEX_OPERATIONS, "")) ) : 1 ;
    else return v
  }).filter((v) => v !== "").map((v) => Number(v))
  
  let y = eval(`${(x ** 2)} + ${ (b * x) } ${ c < 0 ? c : "+" + c }`);
  
  return {
    coordinate: {
      x: 0,
      y: y
    }
  }
}

const topPoint = ({ a, b, c }) => {
  // x puncak
  let xP = (0 - b) / (2 * a)
  // y puncak
  let yP = ((b**2) - (4 * a * c)) / 4 * a
  return {
    xP: xP,
    yP: yP
  }
}

const fromTopToEquation = (Xp, Yp) => {
  return 
}

module.exports = {
  crossPointX,
  crossPointY,
  topPoint
}