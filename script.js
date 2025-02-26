


// Фунации для секции База Упражнений
        
// Добавление всех упражнений из массива allExercises на страницу База Упражнений
            // Получаем элемент списка, куда будут добавляться упражнения
            const ExercisesListExercisesList = document.getElementById('exercisesBase-screen-exercisesList');

            // Функция для определения дополнительного класса для nameBox в зависимости от типа упражнения
            function getTypeClass(exerciseType) {
            switch (exerciseType) {
                case "Подтягивания":
                return "exercisesBase-screen-exercisesList-item-text-nameBox-pullExercises";
                case "Отжимания":
                return "exercisesBase-screen-exercisesList-item-text-nameBox-pushExercises";
                case "Ноги":
                return "exercisesBase-screen-exercisesList-item-text-nameBox-legsExercises";
                case "Разводки":
                return "exercisesBase-screen-exercisesList-item-text-nameBox-flyExercises";
                case "Скручивания":
                return "exercisesBase-screen-exercisesList-item-text-nameBox-curlExercises";
                default:
                return "";
            }
            }

            // Функция для определения дополнительного класса для кнопки в зависимости от типа упражнения
            function getButtonClass(exerciseType) {
            switch (exerciseType) {
                case "Подтягивания":
                return "exercisesBase-screen-exercisesList-item-text-button-pullExercises";
                case "Отжимания":
                return "exercisesBase-screen-exercisesList-item-text-button-pushExercises";
                case "Ноги":
                return "exercisesBase-screen-exercisesList-item-text-button-legsExercises";
                case "Разводки":
                return "exercisesBase-screen-exercisesList-item-text-button-flyExercises";
                case "Скручивания":
                return "exercisesBase-screen-exercisesList-item-text-button-curlExercises";
                default:
                return "";
            }
            }

            // Функция для очистки контейнера перед добавлением новых элементов
            function clearExerciseList() {
            ExercisesListExercisesList.replaceChildren();
            }

    // Функция для добавления упражнений в список
    function renderExercises(exercises) {
    // Сначала очищаем контейнер
    clearExerciseList();

    exercises.forEach(exercise => {
        // Создаем новый элемент <li>
        const exerciseItem = document.createElement('li');
        exerciseItem.className = 'exercisesBase-screen-exercisesList-item';

        // Создаем контейнер для текста
        const textDiv = document.createElement('div');
        textDiv.className = 'exercisesBase-screen-exercisesList-item-text';

        // Создаем элемент для названия упражнения
        const nameBox = document.createElement('div');
        nameBox.className = 'exercisesBase-screen-exercisesList-item-text-nameBox';
        
        // Добавляем класс для nameBox в зависимости от типа упражнения
        const additionalNameClass = getTypeClass(exercise.type);
        if (additionalNameClass) {
        nameBox.classList.add(additionalNameClass);
        }
        
        const nameElement = document.createElement('h3');
        nameElement.className = 'exercisesBase-screen-exercisesList-item-text-name';
        nameElement.textContent = exercise.name;
        nameBox.appendChild(nameElement);

        const lineDiv = document.createElement('div');
        lineDiv.className = 'exercisesBase-screen-exercisesList-item-text-line';

        const typeElement = document.createElement('h4');
        typeElement.className = 'exercisesBase-screen-exercisesList-item-text-type';
        typeElement.textContent = exercise.type;

        const difficultElement = document.createElement('h4');
        difficultElement.className = 'exercisesBase-screen-exercisesList-item-text-difficult';
        difficultElement.textContent = exercise.difficult;

        // Создаем кнопку "Подробней" в виде ссылки
        const buttonElement = document.createElement('button');
        buttonElement.className = 'exercisesBase-screen-exercisesList-item-text-button';
        
        // Добавляем класс для кнопки в зависимости от типа упражнения
        const additionalButtonClass = getButtonClass(exercise.type);
        if (additionalButtonClass) {
        buttonElement.classList.add(additionalButtonClass);
        }
        
        // Устанавливаем ссылку на кнопку
        buttonElement.onclick = () => navButtonForward();
        buttonElement.textContent = 'Подробней';
        // Устанавливаем действия при нажатии на кнопку
        buttonElement.addEventListener("click", exercisesBaseAboutExerciseButton)

        // Добавляем все текстовые элементы в контейнер
        textDiv.appendChild(nameBox);
        textDiv.appendChild(lineDiv);
        textDiv.appendChild(typeElement);
        textDiv.appendChild(difficultElement);
        textDiv.appendChild(buttonElement);

        const imgBox = document.createElement('div');
        imgBox.className = 'exercisesBase-screen-exercisesList-item-imgBox';
        const imgElement = document.createElement('img');
        imgElement.className = 'exercisesBase-screen-exercisesList-item--imgBox-img';
        imgElement.src = exercise.img;
        imgElement.alt = exercise.name;
        imgBox.appendChild(imgElement);

        exerciseItem.appendChild(textDiv);
        exerciseItem.appendChild(imgBox);
        ExercisesListExercisesList.appendChild(exerciseItem);
    });
    }

    // Очистка и рендеринг упражнений
    clearExerciseList();
    renderExercises(allExerciseBase);



// Скрытие и показ фильтра упражнений при прокрутке
    document.addEventListener('DOMContentLoaded', function () {
    const listElement = document.querySelector('#exercisesBase-screen-exercisesList');
    const difficultButtons = document.querySelector('#exercisesBase-screen-difficultSortButtons');
    const typeButtons = document.querySelector('#exercisesBase-screen-typeSortButtons');
  
    if (!listElement || !difficultButtons || !typeButtons) return;
  
    let lastScrollTop = 0;
  
    listElement.addEventListener('scroll', function () {
      const currentScrollTop = listElement.scrollTop;
  
      if (currentScrollTop > lastScrollTop) {
        // Скролл вниз — скрыть кнопки
        difficultButtons.style.display = 'none';
        typeButtons.style.display = 'none';
        listElement.style.gridRowStart = 3;
        listElement.style.gridRowEnd = 6;
            const itemHeight = document.querySelector('.exercisesBase-screen-exercisesList-item').offsetHeight;
        listElement.style.paddingTop = itemHeight + 'px';
        listElement.style.paddingBottom = itemHeight + 'px';
      } else {
        // Скролл вверх — показать кнопки
        difficultButtons.style.display = 'flex';
        typeButtons.style.display = 'flex';
        listElement.style.gridRowStart = 5;
        listElement.style.gridRowEnd = 6;
        listElement.style.paddingTop = '0px';
      }
  
      lastScrollTop = currentScrollTop;
    });
  });
  






  // Функция для применения фильтра по сложности
function filterByDifficulty(exercise, selectedDifficulty) {
    return selectedDifficulty === "" || exercise.difficult === selectedDifficulty;
  }
  
  // Функция для применения фильтра по типу упражнения
  function filterByType(exercise, selectedType) {
    return selectedType === "" || exercise.type === selectedType;
  }
  
  // Функция для отображения упражнений в соответствии с фильтрами
  function renderFilteredExercises(exercises, selectedDifficulty, selectedType) {
    const filteredExercises = exercises.filter(exercise =>
      filterByDifficulty(exercise, selectedDifficulty) &&
      filterByType(exercise, selectedType)
    );
  
    // Очистить и заново отобразить упражнения (реализовать вашу логику отображения)
    clearExerciseList();
    renderExercises(filteredExercises);
  }
  
  // Обработчик для кнопок фильтра по сложности
  const difficultyButtons = document.querySelectorAll('#exercisesBase-screen-difficultSortButtons button');
  let selectedDifficulty = ""; // Хранит выбранную сложность (пусто, если нет фильтра)
  
  difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Если нажата та же кнопка, сбрасываем фильтрацию
      if (selectedDifficulty === button.dataset.difficulty) {
        selectedDifficulty = ""; // Сбрасываем фильтр
        button.classList.remove('active');
      } else {
        selectedDifficulty = button.dataset.difficulty; // Применяем новый фильтр
        // Сбрасываем активные классы на всех кнопках
        difficultyButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active'); // Добавляем активный класс
      }
      
      // Применяем фильтрацию
      renderFilteredExercises(allExerciseBase, selectedDifficulty, selectedType);
    });
  });
  
  // Обработчик для кнопок фильтра по типу движения
  const typeButtons = document.querySelectorAll('#exercisesBase-screen-typeSortButtons button');
  let selectedType = ""; // Хранит выбранный тип упражнения (пусто, если нет фильтра)
  
  typeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Если нажата та же кнопка, сбрасываем фильтрацию
      if (selectedType === button.dataset.type) {
        selectedType = ""; // Сбрасываем фильтр
        button.classList.remove('active');
      } else {
        selectedType = button.dataset.type; // Применяем новый фильтр
        // Сбрасываем активные классы на всех кнопках
        typeButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active'); // Добавляем активный класс
      }
      
      // Применяем фильтрацию
      renderFilteredExercises(allExerciseBase, selectedDifficulty, selectedType);
    });
  });
  
  // Инициализация data-атрибутов для кнопок
  difficultyButtons[0].dataset.difficulty = "Облегченное упражнение";
  difficultyButtons[1].dataset.difficulty = "Базовое упражнение";
  difficultyButtons[2].dataset.difficulty = "Продвинутое упражнение";
  
  typeButtons[0].dataset.type = "Подтягивания";
  typeButtons[1].dataset.type = "Отжимания";
  typeButtons[2].dataset.type = "Разводки";
  typeButtons[3].dataset.type = "Скручивания";
  typeButtons[4].dataset.type = "Ноги";











// Хранение текущих фильтров и поискового запроса
let searchQuery = "";

// Функция для применения поиска по названию
function filterBySearch(exercise, searchQuery) {
  return exercise.name.toLowerCase().includes(searchQuery.toLowerCase());
}

// Функция для отображения упражнений с учетом фильтров и поиска
function renderFilteredExercises(exercises) {
  // Применяем фильтрацию по сложности и типу
  const filteredExercises = exercises.filter(exercise =>
    filterByDifficulty(exercise, selectedDifficulty) &&
    filterByType(exercise, selectedType) &&
    filterBySearch(exercise, searchQuery) // Применяем фильтр поиска
  );

  // Очистить и заново отобразить упражнения (реализовать вашу логику отображения)
  clearExerciseList();
  renderExercises(filteredExercises);
}

// Обработчик для поля ввода поиска
const searchInput = document.getElementById('exercisesBase-screen-searchForm-input');
searchInput.addEventListener('input', (event) => {
  searchQuery = event.target.value; // Сохраняем текущий запрос
  renderFilteredExercises(allExerciseBase); // Перерисовываем список с учетом фильтров и поиска
});












// функция exercisesBase-aboutExercise-button, которая заполняет DOM exercise-screen в зависимости от названия упражнения, на котором была нажата кнопка "Подробнее":

function exercisesBaseAboutExerciseButton(event) {
  const exerciseName = event.target.closest(".exercisesBase-screen-exercisesList-item").querySelector(".exercisesBase-screen-exercisesList-item-text-name").textContent.trim();

  const exercise = allExerciseBase.find(ex => ex.name === exerciseName);

  if (!exercise) {
    console.error("Упражнение не найдено!");
    return;
  }

  // Заполнение данных в exercise-screen
  document.querySelector(".exercise-screen-infoBlock-nameBox-text").textContent = exercise.name;
  document.querySelector(".exercise-screen-infoBlock-etc-imgBox-img").src = exercise.img;
  document.querySelector(".exercise-screen-infoBlock-etc-VideoURL").href = exercise.url;
  document.querySelector("#exercise-screen-infoBlock-etc-disc-motionType-name").textContent = exercise.type;
  document.querySelector("#exercise-screen-infoBlock-etc-disc-difficultType-name").textContent = exercise.difficult;
  document.querySelector("#exercise-screen-infoBlock-etc-disc-equipmentType-name").textContent = exercise.equipment;
  

// Заполнение списка активных мышечных групп
    // Предположим, что у вас есть массив exercise.musclelsMaster
    const musclelsMaster = exercise.musclelsMaster;
    // Предположим, что у вас есть массив exercise.musclelsSlave
    const musclelsSlave = exercise.musclelsSlave;

    // Находим родительский контейнер для всех li элементов
    const muscleListContainer = document.querySelector(".exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList");

    // Очищаем контейнер от старых элементов (если нужно)
    muscleListContainer.innerHTML = "";

    // Для каждого элемента массива создаём li элемент
    musclelsMaster.forEach(muscle => {
      // Создаём li элемент
      const li = document.createElement("li");
      li.classList.add("exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item", "exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item-master");
      
      // Создаём div внутри li
      const div = document.createElement("div");
      div.classList.add("exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item-text");
      div.textContent = muscle.replace(/_/g, " "); // Устанавливаем текст из массива
      
      // Добавляем div в li
      li.appendChild(div);
      
      // Добавляем li в родительский контейнер
      muscleListContainer.appendChild(li);
    });

    // Для каждого элемента массива создаём li элемент
    musclelsSlave.forEach(muscle => {
      // Создаём li элемент
      const li = document.createElement("li");
      li.classList.add("exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item", "exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item-slave");
      
      // Создаём div внутри li
      const div = document.createElement("div");
      div.classList.add("exercise-screen-muscleBlock-muscleBox-muscleTags-muscleList-item-text");
      div.textContent = muscle.replace(/_/g, " "); // Устанавливаем текст из массива
      
      // Добавляем div в li
      li.appendChild(div);
      
      // Добавляем li в родительский контейнер
      muscleListContainer.appendChild(li);
    });


  // Заполнение карты активных мышц
  // const svgContainer = document.querySelector("#exercise-screen-muscleBlock-muscleBox-allMuscle-svg-activeMusclels");
  // svgContainer.innerHTML = exercise.musclels;

  const svgContainer = document.querySelector('.exercise-screen-muscleBlock-muscleBox-allMuscle-svg');

  // Функция для добавления элементов в SVG
  function populateSVG() {
    // Очищаем контейнер от старых элементов (если нужно)
    svgContainer.innerHTML = "";
  
    // Объединяем оба массива
    const allMuscles = [...exercise.musclelsMaster, ...exercise.musclelsSlave];
  
    // Для каждого элемента в объединенном массиве
    allMuscles.forEach(muscle => {
      // Проверяем, есть ли данный элемент в musclesSvgList
      if (musclesSvgList[muscle]) {
        // Получаем SVG элемент из musclesSvgList
        let svgElement = musclesSvgList[muscle];
  
        // Парсим SVG строку в DOM-элемент
        let parser = new DOMParser();
        let svgDoc = parser.parseFromString(svgElement, "image/svg+xml");
        let groups = svgDoc.querySelectorAll('g'); // Все элементы <g> в SVG
  
        // Проходим по всем элементам <g> и добавляем атрибуты
        groups.forEach(group => {
          if (exercise.musclelsMaster.includes(muscle)) {
            // Для элементов из musclelsMaster
            group.setAttribute("fill", "#d83d4c");
            group.setAttribute("stroke", "#010101");
            group.setAttribute("stroke-miterlimit", "10");
          } else if (exercise.musclelsSlave.includes(muscle)) {
            // Для элементов из musclelsSlave
            group.setAttribute("fill", "#db9397");
            group.setAttribute("stroke", "#010101");
            group.setAttribute("stroke-miterlimit", "10");
          }
        });
  
        // Преобразуем обновленный SVG обратно в строку и добавляем в контейнер
        svgContainer.innerHTML += svgDoc.documentElement.outerHTML;
      }
    });
  }

  // Вызываем функцию для заполнения SVG
  populateSVG();
  

  // Заполнение описания
  document.querySelector(".exercise-screen-about-text").innerHTML = exercise.about;
}

