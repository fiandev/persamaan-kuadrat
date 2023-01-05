const { REGEX_OPERATIONS, FORMAT_EQUATION } = require("../constants/regex.js");

const hasVariable = (attribute, name) => {
  return new RegExp(`(${ name })+`).test(attribute)
}

const clearString = (str, prefix = "x") => str.replace(new RegExp(`(${ prefix })+`), "")

const attributes = (equation) => {
  let match = equation.match(FORMAT_EQUATION);
  if (!match) throw "invalid equation";
  
  const [left, right] = equation.split("=");
  const varname = "x";
  
  let descrute = left.replace(/(\+)+/, "").split(" ");
  let result = {
    variable: descrute.map((section) => hasVariable(section, varname) ? section : null ).filter((v) => !!v),
    constant: descrute.map((section) => !hasVariable(section, varname) ? section : null ).filter((v) => !!v).map(v => Number(v))
  }
  
  return result
}

// Example
// (x – x1) (x – x2) = 0
const fromRootToEquation = (x1, x2) => {
  let left = ["x", -x1];
  let right = ["x", -x2];
  let temp = [];
  for (let i = 0; i < left.length; i++) {
    let v1 = left[i]
    let res = right.map((v2) => {
      if ( isNaN(v1) && isNaN(v2) ) return v1 + "²";
      if ( isNaN(v1) ) return  v2 + v1;
      if ( isNaN(v2) ) return  v1 + v2;
      if ( !isNaN(v1) && !isNaN(v2) ) return v2 * v1;
    })
    
    temp.push(res)
  }
  
  let arr = temp.toString().split(",").filter((v) => v !== ",")
  let result = arr.map((val, index, arr) => {
    let prev = arr[index > 0 ? index - 1 : 0];
    
    // except index 0
    if (val === prev) return val;
    
    if ( hasVariable(val, "x") && hasVariable(prev, "x") ) {
      let v1 = Number(clearString(val))
      let v2 = Number(clearString(prev))
      return !isNaN(v1 + v2) ? ((v1 + v2) + "x").split("-").join("- ") : NaN;
    }
    
    
    return Number(val) > 0 ? `+ ${ val }` : val.toString().split("-").join("- ")
  }).map((v) => {
    if ( /^(\d+)\s?\x/.test(v) ) return `+ ${v}`;
    else return v;
  }).filter((v) => v.toString() !== "NaN");
  
  let equation = result.toString().split(",").join(" ");
  return {
    equation: equation,
    general: `${ equation } = 0`
  }
}

module.exports = {
  attributes,
  fromRootToEquation,
  hasVariable,
  clearString
}