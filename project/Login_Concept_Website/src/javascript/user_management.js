const database = new Map();

class DataExecutor {
    debugShowLog = () => {
        let handUser = '';
        let handPass = '';

        console.log('Keys:');
        for (const i of database.keys()) {
            handPass += i;
            console.log(`${handPass}, `);
        }

        console.log('Value:');
        for (const i of database.values()) {
            handUser += i;
            console.log(`${handUser}, `);
        }
    };

    sendData = (username, password, btnRegis, pathMainMenu) => {
        btnRegis.addEventListener('click', () => {
            database.set(password.value, username.value);
            window.location.href = pathMainMenu;
        });
    };
}

const data = new DataExecutor();

const dataHandle = (formInput, btnAction) => {
    data.sendData(formInput[0], formInput[1], btnAction[0], '../index.html');
};

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const getForm = [
        document.getElementById('regName'),
        document.getElementById('regPass')
    ];
    
    const btnAction = [
        document.getElementById('btnRegis')
    ];

    dataHandle(getForm, btnAction);
});