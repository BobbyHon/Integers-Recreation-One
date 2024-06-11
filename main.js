function listSquared(m, n) {
    let answer = []
    if (m == 1){
      answer.push([1,1])
      m = 2
    }
    for (let i = m; i < n + 1; i++){
      let divisors = []
      for (let j = 1; j < Math.pow(i, 1/2); j++){
        if (j * j == i) divisors.push(j)
        else if (i / j % 1 == 0)
          {
            divisors.push(j)
            divisors.push(i / j)
          }
      }
      let reducedNum = divisors.reduce((sum, x) => sum + Math.pow(x, 2), 0)
  
      if (Math.pow(reducedNum, 1/2) % 1 == 0) answer.push([i, reducedNum])
    }
    return answer
  }