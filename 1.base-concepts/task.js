function solveEquation(a, b, c) {
    'use strict'
    let result = [];
    const discrimenant = (b ** 2) - (4 * a * c);

    if (discrimenant < 0) {
        return result;
    } else if (discrimenant === 0) {
        let root = (-b) / (2 * a);
        result.push(root);
        return result;
    } else {
        let firstRoot = ((-b) + Math.sqrt(discrimenant)) / (2 * a);
        let secondRoot = ((-b) - Math.sqrt(discrimenant)) / (2 * a);
        result.push(firstRoot);
        result.push(secondRoot);
        return result
    }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    'use strict'
    let totalAmount;
    let numberOfPercent = +percent;
    let numberOfContribution = +contribution;
    let numberOfAmount = +amount;
    if (isNaN(numberOfPercent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (isNaN(numberOfContribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }
    if (isNaN(numberOfAmount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }

    date = new Date(date).getTime();
    numberOfPercent = (numberOfPercent / 100) / 12;
    const today = new Date().getTime();
    const creditBody = numberOfAmount - numberOfContribution;
    const creditTimeMounth = Math.floor(((date - today) / (1000 * 3600 * 24)) / 30);

    let mountlyContribution = creditBody * ((numberOfPercent + (numberOfPercent / (((1 + numberOfPercent) ** creditTimeMounth) - 1))));

    totalAmount = (mountlyContribution * creditTimeMounth);

    if (creditBody === 0) {
        return 0;
    } else {
        return +totalAmount.toFixed(2);
    }
}