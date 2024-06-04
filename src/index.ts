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
  let x = 5;
  let y = 5;
  const commands = "RFLFFLRF";

  const roomSIze: RoomSize = { width: x, height: y };
}

robotMover();
