
function weekCheck() {

    let weekdayAsString: string | null = null;
    let weekdayAsNumber: number = Number(window.prompt("Please insert a number from 1 to 7"));

    switch (weekdayAsNumber) {
        case 1:
            weekdayAsString = 'Montag';
            break;
        case 2:
            weekdayAsString = 'Dienstag';
            break;
        case 3:
            weekdayAsString = 'Mittwoch';
            break;
        case 4:
            weekdayAsString = 'Donnerstag';
            break;
        case 5:
            weekdayAsString = 'Freitag';
            break;
        case 6:
            weekdayAsString = 'Samstag';
            break;
        case 7:
            weekdayAsString = 'Sonntag';
            break;
        default:
            console.error("Weekday must be between 1 and 7");
    }

    if (weekdayAsString) {
        console.log(`Der Wochentag ist: ${weekdayAsString}`);
    }
}

const submitBtn = document.querySelector("#showWeekDayBtn") as HTMLElement;
if (submitBtn) {
    submitBtn.addEventListener('click', e => {
        weekCheck();
    })
}