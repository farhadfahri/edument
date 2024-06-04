type Orientation = "N" | "E" | "S" | "W";

interface RoomSize {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
  orientation: Orientation;
}

function isOutOfBound(x: number, y: number, roomSize: RoomSize) {
  return x < 0 || x >= roomSize.width || y < 0 || y >= roomSize.height;
}

function robotMover(grid: string, startPos: string, commands: string) {
  const [width, height] = grid;
  const [x, y, orientation] = startPos;

  const position: Position = {
    x: parseInt(x),
    y: parseInt(y),
    orientation: orientation as Orientation,
  };

  const roomSize: RoomSize = {
    width: parseInt(width),
    height: parseInt(height),
  };

  const leftTurns: { [key in Orientation]: Orientation } = {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  };

  const rightTurns: { [key in Orientation]: Orientation } = {
    N: "E",
    E: "S",
    S: "W",
    W: "N",
  };

  const movements: { [key in Orientation]: [number, number] } = {
    N: [0, -1],
    E: [1, 0],
    S: [0, 1],
    W: [-1, 0],
  };

  for (const command of commands) {
    if (command === "L") {
      position.orientation = leftTurns[position.orientation];
    }

    if (command === "R") {
      position.orientation = rightTurns[position.orientation];
    }

    if (command === "F") {
      const [x, y] = movements[position.orientation];

      position.x += x;
      position.y += y;

      if (isOutOfBound(position.x, position.y, roomSize)) {
        console.log({
          x: position.x,
          y: position.y,
        });
        throw new Error("out of bound error");
      }
    }
  }

  console.info({
    x: position.x,
    y: position.y,
    orientation: position.orientation,
  });
}

// Uncomment to run test cases

//robotMover("55", "12N", "RFRFFRFRF");
//robotMover("55", "00E", "RFLFFLRF");
//robotMover("33", "22N", "FFLFFRF");
