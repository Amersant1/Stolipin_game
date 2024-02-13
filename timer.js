// const timerElement = document.getElementById('timer');


function check_event(date){
    console.log("change")
    console.log(date)
    // const timerValue = this.value; // Получаем текущее значение таймера
    executeEventsAtTime(date); // Выполняем события для этого времени
};

// Функция, которая будет вызываться при каждом изменении таймера


let currentDate = new Date('1906-01-01');
let intervalId;


function updateTimer() {
    currentDate.setDate(currentDate.getDate() + 1); // Увеличиваем дату на один день
    const formattedDate = formatDate(currentDate); // Форматируем дату в нужный формат
    timerElement.innerText = formattedDate; // Отображаем отформатированную дату
    check_event(formattedDate);

}

function formatDate(date) {
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Месяцы начинаются с 0, поэтому добавляем 1
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

// function pauseTimer() {
//     clearInterval(intervalId);
// }

function normalSpeed() {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, 3000); // 1 день в 3 секунды
}

function fastForward() {
    clearInterval(intervalId);
    intervalId = setInterval(updateTimer, 1000); // 1 день в секунду
}

document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('normalSpeedButton').addEventListener('click', normalSpeed);
document.getElementById('fastForwardButton').addEventListener('click', fastForward);







startTimer(); // Start timer when the page loads
