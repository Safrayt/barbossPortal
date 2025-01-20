// Таймеры
  // Вводим переменные таймеров 
    // Таймер подходов
    let timer_repsAndSets = null;
    let timer_repsAndSetRunning = false;  // Состояние таймера (запущен или нет)
    let timer_repsAndSetsInterval = null;  // Хранение интервала для остановки
    let timer_repsAndSetsFormattedSeconds
    let timer_repsAndSetsFormattedMinutes
    let timer_repsAndSetsCounterNumber = 0
    // Таймер для циклов
    let timer_circles;
    // Таймер для минуток
    let timer_Emom;
    // Таймер обратного отсчёта
    let timet_reverse



// Поиск событий нажатий на кнопки таймеров
document.addEventListener("DOMContentLoaded", function() {
  // Находим все кнопки с нужным классом и текстом
  const button_timer_repsAndSets = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_repsAndSets => button_timer_repsAndSets.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Таймер для отдыха");
  const button_timer_circles = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_circles => button_timer_circles.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Таймер циклов");

  const button_timers_reset = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_circles => button_timer_circles.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Сброс таймеров");

  // Проверяем, если такая кнопка найдена
  if (button_timer_repsAndSets) {
    
    // Добавляем обработчик на клик
    button_timer_repsAndSets.addEventListener('click', function() {
      // Находим секцию с id "timer-screen"
      const timerScreen = document.querySelector('#timer-screen-repsAndSets');

      if (timerScreen) {
        // Создаем нужный HTML
        const headerHTML = `
          <div class="slave-screen-header">
            <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
            <div class="slave-screen-header-title-box">
              <h1 class="slave-screen-header-title-main">Таймер</h1>
              <div class="slave-screen-header-title-line"></div>
              <h1 class="slave-screen-header-title-slave">Отдыха между подходами</h1>
            </div>
          </div>
        `;

        const resetButtonHTML = `
        <div class="timer_repsAndSets-screen-time-block">
          <div class="timer_repsAndSets-screen-reset-button-block">
            <button class="timer_repsAndSets-screen-reset-button">Сброс таймера</button>
          </div>
        </div>
        `;

        const timeBlockHTML = `
        <div class="timer_repsAndSets-screen-time-block">
          <div class="timer_repsAndSets-screen-time">
            <span id="minutes">00</span>:<span id="seconds">00</span>
          </div>
        </div>
        `;
        

        const startButtonHTML = `
        <div class="timer_repsAndSets-screen-time-block">
          <div class="timer_repsAndSets-screen-start-button-block">
            <button class="timer_repsAndSets-screen-start-button">Запуск таймера</button>
          </div>
        </div>
        `;

        const counterTextBlockHTML = `
        <div class="timer_repsAndSets-screen-time-block">
          <div class="timer_repsAndSets-screen-counterText-block">
            <div class="timer_repsAndSets-screen-counterText-block-text">Сделанно подходов</div>
          </div>
        </div>
        `;

        const counterBlockHTML = `
        <div class="timer_repsAndSets-screen-time-block">
          <div class="timer_repsAndSets-screen-counter-block">
            <div class="timer_repsAndSets-screen-counter-minus-block" onclick="timer_repsAndSetsCounterMinus()">-</div>
            <div class="timer_repsAndSets-screen-counter-number-block">22</div>
            <button class="timer_repsAndSets-screen-counter-plus-block" onclick="timer_repsAndSetsCounterPlus()">+</button>
          </div>
        </div>
        `;

        // Вставляем HTML в секцию
        timerScreen.innerHTML = headerHTML + resetButtonHTML + timeBlockHTML + startButtonHTML + counterTextBlockHTML + counterBlockHTML;
        if (timer_repsAndSetRunning == true) {
          document.getElementById('minutes').style.animation = 'none';
          document.getElementById('seconds').style.animation = 'none';
          document.getElementById('seconds').textContent = timer_repsAndSetsFormattedSeconds;
          document.getElementById('minutes').textContent = timer_repsAndSetsFormattedMinutes;
        }
        // Значение подходов в счётчике
        document.querySelector(".timer_repsAndSets-screen-counter-number-block").textContent = timer_repsAndSetsCounterNumber;
      }
      
      

      document.querySelector('.timer_repsAndSets-screen-start-button').addEventListener('click', function() {
        if (!timer_repsAndSetRunning) {
            // Сохраняем текущее время в переменную timer_repsAndSets
            timer_repsAndSets = new Date();
    
            // Сохраняем это время в Local Storage
            localStorage.setItem('timer_repsAndSets', timer_repsAndSets.toString());
    
            // Отключаем анимацию для элементов #minutes и #seconds
            disableAnimation();
    
            // Обновляем отображение времени на странице
            updateTimer();
    
            // Запускаем таймер, который будет обновлять время каждую секунду
            timer_repsAndSetsInterval = setInterval(updateTimer, 1000);
    
            // Обновляем состояние таймера
            timer_repsAndSetRunning = true;
        }
    });
    
    document.querySelector('.timer_repsAndSets-screen-reset-button').addEventListener('click', function() {
        // Сбрасываем таймер и останавливаем интервал
        clearInterval(timer_repsAndSetsInterval);
    
        // Удаляем сохранённое время из Local Storage
        localStorage.removeItem('timer_repsAndSets');
    
        // Сбрасываем переменную и состояние таймера
        timer_repsAndSets = null;
        timer_repsAndSetRunning = false;
    
        // Отключаем анимацию
        ableAnimation();
    
        // Сбрасываем таймер на ноль
        document.getElementById('seconds').textContent = '00';
        document.getElementById('minutes').textContent = '00';
    });
    
    // Функция для обновления времени
    function updateTimer() {
        // Если переменная timer_repsAndSets не установлена, выходим из функции
        if (!timer_repsAndSets) return;
    
        // Получаем текущее время
        const currentTime = new Date();
    
        // Вычисляем разницу во времени (в миллисекундах)
        const timeDifference = currentTime - timer_repsAndSets;
    
        // Переводим разницу в секунды и минуты
        const seconds = Math.floor(timeDifference / 1000) % 60;
        const minutes = Math.floor(timeDifference / 60000);
    
        // Форматируем секунды и минуты в двухзначный формат
        const formattedSeconds = formatTime(seconds);
        const formattedMinutes = formatTime(minutes);
    
        // Обновляем элементы на странице
        document.getElementById('seconds').textContent = formattedSeconds;
        document.getElementById('minutes').textContent = formattedMinutes;

        timer_repsAndSetsFormattedSeconds = formattedSeconds;
        timer_repsAndSetsFormattedMinutes = formattedMinutes;
    }
    
    // Функция для добавления ведущего нуля, если число меньше 10
    function formatTime(time) {
        return time < 10 ? `0${time}` : time.toString();
    }
    
    // Функция для отключения анимации
    function disableAnimation() {
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
    
        // Убираем анимацию для элементов с id "minutes" и "seconds"
        minutes.style.animation = 'none';
        seconds.style.animation = 'none';
    }
    // Функция для включения анимации
    function ableAnimation() {
      const minutes = document.getElementById('minutes');
      const seconds = document.getElementById('seconds');
  
      // Убираем анимацию для элементов с id "minutes" и "seconds"
      minutes.style.animation = 'blink 1s infinite';
      seconds.style.animation = 'blink 1s infinite';
  }
  

    });

  }

  

  if (button_timer_circles) {
    
    // Добавляем обработчик на клик
    button_timer_circles.addEventListener('click', function() {
      // Находим секцию с id "timer-screen"
      const timerScreen = document.querySelector('#timer-screen-circles');

      if (timerScreen) {
        // Создаем нужный HTML
        const headerHTML = `
          <div class="slave-screen-header">
            <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
            <div class="slave-screen-header-title-box">
              <h1 class="slave-screen-header-title-main">Таймер</h1>
              <div class="slave-screen-header-title-line"></div>
              <h1 class="slave-screen-header-title-slave">Циклов отдыха и подходов</h1>
            </div>
          </div>
        `;

        const workBlockHTML = `
          <div class="timer_circles-screen-work-block">
            <div class="timer_circles-screen-work-text-block">
              <div class="timer_circles-screen-work-text-block-text">Время подхода</div>
            </div>
          </div>
          <div class="timer_circles-screen-work-block">
            <div class="timer_circles-screen-work-time-block">
              <div class="timer_circles-screen-work-time-block-minutes">00</div>
              :
              <div class="timer_circles-screen-work-time-block-seconds">00</div>
            </div>
          </div>  
          <div class="timer_circles-screen-work-buttons">
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-30"> -30</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-10"> -10</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-5"> -5</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-plus-5"> +5</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-plus-10"> +10</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-plus-30"> +30</button>
          </div>
        `;

        const restBlockHTML = `
          <div class="timer_circles-screen-rest-block">
            <div class="timer_circles-screen-rest-text-block">
              <div class="timer_circles-screen-rest-text-block-text">Время отдыха</div>
            </div>
          </div>
          <div class="timer_circles-screen-rest-block">
            <div class="timer_circles-screen-rest-time-block">
              <div class="timer_circles-screen-rest-time-block-minutes">00</div>
              :
              <div class="timer_circles-screen-rest-time-block-seconds">00</div>
            </div>
          </div>  
          <div class="timer_circles-screen-rest-buttons">
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-30"> -30 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-10"> -10 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-5"> -5 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-5"> +5 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-10"> +10 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-30"> +30 </button>
          </div>
        `;

        const startButtonHTML = `
          <div class="timer-screen-start-button-block">
            <button class="timer-screen-start-button">Запуск таймера</button>
          </div>
        `;

        const counterBlockHTML = `
          <div class="timer-screen-counter-block">
            <div class="timer-screen-counter-minus-block">-</div>
            <div class="timer-screen-counter-number-block">22</div>
            <div class="timer-screen-counter-plus-block">+</div>
          </div>
        `;

        // Вставляем HTML в секцию
        timerScreen.innerHTML = headerHTML + workBlockHTML + restBlockHTML;
        if (timer_circlesRunning == true) {
          document.getElementById('minutes').style.animation = 'none';
          document.getElementById('seconds').style.animation = 'none';
        }
      }
      



  

    });

  }




// Сбтрос таймеров
  if (button_timers_reset) {
    // Добавляем обработчик на клик
    button_timers_reset.addEventListener('click', function() {
    // Переменные таймера отдыха между подходами
      timer_repsAndSets = null;
      timer_repsAndSetRunning = false;  // Состояние таймера (запущен или нет)
      timer_repsAndSetsInterval = null;  // Хранение интервала для остановки
      timer_repsAndSetsFormattedSeconds
      timer_repsAndSetsFormattedMinutes
      timer_repsAndSetsCounterNumber = 0

    })
  }

});





// Счётчик подходов для Таймера отдыха между подходами
function timer_repsAndSetsCounterPlus() {
  timer_repsAndSetsCounterNumber = timer_repsAndSetsCounterNumber + 1
  document.querySelector(".timer_repsAndSets-screen-counter-number-block").textContent = timer_repsAndSetsCounterNumber ;
}

function timer_repsAndSetsCounterMinus() {
  if (timer_repsAndSetsCounterNumber == 0) {
  timer_repsAndSetsCounterNumber = timer_repsAndSetsCounterNumber}
  else {
    timer_repsAndSetsCounterNumber = timer_repsAndSetsCounterNumber - 1
  }
  document.querySelector(".timer_repsAndSets-screen-counter-number-block").textContent = timer_repsAndSetsCounterNumber ;
}
