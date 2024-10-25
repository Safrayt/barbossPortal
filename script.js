
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
    // сетка для #exercisesBase-screen
    document.querySelector('#exercisesBase-screen').style.gridTemplateRows = mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.06 + 'px '+ mainContainerHeight*0.08 + 'px ' + mainContainerHeight*0.10 + 'px ' + mainContainerHeight*0.70 + 'px ';



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
}

function containersResize() {
    window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    containersAndScreensSizes()
  });
  }

  containersAndScreensSizes()
  containersResize()



// функция перелистывания экрана на следующую секцию
function changeSection() {
    if (mainContainerWidthPosition == 1) {
        slaveContainerWidthRight = 0
        document.querySelector('.slave-container').style.right = slaveContainerWidthRight + 'px'
    }
    if (mainContainerWidthPosition > 1) {
        slaveContainerWidthRight = slaveContainerWidth - mainContainerWidth
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
            const buttonText = event.target.innerText;
            if (buttonText === "База упражнений") {
                mainContainerWidthPosition = mainContainerWidthPosition + 1
                document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                containersAndScreensSizes()
                changeSection()
                document.getElementById("exercisesBase-screen").style.display = "grid";
                // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                disableButtons();
                setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
            }


        }
        // Кнопка перехода на предыдущий экран
        function navButtonBack() {
               const buttonText = event.target.innerText;
                if (buttonText === "Назад") {
                    mainContainerWidthPosition = mainContainerWidthPosition - 1
                    document.querySelector('.slave-container').style.transition = "right 1s ease-in-out";
                    setTimeout(() => containersAndScreensSizes(), 1000);
                    changeSection()
                    setTimeout(() => document.getElementById("exercisesBase-screen").style.display = "none", 1000);
                    // Фунция отключения всех кнопок на 1 секунда для исключения повторного нажатия
                    disableButtons();
                    setTimeout(() => document.querySelector('.slave-container').style.transition = "none", 1000)
                }

            }
            


        