// console.log(`%c BOM `, "background: red;clor: gray;");


// let count = 5;

// function runTimer() {
//     if (count > 0) {
//         console.log("Timer Call!");
//         count--;
//     } else {
//         clearInterval(timerNo)
//     }
// }

// const timerNo = setInterval(runTimer, 2000)

let intervalId: number | undefined;
let timeLeft: number = 0;

const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const pauseBtn = document.getElementById('pauseBtn') as HTMLButtonElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
const restartBtn = document.getElementById('restartBtn') as HTMLButtonElement;
const minutesInput = document.getElementById('minutesInput') as HTMLInputElement;
const timerDisplay = document.getElementById('timerDisplay') as HTMLElement;

const updateDisplay = (minutes: number, seconds: number): void => {
    timerDisplay.textContent = minutes.toString().padStart(2, "0") + ":" +
        seconds.toString().padStart(2, "0")

    document.title = timerDisplay.textContent + " - Timer";

    if (seconds + minutes == 0) {
        document.title = "Timer";
    }
}

const startTimer = (): void => {
    if (intervalId) return;

    if (timeLeft == 0) {
        const minutes = parseInt(minutesInput.value, 10);
        if (isNaN(minutes) || minutes <= 0) return;

        timeLeft = minutes * 60 - 1;
    }

    intervalId = setInterval(() => {
        const minutesLeft = Math.floor(timeLeft / 60);
        const secondsLeft = timeLeft % 60;
        updateDisplay(minutesLeft, secondsLeft);

        if (timeLeft <= 0) {
            clearInterval(intervalId);
            intervalId = undefined;
        } else {
            timeLeft--;
        }
    }, 1000);
}

const pauseTimer = (): void => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
    } else {
        startTimer()
    }
}

const restartTimer = (): void => {
    pauseTimer();
    timeLeft = 0;
    minutesInput.value = "";
}

const resetTimer = (): void => {
    timeLeft = 0;
    pauseTimer();
    updateDisplay(0, 0);
    minutesInput.value = "";
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
restartBtn.addEventListener('click', restartTimer);
