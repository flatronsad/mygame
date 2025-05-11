
let playervibor;
let computervibor;
let balance = 1000;

const ElementNoz = document.querySelector('.icon-noz');
const ElementCam = document.querySelector('.icon-cam');
const ElementBum = document.querySelector('.icon-bum');
const ElementModalVibor = document.querySelector('.modal-vibor');
const ElementTextNo = document.querySelector('.modal-text-no');
const ElementTextYes = document.querySelector('.modal-text-yes');
const ElementModalResult = document.querySelector('.modal-result');
const ElementTextRevenge = document.querySelector('.modal-text-revenge');
const ElementBalanceCoin = document.querySelector('.balance-coin');

function updateBalance() {
    ElementBalanceCoin.innerHTML = balance;
}

function playerChoice(choice) {
    playervibor = choice;
    document.querySelector('.modal-text-vibor').innerHTML = `Ваш выбор:<br>${playervibor}?`;
    ElementModalVibor.style.visibility = 'visible';
}

function computerChoice() {
    const choicescomp = ['Камень', 'Ножницы', 'Бумага'];
    const randomIndex = Math.floor(Math.random() * choicescomp.length);
    return choicescomp[randomIndex];    
}

ElementNoz.addEventListener('click', () => {
    playerChoice('Ножницы');
});

ElementCam.addEventListener('click', () => {
    playerChoice('Камень');
});

ElementBum.addEventListener('click', () => {
    playerChoice('Бумага');
});


ElementTextNo.addEventListener('click', () => {
    ElementModalVibor.style.visibility = 'hidden';
});

ElementTextYes.addEventListener('click', () => {
    computervibor = computerChoice();
    ElementModalVibor.style.visibility = 'hidden';

    let textResult;
    
    if (playervibor === computervibor) {
        textResult = 'У вас ничья<br> +95 монет';
        balance -= 5;
    } 
    else if (
        (playervibor === 'Камень' && computervibor === 'Ножницы') ||
        (playervibor === 'Ножницы' && computervibor === 'Бумага') ||
        (playervibor === 'Бумага' && computervibor === 'Камень')) {
        textResult = 'Вы победили!<br> +190 монет';
        balance += 90;
    } 
    else {
        textResult = 'Вы проиграли<br> 0 монет';
        balance -= 100;
    }

    document.querySelector('.modal-text-result').innerHTML = `Ваш выбор:<br> ${playervibor}<br>
    Выбор компьютера:<br> ${computervibor}<br><br>
    ${textResult}`;
    ElementModalResult.style.visibility = 'visible';
    updateBalance();
});

ElementTextRevenge.addEventListener('click', () => {
    ElementModalResult.style.visibility = 'hidden';
});

updateBalance();
