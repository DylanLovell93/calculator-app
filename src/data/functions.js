const calc = (input) => {
  if (!input) {
    return '0';
  }
  let result = input;
  while (result.includes('X') || result.includes('÷')) {
    let index;
    let op = result.find((e, i) => {
      if (e === 'X' || e === '÷') {
        index = i;
        return e;
      }
    });
    if (op !== -1) {
      let answer =
        op === 'X'
          ? Number(result[index - 1]) * Number(result[index + 1])
          : Math.round(Number(result[index - 1]) / Number(result[index + 1]));
      result.splice(index - 1, 3, answer);
    }
  }
  while (result.includes('+') || result.includes('-')) {
    let index;
    let op = result.find((e, i) => {
      if (e === '+' || e === '-') {
        index = i;
        return e;
      }
    });
    if (op !== -1) {
      let answer =
        op === '+'
          ? Number(result[index - 1]) + Number(result[index + 1])
          : Number(result[index - 1]) - Number(result[index + 1]);
      result.splice(index - 1, 3, answer);
    }
  }
  return result;
};

const formatter = (input) => {
  return input;
};

export default { calc, formatter };
