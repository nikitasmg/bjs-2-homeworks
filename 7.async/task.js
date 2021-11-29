class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Параметр id не передан');
        }
        if (this.alarmCollection.some(el => el.id === id)) {
            console.error('Данный id уже используется');
        } else {
            this.alarmCollection.push({
                'id': id,
                callback,
                'time': time,
            })
        }
    }



    removeClock(id) {
        const needToDelete = this.alarmCollection.indexOf(el => el.id === id);
        if (needToDelete) {
            this.alarmCollection.splice(needToDelete, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return hours + ':' + minutes;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormarredTime()) {
            alarm.callback();
        }
    }

    start() {
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => this.checkClock(alarm))
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }

    }

    printAlarms() {
        this.alarmCollection.forEach(el => console.log(el.id + '-' + el.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}


//2

function testCase() {
    const alarm = new AlarmClock();
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

    const callback1 = () => {
        console.log('Wake Up');
        setTimeout(() => { alarm.removeClock(1) }, 5000);
    }

    const callback2 = () => {
        console.log('Wake up, while you can still have a breakfast');
        alarm.removeClock(2);
    }
    const callback3 = () => {
        console.log('OK, now you cant have a breakfast, WAKE UP');
        alarm.stop();
        alarm.clearAlarms();
        alarm.printAlarms();
    }
    alarm.addClock(hours + ':' + minutes, callback1, 1);
    alarm.addClock(hours + ':' + (+minutes + 1), callback2, 2);
    alarm.addClock(hours + ':' + (+minutes + 2), callback3, 3);
    alarm.printAlarms();
    alarm.start();
}