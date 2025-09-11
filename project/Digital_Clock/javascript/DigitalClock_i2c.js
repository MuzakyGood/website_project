// Low level Circuit
const Circuit = {
    _0x00_(_0x18_, _0x3C_, _0x3c_) {
        _0x18_.innerHTML = `${String(new Date().getHours()).padStart(2, '0')}`;
        _0x3C_.innerHTML = `${String(new Date().getMinutes()).padStart(2, '0')}`;
        _0x3c_.innerHTML = `${String(new Date().getSeconds()).padStart(2, '0')}`;
    },

    _0x02_(_0x1f_, _0x0c_, _0x270f_) {
        _0x1f_.innerHTML = `${String(new Date().getDate()).padStart(2, '0')}`;
        _0x0c_.innerHTML = `${String(new Date().getMonth() + 1).padStart(2, '0')}`;
        _0x270f_.innerHTML = `${String(new Date().getFullYear()).padStart(2, '0')}`;
    },

    _0x01_() {
        return new Date().getDay();
    }
};

// Medium Level Integrated Circuit (IC)
const CMOS = {
    tm(hour, mins, secs) {
        Circuit._0x00_(hour, mins, secs);
    },
    dt(date, month, years) {
        Circuit._0x02_(date, month, years);
    },
    dy() {
        return Circuit._0x01_();
    }
};

// High Level Integrated 2 Circuit (I2C)
function DigitalClock(hour, mins, secs, days, date, month, years) {
    setInterval(() => {
        CMOS.tm(hour, mins, secs);
        CMOS.dt(date, month, years);
        for (const dayElement of days[CMOS.dy()]) {
            dayElement.style.color = '#ffffff';
        }
    }, 1000);
}

export { Circuit, CMOS, DigitalClock };