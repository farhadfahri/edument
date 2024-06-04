# Project Setup

1. Clone repository
2. Navigate to folder
3. install all dependencies 

```shell
npm install
```

It will install all dependencies needed to run the program

## Test cases

1. copy and paste test case1

```typescript 
robotMover("55", "12N", "RFRFFRFRF");
```
- run the program
```shell
npm run start
```

it should log 

```typescript 
{ x: 1, y: 3, orientation: 'N' }
```

2. copy and paste test case2

```typescript 
robotMover("55", "00E", "RFLFFLRF");
```

- run the program
```shell
npm run start
```

it should log 

```typescript 
{ x: 3, y: 1, orientation: 'E' }
```

3. copy and paste test case3

```typescript 
robotMover("33", "22N", "FFLFFRF");
```

- run the program
```shell
npm run start
```

it should log 

```typescript 
{ x: 0, y: -1 }
 throw new Error("out of bound error");
```

