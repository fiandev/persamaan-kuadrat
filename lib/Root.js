const SquareRoot = (...args) => {
  // filter numbers
  args.filter((arg) => !isNaN(arg));
  
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