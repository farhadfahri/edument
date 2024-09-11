function generateNumbers() {
  const numbers = [];
  for (let i = 0; i < 1000; i++) {
    numbers.push(i);
  }
  return numbers;
}

function sumOfEvenSquares(numbers: number[]): number {
  return numbers.reduce((accumulatedSum, value) => {
    if (value % 2 === 0) {
      return accumulatedSum + value ** 2;
    }
    return accumulatedSum;
  }, 0);
}

const numbers = generateNumbers();

console.log(sumOfEvenSquares(numbers));
