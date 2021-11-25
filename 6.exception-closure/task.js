//Задача №1

function parseCount(value) {
    let intValue = Number.parseInt(value);
    if (isNaN(value)) {
        throw new Error('Невалидное значение');
    } else {
        return intValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value)

    } catch (e) {
        return (e);
    }
}

//Задача №2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b <= this.c) || (this.a + this.c <= this.b) || (this.b + this.c <= this.a)) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);

    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        const error = {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            },
            getArea() {
                return 'Ошибка! Треугольник не существует'
            },
        }
        return error;
    }
}