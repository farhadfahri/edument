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

function robotMover() {
  // get values from cli after verifying logic
  const height = 5;
  const width = 5;
  const commands = "RFLFFLRF";
  const position: Position = { x: 0, y: 0, orientation: "E" };

  const roomSize: RoomSize = { width, height };

  // left turns

  const leftTurns: { [key in Orientation]: Orientation } = {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  };

  // right turns
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

  return {
    x: position.x,
    y: position.y,
    orientation: position.orientation,
  };
}

const position: Position = robotMover();

console.log("result", position);
