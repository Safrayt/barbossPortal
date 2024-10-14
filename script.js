
// Переменные для стилей

// переменные размеров контейнеров
    // переменные размеров главного контейнера.
    let mainContainerHeight
    let mainContainerWidth
// переменная позиции ширины контейнера.
    let mainContainerWidthPosition = 1


function containersSizes() {

// размеры главного контейнера 
    // высота
        mainContainerHeight = window.innerHeight;
    // ширина
        // зависит от переменной позиции ширины контейнера
        mainContainerWidth = window.innerHeight * 0.5625 * mainContainerWidthPosition;
    // размеры для стиля главного контейнераыы
    document.querySelector('.main-container').style.height = mainContainerHeight + 'px'
    document.querySelector('.main-container').style.width = mainContainerWidth + 'px'
}
containersSizes()