// Open Close Principle
import {Shape, SquareType} from "./OpenClose.types";


class Square implements SquareType {
    size: number;

    constructor(size) {
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle implements Shape {
    radius: number;

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect implements Shape {
    width: number;
    height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height
    }
}

class Triangle implements Shape {
    a: number;
    b: number;

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2
    }
}

/**
 * Клиентский код зависит от неизменного интерфейса Shape.
 */
class AreaCalculator {
    shapes: Shape[];

    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc
        }, 0)
    }
}


const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(10, 20),
    new Triangle(10, 15)
]);

console.log(calc.sum());

console.log(calc.sum());