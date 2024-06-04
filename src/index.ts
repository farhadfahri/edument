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
      console.log("turn left");

      console.log({
        x: position.x,
        y: position.y,
        position: position.orientation,
      });

      position.orientation = leftTurns[position.orientation];

      console.log({
        x: position.x,
        y: position.y,
        position: position.orientation,
      });
    }

    if (command === "R") {
      console.log("turn right");

      console.log({
        x: position.y,
        y: position.y,
        position: position.orientation,
      });
      position.orientation = rightTurns[position.orientation];

      console.log({
        x: position.y,
        y: position.y,
        position: position.orientation,
      });
    }

    if (command === "F") {
      console.log("forward");

      console.log({
        x: position.y,
        y: position.y,
        position: position.orientation,
      });

      const [x, y] = movements[position.orientation];
      console.log({ movements: [x, y] });

      position.x += x;
      position.y += y;

      console.log("after move");

      console.log({
        x: position.x,
        y: position.y,
        position: position.orientation,
      });

      if (x < 0 || x >= roomSize.width || y < 0 || y >= roomSize.height) {
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
    direction: position.orientation,
  };
}

robotMover();
