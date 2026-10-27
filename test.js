function findMaxScore(scores) {
  let max = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
    }
  }

  return max;

}

console.log(findMaxScore([80, 45, 90, 60, 75]));
console.log(findMaxScore([20, 30, 40]));
console.log(findMaxScore([100, 80, 60]));
console.log(findMaxScore([60]));
console.log(findMaxScore([-10, -5, -20]));