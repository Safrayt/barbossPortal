
// Облегченные упражнения
let exercise_1 = {
    name : "Подтягивания к столбу",
    type : "Подтягивания",
    img : "img/exercises/exercise_1.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Вертикальный столб',
    musclels : `
    <g id="Трапеция_нижняя">
	<path id="_x32__14_" class="st0" d="M257.3,35.3c10,0.3,20,0.6,30.1,0.8c1.5,2.5,3,5.1,4.5,7.7c0,14.3,0.1,28.7,0.1,43
		c-4.9-7.3-9.8-14.7-14.7-22c0.4-7.4,0.7-14.8,1.1-22.2c-4.1-0.1-8.1-0.2-12.2-0.3C263.1,39.9,260.2,37.6,257.3,35.3z"/>
	<path id="_x31__23_" class="st0" d="M328.1,35.3c-10,0.3-20,0.5-30.1,0.8c-1.5,2.5-3,5.1-4.5,7.7c0,14.3-0.1,28.7-0.1,43
		c4.9-7.3,9.8-14.7,14.7-22c-0.4-7.4-0.7-14.8-1.1-22.2c4-0.1,8.1-0.2,12.1-0.2C322.1,40,325.1,37.7,328.1,35.3z"/>
	<path class="st0" d="M341.5,53"/>
</g>
<g id="Широчайшая_x2C__ромбовидная_x2C__круглая">
	<path id="_x34__1_" class="st0" d="M182.8,73.9c-1.3,4-2.7,7.9-4,11.9c0.6-6.1,1.3-12.2,1.9-18.3c0.9-0.8,1.8-1.7,2.8-2.5
		C183.3,68,183.1,70.9,182.8,73.9z"/>
	<path id="_x33__1_" class="st0" d="M128.2,73.9c1.3,4,2.7,7.9,4,11.9c-0.6-6.1-1.3-12.2-1.9-18.3c-0.9-0.8-1.8-1.7-2.8-2.5
		C127.7,68,127.9,70.9,128.2,73.9z"/>
	<path id="_x32__2_" class="st0" d="M265.5,43.3c-0.2,2.8-0.3,5.6-0.5,8.4c-0.9,1.3-1.8,2.5-2.7,3.8c1,5.5,2,11,2.9,16.4
		c1.6,5.4,3.2,10.8,4.8,16.2c0.4,5.2,0.9,10.5,1.3,15.8c3.3,2.6,6.5,5.3,9.8,7.9c0.9,0,1.8,0.1,2.8,0.1c2.6-7.6,5.2-15.2,7.8-22.8
		c-5.4-8.1-10.7-16.2-16.1-24.3c0.4-7,0.9-14.1,1.3-21.2C273.2,43.6,269.4,43.5,265.5,43.3z"/>
	<path id="_x32__4_" class="st0" d="M320,43.3c0.2,2.8,0.3,5.6,0.5,8.4c0.9,1.3,1.8,2.5,2.7,3.8c-1,5.5-2,11-2.9,16.4
		c-1.6,5.4-3.2,10.8-4.8,16.2c-0.3,5.4-0.6,10.7-1,16.1c-3.4,2.5-6.8,5.1-10.2,7.6c-0.9,0-1.8,0.1-2.8,0.1
		c-2.6-7.6-5.2-15.2-7.8-22.8c5.4-8.1,10.7-16.2,16.1-24.3c-0.4-7-0.9-14.1-1.3-21.2C312.4,43.6,316.2,43.5,320,43.3z"/>
</g>
<g id="Бицепс">
	<path id="_x31__16_" class="st0" d="M114.9,67.3c2.8-2.8,5.5-5.5,8.3-8.3c0.9,1.2,1.9,2.5,2.8,3.7c0.2,4.1,0.4,8.3,0.6,12.4
		c-2.3,5.8-4.7,11.5-7.1,17.3c-2.4,2.5-4.8,5-7.3,7.5c-1.1-3.8-2.3-7.6-3.4-11.4c-0.1-6.9-0.2-13.8-0.3-20.7
		C110.7,67.6,112.8,67.4,114.9,67.3z"/>
	<path id="_x31__17_" class="st0" d="M196.4,67.3c-2.8-2.8-5.5-5.5-8.3-8.3c-0.9,1.2-1.9,2.5-2.8,3.7c-0.2,4.1-0.4,8.3-0.6,12.4
		c2.4,5.8,4.7,11.5,7.1,17.3c2.4,2.5,4.9,5,7.3,7.5c1.1-3.8,2.3-7.6,3.4-11.4c0.1-6.9,0.2-13.8,0.3-20.7
		C200.6,67.6,198.5,67.4,196.4,67.3z"/>
</g>
<g id="Предпелчья">
	<path id="_x31__20_" class="st1" d="M103.5,87.9c-0.6,2.3-1.2,4.6-1.9,6.9c-0.7,4.1-1.4,8.2-2.1,12.2c0.8,6.3,1.6,12.6,2.4,18.8
		c3,4.1,6,8.2,9,12.3c0.3-2.7,0.6-5.3,0.9-8c2.5-6.4,5.1-12.9,7.6-19.3c0-3.3,0-6.7-0.1-10c-1.7,1.8-3.5,3.5-5.2,5.3
		c-1.2-1.6-2.3-3.2-3.5-4.8c-0.6-1.9-1.2-3.8-1.8-5.8C107.1,93,105.3,90.4,103.5,87.9z"/>
	<path id="_x31__21_" class="st1" d="M207.9,88.2c0.6,2.3,1.2,4.6,1.9,6.9c0.7,4.1,1.4,8.2,2.1,12.2c-0.8,6.3-1.6,12.6-2.4,18.8
		c-3,4.1-6,8.2-9,12.3c-0.3-2.7-0.6-5.3-0.9-8c-2.5-6.4-5.1-12.9-7.6-19.3c0-3.3,0-6.7,0.1-10c1.7,1.8,3.5,3.5,5.2,5.3
		c1.2-1.6,2.3-3.2,3.5-4.8c0.6-1.9,1.2-3.8,1.8-5.8C204.3,93.3,206.1,90.7,207.9,88.2z"/>
	<path id="_x33__8_" class="st1" d="M242.6,86.4c1.6,3.1,3.2,6.2,4.9,9.3c1.2,0.1,2.4,0.2,3.6,0.3c2.1-1.8,4.3-3.6,6.4-5.4
		c0,2.3-0.1,4.6-0.2,6.8c-0.4,4.6-0.8,9.1-1.2,13.6c-2.5,7.2-5,14.4-7.5,21.6c-1.3,0.6-2.6,1.3-3.9,2c-0.4,1.3-0.8,2.6-1.2,4
		c-1.3,0.4-2.6,0.9-3.9,1.3c-1.1-11.1-2.2-22.1-3.3-33.2c0.8-4.8,1.7-9.7,2.5-14.6C240.1,90.3,241.4,88.4,242.6,86.4z"/>
	<path id="_x34__6_" class="st1" d="M343,86.4c-1.6,3.1-3.2,6.2-4.9,9.3c-1.2,0.1-2.4,0.2-3.6,0.3c-2.1-1.8-4.3-3.6-6.4-5.4
		c0,2.3,0.1,4.6,0.2,6.8c0.4,4.6,0.8,9.1,1.2,13.6c2.5,7.2,5,14.4,7.5,21.6c1.3,0.6,2.6,1.3,3.9,2c0.4,1.3,0.8,2.6,1.2,4
		c1.3,0.4,2.6,0.9,3.9,1.3c1.1-11.1,2.2-22.1,3.3-33.2c-0.8-4.8-1.7-9.7-2.5-14.6C345.5,90.3,344.3,88.4,343,86.4z"/>
</g>
    `,
    about :  `● Уот так уот.<br>
              ● Уот так уот.<br>
              ● Уот так уот<br>
              ● Уот так уот.<br>`,
    url : 'https://t.me/swtBarBosS'
  }
  
  let exercise_2 = {
    name : "Отжимания от столба",
    type : "Отжимания",
    img : "img/exercises/exercise_2.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Вертикальный столб',
    musclels : `
    <g id="Трапеция_нижняя">
	<path id="_x32__14_" class="st0" d="M257.3,35.3c10,0.3,20,0.6,30.1,0.8c1.5,2.5,3,5.1,4.5,7.7c0,14.3,0.1,28.7,0.1,43
		c-4.9-7.3-9.8-14.7-14.7-22c0.4-7.4,0.7-14.8,1.1-22.2c-4.1-0.1-8.1-0.2-12.2-0.3C263.1,39.9,260.2,37.6,257.3,35.3z"/>
	<path id="_x31__23_" class="st0" d="M328.1,35.3c-10,0.3-20,0.5-30.1,0.8c-1.5,2.5-3,5.1-4.5,7.7c0,14.3-0.1,28.7-0.1,43
		c4.9-7.3,9.8-14.7,14.7-22c-0.4-7.4-0.7-14.8-1.1-22.2c4-0.1,8.1-0.2,12.1-0.2C322.1,40,325.1,37.7,328.1,35.3z"/>
	<path class="st0" d="M341.5,53"/>
</g>
<g id="Широчайшая_x2C__ромбовидная_x2C__круглая">
	<path id="_x34__1_" class="st0" d="M182.8,73.9c-1.3,4-2.7,7.9-4,11.9c0.6-6.1,1.3-12.2,1.9-18.3c0.9-0.8,1.8-1.7,2.8-2.5
		C183.3,68,183.1,70.9,182.8,73.9z"/>
	<path id="_x33__1_" class="st0" d="M128.2,73.9c1.3,4,2.7,7.9,4,11.9c-0.6-6.1-1.3-12.2-1.9-18.3c-0.9-0.8-1.8-1.7-2.8-2.5
		C127.7,68,127.9,70.9,128.2,73.9z"/>
	<path id="_x32__2_" class="st0" d="M265.5,43.3c-0.2,2.8-0.3,5.6-0.5,8.4c-0.9,1.3-1.8,2.5-2.7,3.8c1,5.5,2,11,2.9,16.4
		c1.6,5.4,3.2,10.8,4.8,16.2c0.4,5.2,0.9,10.5,1.3,15.8c3.3,2.6,6.5,5.3,9.8,7.9c0.9,0,1.8,0.1,2.8,0.1c2.6-7.6,5.2-15.2,7.8-22.8
		c-5.4-8.1-10.7-16.2-16.1-24.3c0.4-7,0.9-14.1,1.3-21.2C273.2,43.6,269.4,43.5,265.5,43.3z"/>
	<path id="_x32__4_" class="st0" d="M320,43.3c0.2,2.8,0.3,5.6,0.5,8.4c0.9,1.3,1.8,2.5,2.7,3.8c-1,5.5-2,11-2.9,16.4
		c-1.6,5.4-3.2,10.8-4.8,16.2c-0.3,5.4-0.6,10.7-1,16.1c-3.4,2.5-6.8,5.1-10.2,7.6c-0.9,0-1.8,0.1-2.8,0.1
		c-2.6-7.6-5.2-15.2-7.8-22.8c5.4-8.1,10.7-16.2,16.1-24.3c-0.4-7-0.9-14.1-1.3-21.2C312.4,43.6,316.2,43.5,320,43.3z"/>
</g>
<g id="Бицепс">
	<path id="_x31__16_" class="st0" d="M114.9,67.3c2.8-2.8,5.5-5.5,8.3-8.3c0.9,1.2,1.9,2.5,2.8,3.7c0.2,4.1,0.4,8.3,0.6,12.4
		c-2.3,5.8-4.7,11.5-7.1,17.3c-2.4,2.5-4.8,5-7.3,7.5c-1.1-3.8-2.3-7.6-3.4-11.4c-0.1-6.9-0.2-13.8-0.3-20.7
		C110.7,67.6,112.8,67.4,114.9,67.3z"/>
	<path id="_x31__17_" class="st0" d="M196.4,67.3c-2.8-2.8-5.5-5.5-8.3-8.3c-0.9,1.2-1.9,2.5-2.8,3.7c-0.2,4.1-0.4,8.3-0.6,12.4
		c2.4,5.8,4.7,11.5,7.1,17.3c2.4,2.5,4.9,5,7.3,7.5c1.1-3.8,2.3-7.6,3.4-11.4c0.1-6.9,0.2-13.8,0.3-20.7
		C200.6,67.6,198.5,67.4,196.4,67.3z"/>
</g>
<g id="Предпелчья">
	<path id="_x31__20_" class="st1" d="M103.5,87.9c-0.6,2.3-1.2,4.6-1.9,6.9c-0.7,4.1-1.4,8.2-2.1,12.2c0.8,6.3,1.6,12.6,2.4,18.8
		c3,4.1,6,8.2,9,12.3c0.3-2.7,0.6-5.3,0.9-8c2.5-6.4,5.1-12.9,7.6-19.3c0-3.3,0-6.7-0.1-10c-1.7,1.8-3.5,3.5-5.2,5.3
		c-1.2-1.6-2.3-3.2-3.5-4.8c-0.6-1.9-1.2-3.8-1.8-5.8C107.1,93,105.3,90.4,103.5,87.9z"/>
	<path id="_x31__21_" class="st1" d="M207.9,88.2c0.6,2.3,1.2,4.6,1.9,6.9c0.7,4.1,1.4,8.2,2.1,12.2c-0.8,6.3-1.6,12.6-2.4,18.8
		c-3,4.1-6,8.2-9,12.3c-0.3-2.7-0.6-5.3-0.9-8c-2.5-6.4-5.1-12.9-7.6-19.3c0-3.3,0-6.7,0.1-10c1.7,1.8,3.5,3.5,5.2,5.3
		c1.2-1.6,2.3-3.2,3.5-4.8c0.6-1.9,1.2-3.8,1.8-5.8C204.3,93.3,206.1,90.7,207.9,88.2z"/>
	<path id="_x33__8_" class="st1" d="M242.6,86.4c1.6,3.1,3.2,6.2,4.9,9.3c1.2,0.1,2.4,0.2,3.6,0.3c2.1-1.8,4.3-3.6,6.4-5.4
		c0,2.3-0.1,4.6-0.2,6.8c-0.4,4.6-0.8,9.1-1.2,13.6c-2.5,7.2-5,14.4-7.5,21.6c-1.3,0.6-2.6,1.3-3.9,2c-0.4,1.3-0.8,2.6-1.2,4
		c-1.3,0.4-2.6,0.9-3.9,1.3c-1.1-11.1-2.2-22.1-3.3-33.2c0.8-4.8,1.7-9.7,2.5-14.6C240.1,90.3,241.4,88.4,242.6,86.4z"/>
	<path id="_x34__6_" class="st1" d="M343,86.4c-1.6,3.1-3.2,6.2-4.9,9.3c-1.2,0.1-2.4,0.2-3.6,0.3c-2.1-1.8-4.3-3.6-6.4-5.4
		c0,2.3,0.1,4.6,0.2,6.8c0.4,4.6,0.8,9.1,1.2,13.6c2.5,7.2,5,14.4,7.5,21.6c1.3,0.6,2.6,1.3,3.9,2c0.4,1.3,0.8,2.6,1.2,4
		c1.3,0.4,2.6,0.9,3.9,1.3c1.1-11.1,2.2-22.1,3.3-33.2c-0.8-4.8-1.7-9.7-2.5-14.6C345.5,90.3,344.3,88.4,343,86.4z"/>
</g>
    `,
    about :  `● Уот так уот.<br>
              ● Уот так уот.<br>
              ● Уот так уот<br>
              ● Уот так уот.<br>`,
    url : 'https://t.me/swtBarBosS'
  }

  let exercise_3 = {
    name : "Приседания с упором икрами",
    type : "Ноги",
    img : "img/exercises/exercise_3.png",
    difficult : 'Облегченное упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_4 = {
    name : "Додо от столба/стены",
    type : "Разводки",
    img : "img/exercises/exercise_4.png",
    difficult : 'Облегченное упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_5 = {
    name : "Бег в упоре",
    type : "Скручивания",
    img : "img/exercises/exercise_5.png",
    difficult : 'Облегченное упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

// Базовые упражнения

  let exercise_6 = {
    name : "Австралийские подтягивания",
    type : "Подтягивания",
    img : "img/exercises/exercise_6.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_7 = {
    name : 'Отжимания "Руки выше ног"',
    type : "Отжимания",
    img : "img/exercises/exercise_7.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_8 = {
    name : 'Зашагивания',
    type : "Ноги",
    img : "img/exercises/exercise_21.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_9 = {
    name : 'Додо от наклонной поверхности',
    type : "Разводки",
    img : "img/exercises/exercise_9.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_10 = {
    name : 'Скручивания',
    type : "Скручивания",
    img : "img/exercises/exercise_10.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_11 = {
    name : 'Подтягивания "Австралийский тюлень"',
    type : "Подтягивания",
    img : "img/exercises/exercise_11.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_12 = {
    name : 'Отжимания от пола',
    type : "Отжимания",
    img : "img/exercises/exercise_12.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_13 = {
    name : 'Приседания',
    type : "Ноги",
    img : "img/exercises/exercise_8.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_14 = {
    name : 'Подъёмы коленей до груди в висе/упоре на брусьях',
    type : "Скручивания",
    img : "img/exercises/exercise_14.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_15 = {
    name : 'Подтягивания',
    type : "Подтягивания",
    img : "img/exercises/exercise_15.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_16 = {
    name : 'Отжимания "Руки выше ног"',
    type : "Отжимания",
    img : "img/exercises/exercise_16.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_17 = {
    name : 'Выпады',
    type : "Ноги",
    img : "img/exercises/exercise_13.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_18 = {
    name : 'Подъёмы ног выше уголка в висе/упоре на брусьях',
    type : "Скручивания",
    img : "img/exercises/exercise_18.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_19 = {
    name : "Австралийские подтягивания на бицепс ложным нижним хватом",
    type : "Подтягивания",
    img : "img/exercises/exercise_19.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_20 = {
    name : "Отжимания на трицепс",
    type : "Отжимания",
    img : "img/exercises/exercise_34.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_21 = {
    name : 'Подъёмы на носки двумя ногами',
    type : "Ноги",
    img : "img/exercises/exercise_17.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_22 = {
    name : 'Боковые скручивания с согнутыми ногами в висе/упоре на брусьях',
    type : "Скручивания",
    img : "img/exercises/exercise_22.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_23 = {
    name : 'Высокие подтягивания',
    type : "Подтягивания",
    img : "img/exercises/exercise_23.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_24 = {
    name : "Отжимания на брусьях",
    type : "Отжимания",
    img : "img/exercises/exercise_20.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_25 = {
    name : 'Подъёмы на носки одной ногой',
    type : "Ноги",
    img : "img/exercises/exercise_25.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_26 = {
    name : 'Подъёмы ног как можно выше в висе/упоре на брусьях',
    type : "Скручивания",
    img : "img/exercises/exercise_26.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_27 = {
    name : 'Подтягивания со сведением лопаток',
    type : "Подтягивания",
    img : "img/exercises/exercise_27.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_28 = {
    name : 'Отжимания "Нырок щуки"',
    type : "Отжимания",
    img : "img/exercises/exercise_24.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_29 = {
    name : 'Сгибания на заднюю поверхность бедра с помощью рук',
    type : "Ноги",
    img : "img/exercises/exercise_29.png",
    difficult : 'Базовое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_30 = {
    name : 'Боковые подъёмы ног как можно выше в висе/в упоре на брусьях',
    type : "Скручивания",
    img : "img/exercises/exercise_30.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_31 = {
    name : 'Подтягивания "Австралийский тюлень" на заднюю дельту',
    type : "Подтягивания",
    img : "img/exercises/exercise_31.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_32 = {
    name : 'Французские отжимания',
    type : "Отжимания",
    img : "img/exercises/exercise_28.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_33 = {
    name : 'Болгарские приседания',
    type : "Ноги",
    img : "img/exercises/exercise_33.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }

let exercise_34 = {
  name : 'Отжимания на брусьях в группировке',
    type : "Отжимания",
    img : "img/exercises/exercise_32.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'

}

let exercise_35 = {
  name : 'Выпрыгивания',
    type : "Ноги",
    img : "img/exercises/exercise_35.png",
    difficult : 'Продвинутое упражнение',
    url : 'https://t.me/swtBarBosS/2937'
  }



  let allExerciseBase = [exercise_1, exercise_2, exercise_3, exercise_4, exercise_5, exercise_6, exercise_7, exercise_8, exercise_9,
    exercise_10, exercise_11, exercise_12, exercise_13, exercise_14, exercise_15, exercise_16, exercise_17, exercise_18, exercise_19,
    exercise_20, exercise_21, exercise_22, exercise_23, exercise_24, exercise_25, exercise_26, exercise_27, exercise_28, exercise_29,
    exercise_30, exercise_31, exercise_32, exercise_33, exercise_34, exercise_35]


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
  
  // Заполнение активных мышц
  const svgContainer = document.querySelector("#exercise-screen-muscleBlock-muscleBox-allMuscle-svg-activeMusclels");
  svgContainer.innerHTML = exercise.musclels;

  // Заполнение описания
  document.querySelector(".exercise-screen-about-text").innerHTML = exercise.about;
}