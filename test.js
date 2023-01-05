const modules = require("./index")
const { 
  ABC, 
  attributes, 
  SquareRoot, 
  fromRootToEquation, 
  crossPointX,
  crossPointY,
  topPoint
} = require("./index")

let a = fromRootToEquation(1, -6)
console.log(a)