function addNewAlarms() {
    const timeInput = document.getElementById('time-input');
    const textInput = document.getElementById('text-input');
    const btn = document.getElementById('btn');
    const btnStop = document.getElementById('btn-stop');
    let id = 0;
    const myNewAlarm = new AlarmClock();

    const myNewCallback = (input) => {
        const inputValue = input;


    }

    btn.addEventListener('click', () => {
        if (timeInput.value === '' && textInput === '') {
            event.preventDefault();
            btn.classList.remove('btn-primary')
            btn.classList.add('btn-danger')
        } else {
            event.preventDefault()
            id += 1;
            myNewAlarm.addClock(timeInput.value, myNewCallback, id);
            myNewAlarm.start();
            console.log(id)
        }
    })

    btnStop.addEventListener('click', () => {
        event.preventDefault();
        myNewAlarm.stop();

    })
}


function modalParams() {
    const alarmModal = document.getElementById('alarm-modal');
    const alarmModalBtnClose = document.getElementById('modal-close');
    const alarmModalBtnOpen = document.getElementById('modal-open');
    const alarmModalBtnCloseCross = document.getElementById('modal-close-cross')

    alarmModalBtnOpen.addEventListener('click', () => {
        alarmModal.classList.remove('closed');
        alarmModal.classList.add('opened');
    })

    alarmModalBtnClose.addEventListener('click', () => {
        alarmModal.classList.remove('opened');
        alarmModal.classList.add('closed');
    });

    alarmModalBtnCloseCross.addEventListener('click', () => {
        alarmModal.classList.remove('opened');
        alarmModal.classList.add('closed');
    });
}

modalParams();
addNewAlarms();