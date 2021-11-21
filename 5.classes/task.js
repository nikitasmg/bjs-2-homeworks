//Задача № 1

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(number) {
        if (number < 0) {
            this.state = 0;
        } else if (number > 100) {
            this.state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }


}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//Задача №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(el => el[type] === value);
        if (result) {
            return result;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let result = this.books.find(el => el.name === bookName);
        if (result) {
            this.books.splice(this.books.indexOf(result), 1)
            return result;
        } else {
            return null;
        }
    }
}

//Задача №3

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjectsArr = [];
    }

    addMark(mark, subject) {
        let result;
        if (mark >= 1 && mark <= 5) {
            if (this.subjectsArr.some(el => el.name === subject)) {
                this.subjectsArr.find(el => el.name === subject).addMarks(mark);
            } else {
                result = new Subjects(subject);
                result.addMarks(mark);
                this.subjectsArr.push(result);
            }

        } else {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
    }

    getAverageBySubject(name) {
        let marksArray = this.subjectsArr.find(el => el.name === name).marks;
        if (marksArray !== undefined) {
            return (marksArray.reduce((a, b) => a + b)) / marksArray.length;
        } else {
            return "Несуществующий предмет";
        }
    }

    getAverage() {
        let result = [];
        this.subjectsArr.forEach(el => result.push(el.marks));
        return (result.flat(Infinity)).reduce((a, b) => a + b) / result.flat(Infinity).length;
    }

    exclude(reason) {
        delete this.subjectsArr;
        this.exclude = reason;
    }
}

class Subjects {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }
    addMarks(mark) {
        if (this.marks === undefined) {
            this.marks = [mark];
        } else {
            this.marks.push(mark);
        }

    }
}