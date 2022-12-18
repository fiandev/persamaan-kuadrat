const ABC = ({ a, b, c }) => {
  let step_left = (0 - b)
  let step_right = Math.sqrt( ((b**2) - (4 * a * c)) )
  
  return  {
      x1: (step_left + step_right) / (2 * a),
      x2: (step_left - step_right) / (2 * a)
  }
}

module.exports = ABC