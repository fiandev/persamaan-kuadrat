const SquareRoot = (...args) => {
  args.forEach((argument, index) => {
    if ( isNaN(argument) ) throw new Error(`Parameter ${ index } is not number`);
  })
  
  const [Num, Quadrat] = args;
  let res = Math.sqrt(Num ** Quadrat);
  return {
    real: res,
    floor: Math.floor(res),
    round: Math.round(res),
    ceil: Math.ceil(res)
  }
}

module.exports = {
  SquareRoot
}