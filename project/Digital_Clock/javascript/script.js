import { DigitalClock } from "./DigitalClock_i2c.js";

document.addEventListener('DOMContentLoaded', () => {
    const calendar = [
        document.getElementById('date'),
        document.getElementById('month'),
        document.getElementById('years')
    ];

    const days = [
        document.getElementsByClassName('sunday'),
        document.getElementsByClassName('monday'),
        document.getElementsByClassName('tuesday'),
        document.getElementsByClassName('wednesday'),
        document.getElementsByClassName('thursday'),
        document.getElementsByClassName('friday'),
        document.getElementsByClassName('saturday')
    ];

    const time = [
        document.getElementById('hour'),
        document.getElementById('mins'),
        document.getElementById('secs')
    ];

    DigitalClock(
        time[0], time[1], time[2], days,
        calendar[0], calendar[1], calendar[2]
    );
});