# Printing numbers

```typescript
const values: number[] = [
  /* An array of numbers */
];
let sum = 0;
values.map((value) => (sum += value));
console.log(sum);
```

## Is this the ideal way of solving this problem? If not - why?

- Assuming code is in global scope, there is a room for improvement.

- We are declaring sum in global scope, which can potentially introduce bug, someone (especially junior developers)
  can accidentally reassign sum variable

- We are iterating values array with map, which used for transforming array elements rather than accumulating.
- Map creates new array however it is unused in our case
- In case we need to sum values again we need write logic again.

## How could you solve this instead?

- First I would like to encapsulate the whole logic in a function
- Use iterator which does not create new array
- Make it reusable and semantic

1. First solution

```typescript
const values: number[] = [
  /* An array of numbers */
];

function sumValues(values) {
  let sum = 0;
  values.forEach((value) => (sum += value));
  return initialStart;
}

sumValues(values);
```

2. Second solution

- since we mentioned keyword accumulate values, we can utilize purpose built reduce solution
- It accumulates values into single result
- We are avoiding unnecessary array creation and memory usage.

```typescript
const values: number[] = [
  /* An array of numbers */
];

function sumValues(values) {
  return values.reduce((acc, value) => acc + value, 0);
}

sumValues(values);
```
