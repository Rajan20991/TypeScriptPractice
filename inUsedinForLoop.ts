type Circle = { radius: number };
type Rectangle = { width: number; height: number };
type Shape = Circle | Rectangle;

function calculateArea(shape: Shape) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}

const circle: Circle = { radius: 5 };
const rectangle: Rectangle = { width: 4, height: 6 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
