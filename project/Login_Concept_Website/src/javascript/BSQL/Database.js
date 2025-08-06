class BSQL {
    #handMsg = '';

    sendMsg = (text) => {
        this.#handMsg = text;
    };

    getMsg = () => {
        let Msg = this.#handMsg;
        return Msg;
    };

    sendData = (username, password, btnRegis, pathGo) => {
        btnRegis.addEventListener('click', () => {
            const database = JSON.parse(sessionStorage.getItem('database')) || {};

            database[password.value] = username.value;

            sessionStorage.setItem('database', JSON.stringify(database));

            window.location.href = pathGo;
        });
    };

    verifyData = (username, password) => {
        const database = JSON.parse(sessionStorage.getItem('database')) || {};

        return database[password.value] === username.value;
    };

    debugShowLog = () => {
        const database = JSON.parse(sessionStorage.getItem('database')) || {};

        console.log('Keys:');
        for (const pass in database) {
            console.log(pass);
        }

        console.log('Values:');
        for (const pass in database) {
            console.log(database[pass]);
        }
    };
}

export { BSQL };