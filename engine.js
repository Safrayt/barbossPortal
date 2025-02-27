

// Переменные для стилей
// переменные размеров контейнеров
    // переменные размеров главного контейнера.
    let mainContainerHeight
    let mainContainerWidth
    // переменные размеров рабского контейнера.
    let slaveContainerHeight
    let slaveContainerWidth
// переменная позиции рабского контейнера.
    let mainContainerWidthPosition = 1
// переменная сдвига позиции рабоского контейнера в пикселях
    let slaveContainerWidthRight = 0

function containersAndScreensSizes() {
// размеры главного контейнера 
    // высота
        mainContainerHeight = window.innerHeight;
    // ширина
    if (window.innerWidth/window.innerHeight < 0.5625) {
        mainContainerWidth = window.innerWidth;
    } else {
        mainContainerWidth = window.innerHeight * 0.5625;
        }
    // размеры для стиля главного контейнера
    document.querySelector('.main-container').style.height = mainContainerHeight + 'px'
    document.querySelector('.main-container').style.width = mainContainerWidth + 'px'

// размеры рабского контейнера
    // высота
        slaveContainerHeight = window.innerHeight;
    // ширина
        // ширина рабского контейрена зависит от переменной позиции рабского контейнера
        if (window.innerWidth/window.innerHeight < 0.5625) {
            slaveContainerWidth = window.innerWidth * mainContainerWidthPosition;
        } else {
            slaveContainerWidth = window.innerHeight * 0.5625 * mainContainerWidthPosition;
            }
    // размеры для стиля рабского контейнера
    document.querySelector('.slave-container').style.height = slaveContainerHeight + 'px'
    document.querySelector('.slave-container').style.width = slaveContainerWidth + 'px'
    // изменение размеров отступа справа у рабского контейнера в зависимости от переменной переменная позиции рабского контейнера.
    changeSection()

// размеры всех экранов
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.height = mainContainerHeight + 'px';
        screen.style.width = mainContainerWidth + 'px';
        });


// размеры сетки на экранах
    // сетка для #main-screen
    document.querySelector('#main-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.40 + 'px ' + mainContainerHeight*0.5 + 'px ' + mainContainerHeight*1 + 'px ';
    // сетка для #workoutPrograms-screen
    document.querySelector('#workoutPrograms-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ';
        // сетка для #workoutProgram-screen-rutinkaWeeks
        document.querySelector('#workoutProgram-screen-rutinkaWeeks').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ';
        // сетка для #workoutProgram-screen-rutinkaDays
        document.querySelector('#workoutProgram-screen-rutinkaDays').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ';
    // сетка для #exercisesBase-screen
    document.querySelector('#exercisesBase-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.06 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.70 + 'px ';
    // сетка для #exercise-screen
    document.querySelector('#exercise-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ';
     // сетка для #timers-screen
     document.querySelector('#timers-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.70 + 'px '+ mainContainerHeight*0.20 + 'px ';
     // сетка для #timer-screen
     document.querySelector('#timer-screen-repsAndSets').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.16 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.16 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.20 + 'px ';
        // сетка для экрана таёмера циклов, если таймер не запущени и таймер запущен
        if (timer_circlesRunning === false) {
        document.querySelector('#timer-screen-circles').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ';
        } else {
            document.querySelector('#timer-screen-circles').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px ' + mainContainerHeight*0.08 + 'px '+ mainContainerHeight*0.23 + 'px ';
        }
     // сетка для #timer-screen   
     document.querySelector('#timer-screen-emom').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.20 + 'px ';
    // сетка для #timer-screen   
    document.querySelector('#timer-screen-sup').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.23 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.20 + 'px ';

      


// Изменение перменных в css
      //ширина экрана 
      document.documentElement.style.setProperty('--site-width-100', mainContainerWidth*1 + 'px');
      document.documentElement.style.setProperty('--site-width-95', mainContainerWidth*0.95 + 'px');
      document.documentElement.style.setProperty('--site-width-90', mainContainerWidth*0.9 + 'px');
      document.documentElement.style.setProperty('--site-width-85', mainContainerWidth*0.85 + 'px');
      document.documentElement.style.setProperty('--site-width-80', mainContainerWidth*0.8 + 'px');
      document.documentElement.style.setProperty('--site-width-75', mainContainerWidth*0.75 + 'px');
      document.documentElement.style.setProperty('--site-width-70', mainContainerWidth*0.7 + 'px');
      document.documentElement.style.setProperty('--site-width-65', mainContainerWidth*0.65 + 'px');
      document.documentElement.style.setProperty('--site-width-60', mainContainerWidth*0.6 + 'px');
      document.documentElement.style.setProperty('--site-width-55', mainContainerWidth*0.55 + 'px');
      document.documentElement.style.setProperty('--site-width-50', mainContainerWidth*0.5 + 'px');
      document.documentElement.style.setProperty('--site-width-45', mainContainerWidth*0.45 + 'px');
      document.documentElement.style.setProperty('--site-width-40', mainContainerWidth*0.4 + 'px');
      document.documentElement.style.setProperty('--site-width-35', mainContainerWidth*0.35 + 'px');
      document.documentElement.style.setProperty('--site-width-30', mainContainerWidth*0.3 + 'px');
      document.documentElement.style.setProperty('--site-width-25', mainContainerWidth*0.25 + 'px');
      document.documentElement.style.setProperty('--site-width-20', mainContainerWidth*0.2 + 'px');
      document.documentElement.style.setProperty('--site-width-15', mainContainerWidth*0.15 + 'px');
      document.documentElement.style.setProperty('--site-width-10', mainContainerWidth*0.1 + 'px');
      document.documentElement.style.setProperty('--site-width-5', mainContainerWidth*0.05 + 'px');

     // высота экрана
      document.documentElement.style.setProperty('--site-height-100', mainContainerHeight*1 + 'px');
      document.documentElement.style.setProperty('--site-height-85', mainContainerHeight*0.85 + 'px');
      document.documentElement.style.setProperty('--site-height-80', mainContainerHeight*0.8 + 'px');
      document.documentElement.style.setProperty('--site-height-90', mainContainerHeight*0.9 + 'px');
      document.documentElement.style.setProperty('--site-height-95', mainContainerHeight*0.95 + 'px');
      document.documentElement.style.setProperty('--site-height-75', mainContainerHeight*0.75 + 'px');
      document.documentElement.style.setProperty('--site-height-70', mainContainerHeight*0.7 + 'px');
      document.documentElement.style.setProperty('--site-height-65', mainContainerHeight*0.65 + 'px');
      document.documentElement.style.setProperty('--site-height-60', mainContainerHeight*0.6 + 'px');
      document.documentElement.style.setProperty('--site-height-55', mainContainerHeight*0.55 + 'px');
      document.documentElement.style.setProperty('--site-height-50', mainContainerHeight*0.5 + 'px');
      document.documentElement.style.setProperty('--site-height-45', mainContainerHeight*0.45 + 'px');
      document.documentElement.style.setProperty('--site-height-40', mainContainerHeight*0.4 + 'px');
      document.documentElement.style.setProperty('--site-height-35', mainContainerHeight*0.35 + 'px');
      document.documentElement.style.setProperty('--site-height-30', mainContainerHeight*0.3 + 'px');
      document.documentElement.style.setProperty('--site-height-25', mainContainerHeight*0.25 + 'px');
      document.documentElement.style.setProperty('--site-height-225', mainContainerHeight*0.225 + 'px');
      document.documentElement.style.setProperty('--site-height-20', mainContainerHeight*0.2 + 'px');
      document.documentElement.style.setProperty('--site-height-15', mainContainerHeight*0.15 + 'px');
      document.documentElement.style.setProperty('--site-height-10', mainContainerHeight*0.1 + 'px');
      document.documentElement.style.setProperty('--site-height-5', mainContainerHeight*0.05 + 'px');
      document.documentElement.style.setProperty('--site-height-025', mainContainerHeight*0.025 + 'px');

    // Размеры отступов
    document.documentElement.style.setProperty('--margin-padding-10px', mainContainerWidth*0.030 + 'px');
    document.documentElement.style.setProperty('--margin-padding-15px', mainContainerWidth*0.045 + 'px');

    // Размеры теней
    document.documentElement.style.setProperty('--box-shadow-025px', mainContainerWidth*0.005 + 'px');
    document.documentElement.style.setProperty('--box-shadow-5px', mainContainerWidth*0.008 + 'px');
    document.documentElement.style.setProperty('--box-shadow-10px', mainContainerWidth*0.030 + 'px');


    // Размеры шрифта заголовков секций
      document.documentElement.style.setProperty('--header-font-size-0025', mainContainerWidth*0.025 + 'px');
      document.documentElement.style.setProperty('--header-font-size-005', mainContainerWidth*0.05 + 'px');
      document.documentElement.style.setProperty('--header-font-size-006', mainContainerWidth*0.06 + 'px');
      document.documentElement.style.setProperty('--header-font-size-007', mainContainerWidth*0.07 + 'px');
      document.documentElement.style.setProperty('--header-font-size-008', mainContainerWidth*0.08 + 'px');
      document.documentElement.style.setProperty('--header-font-size-009', mainContainerWidth*0.09 + 'px');
      document.documentElement.style.setProperty('--header-font-size-010', mainContainerWidth*0.10 + 'px');
      
    // Размеры шрифта для кнопок
    document.documentElement.style.setProperty('--button-font-size-001', mainContainerWidth*0.01 + 'px');
    document.documentElement.style.setProperty('--button-font-size-0025', mainContainerWidth*0.025 + 'px');
    document.documentElement.style.setProperty('--button-font-size-003', mainContainerWidth*0.03 + 'px');
    document.documentElement.style.setProperty('--button-font-size-004', mainContainerWidth*0.04 + 'px');
    document.documentElement.style.setProperty('--button-font-size-005', mainContainerWidth*0.05 + 'px');
    document.documentElement.style.setProperty('--button-font-size-006', mainContainerWidth*0.06 + 'px');
    document.documentElement.style.setProperty('--button-font-size-007', mainContainerWidth*0.07 + 'px');
    document.documentElement.style.setProperty('--button-font-size-008', mainContainerWidth*0.08 + 'px');
    document.documentElement.style.setProperty('--button-font-size-010', mainContainerWidth*0.1 + 'px');
    fontsSizes()
}


    function fontsSizes () {
    // Размеры шрифта
    document.documentElement.style.setProperty('--font-size-1', (mainContainerWidth/14) + 'px');
    document.documentElement.style.setProperty('--font-size-2', (mainContainerWidth/16) + 'px');
    document.documentElement.style.setProperty('--font-size-3', (mainContainerWidth/18) + 'px');
    document.documentElement.style.setProperty('--font-size-4', (mainContainerWidth/20) + 'px');
    document.documentElement.style.setProperty('--font-size-5', (mainContainerWidth/22) + 'px');
    document.documentElement.style.setProperty('--font-size-6', (mainContainerWidth/24) + 'px');
    document.documentElement.style.setProperty('--font-size-7', (mainContainerWidth/26) + 'px');
    document.documentElement.style.setProperty('--font-size-8', (mainContainerWidth/28) + 'px');
    document.documentElement.style.setProperty('--font-size-9', (mainContainerWidth/30) + 'px');
    document.documentElement.style.setProperty('--font-size-10', (mainContainerWidth/32) + 'px');

    document.documentElement.style.setProperty('--font-size-time', (mainContainerWidth/5) + 'px');
}





function containersResize() {
    window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    containersAndScreensSizes()
  });
  }
  fontsSizes()
  containersAndScreensSizes()
  containersResize()



// функция перелистывания экрана на следующую секцию
function changeSection() {
    if (mainContainerWidthPosition == 1) {
        slaveContainerWidthRight = 0
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition == 2) {
        slaveContainerWidthRight = 1 * mainContainerWidth
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition == 3) {
        slaveContainerWidthRight = 2 * mainContainerWidth
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition == 4) {
        slaveContainerWidthRight = 3 * mainContainerWidth
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition == 5) {
        slaveContainerWidthRight = 4 * mainContainerWidth
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition == 6) {
        slaveContainerWidthRight = 5 * mainContainerWidth
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    
}

// Кнопки
// Функция отключения всех кнопок на 1 секунду
function disableButtons() {
        // Находим все кнопки на странице
        const buttons = document.querySelectorAll('button');
        // Отключаем каждую кнопку
        buttons.forEach(button => {
            button.disabled = true;
        });
        // Через 1 секунду включаем кнопки обратно
        setTimeout(() => {
            buttons.forEach(button => {
                button.disabled = false;
            });
        }, 1000); // 1000 миллисекунд = 1 секунда
    }



    // Кнопки навиганции
        // Кнопка перехода на следующий экран
        function navButtonForward() {
            // если кнопки содержат класс кнопок с главного экрана
            if (event.target.classList.contains('main-screen-buttons-button')) {
            const buttonText = event.target.innerText;
                // если кнопка с главного экрана содержит текст
                if (buttonText === "Программы тренировок") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("workoutPrograms-screen").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (buttonText === "База упражнений") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("exercisesBase-screen").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (buttonText === "Таймеры") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("timers-screen").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
            }

            

            // если кнопки содержат класс кнопок "Подробнее" из Базы упражнений
            if (event.target.classList.contains('exercisesBase-screen-exercisesList-item-text-button')) {
                // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                disableButtons();
                mainContainerWidthPosition = mainContainerWidthPosition + 1
                document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                containersAndScreensSizes()
                changeSection()
                document.getElementById("exercise-screen").style.display = "grid";
                
                setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
            }

            // Таймеры
            if (event.target.closest('.timers-screen-buttonsBlock-list-item-button')) {
                const buttonText = event.target.closest('.timers-screen-buttonsBlock-list-item-button').querySelector('.timers-screen-buttonsBlock-list-item-button-text-name').innerText;
                console.log("а3ка23а");
                if (buttonText === "Таймер для отдыха") {                    
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("timer-screen-repsAndSets").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (buttonText === "Таймер циклов") {                    
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("timer-screen-circles").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (buttonText === "EMOM таймер") {                    
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("timer-screen-emom").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (buttonText === "Таймер для суперподхода") {                    
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("timer-screen-sup").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
            }

            // Программы -> Недели
            if (event.target.closest('.workoutPrograms-screen-programsList-item')) {
                const buttonText = event.target.closest('.workoutPrograms-screen-programsList-item').querySelector('.workoutPrograms-screen-programsList-item-text-name').innerText;
                console.log("Рутинка");
                if (buttonText === "Рутинка") {                    
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition + 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    containersAndScreensSizes()
                    changeSection()
                    document.getElementById("workoutProgram-screen-rutinkaWeeks").style.display = "grid";
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
            }

                // Недели -> Дни (Срабаотыват на все кнопки где есть слово "Неделя")
                if (event.target.closest('.workoutProgram-screen-rutinkaWeeks-weeksList-item')) {
                    const buttonText = event.target.closest('.workoutProgram-screen-rutinkaWeeks-weeksList-item').querySelector('.workoutProgram-screen-rutinkaWeeks-weeksList-item-text-name').innerText;
                    
                    if (buttonText.includes("Неделя")) {
                        console.log("Неделя");                  
                        // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                        disableButtons();
                        mainContainerWidthPosition = mainContainerWidthPosition + 1
                        document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                        containersAndScreensSizes()
                        changeSection()
                        document.getElementById("workoutProgram-screen-rutinkaDays").style.display = "grid";
                        
                        setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                    }
                }

    }

        // Кнопка перехода на предыдущий экран
        function navButtonBack() {
               const buttonText = event.target.innerText;
                if (event.target.classList.contains('workoutPrograms-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("workoutPrograms-screen").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (event.target.classList.contains('exercisesBase-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("exercisesBase-screen").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                if (event.target.classList.contains('timers-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("timers-screen").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }

                if (event.target.classList.contains('exercise-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("exercise-screen").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }

                if (event.target.classList.contains('timer-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("timer-screen-repsAndSets").style.display = "none", 1000);
                    setTimeout(() => document.getElementById("timer-screen-circles").style.display = "none", 1000);
                    setTimeout(() => document.getElementById("timer-screen-emom").style.display = "none", 1000);
                    setTimeout(() => document.getElementById("timer-screen-sup").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }

                if (event.target.classList.contains('workoutProgram-screen-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("workoutProgram-screen-rutinkaWeeks").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }

                if (event.target.classList.contains('workoutProgram-screen-rutinkaDays-backButton') && buttonText === "Назад") {
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("workoutProgram-screen-rutinkaDays").style.display = "none", 1000);
                    
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }
                
            }
        