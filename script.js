
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

// размеры всех экранов
    document.querySelector('.screen').style.height = window.innerHeight + 'px'
    document.querySelector('.screen').style.width = window.innerHeight * 0.5625 + 'px'

// размеры сетки на экранах
    // сетка для #main-screen
    document.querySelector('#main-screen').style.gridTemplateRows = mainContainerHeight*0.15 + 'px ' + mainContainerHeight*0.35 + 'px ' + mainContainerHeight*0.5 + 'px ';
    
}

function containersResize() {
    window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    containersAndScreensSizes()
  });
  }

  containersAndScreensSizes()
  containersResize()






// Кнопки
    // Кнопки навиганции
        // Кнопка перехода на следующий экран
        function navButtonForward() {
            mainContainerWidthPosition = mainContainerWidthPosition + 1
            containersAndScreensSizes()
        }
        // Кнопка перехода на предыдущий экран
        function navButtonBack() {
            if (mainContainerWidthPosition > 1) {
                mainContainerWidthPosition = mainContainerWidthPosition - 1
                containersAndScreensSizes()
            }
        }