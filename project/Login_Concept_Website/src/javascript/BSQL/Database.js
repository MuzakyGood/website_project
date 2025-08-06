class BSQL {
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

    sendData = (username, password, btnRegis, pathMainMenu) => {
        btnRegis.addEventListener('click', () => {
            const database = JSON.parse(sessionStorage.getItem('database')) || {};

            database[password.value] = username.value;

            sessionStorage.setItem('database', JSON.stringify(database));

            window.location.href = pathMainMenu;
        });
    };
}

export { BSQL };