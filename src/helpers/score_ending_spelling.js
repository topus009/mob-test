const score_ending_spelling = (num) => {
  const str = String(num);
  const prefix = ['а','ов'];
  let result = num + ' балл';

  if (num <= 10) {
    if (num === 0) result += prefix[1];
    if (num === 1) result = result;
    if (num >= 2 && num <= 4) result += prefix[0];
    if (num > 4) result += prefix[1];
  }
  if (num > 10 && num <= 20) {
    result += prefix[1];
  }
  if (num > 20) {
    if (+str[1] === 0) result += prefix[1];
    if (+str[1] === 1) result = result;
    if (+str[1] >= 2 && +str[1] <= 4) result += prefix[0];
    if (+str[1] > 4) result += prefix[1];
  }
  return result;
}

export default score_ending_spelling;