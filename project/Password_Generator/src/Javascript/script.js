class Generator {
    password(lengthPassword) {
        let hnd = '';
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~';

        for (let i = 0; i < lengthPassword; i++) {
            hnd += chars[Math.floor(Math.random() * chars.length)];
        }
        return hnd;
    }
};

const generator = new Generator();

document.addEventListener('DOMContentLoaded', () => {
    const lengthOutput = document.getElementById('lengthOutput');
    const output = document.getElementById('output');
    const btnGenerate = document.getElementById('btnGenerate');

    btnGenerate.addEventListener('click', () => {
        output.value = generator.password(Number(lengthOutput.value));
    });
});