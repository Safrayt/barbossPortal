
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


function containersSizes() {
// размеры главного контейнера 
    // высота
        mainContainerHeight = window.innerHeight;
    // ширина
       mainContainerWidth = window.innerHeight * 0.5625;
    // размеры для стиля главного контейнера
    document.querySelector('.main-container').style.height = mainContainerHeight + 'px'
    document.querySelector('.main-container').style.width = mainContainerWidth + 'px'

// размеры рабского контейнера
    // высота
        slaveContainerHeight = window.innerHeight;
    // ширина
        // ширина рабского контейрена зависит от переменной позиции рабского контейнера
        slaveContainerWidth = window.innerHeight * 0.5625 * mainContainerWidthPosition;
    // размеры для стиля рабского контейнера
    document.querySelector('.slave-container').style.height = slaveContainerHeight + 'px'
    document.querySelector('.slave-container').style.width = slaveContainerWidth + 'px'
}

function containersResize() {
    window.addEventListener('resize', function() {
    console.log("Размер окна изменен");
    containersSizes()
  });
  }

  containersSizes()
  containersResize()


// Кнопки
    // Кнопки навиганции
        // Кнопка перехода на следующий экран
        function navButtonForward() {
            mainContainerWidthPosition = mainContainerWidthPosition + 1
            containersSizes()
        }
        // Кнопка перехода на предыдущий экран
        function navButtonBack() {
            if (mainContainerWidthPosition > 1) {
                mainContainerWidthPosition = mainContainerWidthPosition - 1
                containersSizes()
            }
        }