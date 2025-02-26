let program1 = {
    name : "Рутинка",
    difficult : "новичкам и любителям",
    days : "от 2 до 5 дней в неделю",
    duration : "6 месяцев"
}

let program2 = {
    name : "Орф",
    difficult : "любителям и продвинутым",
    days : "2 дня в неделю",
    duration : "3 недели"
}

let program3 = {
    name : "Цербер",
    difficult : "любителям и продвинутым",
    days : "3 дня в неделю",
    duration : "7 недель"
}

let program4 = {
    name : "Пятюня",
    difficult : "любителям и продвинутым",
    days : "5 дней в неделю",
    duration : "1 неделя"
}

let programsList = [program1, program2, program3, program4]




// Рутинка - неделя 1 - день №
let rutinkaWeek01Day01 = {
    day : 'Понедельник',
    dayType : 'Основной',
    workoutType : 'Подходы',
    ExerciseNumber : 6,

    ExerciseMain_1 : exercise_13,
    ExerciseMain_1Sets : 3,
    ExerciseMain_1Reps : 10,
    ExerciseAlternativ_1 : exercise_17,
    ExerciseAlternativ_1Sets : 3,
    ExerciseAlternativ_1Reps : 8,

    ExerciseMain_2 : exercise_33,
    ExerciseMain_2Sets : 3,
    ExerciseMain_2Reps : 8,
    ExerciseAlternativ_2 : exercise_13,
    ExerciseAlternativ_2Sets : 3,
    ExerciseAlternativ_2Reps : 8,

    ExerciseMain_3 : exercise_8,
    ExerciseMain_3Sets : 3,
    ExerciseMain_3Reps : 10,
    ExerciseAlternativ_3 : exercise_13,
    ExerciseAlternativ_3Sets : 3,
    ExerciseAlternativ_3Reps : 8,

    ExerciseMain_4 : exercise_1,
    ExerciseMain_4Sets : 3,
    ExerciseMain_4Reps : 10,
    ExerciseAlternativ_4 : exercise_2,
    ExerciseAlternativ_4Sets : 3,
    ExerciseAlternativ_4Reps : 8,

    ExerciseMain_5 : exercise_3,
    ExerciseMain_5Sets : 3,
    ExerciseMain_5Reps : 10,
    ExerciseAlternativ_5 : exercise_4,
    ExerciseAlternativ_5Sets : 3,
    ExerciseAlternativ_5Reps : 8,

    ExerciseMain_6 : exercise_5,
    ExerciseMain_6Sets : 3,
    ExerciseMain_6Reps : 10,
    ExerciseAlternativ_6 : exercise_6,
    ExerciseAlternativ_66Sets : 3,
    ExerciseAlternativ_6Reps : 8,

    restTimeSets : '60 секунд',
    restTimeExercises : '60 секунд',
    link : 'https://t.me/swtBarBosS/2138'
}

let rutinkaWeek01Day02 = {
    day : 'Вторник',
    dayType : 'Основной',
    workoutType : 'Круги',
    ExerciseNumber : 6,
    ExerciseMain_1 : exercise_13,
    ExerciseAlternativ_1 : exercise_17,
    ExerciseMain_2 : exercise_14,
    ExerciseAlternativ_2 : exercise_18,
    ExerciseMain_3 : exercise_15,
    ExerciseAlternativ_3 : exercise_19,
    ExerciseMain_4 : exercise_1,
    ExerciseAlternativ_4 : exercise_2,
    ExerciseMain_5 : exercise_3,
    ExerciseAlternativ_5 : exercise_4,
    ExerciseMain_6 : exercise_5,
    ExerciseAlternativ_6 : exercise_6,
    restTimeSets : '60 секунд',
    restTimeExercises : '60 секунд'
}

let rutinkaWeek01Day03 = {
    day : 'Среда',
    dayType : 'Основной'
}

let rutinkaWeek01Day04 = {
    day : 'Четверг',
    dayType : 'Основной'
}

let rutinkaWeek01Day05 = {
    day : 'Пятница',
    dayType : 'Основной'
}

let rutinkaWeek01Day06 = {
    day : 'Суббота',
    dayType : 'Разгрузочный'
}

let rutinkaWeek01Day07 = {
    day : 'Воскресенье',
    dayType : 'Разгрузочный'
}

// Рутинка - неделя 1
let rutinkaWeek01 = {
    name : 'Неделя 1',
    daysList : [rutinkaWeek01Day01, rutinkaWeek01Day02, rutinkaWeek01Day03, rutinkaWeek01Day04, rutinkaWeek01Day05, rutinkaWeek01Day06, rutinkaWeek01Day07]
    // mainDays : rutinkaWeek01.daysList.filter(day => day.type === 'Основной').length,
    // restDays : rutinkaWeek01.daysList.filter(day => day.type === 'Разгрузочный').length
}

// Рутинка - неделя 2 - день №
let rutinkaWeek02Day01 = {
    day : 'Понедельник',
    dayType : 'Основной'
}

let rutinkaWeek02Day02 = {
    day : 'Вторник',
    dayType : 'Разгрузочный'
}

let rutinkaWeek02Day03 = {
    day : 'Среда',
    dayType : 'Основной'
}

let rutinkaWeek02Day04 = {
    day : 'Четверг',
    dayType : 'Разгрузочный'
}

let rutinkaWeek02Day05 = {
    day : 'Пятница',
    dayType : 'Основной'
}

let rutinkaWeek02Day06 = {
    day : 'Суббота',
    dayType : 'Разгрузочный'
}

let rutinkaWeek02Day07 = {
    day : 'Воскресенье',
    dayType : 'Разгрузочный'
}

// Рутинка - неделя 2
let rutinkaWeek02 = {
    name : 'Неделя 2',
    daysList : [rutinkaWeek02Day01, rutinkaWeek02Day02, rutinkaWeek02Day03, rutinkaWeek02Day04, rutinkaWeek02Day05, rutinkaWeek02Day06, rutinkaWeek02Day07]
    // mainDays : rutinkaWeek01.daysList.filter(day => day.type === 'Основной').length,
    // restDays : rutinkaWeek01.daysList.filter(day => day.type === 'Разгрузочный').length
}



// Рутинка - недели
let rutinkaWeeks = [rutinkaWeek01, rutinkaWeek02]