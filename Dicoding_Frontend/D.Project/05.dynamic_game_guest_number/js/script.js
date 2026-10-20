//inisialiasi variabel untuk menampung elemen dokumen
const localTotalVictoryField = document.getElementById('local-total-victory-field');
const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field');
const destroyDataButton = document.getElementById('destroy-data-button');
const playButton = document.getElementById('play-button');
const beforeGameDisplay = document.getElementById('before-game-display');
const duringGameDisplay = document.getElementById('during-game-display');
const afterGameDisplay = document.getElementById('after-game-display');
const answerButton1 = document.getElementById('answer-1-button');
const answerButton2 = document.getElementById('answer-2-button');
const answerButton3 = document.getElementById('answer-3-button');
const sessionUserAnswerField = document.getElementById('session-user-answer-field');
const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
const sessionTrueAnswerField = document.getElementById('session-true-answer-field');
const sessionUserAttemptsField = document.getElementById('session-user-attempts-amount-field');

//inisialisasi fungsi untuk menghasilkan jawaban permainan
function getAnswer() {
    let answer = '123'.split('');
    for (let i = 0; i < answer.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = answer[i];
        answer[i] = answer[j];
        answer[j] = tmp;
    }
    return answer.join('');
}

//inisialiasi key untuk session storage
const sessionAnswerKey = 'SESSION_ANSWER';
const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

//inisialisasi key untuk local storage
const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
const localMaximumAttemptsKey = 'LOCAL_MAXIMUM_ATTEMPTS';

window.addEventListener('load', () => {
    if (typeof (Storage) !== 'undefined') {
        // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
        if (sessionStorage.getItem(sessionAnswerKey) === null) {
            sessionStorage.setItem(sessionAnswerKey, '');
        }
        if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
            sessionStorage.setItem(sessionUserAttemptsKey, 0);
        }
        if (sessionStorage.getItem(sessionUserIsPlayingKey) === null) {
            sessionStorage.setItem(sessionUserIsPlayingKey, false);
        }
        if (localStorage.getItem(localTotalVictoryKey) === null) {
            localStorage.setItem(localTotalVictoryKey, 0);
        }
        if (localStorage.getItem(localMaximumAttemptsKey) === null) {
            localStorage.setItem(localMaximumAttemptsKey, 0);
        }
    } else {
        alert('Browser yang Anda gunakan tidak mendukung Web Storage');
    }

    sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
    localMaximumAttemptField.innerText = localStorage.getItem(localMaximumAttemptsKey);
});

// (MATERI 3)
playButton.addEventListener('click', function () {
    sessionStorage.setItem(sessionAnswerKey, getAnswer());
    beforeGameDisplay.setAttribute('hidden', true);
    duringGameDisplay.removeAttribute('hidden');
});

answerButton1.addEventListener('click', function () {
    sessionUserAnswerField.innerText += '1';
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});

answerButton2.addEventListener('click', function () {
    sessionUserAnswerField.innerText += '2';
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});

answerButton3.addEventListener("click", function () {
    sessionUserAnswerField.innerText += '3';
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});

function checkAnswer(userGuess) {
    const answer = sessionStorage.getItem(sessionAnswerKey);
    if (userGuess == answer) {
        duringGameDisplay.setAttribute('hidden', true);
        afterGameDisplay.removeAttribute('hidden');
        sessionTrueAnswerField.innerText = answer;
        updateScore();
    } else {
        const previousAttemptAmount = parseInt(sessionStorage.getItem(sessionUserAttemptsKey));
        sessionStorage.setItem(sessionUserAttemptsKey, previousAttemptAmount + 1);
        sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
        sessionUserAnswerField.innerText = '';
        sessionUserWrongAnswerField.innerText = userGuess;
    }
}

function updateScore() {
    const sessionAttemptsValue = parseInt(sessionStorage.getItem(sessionUserAttemptsKey));
    const localAttemptsValue = parseInt(localStorage.getItem(localMaximumAttemptsKey));
    if (sessionAttemptsValue > localAttemptsValue) {
        localStorage.setItem(localMaximumAttemptsKey, sessionAttemptsValue);
        localMaximumAttemptField.innerText = sessionAttemptsValue;
    }
    const previousTotalVictoryAmount = parseInt(localStorage.getItem(localTotalVictoryKey));
    localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
}

window.addEventListener('beforeunload', function () {
    sessionUserAnswerField.innerText = '';
    sessionUserWrongAnswerField.innerText = '';
    sessionStorage.setItem(sessionUserAttemptsKey, 0);
    sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
});

destroyDataButton.addEventListener('click', function () {
    sessionStorage.removeItem(sessionAnswerKey);
    sessionStorage.removeItem(sessionUserAttemptsKey);
    localStorage.removeItem(localTotalVictoryKey);
    localStorage.removeItem(localMaximumAttemptsKey);
    alert('Mohon me-refresh halaman ini kembali');
});