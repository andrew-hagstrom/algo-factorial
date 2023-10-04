function factorial(num) {
  let answer = 1;
  if (num < 0){
    return 0;
  }
  else if(num === 0 || num === 1) {
    return answer;

  } else {
      for(let i = num; i > 1; i--) {
        answer = answer * i;
      }
    return answer
  }
  }

module.exports = factorial;


