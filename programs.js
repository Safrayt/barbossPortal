
// Страница со списком программ

function createProgramElement(program) {
    return `
        <button class="workoutPrograms-screen-programsList-item" onclick="navButtonForward()">
            <div class="workoutPrograms-screen-programsList-item-text">
                <div class="workoutPrograms-screen-programsList-item-text-nameBox">
                    <h3 class="workoutPrograms-screen-programsList-item-text-name">${program.name}</h3>
                </div>
                <div class="workoutPrograms-screen-programsList-item-text-line"></div>
                <h4 class="workoutPrograms-screen-programsList-item-text-difficult">Для кого: ${program.difficult}</h4>
                <h4 class="workoutPrograms-screen-programsList-item-text-days">График: ${program.days}</h4>
                <h4 class="workoutPrograms-screen-programsList-item-text-duration">Продолжительность: ${program.duration}</h4>
            </div>
        </button>
    `;
}

// Получение ссылки на ul элемент
const programsListContainer = document.getElementById('workoutPrograms-screen-programsList');

// Очистка текущего содержимого (если нужно)
programsListContainer.innerHTML = '';

// Добавление каждого элемента программы в ul
programsList.forEach(program => {
    programsListContainer.innerHTML += createProgramElement(program);
});


// отслеживание нажатие кнопок с разными программами
document.addEventListener("DOMContentLoaded", function() {
    // Находим все кнопки с нужным классом и текстом
    const button_program_rutinka = Array.from(document.querySelectorAll('.workoutPrograms-screen-programsList-item')).find(button_program_rutinka => button_program_rutinka.querySelector('.workoutPrograms-screen-programsList-item-text-name')?.textContent === "Рутинка");
    
    // Если выбрана программа рутинка

    if (button_program_rutinka) {
    
        // Добавляем обработчик на клик
        button_program_rutinka.addEventListener('click', function() {
            // Находим секцию с id "programScreen"
            const programScreen = document.querySelector('#workoutProgram-screen-rutinkaWeeks');

            if (programScreen) {
                // Создаем нужный HTML
                const headerHTML = `
                <div class="slave-screen-header">
                    <button class="slave-screen-header-backButton workoutProgram-screen-backButton" onclick="navButtonBack()">Назад</button>
                    <div class="slave-screen-header-title-box">
                    <h1 class="slave-screen-header-title-main">Рутинка</h1>
                    <div class="slave-screen-header-title-line"></div>
                    <h1 class="slave-screen-header-title-slave">Список недель</h1>
                    </div>
                </div>
                `;
                const weeksList = `
                <ul id="workoutProgram-screen-rutinkaWeeks-weeksList">
                `;

                programScreen.innerHTML = headerHTML + weeksList

                function createWeekElement(week) {
                    return `
                        <button class="workoutProgram-screen-rutinkaWeeks-weeksList-item" onclick="navButtonForward()">
                            <div class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text">
                                <div class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text-nameBox">
                                    <h3 class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text-name">${week.name}</h3>
                                </div>
                                <div class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text-line"></div>
                                <h4 class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text-difficult">Тренировочные дни: ${week.daysList.filter(day => day.dayType === 'Основной').length}</h4>
                                <h4 class="workoutProgram-screen-rutinkaWeeks-weeksList-item-text-days">Дни отдыха: ${week.daysList.filter(day => day.dayType === 'Разгрузочный').length}</h4>
                            </div>
                        </button>
                    `;
                }
                
                // Получение ссылки на ul элемент
                const weeksListContainer = document.getElementById('workoutProgram-screen-rutinkaWeeks-weeksList');
                
                // Очистка текущего содержимого (если нужно)
                weeksListContainer.innerHTML = '';
                
                // Добавление каждого элемента программы в ul
                rutinkaWeeks.forEach(week => {
                    weeksListContainer.innerHTML += createWeekElement(week);
                })
                // Заполнение экрана с выбором недель закончено, теперь поиск по нажатии на конкретную неделю

                // Поиск событий при нажатии конкретной недели в Рутинке
                const button_program_rutinka_week_1 = Array.from(document.querySelectorAll('.workoutProgram-screen-rutinkaWeeks-weeksList-item')).find(button_program_rutinka_week_1 => button_program_rutinka_week_1.querySelector('.workoutProgram-screen-rutinkaWeeks-weeksList-item-text-name')?.textContent === "Неделя 1");
                    // Добавить сюда остальные недели


                // при нажаитии на Неделю #1
                if (button_program_rutinka_week_1) {
                    button_program_rutinka_week_1.addEventListener('click', function() {
                        console.log ("Выбрана неделя 1")
                        
                        // Находим секцию с id "programScreen"
                        const daysScreen = document.querySelector('#workoutProgram-screen-rutinkaDays');
                        // Создаем нужный HTML
                        const headerHTML = `
                        <div class="slave-screen-header">
                            <button class="slave-screen-header-backButton workoutProgram-screen-rutinkaDays-backButton" onclick="navButtonBack()">Назад</button>
                            <div class="slave-screen-header-title-box">
                            <h1 class="slave-screen-header-title-main">Рутинка</h1>
                            <div class="slave-screen-header-title-line"></div>
                            <h1 class="slave-screen-header-title-slave">Неделя 1</h1>
                            </div>
                        </div>
                        `;
                        const daysList = `
                        <ul id="workoutProgram-screen-rutinkaDays-daysList">
                        `;

                        daysScreen.innerHTML = headerHTML + daysList
                        
                        

                    })
                }





            }
        })
    }
})



