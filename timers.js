
// Чтобы экран устройства не гас во время работы таймера
let wakeLock = null;

// Функция для запроса Wake Lock
async function requestWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake Lock активирован');
    } catch (err) {
        console.error('Ошибка при запросе Wake Lock:', err);
    }
}

// Функция для освобождения Wake Lock
function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release().then(() => {
            wakeLock = null;
            console.log('Wake Lock освобожден');
        });
    }
}


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
    let intervalIdCircles = null
    let timer_circles= null;
    let timer_circlesRunning = false;  // Состояние таймера (запущен или нет)
    let timer_circlesInterval = null;  // Хранение интервала для остановки

    let timer_circlesWorkSeconds = 30
    let timer_circlesWorkMinutes = 1
    let timer_circlesRestSeconds = 0
    let timer_circlesRestMinutes = 1
    let timer_circlesWorkFormattedSeconds =  timer_circlesWorkSeconds < 10 ? `0${timer_circlesWorkSeconds}` : timer_circlesWorkSeconds.toString(); 
    let timer_circlesWorkFormattedMinutes = timer_circlesWorkMinutes < 10 ? `0${timer_circlesWorkMinutes}` : timer_circlesWorkMinutes.toString(); 
    let timer_circlesRestFormattedSeconds = timer_circlesRestSeconds < 10 ? `0${timer_circlesRestSeconds}` : timer_circlesRestSeconds.toString(); 
    let timer_circlesRestFormattedMinutes = timer_circlesRestMinutes < 10 ? `0${timer_circlesRestMinutes}` : timer_circlesRestMinutes.toString(); 
    let timer_circlesCounterNumber = 0
    
    // Таймер для минуток
    let intervalIdEmom = null
    let timer_Emom;
    let timer_emomRunning = false

    let timer_emomWorkSeconds = 30
    let timer_emomWorkMinutes = 1
    let timer_emomRestSeconds = 0
    let timer_emomRestMinutes = 1
    let timer_emomWorkFormattedSeconds =  timer_emomWorkSeconds < 10 ? `0${timer_emomWorkSeconds}` : timer_emomWorkSeconds.toString(); 
    let timer_emomWorkFormattedMinutes = timer_emomWorkMinutes < 10 ? `0${timer_emomWorkMinutes}` : timer_emomWorkMinutes.toString(); 
    let timer_emomRestFormattedSeconds = timer_emomRestSeconds < 10 ? `0${timer_emomRestSeconds}` : timer_emomRestSeconds.toString(); 
    let timer_emomRestFormattedMinutes = timer_emomRestMinutes < 10 ? `0${timer_emomRestMinutes}` : timer_emomRestMinutes.toString(); 
    let timer_emomCounterNumber = 0

    // Таймер для суперподхода
    let intervalIdSup = null
    let timer_Sup;
    let timer_supRunning = false
    let timer_supNewRound = false

    let timer_supWorkSeconds = 30
    let timer_supWorkMinutes = 1
    let timer_supRestSeconds = 0
    let timer_supRestMinutes = 1
    let timer_supWorkFormattedSeconds =  timer_supWorkSeconds < 10 ? `0${timer_supWorkSeconds}` : timer_supWorkSeconds.toString(); 
    let timer_supWorkFormattedMinutes = timer_supWorkMinutes < 10 ? `0${timer_supWorkMinutes}` : timer_supWorkMinutes.toString(); 
    let timer_supRestFormattedSeconds = timer_supRestSeconds < 10 ? `0${timer_supRestSeconds}` : timer_supRestSeconds.toString(); 
    let timer_supRestFormattedMinutes = timer_supRestMinutes < 10 ? `0${timer_supRestMinutes}` : timer_supRestMinutes.toString(); 
    let timer_supCounterNumber = 0



    // Таймер обратного отсчёта
    let timet_reverse



// Поиск событий нажатий на кнопки таймеров
document.addEventListener("DOMContentLoaded", function() {
  // Находим все кнопки с нужным классом и текстом
  const button_timer_repsAndSets = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_repsAndSets => button_timer_repsAndSets.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Таймер для отдыха");
  const button_timer_circles = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_circles => button_timer_circles.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Таймер циклов");
  const button_timer_emom = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_emom => button_timer_emom.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "EMOM таймер");
  const button_timer_sup = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_sup => button_timer_sup.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Таймер для суперподхода");

  const button_timers_reset = Array.from(document.querySelectorAll('.timers-screen-buttonsBlock-list-item-button')).find(button_timer_reset => button_timer_reset.querySelector('.timers-screen-buttonsBlock-list-item-button-text-name')?.textContent === "Сброс таймеров");

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
            requestWakeLock();
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
        releaseWakeLock();
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

      if (timerScreen && timer_circlesRunning == false) {
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
              <div class="timer_circles-screen-work-time-block-minutes">${timer_circlesWorkFormattedMinutes}</div>
              :
              <div class="timer_circles-screen-work-time-block-seconds">${timer_circlesWorkFormattedSeconds}</div>
            </div>
          </div>  
          <div class="timer_circles-screen-work-buttons">
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-30"> -30</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-10"> -10</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-minus-1"> -1</button>
            <button class="timer_circles-screen-work-button timer_circles-screen-work-button-plus-1"> +1</button>
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
              <div class="timer_circles-screen-rest-time-block-minutes">${timer_circlesRestFormattedMinutes}</div>
              :
              <div class="timer_circles-screen-rest-time-block-seconds">${timer_circlesRestFormattedSeconds}</div>
            </div>
          </div>  
          <div class="timer_circles-screen-rest-buttons">
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-30"> -30 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-10"> -10 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-minus-1"> -1 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-1"> +1 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-10"> +10 </button>
            <button class="timer_circles-screen-rest-button timer_circles-screen-rest-button-plus-30"> +30 </button>
          </div>
        `;

        const startButtonHTML = `
        <div class="timer_circles-screen-time-block">
          <div class="timer_circles-screen-start-button-block">
            <button class="timer_circles-screen-start-button">Запуск таймера</button>
          </div>
        </div>
        `;

        


      

        // Вставляем HTML в секцию
        timerScreen.innerHTML = headerHTML + workBlockHTML + restBlockHTML + startButtonHTML;
        if (timer_circlesRunning == true) {
          document.getElementById('minutes').style.animation = 'none';
          document.getElementById('seconds').style.animation = 'none';
          document.getElementById('seconds').textContent = timer_circlesFormattedSeconds;
          document.getElementById('minutes').textContent = timer_circlesFormattedMinutes;
        }

      

        // Функция перевода переменных секунд и минут в формат времени (по 2 цифры) и их обновление в переменных в ТАЙМЕР ЦИКЛОВ - ПОДХОД
        function FormattedCirclesWorkTime() {
          timer_circlesWorkFormattedSeconds =  timer_circlesWorkSeconds < 10 ? `0${timer_circlesWorkSeconds}` : timer_circlesWorkSeconds.toString(); 
          timer_circlesWorkFormattedMinutes = timer_circlesWorkMinutes < 10 ? `0${timer_circlesWorkMinutes}` : timer_circlesWorkMinutes.toString(); 
          document.querySelector(".timer_circles-screen-work-time-block-minutes").textContent = timer_circlesWorkMinutes < 10 ? `0${timer_circlesWorkMinutes}` : timer_circlesWorkMinutes.toString(); 
          document.querySelector(".timer_circles-screen-work-time-block-seconds").textContent = timer_circlesWorkSeconds < 10 ? `0${timer_circlesWorkSeconds}` : timer_circlesWorkSeconds.toString(); 
        }

        // Функция перевода переменных секунд и минут в формат времени (по 2 цифры) и их обновление в переменных в ТАЙМЕР ЦИКЛОВ - ОТДЫХ
        function FormattedCirclesRestTime() {
          timer_circlesRestFormattedSeconds =  timer_circlesRestSeconds < 10 ? `0${timer_circlesRestSeconds}` : timer_circlesRestSeconds.toString(); 
          timer_circlesRestFormattedMinutes = timer_circlesRestMinutes < 10 ? `0${timer_circlesRestMinutes}` : timer_circlesRestMinutes.toString(); 
          document.querySelector(".timer_circles-screen-rest-time-block-minutes").textContent = timer_circlesRestMinutes < 10 ? `0${timer_circlesRestMinutes}` : timer_circlesRestMinutes.toString(); 
          document.querySelector(".timer_circles-screen-rest-time-block-seconds").textContent = timer_circlesRestSeconds < 10 ? `0${timer_circlesRestSeconds}` : timer_circlesRestSeconds.toString(); 
        }

        
        // Кнопки увеличения и уменьшения времени подхода
          // Минус 30 секунд
            const workButtonMinus30 = document.querySelector('.timer_circles-screen-work-button-minus-30');
            workButtonMinus30.addEventListener('click', function() {
              if (timer_circlesWorkSeconds > 29 ) {
                timer_circlesWorkSeconds = timer_circlesWorkSeconds - 30
                FormattedCirclesWorkTime()
              }
              else if (timer_circlesWorkMinutes > 0 && timer_circlesWorkSeconds <= 29 ) {
                timer_circlesWorkMinutes  = timer_circlesWorkMinutes - 1
                timer_circlesWorkSeconds = timer_circlesWorkSeconds - 30 + 60
                FormattedCirclesWorkTime()
              }
            });

          // Минус 10 секунд
          const workButtonMinus10 = document.querySelector('.timer_circles-screen-work-button-minus-10');
            workButtonMinus10.addEventListener('click', function() {
              if (timer_circlesWorkSeconds > 9 ) {
                timer_circlesWorkSeconds = timer_circlesWorkSeconds - 10
                FormattedCirclesWorkTime()
              }
              else if (timer_circlesWorkMinutes > 0 && timer_circlesWorkSeconds <= 9 ) {
                timer_circlesWorkMinutes  = timer_circlesWorkMinutes - 1
                timer_circlesWorkSeconds = timer_circlesWorkSeconds - 10 + 60
                FormattedCirclesWorkTime()
              }
            });

            // Минус 1 секунда
          const workButtonMinus5 = document.querySelector('.timer_circles-screen-work-button-minus-1');
          workButtonMinus5.addEventListener('click', function() {
            if (timer_circlesWorkSeconds >= 1 ) {
              timer_circlesWorkSeconds = timer_circlesWorkSeconds - 1
              FormattedCirclesWorkTime()
            }
            else if (timer_circlesWorkMinutes > 0 && timer_circlesWorkSeconds == 0 ) {
              timer_circlesWorkMinutes  = timer_circlesWorkMinutes - 1
              timer_circlesWorkSeconds = timer_circlesWorkSeconds - 1 + 60
              FormattedCirclesWorkTime()
            }
          });

             // Плюс 1 секунда
             const workButtonPlus5 = document.querySelector('.timer_circles-screen-work-button-plus-1');
             workButtonPlus5.addEventListener('click', function() {
               if (timer_circlesWorkSeconds < 59 ) {
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 1
                 FormattedCirclesWorkTime()
               }
               else if (timer_circlesWorkSeconds == 59 ) {
                 timer_circlesWorkMinutes = timer_circlesWorkMinutes + 1
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 1 - 60
                 FormattedCirclesWorkTime()
               }
             });

             // Плюс 10 секунд
             const workButtonPlus10 = document.querySelector('.timer_circles-screen-work-button-plus-10');
             workButtonPlus10.addEventListener('click', function() {
               if (timer_circlesWorkSeconds < 49 ) {
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 10
                 FormattedCirclesWorkTime()
               }
               else if (timer_circlesWorkSeconds > 49 ) {
                 timer_circlesWorkMinutes = timer_circlesWorkMinutes + 1
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 10 - 60
                 FormattedCirclesWorkTime()
               }
             });

             // Плюс 30 секунд
             const workButtonPlus30 = document.querySelector('.timer_circles-screen-work-button-plus-30');
             workButtonPlus30.addEventListener('click', function() {
               if (timer_circlesWorkSeconds < 29 ) {
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 30
                 FormattedCirclesWorkTime()
               }
               else if (timer_circlesWorkSeconds > 29 ) {
                 timer_circlesWorkMinutes = timer_circlesWorkMinutes + 1
                 timer_circlesWorkSeconds = timer_circlesWorkSeconds + 30 - 60
                 FormattedCirclesWorkTime()
               }
             });


             // Кнопки увеличения и уменьшения времени отдыха
          // Минус 30 секунд
            const restButtonMinus30 = document.querySelector('.timer_circles-screen-rest-button-minus-30');
            restButtonMinus30.addEventListener('click', function() {
              if (timer_circlesRestSeconds > 29 ) {
                timer_circlesRestSeconds = timer_circlesRestSeconds - 30
                FormattedCirclesRestTime()
              }
              else if (timer_circlesRestMinutes > 0 && timer_circlesRestSeconds <= 29 ) {
                timer_circlesRestMinutes  = timer_circlesRestMinutes - 1
                timer_circlesRestSeconds = timer_circlesRestSeconds - 30 + 60
                FormattedCirclesRestTime()
              }
            });

          // Минус 10 секунд
          const restButtonMinus10 = document.querySelector('.timer_circles-screen-rest-button-minus-10');
            restButtonMinus10.addEventListener('click', function() {
              if (timer_circlesRestSeconds > 9 ) {
                timer_circlesRestSeconds = timer_circlesRestSeconds - 10
                FormattedCirclesRestTime()
              }
              else if (timer_circlesRestMinutes > 0 && timer_circlesRestSeconds <= 9 ) {
                timer_circlesRestMinutes  = timer_circlesRestMinutes - 1
                timer_circlesRestSeconds = timer_circlesRestSeconds - 10 + 60
                FormattedCirclesRestTime()
              }
            });

            // Минус 1 секунда
          const restButtonMinus5 = document.querySelector('.timer_circles-screen-rest-button-minus-1');
          restButtonMinus5.addEventListener('click', function() {
            if (timer_circlesRestSeconds >= 1 ) {
              timer_circlesRestSeconds = timer_circlesRestSeconds - 1
              FormattedCirclesRestTime()
            }
            else if (timer_circlesRestMinutes > 0 && timer_circlesRestSeconds == 0 ) {
              timer_circlesRestMinutes  = timer_circlesRestMinutes - 1
              timer_circlesRestSeconds = timer_circlesRestSeconds - 1 + 60
              FormattedCirclesRestTime()
            }
          });

             // Плюс 1 секунда
             const restButtonPlus5 = document.querySelector('.timer_circles-screen-rest-button-plus-1');
             restButtonPlus5.addEventListener('click', function() {
               if (timer_circlesRestSeconds < 59 ) {
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 1
                 FormattedCirclesRestTime()
               }
               else if (timer_circlesRestSeconds == 59 ) {
                 timer_circlesRestMinutes = timer_circlesRestMinutes + 1
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 1 - 60
                 FormattedCirclesRestTime()
               }
             });

             // Плюс 10 секунд
             const restButtonPlus10 = document.querySelector('.timer_circles-screen-rest-button-plus-10');
             restButtonPlus10.addEventListener('click', function() {
               if (timer_circlesRestSeconds < 49 ) {
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 10
                 FormattedCirclesRestTime()
               }
               else if (timer_circlesRestSeconds > 49 ) {
                 timer_circlesRestMinutes = timer_circlesRestMinutes + 1
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 10 - 60
                 FormattedCirclesRestTime()
               }
             });

             // Плюс 30 секунд
             const restButtonPlus30 = document.querySelector('.timer_circles-screen-rest-button-plus-30');
             restButtonPlus30.addEventListener('click', function() {
               if (timer_circlesRestSeconds < 29 ) {
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 30
                 FormattedCirclesRestTime()
               }
               else if (timer_circlesRestSeconds > 29 ) {
                 timer_circlesRestMinutes = timer_circlesRestMinutes + 1
                 timer_circlesRestSeconds = timer_circlesRestSeconds + 30 - 60
                 FormattedCirclesRestTime()
               }
             });
            
      }
      if (timerScreen && timer_circlesRunning == true) {
      //   const headerHTML = `
      //   <div class="slave-screen-header">
      //     <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
      //     <div class="slave-screen-header-title-box">
      //       <h1 class="slave-screen-header-title-main">Таймер</h1>
      //       <div class="slave-screen-header-title-line"></div>
      //       <h1 class="slave-screen-header-title-slave">Циклов отдыха и подходов</h1>
      //     </div>
      //   </div>
      // `;

      //   const circlesTimerHTML = `
      //   <div class="timer_circles-screen-work-block">
      //       <div class="timer_circles-screen-work-text-block">
      //         <div class="timer_circles-screen-work-text-block-text">Подготовка</div>
      //       </div>
      //     </div>
      //     <div class="timer_circles-screen-work-block">
      //       <div class="timer_circles-screen-work-time-block">
      //         <div class="timer_circles-screen-work-time-block-minutes">00</div>
      //         :
      //         <div class="timer_circles-screen-work-time-block-seconds">05</div>
      //       </div>
      //     </div>  
      //   `;

      //   const counterTextBlockHTML = `
      //   <div class="timer_circles-screen-time-block">
      //     <div class="timer_circles-screen-counterText-block">
      //       <div class="timer_circles-screen-counterText-block-text">Сделанно подходов</div>
      //     </div>
      //   </div>
      //   `;

      //   const counterBlockHTML = `
      //   <div class="timer_circles-screen-time-block">
      //     <div class="timer_circles-screen-counter-block">
      //       <div class="timer_circles-screen-counter-number-block"></div>
      //     </div>
      //   </div>
      //   `;  

      //   timerScreen.innerHTML = headerHTML + circlesTimerHTML + counterTextBlockHTML + counterBlockHTML

      //   document.querySelector('.timer_circles-screen-work-time-block-minutes').style.animation = 'none';
      //   document.querySelector('.timer_circles-screen-work-time-block-seconds').style.animation = 'none';
      }
      

      // Кнопка старта запуска
      const startButton = document.querySelector('.timer_circles-screen-start-button');
      // Добавляем обработчик события на нажатие кнопки
      startButton.addEventListener('click', function() {
        requestWakeLock();
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

        const circlesTimerHTML = `
        <div class="timer_circles-screen-work-block">
            <div class="timer_circles-screen-work-text-block">
              <div class="timer_circles-screen-work-text-block-text">Подготовка</div>
            </div>
          </div>
          <div class="timer_circles-screen-work-block">
            <div class="timer_circles-screen-work-time-block">
              <div class="timer_circles-screen-work-time-block-minutes">00</div>
              :
              <div class="timer_circles-screen-work-time-block-seconds">05</div>
            </div>
          </div>  
        `;

        const counterTextBlockHTML = `
        <div class="timer_circles-screen-time-block">
          <div class="timer_circles-screen-counterText-block">
            <div class="timer_circles-screen-counterText-block-text">Сделанно подходов</div>
          </div>
        </div>
        `;

        const counterBlockHTML = `
        <div class="timer_circles-screen-time-block">
          <div class="timer_circles-screen-counter-block">
            <div class="timer_circles-screen-counter-number-block">0</div>
          </div>
        </div>
        `;

        
          //меняем значения переменной работы таймера
          timer_circlesRunning = true
          // Удаляем элементы
          timerScreen.innerHTML = ''
          // добавляем шапку
          timerScreen.innerHTML = headerHTML + circlesTimerHTML + counterTextBlockHTML + counterBlockHTML
          // Переопределяем сетку экаран
          document.querySelector('#timer-screen-circles').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.23 + 'px ';
      
          // убираем анимацию таймера
          
          document.querySelector('.timer_circles-screen-work-time-block-minutes').style.animation = 'none';
          document.querySelector('.timer_circles-screen-work-time-block-seconds').style.animation = 'none';
          


// Аудио для последних секунд
        // Функция для воспроизведения аудио
        function playAlertSoundPrepare() {
          const audio = new Audio('aud/timer/pik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }
        function playAlertSoundFinish() {
          const audio = new Audio('aud/timer/piik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }

        // Функция для проверки времени и воспроизведения звука
        function checkTimeAndPlaySound() {
          const minutesElement = document.querySelector('.timer_circles-screen-work-time-block-minutes');
          const secondsElement = document.querySelector('.timer_circles-screen-work-time-block-seconds');

          const minutes = parseInt(minutesElement.textContent, 10);
          const seconds = parseInt(secondsElement.textContent, 10);

          if (minutes === 0 && (seconds === 3 || seconds === 2)) {
            playAlertSoundPrepare();
          }
          if (minutes === 0 && (seconds === 1 )) {
            playAlertSoundFinish();
          }
        }

        // Наблюдатель за изменениями в DOM
        const observer = new MutationObserver(checkTimeAndPlaySound);

        // Настройка наблюдателя
        const config = { childList: true, subtree: true, characterData: true };

        // Элементы, за которыми будем наблюдать
        const minutesElement = document.querySelector('.timer_circles-screen-work-time-block-minutes');
        const secondsElement = document.querySelector('.timer_circles-screen-work-time-block-seconds');

        // Начало наблюдения
        observer.observe(minutesElement, config);
        observer.observe(secondsElement, config);

// Окончание аудио









// 1111111111
let isWorkPhase = false; // Флаг для определения текущей фазы (работа/отдых)
// let intervalId = null; // Идентификатор интервала для управления таймером

const workTextBlock = document.querySelector('.timer_circles-screen-work-text-block-text');
const minutesBlock = document.querySelector('.timer_circles-screen-work-time-block-minutes');
const secondsBlock = document.querySelector('.timer_circles-screen-work-time-block-seconds');
const counterBlock = document.querySelector('.timer_circles-screen-counter-number-block');

function startTimer() {
    // Устанавливаем начальное значение "Подготовка"
    workTextBlock.textContent = "Подготовка";
    let seconds = 5;

    // Запускаем обратный отсчёт от 5 до 0
    intervalIdCircles = setInterval(() => {
        secondsBlock.textContent = seconds.toString().padStart(2, '0');
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalIdCircles);
            startWorkPhase();
        }
    }, 1000);
}

function startWorkPhase() {
    isWorkPhase = true;
    workTextBlock.textContent = "Подход";
    let minutes = timer_circlesWorkMinutes;
    let seconds = timer_circlesWorkSeconds;

    intervalIdCircles = setInterval(() => {
        minutesBlock.textContent = minutes.toString().padStart(2, '0');
        secondsBlock.textContent = seconds.toString().padStart(2, '0');

        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(intervalIdCircles);
                timer_circlesCounterNumber++;
                counterBlock.textContent = timer_circlesCounterNumber;
                startRestPhase();
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
    }, 1000);
}

function startRestPhase() {
    isWorkPhase = false;
    workTextBlock.textContent = "Отдых";
    let minutes = timer_circlesRestMinutes;
    let seconds = timer_circlesRestSeconds;

    intervalIdCircles = setInterval(() => {
        minutesBlock.textContent = minutes.toString().padStart(2, '0');
        secondsBlock.textContent = seconds.toString().padStart(2, '0');

        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(intervalIdCircles);
                startWorkPhase();
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
    }, 1000);
}
if (intervalIdCircles !== null) {
  releaseWakeLock();
  clearInterval(intervalIdCircles); // Останавливаем текущий таймер, если он уже запущен
}
startTimer();
          
        });

    });

   
    

  }


  if (button_timer_emom) {

    // Добавляем обработчик на клик
    button_timer_emom.addEventListener('click', function() {
      // Находим секцию с id "timer-screen"
      const timerScreen = document.querySelector('#timer-screen-emom');

      if (timerScreen && timer_emomRunning == false) {
        // Создаем нужный HTML
        const headerHTML = `
          <div class="slave-screen-header">
            <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
            <div class="slave-screen-header-title-box">
              <h1 class="slave-screen-header-title-main">Таймер</h1>
              <div class="slave-screen-header-title-line"></div>
              <h1 class="slave-screen-header-title-slave">EMOM</h1>
            </div>
          </div>
        `;

        const workBlockHTML = `
          <div class="timer_emom-screen-work-block">
            <div class="timer_emom-screen-work-text-block">
              <div class="timer_emom-screen-work-text-block-text">Время подхода и отдыха</div>
            </div>
          </div>
          <div class="timer_emom-screen-work-block">
            <div class="timer_emom-screen-work-time-block">
              <div class="timer_emom-screen-work-time-block-minutes">${timer_emomWorkFormattedMinutes}</div>
              :
              <div class="timer_emom-screen-work-time-block-seconds">${timer_emomWorkFormattedSeconds}</div>
            </div>
          </div>  
          <div class="timer_emom-screen-work-buttons">
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-minus-30"> -30</button>
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-minus-10"> -10</button>
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-minus-1"> -1</button>
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-plus-1"> +1</button>
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-plus-10"> +10</button>
            <button class="timer_emom-screen-work-button timer_emom-screen-work-button-plus-30"> +30</button>
          </div>
        `;

        const startButtonHTML = `
        <div class="timer_emom-screen-time-block">
          <div class="timer_emom-screen-start-button-block">
            <button class="timer_emom-screen-start-button">Запуск таймера</button>
          </div>
        </div>
        `;

        // Вставляем HTML в секцию
        timerScreen.innerHTML = headerHTML + workBlockHTML + startButtonHTML;

 // Функция перевода переменных секунд и минут в формат времени (по 2 цифры) и их обновление в переменных в ТАЙМЕР ЦИКЛОВ - ПОДХОД
 function FormattedEmomWorkTime() {
  timer_emomWorkFormattedSeconds =  timer_emomWorkSeconds < 10 ? `0${timer_emomWorkSeconds}` : timer_emomWorkSeconds.toString(); 
  timer_emomWorkFormattedMinutes = timer_emomWorkMinutes < 10 ? `0${timer_emomWorkMinutes}` : timer_emomWorkMinutes.toString(); 
  document.querySelector(".timer_emom-screen-work-time-block-minutes").textContent = timer_emomWorkMinutes < 10 ? `0${timer_emomWorkMinutes}` : timer_emomWorkMinutes.toString(); 
  document.querySelector(".timer_emom-screen-work-time-block-seconds").textContent = timer_emomWorkSeconds < 10 ? `0${timer_emomWorkSeconds}` : timer_emomWorkSeconds.toString(); 
}


// Кнопки увеличения и уменьшения времени подхода
  // Минус 30 секунд
    const workButtonMinus30 = document.querySelector('.timer_emom-screen-work-button-minus-30');
    workButtonMinus30.addEventListener('click', function() {
      if (timer_emomWorkSeconds > 29 ) {
        timer_emomWorkSeconds = timer_emomWorkSeconds - 30
        FormattedEmomWorkTime()
      }
      else if (timer_emomWorkMinutes > 0 && timer_emomWorkSeconds <= 29 ) {
        timer_emomWorkMinutes  = timer_emomWorkMinutes - 1
        timer_emomWorkSeconds = timer_emomWorkSeconds - 30 + 60
        FormattedEmomWorkTime()
      }
    });

  // Минус 10 секунд
  const workButtonMinus10 = document.querySelector('.timer_emom-screen-work-button-minus-10');
    workButtonMinus10.addEventListener('click', function() {
      if (timer_emomWorkSeconds > 9 ) {
        timer_emomWorkSeconds = timer_emomWorkSeconds - 10
        FormattedEmomWorkTime()
      }
      else if (timer_emomWorkMinutes > 0 && timer_emomWorkSeconds <= 9 ) {
        timer_emomWorkMinutes  = timer_emomWorkMinutes - 1
        timer_emomWorkSeconds = timer_emomWorkSeconds - 10 + 60
        FormattedEmomWorkTime()
      }
    });

    // Минус 1 секунда
  const workButtonMinus5 = document.querySelector('.timer_emom-screen-work-button-minus-1');
  workButtonMinus5.addEventListener('click', function() {
    if (timer_emomWorkSeconds >= 1 ) {
      timer_emomWorkSeconds = timer_emomWorkSeconds - 1
      FormattedEmomWorkTime()
    }
    else if (timer_emomWorkMinutes > 0 && timer_emomWorkSeconds == 0 ) {
      timer_emomWorkMinutes  = timer_emomWorkMinutes - 1
      timer_emomWorkSeconds = timer_emomWorkSeconds - 1 + 60
      FormattedEmomWorkTime()
    }
  });

     // Плюс 1 секунда
     const workButtonPlus5 = document.querySelector('.timer_emom-screen-work-button-plus-1');
     workButtonPlus5.addEventListener('click', function() {
       if (timer_emomWorkSeconds < 59 ) {
         timer_emomWorkSeconds = timer_emomWorkSeconds + 1
         FormattedEmomWorkTime()
       }
       else if (timer_emomWorkSeconds == 59 ) {
         timer_emomWorkMinutes = timer_emomWorkMinutes + 1
         timer_emomWorkSeconds = timer_emomWorkSeconds + 1 - 60
         FormattedEmomWorkTime()
       }
     });

     // Плюс 10 секунд
     const workButtonPlus10 = document.querySelector('.timer_emom-screen-work-button-plus-10');
     workButtonPlus10.addEventListener('click', function() {
       if (timer_emomWorkSeconds < 49 ) {
         timer_emomWorkSeconds = timer_emomWorkSeconds + 10
         FormattedEmomWorkTime()
       }
       else if (timer_emomWorkSeconds > 49 ) {
         timer_emomWorkMinutes = timer_emomWorkMinutes + 1
         timer_emomWorkSeconds = timer_emomWorkSeconds + 10 - 60
         FormattedEmomWorkTime()
       }
     });

     // Плюс 30 секунд
     const workButtonPlus30 = document.querySelector('.timer_emom-screen-work-button-plus-30');
     workButtonPlus30.addEventListener('click', function() {
       if (timer_emomWorkSeconds < 29 ) {
         timer_emomWorkSeconds = timer_emomWorkSeconds + 30
         FormattedEmomWorkTime()
       }
       else if (timer_emomWorkSeconds > 29 ) {
         timer_emomWorkMinutes = timer_emomWorkMinutes + 1
         timer_emomWorkSeconds = timer_emomWorkSeconds + 30 - 60
         FormattedEmomWorkTime()
       }
     });


  }
      if (timerScreen && timer_emomRunning == true) {        
        }

      // Кнопка старта запуска
      const startButton = document.querySelector('.timer_emom-screen-start-button');
      // Добавляем обработчик события на нажатие кнопки
      startButton.addEventListener('click', function() {
        requestWakeLock();
        const headerHTML = `
          <div class="slave-screen-header">
            <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
            <div class="slave-screen-header-title-box">
              <h1 class="slave-screen-header-title-main">Таймер</h1>
              <div class="slave-screen-header-title-line"></div>
              <h1 class="slave-screen-header-title-slave">Emom</h1>
            </div>
          </div>
        `;

        const emomTimerHTML = `
        <div class="timer_emom-screen-work-block">
            <div class="timer_emom-screen-work-text-block">
              <div class="timer_emom-screen-work-text-block-text">Подготовка</div>
            </div>
          </div>
          <div class="timer_emom-screen-work-block">
            <div class="timer_emom-screen-work-time-block">
              <div class="timer_emom-screen-work-time-block-minutes">00</div>
              :
              <div class="timer_emom-screen-work-time-block-seconds">05</div>
            </div>
          </div>  
        `;

        const counterTextBlockHTML = `
        <div class="timer_emom-screen-time-block">
          <div class="timer_emom-screen-counterText-block">
            <div class="timer_emom-screen-counterText-block-text">Сделанно подходов</div>
          </div>
        </div>
        `;

        const counterBlockHTML = `
        <div class="timer_emom-screen-time-block">
          <div class="timer_emom-screen-counter-block">
            <div class="timer_emom-screen-counter-number-block">0</div>
          </div>
        </div>
        `;
      //меняем значения переменной работы таймера
      timer_emomRunning = true
      // Удаляем элементы
      timerScreen.innerHTML = ''
      // добавляем шапку
      timerScreen.innerHTML = headerHTML + emomTimerHTML + counterTextBlockHTML + counterBlockHTML
      // Переопределяем сетку экаран
      document.querySelector('#timer-screen-emom').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.23 + 'px ';

       // убираем анимацию таймера
          
       document.querySelector('.timer_emom-screen-work-time-block-minutes').style.animation = 'none';
       document.querySelector('.timer_emom-screen-work-time-block-seconds').style.animation = 'none';







       // Аудио для последних секунд
        // Функция для воспроизведения аудио
        function playAlertSoundPrepare() {
          const audio = new Audio('aud/timer/pik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }
        function playAlertSoundFinish() {
          const audio = new Audio('aud/timer/piik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }

        // Функция для проверки времени и воспроизведения звука
        function checkTimeAndPlaySound() {
          const minutesElement = document.querySelector('.timer_emom-screen-work-time-block-minutes');
          const secondsElement = document.querySelector('.timer_emom-screen-work-time-block-seconds');

          const minutes = parseInt(minutesElement.textContent, 10);
          const seconds = parseInt(secondsElement.textContent, 10);

          if (minutes === 0 && (seconds === 4 ||seconds === 3 || seconds === 2)) {
            playAlertSoundPrepare();
          }
          if (minutes === 0 && (seconds === 1)) {
            playAlertSoundFinish();
          }
        }

        // Наблюдатель за изменениями в DOM
        const observer = new MutationObserver(checkTimeAndPlaySound);

        // Настройка наблюдателя
        const config = { childList: true, subtree: true, characterData: true };

        // Элементы, за которыми будем наблюдать
        const minutesElement = document.querySelector('.timer_emom-screen-work-time-block-minutes');
        const secondsElement = document.querySelector('.timer_emom-screen-work-time-block-seconds');

        // Начало наблюдения
        observer.observe(minutesElement, config);
        observer.observe(secondsElement, config);

// Окончание аудио






// 1111111111
let isWorkPhase = false; // Флаг для определения текущей фазы (работа/отдых)
// let intervalIdEmom = null; // Идентификатор интервала для управления таймером

const workTextBlock = document.querySelector('.timer_emom-screen-work-text-block-text');
const minutesBlock = document.querySelector('.timer_emom-screen-work-time-block-minutes');
const secondsBlock = document.querySelector('.timer_emom-screen-work-time-block-seconds');
const counterBlock = document.querySelector('.timer_emom-screen-counter-number-block');

function startTimer() {
    // Устанавливаем начальное значение "Подготовка"
    workTextBlock.textContent = "Подготовка";
    let seconds = 5;

    // Запускаем обратный отсчёт от 5 до 0
    intervalIdEmom = setInterval(() => {
        secondsBlock.textContent = seconds.toString().padStart(2, '0');
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalIdEmom);
            startWorkPhase();
        }
    }, 1000);
}

function startWorkPhase() {
    isWorkPhase = true;
    workTextBlock.textContent = "Подход и отдых";
    let minutes = timer_emomWorkMinutes;
    let seconds = timer_emomWorkSeconds;

    intervalIdEmom = setInterval(() => {
        minutesBlock.textContent = minutes.toString().padStart(2, '0');
        secondsBlock.textContent = seconds.toString().padStart(2, '0');

        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(intervalIdEmom);
                timer_emomCounterNumber++;
                counterBlock.textContent = timer_emomCounterNumber;
                startWorkPhase();
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
    }, 1000);
}
if (intervalIdEmom !== null) {
  releaseWakeLock();
  clearInterval(intervalIdEmom); // Останавливаем текущий таймер, если он уже запущен
}
startTimer();




      })
})
  }

if (button_timer_sup) {
   // Добавляем обработчик на клик
   button_timer_sup.addEventListener('click', function() {
    // Находим секцию с id "timer-screen"
    const timerScreen = document.querySelector('#timer-screen-sup');

    if (timerScreen && timer_supRunning == false) {
      // Создаем нужный HTML
      const headerHTML = `
        <div class="slave-screen-header">
          <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
          <div class="slave-screen-header-title-box">
            <h1 class="slave-screen-header-title-main">Таймер</h1>
            <div class="slave-screen-header-title-line"></div>
            <h1 class="slave-screen-header-title-slave">Суперподход</h1>
          </div>
        </div>
      `;

      const workBlockHTML = `
        <div class="timer_sup-screen-work-block">
          <div class="timer_sup-screen-work-text-block">
            <div class="timer_sup-screen-work-text-block-text">Время подхода</div>
          </div>
        </div>
        <div class="timer_sup-screen-work-block">
          <div class="timer_sup-screen-work-time-block">
            <div class="timer_sup-screen-work-time-block-minutes">${timer_supWorkFormattedMinutes}</div>
            :
            <div class="timer_sup-screen-work-time-block-seconds">${timer_supWorkFormattedSeconds}</div>
          </div>
        </div>  
        <div class="timer_sup-screen-work-buttons">
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-minus-30"> -30</button>
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-minus-10"> -10</button>
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-minus-1"> -1</button>
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-plus-1"> +1</button>
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-plus-10"> +10</button>
          <button class="timer_sup-screen-work-button timer_sup-screen-work-button-plus-30"> +30</button>
        </div>
      `;

      const startButtonHTML = `
      <div class="timer_sup-screen-time-block">
        <div class="timer_sup-screen-start-button-block">
          <button class="timer_sup-screen-start-button">Запуск таймера</button>
        </div>
      </div>
      `;

      // Вставляем HTML в секцию
      timerScreen.innerHTML = headerHTML + workBlockHTML + startButtonHTML;

// Функция перевода переменных секунд и минут в формат времени (по 2 цифры) и их обновление в переменных в ТАЙМЕР ЦИКЛОВ - ПОДХОД
function FormattedSupWorkTime() {
timer_supWorkFormattedSeconds =  timer_supWorkSeconds < 10 ? `0${timer_supWorkSeconds}` : timer_supWorkSeconds.toString(); 
timer_supWorkFormattedMinutes = timer_supWorkMinutes < 10 ? `0${timer_supWorkMinutes}` : timer_supWorkMinutes.toString(); 
document.querySelector(".timer_sup-screen-work-time-block-minutes").textContent = timer_supWorkMinutes < 10 ? `0${timer_supWorkMinutes}` : timer_supWorkMinutes.toString(); 
document.querySelector(".timer_sup-screen-work-time-block-seconds").textContent = timer_supWorkSeconds < 10 ? `0${timer_supWorkSeconds}` : timer_supWorkSeconds.toString(); 
}


// Кнопки увеличения и уменьшения времени подхода
// Минус 30 секунд
  const workButtonMinus30 = document.querySelector('.timer_sup-screen-work-button-minus-30');
  workButtonMinus30.addEventListener('click', function() {
    if (timer_supWorkSeconds > 29 ) {
      timer_supWorkSeconds = timer_supWorkSeconds - 30
      FormattedSupWorkTime()
    }
    else if (timer_supWorkMinutes > 0 && timer_supWorkSeconds <= 29 ) {
      timer_supWorkMinutes  = timer_supWorkMinutes - 1
      timer_supWorkSeconds = timer_supWorkSeconds - 30 + 60
      FormattedSupWorkTime()
    }
  });

// Минус 10 секунд
const workButtonMinus10 = document.querySelector('.timer_sup-screen-work-button-minus-10');
  workButtonMinus10.addEventListener('click', function() {
    if (timer_supWorkSeconds > 9 ) {
      timer_supWorkSeconds = timer_supWorkSeconds - 10
      FormattedSupWorkTime()
    }
    else if (timer_supWorkMinutes > 0 && timer_supWorkSeconds <= 9 ) {
      timer_supWorkMinutes  = timer_supWorkMinutes - 1
      timer_supWorkSeconds = timer_supWorkSeconds - 10 + 60
      FormattedSupWorkTime()
    }
  });

  // Минус 1 секунда
const workButtonMinus5 = document.querySelector('.timer_sup-screen-work-button-minus-1');
workButtonMinus5.addEventListener('click', function() {
  if (timer_supWorkSeconds  >= 1 ) {
    timer_supWorkSeconds = timer_supWorkSeconds - 1
    FormattedSupWorkTime()
  }
  else if (timer_supWorkMinutes > 0 && timer_supWorkSeconds == 0 ) {
    timer_supWorkMinutes  = timer_supWorkMinutes - 1
    timer_supWorkSeconds = timer_supWorkSeconds - 1 + 60
    FormattedSupWorkTime()
  }
});

   // Плюс 1 секунда
   const workButtonPlus5 = document.querySelector('.timer_sup-screen-work-button-plus-1');
   workButtonPlus5.addEventListener('click', function() {
     if (timer_supWorkSeconds < 59 ) {
       timer_supWorkSeconds = timer_supWorkSeconds + 1
       FormattedSupWorkTime()
     }
     else if (timer_supWorkSeconds == 59 ) {
       timer_supWorkMinutes = timer_supWorkMinutes + 1
       timer_supWorkSeconds = timer_supWorkSeconds + 1 - 60
       FormattedSupWorkTime()
     }
   });

   // Плюс 10 секунд
   const workButtonPlus10 = document.querySelector('.timer_sup-screen-work-button-plus-10');
   workButtonPlus10.addEventListener('click', function() {
     if (timer_supWorkSeconds < 49 ) {
       timer_supWorkSeconds = timer_supWorkSeconds + 10
       FormattedSupWorkTime()
     }
     else if (timer_supWorkSeconds > 49 ) {
       timer_supWorkMinutes = timer_supWorkMinutes + 1
       timer_supWorkSeconds = timer_supWorkSeconds + 10 - 60
       FormattedSupWorkTime()
     }
   });

   // Плюс 30 секунд
   const workButtonPlus30 = document.querySelector('.timer_sup-screen-work-button-plus-30');
   workButtonPlus30.addEventListener('click', function() {
     if (timer_supWorkSeconds < 29 ) {
       timer_supWorkSeconds = timer_supWorkSeconds + 30
       FormattedSupWorkTime()
     }
     else if (timer_supWorkSeconds > 29 ) {
       timer_supWorkMinutes = timer_supWorkMinutes + 1
       timer_supWorkSeconds = timer_supWorkSeconds + 30 - 60
       FormattedSupWorkTime()
     }
   });


}
    if (timerScreen && timer_supRunning == true) {        
      }

    // Кнопка старта запуска
    const startButton = document.querySelector('.timer_sup-screen-start-button');
    // Добавляем обработчик события на нажатие кнопки
    startButton.addEventListener('click', function() {
      requestWakeLock();
      const headerHTML = `
        <div class="slave-screen-header">
          <button class="slave-screen-header-backButton timer-screen-backButton" onclick="navButtonBack()">Назад</button>
          <div class="slave-screen-header-title-box">
            <h1 class="slave-screen-header-title-main">Таймер</h1>
            <div class="slave-screen-header-title-line"></div>
            <h1 class="slave-screen-header-title-slave">Суперподход</h1>
          </div>
        </div>
      `;

      const supTimerHTML = `
      <div class="timer_sup-screen-work-block">
          <div class="timer_sup-screen-work-text-block">
            <div class="timer_sup-screen-work-text-block-text">Подготовка</div>
          </div>
        </div>
        <div class="timer_sup-screen-work-block">
          <div class="timer_sup-screen-work-time-block">
            <div class="timer_sup-screen-work-time-block-minutes">00</div>
            :
            <div class="timer_sup-screen-work-time-block-seconds">05</div>
          </div>
        </div>  
      `;

      const counterTextBlockHTML = `
      <div class="timer_sup-screen-time-block">
        <div class="timer_sup-screen-counterText-block">
          <div class="timer_sup-screen-counterText-block-text">Сделанно подходов</div>
        </div>
      </div>
      `;

      const counterBlockHTML = `
      <div class="timer_sup-screen-time-block">
        <div class="timer_sup-screen-counter-block">
          <div class="timer_sup-screen-counter-number-block">0</div>
        </div>
      </div>
      `;

      const startButtonNewRoundHTML = `
      <div class="timer_sup-screen-time-block">
        <div class="timer_sup-screen-start-button-block">
          <button class="timer_sup-screen-start-button-newRound">Повторить таймер</button>
        </div>
      </div>
      `;
    //меняем значения переменной работы таймера
    timer_supRunning = true
    // Удаляем элементы
    timerScreen.innerHTML = ''
    // добавляем шапку
    timerScreen.innerHTML = headerHTML + supTimerHTML + counterTextBlockHTML + counterBlockHTML
    // Переопределяем сетку экаран
    document.querySelector('#timer-screen-sup').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.23 + 'px ';

     // убираем анимацию таймера
        
     document.querySelector('.timer_sup-screen-work-time-block-minutes').style.animation = 'none';
     document.querySelector('.timer_sup-screen-work-time-block-seconds').style.animation = 'none';


// Аудио для последних секунд
        // Функция для воспроизведения аудио
        function playAlertSoundPrepare() {
          const audio = new Audio('aud/timer/pik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }
        function playAlertSoundFinish() {
          const audio = new Audio('aud/timer/piik.mp3'); // Укажите путь к вашему аудио файлу
          audio.play();
        }

        // Функция для проверки времени и воспроизведения звука
        function checkTimeAndPlaySound() {
          const minutesElement = document.querySelector('.timer_sup-screen-work-time-block-minutes');
          const secondsElement = document.querySelector('.timer_sup-screen-work-time-block-seconds');

          const minutes = parseInt(minutesElement.textContent, 10);
          const seconds = parseInt(secondsElement.textContent, 10);

          if (minutes === 0 && (seconds === 3 || seconds === 2)) {
            playAlertSoundPrepare();
          }
          if (minutes === 0 && (seconds === 1)) {
            playAlertSoundFinish();
          }
        }

        // Наблюдатель за изменениями в DOM
        const observer = new MutationObserver(checkTimeAndPlaySound);

        // Настройка наблюдателя
        const config = { childList: true, subtree: true, characterData: true };

        // Элементы, за которыми будем наблюдать
        const minutesElement = document.querySelector('.timer_sup-screen-work-time-block-minutes');
        const secondsElement = document.querySelector('.timer_sup-screen-work-time-block-seconds');

        // Начало наблюдения
        observer.observe(minutesElement, config);
        observer.observe(secondsElement, config);

// Окончание аудио




// 1111111111
let isWorkPhase = false; // Флаг для определения текущей фазы (работа/отдых)
// let intervalIdEmom = null; // Идентификатор интервала для управления таймером

const workTextBlock = document.querySelector('.timer_sup-screen-work-text-block-text');
const minutesBlock = document.querySelector('.timer_sup-screen-work-time-block-minutes');
const secondsBlock = document.querySelector('.timer_sup-screen-work-time-block-seconds');
const counterBlock = document.querySelector('.timer_sup-screen-counter-number-block');


function startTimer() {

  // Убираем анимацию таймера
  document.querySelector('.timer_sup-screen-work-time-block-minutes').style.animation = 'none';
  document.querySelector('.timer_sup-screen-work-time-block-seconds').style.animation = 'none';

  // Устанавливаем начальное значение "Подготовка"
  document.querySelector('.timer_sup-screen-work-text-block-text').textContent = "Подготовка";
  let minutes = 0;
  let seconds = 5;

  // Запускаем обратный отсчёт от 5 до 0
  intervalIdSup = setInterval(() => {
    document.querySelector('.timer_sup-screen-work-time-block-minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.timer_sup-screen-work-time-block-seconds').textContent = seconds.toString().padStart(2, '0');
      seconds--;

      if (seconds < 0) {
          clearInterval(intervalIdSup);
          startWorkPhase();
      }
  }, 1000);
}

function startWorkPhase() {
  isWorkPhase = true;
  document.querySelector('.timer_sup-screen-work-text-block-text').textContent = "Подход";
  let minutes = timer_supWorkMinutes;
  let seconds = timer_supWorkSeconds;

  intervalIdSup = setInterval(() => {
    document.querySelector('.timer_sup-screen-work-time-block-minutes').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.timer_sup-screen-work-time-block-seconds').textContent = seconds.toString().padStart(2, '0');

      if (seconds === 0) {
          if (minutes === 0) {
              clearInterval(intervalIdSup);
              timer_supCounterNumber++;
              document.querySelector('.timer_sup-screen-counter-number-block').textContent = timer_supCounterNumber;

              document.querySelector('.timer_sup-screen-work-time-block-minutes').textContent = timer_supWorkFormattedMinutes
              document.querySelector('.timer_sup-screen-work-time-block-seconds').textContent = timer_supWorkFormattedSeconds

              timerScreen.innerHTML += startButtonNewRoundHTML;
              document.querySelector('.timer_sup-screen-work-time-block-minutes').style.animation = 'blink 1s infinite';
              document.querySelector('.timer_sup-screen-work-time-block-seconds').style.animation = 'blink 1s infinite'; 

              document.querySelector('.timer_sup-screen-work-text-block-text').textContent = "Время подхода";
              
                document.querySelector('.timer_sup-screen-start-button-newRound').addEventListener('click', function() {
                  // удаляем строчку "Повторить таймер"
                  timerScreen.innerHTML = timerScreen.innerHTML.replace(startButtonNewRoundHTML, '');
                  
                  startTimer()
                })


              // startTimer();
          } else {
              minutes--;
              seconds = 59;
          }
      } else {
          seconds--;
      }
  }, 1000);
}
if (intervalIdSup !== null) {
clearInterval(intervalIdSup); // Останавливаем текущий таймер, если он уже запущен
releaseWakeLock();
}

startTimer();


    })

    
})
}









// Сброс таймеров
  if (button_timers_reset) {
    // Добавляем обработчик на клик
    button_timers_reset.addEventListener('click', function() {
      releaseWakeLock();
    // Переменные таймера отдыха между подходами
      timer_repsAndSets = null;
      timer_repsAndSetRunning = false;  // Состояние таймера (запущен или нет)
      timer_repsAndSetsInterval = null;  // Хранение интервала для остановки
      timer_repsAndSetsFormattedSeconds
      timer_repsAndSetsFormattedMinutes
      timer_repsAndSetsCounterNumber = 0


      // Переменные таймера циклов
      timer_circlesRunning = false
      timer_circlesWorkMinutes = 1
      timer_circlesRestSeconds = 0
      timer_circlesRestMinutes = 1
      timer_circlesWorkSeconds = 30
      timer_circlesWorkFormattedSeconds =  timer_circlesWorkSeconds < 10 ? `0${timer_circlesWorkSeconds}` : timer_circlesWorkSeconds.toString(); 
      timer_circlesWorkFormattedMinutes = timer_circlesWorkMinutes < 10 ? `0${timer_circlesWorkMinutes}` : timer_circlesWorkMinutes.toString(); 
      timer_circlesRestFormattedSeconds = timer_circlesRestSeconds < 10 ? `0${timer_circlesRestSeconds}` : timer_circlesRestSeconds.toString(); 
      timer_circlesRestFormattedMinutes = timer_circlesRestMinutes < 10 ? `0${timer_circlesRestMinutes}` : timer_circlesRestMinutes.toString(); 
      timer_circlesCounterNumber = 0
      // Возвращение сетки в первональаный вид
      document.querySelector('#timer-screen-circles').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ';
      // сброс интервалов, чтобы они не наслаивалсь друг на друга
      clearInterval(intervalIdCircles)

      // Переменные таймера EMOM
      timer_emomRunning = false
      timer_emomWorkMinutes = 1
      timer_emomRestSeconds = 0
      timer_emomRestMinutes = 1
      timer_emomWorkSeconds = 30
      timer_emomWorkFormattedSeconds =  timer_emomWorkSeconds < 10 ? `0${timer_emomWorkSeconds}` : timer_emomWorkSeconds.toString(); 
      timer_emomWorkFormattedMinutes = timer_emomWorkMinutes < 10 ? `0${timer_emomWorkMinutes}` : timer_emomWorkMinutes.toString(); 
      timer_emomRestFormattedSeconds = timer_emomRestSeconds < 10 ? `0${timer_emomRestSeconds}` : timer_emomRestSeconds.toString(); 
      timer_emomRestFormattedMinutes = timer_emomRestMinutes < 10 ? `0${timer_emomRestMinutes}` : timer_emomRestMinutes.toString(); 
      timer_emomCounterNumber = 0
      // Возвращение сетки в первональаный вид
      document.querySelector('#timer-screen-emom').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.20 + 'px ';
      // сброс интервалов, чтобы они не наслаивалсь друг на друга
      clearInterval(intervalIdEmom)

      // Переменные таймера SUP
      timer_supRunning = false
      timer_supWorkMinutes = 1
      timer_supRestSeconds = 0
      timer_supRestMinutes = 1
      timer_supWorkSeconds = 30
      timer_supWorkFormattedSeconds =  timer_supWorkSeconds < 10 ? `0${timer_supWorkSeconds}` : timer_supWorkSeconds.toString(); 
      timer_supWorkFormattedMinutes = timer_supWorkMinutes < 10 ? `0${timer_supWorkMinutes}` : timer_supWorkMinutes.toString(); 
      timer_supRestFormattedSeconds = timer_supRestSeconds < 10 ? `0${timer_supRestSeconds}` : timer_supRestSeconds.toString(); 
      timer_supRestFormattedMinutes = timer_supRestMinutes < 10 ? `0${timer_supRestMinutes}` : timer_supRestMinutes.toString(); 
      timer_supCounterNumber = 0
      // Возвращение сетки в первональаный вид
      document.querySelector('#timer-screen-sup').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.20 + 'px ';
      // сброс интервалов, чтобы они не наслаивалсь друг на друга
      clearInterval(intervalIdSup)
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

