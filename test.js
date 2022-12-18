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

// let a = fromRootToEquation(1, 4)
let abc = ABC ({
  a: 1,
  b: 1,
  c: -2
})

console.log(abc)
console.log(fromRootToEquation(5, -2))
console.log(
  //x.coordinates
)