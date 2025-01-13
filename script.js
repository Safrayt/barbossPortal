// Мышцы
let musclesSvgList = {
  Трапеция_верхняя : `<g id="Трапеция_верхняя"> <path id="_x34__9_" d="M145.7,19.7c-8.5,5.3-17,10.5-25.6,15.8c8.5,0.2,17,0.4,25.6,0.5 C145.7,30.6,145.7,25.2,145.7,19.7z"/>	<path id="_x33__13_" d="M167.1,19.1c8,5.3,16,10.5,24,15.8c-8,0.2-16,0.4-24,0.5C167.1,30,167.1,24.5,167.1,19.1z"/>	<path id="_x32_" d="M292.1,13.4c-10.9,6.8-21.8,13.6-32.8,20.4c8.5,0.2,17,0.4,25.6,0.5c2.3-3.6,4.6-7.2,6.9-10.8 C291.9,20.2,292,16.8,292.1,13.4z"/> C293.6,20.2,293.5,16.8,293.4,13.4z"/></g>`,
  Трапеция_нижняя : `<g id="Трапеция_нижняя"> <path id="_x32__14_" d="M257.3,35.3c10,0.3,20,0.6,30.1,0.8c1.5,2.5,3,5.1,4.5,7.7c0,14.3,0.1,28.7,0.1,43 c-4.9-7.3-9.8-14.7-14.7-22c0.4-7.4,0.7-14.8,1.1-22.2c-4.1-0.1-8.1-0.2-12.2-0.3C263.1,39.9,260.2,37.6,257.3,35.3z"/> <path id="_x31__23_" d="M328.1,35.3c-10,0.3-20,0.5-30.1,0.8c-1.5,2.5-3,5.1-4.5,7.7c0,14.3-0.1,28.7-0.1,43 c4.9-7.3,9.8-14.7,14.7-22c-0.4-7.4-0.7-14.8-1.1-22.2c4-0.1,8.1-0.2,12.1-0.2C322.1,40,325.1,37.7,328.1,35.3z"/> <path d="M341.5,53"/></g>`,
  Широчайшие : `<g id="Широчайшие"> <path id="_x34__1_" d="M182.8,73.9c-1.3,4-2.7,7.9-4,11.9c0.6-6.1,1.3-12.2,1.9-18.3c0.9-0.8,1.8-1.7,2.8-2.5 C183.3,68,183.1,70.9,182.8,73.9z"/> <path id="_x33__1_" d="M128.2,73.9c1.3,4,2.7,7.9,4,11.9c-0.6-6.1-1.3-12.2-1.9-18.3c-0.9-0.8-1.8-1.7-2.8-2.5 C127.7,68,127.9,70.9,128.2,73.9z"/> <path id="_x32__4_" d="M320,43.9c0,0,0.3,5,0.5,7.8c0.9,1.3,1.8,2.5,2.7,3.8c-1,5.5-2,11-2.9,16.4 c-1.6,5.4-3.2,10.8-4.8,16.2c-0.3,5.4-0.6,10.7-1,16.1c-3.4,2.5-6.8,5.1-10.2,7.6c-0.9,0-2.8-0.1-2.8-0.1s-5.2-15-7.8-22.6 c5.4-8.1,10.7-16.2,16.1-24.3c-0.4-7-1.3-20.6-1.3-20.6L320,43.9z"/> <path id="_x31__8_" d="M277,44.1c0,0-0.9,13.6-1.3,20.6c5.4,8.1,10.7,16.2,16.1,24.3c-2.6,7.6-7.8,22.6-7.8,22.6 s-1.9,0.1-2.8,0.1c-3.4-2.5-6.8-5.1-10.2-7.6c-0.4-5.4-0.7-10.7-1-16.1c-1.6-5.4-3.2-10.8-4.8-16.2c-0.9-5.4-1.9-10.9-2.9-16.4 c0.9-1.3,1.8-2.5,2.7-3.8c0.2-2.8,0.5-7.8,0.5-7.8L277,44.1z"/></g>`,
  Разгибатель_спины : `<g id="Разгибатель_спины"> <path id="_x31__22_" d="M292.7,91l-7.5,22.2c0,0-2.5,0-3.7,0c0,1.2,0.1,2.3,0.1,3.5c3.8,3.6,7.5,7.1,11.3,10.7 c3.5-3.4,7-6.8,10.6-10.1c0.1-1.4,0.2-2.8,0.2-4.2c-1,0-3.4-0.1-3.4-0.1L292.7,91z"/></g>`,
  Косые_мышцы : `<g id="Косые_мышцы"> <path id="_x32__9_" d="M131.7,68.6c2.6,1.5,5.2,2.9,7.8,4.4c0.4,12.5,0.7,25,1.1,37.6c0.7,2,1.4,3.9,2.1,5.9 c-1.9,2.6-3.8,5.2-5.6,7.7c-2.6-2.2-5.2-4.3-7.9-6.5c0-2.2,0-4.4,0.1-6.7c1.1-1.6,2.3-3.3,3.4-4.9c0.4-5.3,0.8-10.7,1.2-16.1 C133.2,82.9,132.4,75.7,131.7,68.6z"/> <path id="_x31__34_" d="M179.3,68.6c-2.6,1.5-5.2,2.9-7.8,4.4c-0.4,12.5-0.7,25-1.1,37.6c-0.7,2-1.4,3.9-2.1,5.9 c1.9,2.6,3.8,5.2,5.6,7.7c2.6-2.2,5.2-4.3,7.9-6.5c0-2.2,0-4.4-0.1-6.7c-1.1-1.6-2.3-3.3-3.4-4.9c-0.4-5.3-0.8-10.7-1.2-16.1	C177.8,82.9,178.5,75.7,179.3,68.6z"/>	<path d="M279.8,112.7c-3.1-2.5-6.1-5-9.2-7.4c-1.3,1.7-2.5,3.3-3.8,5c0,3.2,0,6.5,0,9.8c4.4-1.2,8.8-2.5,13.2-3.7 C279.8,115.1,279.8,113.9,279.8,112.7z"/>	<path d="M306,112.7c3.1-2.5,6.1-5,9.2-7.4c1.3,1.7,2.5,3.3,3.8,5c0,3.2,0,6.5,0,9.8c-4.4-1.2-8.8-2.5-13.2-3.7 C305.9,115.1,306,113.9,306,112.7z"/></g>`,
  Ягодицы : `<g id="Ягодицы"> <path id="_x32__11_" d="M280.4,117.8c-4.6,1.2-9.1,2.5-13.7,3.8c-0.6,6.2-1.2,12.4-1.8,18.6c1.1,5.3,2.3,10.6,3.5,15.9 c2.8,0.8,5.6,1.6,8.5,2.4c2.3-0.8,4.6-1.5,7-2.3c2.5-1.7,5-3.4,7.5-5.2c0.2-3.8,0.5-7.6,0.8-11.4c0-3.6-0.1-7.3-0.2-10.9 C288,125.2,284.2,121.5,280.4,117.8z"/> <path id="_x31__18_" d="M305.3,117.8c4.6,1.2,9.1,2.5,13.7,3.8c0.6,6.2,1.2,12.4,1.8,18.6c-1.1,5.3-2.3,10.6-3.5,15.9	c-2.8,0.8-5.6,1.6-8.5,2.4c-2.3-0.8-4.6-1.5-7-2.3c-2.5-1.7-5-3.4-7.5-5.2c-0.2-3.8-0.5-7.6-0.8-11.4c0-3.6,0.1-7.3,0.2-10.9 C297.7,125.2,301.5,121.5,305.3,117.8z"/></g>`,
  Задняя_поверхность_бёдер : `<g id="Задняя_поверхность_бёдер"> <path id="_x31__2_"  d="M283.9,158.1c-0.2,7.6-0.4,15.2-0.6,22.8c0.9,3.1,1.8,6.2,2.8,9.4c-0.3,6.1-0.6,12.2-0.9,18.2 c-1.9,3.7-3.9,7.5-5.8,11.2c-1.8-2.7-3.5-5.3-5.3-8c-2-0.5-4-1.1-6.1-1.6c-1.8,1.8-3.6,3.6-5.4,5.4c-0.8-9.1-1.6-18.3-2.4-27.4	c2.6-9.9,5.2-19.8,7.8-29.7c3,0.6,5.9,1.3,8.9,1.9C279.2,159.6,281.5,158.8,283.9,158.1z"/> <path id="_x31__6_"  d="M301.5,158.1c0.2,7.6,0.4,15.2,0.6,22.8c-0.9,3.1-1.8,6.2-2.8,9.4c0.3,6.1,0.6,12.2,0.9,18.2	c1.9,3.7,3.9,7.5,5.8,11.2c1.8-2.7,3.5-5.3,5.3-8c2-0.5,4-1.1,6.1-1.6c1.8,1.8,3.6,3.6,5.4,5.4c0.8-9.1,1.6-18.3,2.4-27.4		c-2.6-9.9-5.2-19.8-7.8-29.7c-3,0.6-5.9,1.3-8.9,1.9C306.2,159.6,303.8,158.8,301.5,158.1z"/></g>`,
  Четырёхглавые : `<g id="Четырёхглавые"> <path id="_x32__10_"  d="M264,143.1c0.9,4.6,1.8,9.1,2.7,13.7c-2.3,9-4.7,17.9-7,26.9c-0.2-7.3-0.4-14.6-0.6-21.9	C260.7,155.5,262.3,149.3,264,143.1z"/> <path id="_x31__5_"  d="M321.6,143.1c-0.9,4.6-1.8,9.1-2.7,13.7c2.3,9,4.7,17.9,7,26.9c0.2-7.3,0.4-14.6,0.6-21.9	C324.9,155.5,323.3,149.3,321.6,143.1z"/> <path id="_x33__2_" d="M132.9,132.4c-2.3,5.3-4.6,10.6-6.9,15.9c-1.4,6.3-2.8,12.6-4.3,18.8c0.9,12.3,1.9,24.7,2.8,37	c1.3-0.7,2.7-1.4,4.1-2.1c1.5-2.7,3-5.4,4.5-8c1.8,4.4,3.6,8.9,5.5,13.4c3.2,0.2,6.5,0.3,9.7,0.5c0.2-7.3,0.5-14.6,0.8-22	c-1.8-6.9-3.7-13.7-5.5-20.6c-2-4.2-4.1-8.9-5.9-14.3C135.4,144.2,133.9,137.9,132.9,132.4z"/>	<path id="_x33__3_"  d="M177.5,132.4c2.3,5.3,4.6,10.6,6.9,15.9c1.4,6.3,2.9,12.6,4.3,18.8c-0.9,12.3-1.9,24.7-2.9,37	c-1.4-0.7-2.7-1.4-4.1-2.1c-1.5-2.7-3-5.4-4.5-8c-1.8,4.4-3.6,8.9-5.5,13.4c-3.2,0.2-6.5,0.3-9.7,0.5c-0.2-7.3-0.5-14.6-0.8-22	c1.8-6.9,3.7-13.7,5.5-20.6c2-4.2,4.1-8.9,5.9-14.3C175.1,144.2,176.6,137.9,177.5,132.4z"/></g>`,
  Икры : `<g id="Икры"> <path id="_x34__2_"  d="M142.7,221.1c0.8,2.1,1.5,4.1,2.3,6.1c0,4,0,8,0,12.1c-2.8,7.7-5.6,15.4-8.4,23.1	c-0.6,4.5-1.3,9-1.9,13.5c-0.9-2-1.9-3.9-2.9-5.9c0.4-11.6,0.8-23.2,1.1-34.8c1.4-2.4,2.8-4.9,4.1-7.3	C139,225.6,140.9,223.4,142.7,221.1z"/>	<path id="_x33__4_" d="M124.5,220c1.3,2.3,2.6,4.6,3.8,6.8c-0.3,14.3-0.6,28.7-0.8,43c-1.1,2-2.1,4-3.1,6	c-0.1-3-0.2-6.1-0.2-9.2c-1.6-11.2-3.2-22.4-4.8-33.5C121,228.7,122.8,224.4,124.5,220z"/>	<path id="_x32__8_"  d="M167.9,221.7c-0.8,2.1-1.5,4.1-2.3,6.1c0,4,0,8,0,12.1c2.8,7.7,5.6,15.4,8.4,23.1 c0.6,4.5,1.3,9,1.9,13.5c0.9-2,1.9-3.9,2.9-5.9c-0.4-11.6-0.8-23.2-1.1-34.8c-1.4-2.4-2.8-4.9-4.1-7.3	C171.7,226.3,169.8,224,167.9,221.7z"/>	<path id="_x31__33_" d="M186.2,220.7c-1.3,2.3-2.6,4.6-3.8,6.8c0.3,14.3,0.6,28.7,0.8,43c1.1,2,2.1,4,3.1,6	c0.1-3,0.2-6.1,0.2-9.2c1.6-11.2,3.2-22.4,4.8-33.5C189.6,229.4,187.9,225,186.2,220.7z"/>	<path id="_x36_" d="M268,212.3c-1.9,1.9-3.9,3.8-5.8,5.7c-1.5,3.6-3,7.2-4.4,10.9c1.6,15.1,3.3,30.2,4.9,45.3	c1.2-0.9,2.4-1.7,3.6-2.6c1.6,0.2,3.3,0.5,5,0.8c1.2-5.4,2.5-10.8,3.8-16.2c3-7.6,5.9-15.2,8.9-22.8c-1.8-3.9-3.5-7.9-5.2-11.8	c-1.9-2.7-3.9-5.4-5.8-8.1C271.2,213.1,269.6,212.7,268,212.3z"/>	<path id="_x35_" d="M317.4,212.3c1.9,1.9,3.9,3.8,5.8,5.7c1.5,3.6,3,7.2,4.4,10.9c-1.6,15.1-3.3,30.2-4.9,45.3	c-1.2-0.9-2.4-1.7-3.6-2.6c-1.6,0.2-3.3,0.5-5,0.8c-1.2-5.4-2.5-10.8-3.8-16.2c-3-7.6-5.9-15.2-8.9-22.8c1.8-3.9,3.5-7.9,5.2-11.8	c1.9-2.7,3.9-5.4,5.8-8.1C314.2,213.1,315.8,212.7,317.4,212.3z"/></g>`,
  Задние_дельты : `<g id="Заднин_дельты"> <polygon id="_x32__5_"  points="321.7,42.3 327.3,37.7 333.8,42.3 336.4,54.5 335.1,60 331,56.7 324.9,54.2 322.2,50.9 "/> <polygon id="_x31__4_" points="263.9,42.8 258.3,38.2 251.8,42.8 249.2,55 250.5,60.5 254.6,57.2 260.7,54.7 	263.4,51.4 "/></g>`,
  Передняя_дельта : `<g id="Передняя_дельта"> <path id="_x31__7_" d="M121.8,37.2c0,0,12.7,0.2,21.3,0.4c-4.1,2.2-8.3,4.5-12.4,6.7c-2.6,4.3-5.1,8.6-7.7,12.9	c-2.7,2.9-5.4,5.7-8.1,8.6c-1.7,0-2.4,0-2.4,0l0-5.2l0.1-8l2.8-10L121.8,37.2z"/>	<path id="_x31__1_" d="M195.9,42.4l2.8,10l0.1,8l0,5.2c0,0-0.7,0-2.4,0c-2.7-2.9-5.4-5.7-8.1-8.6 c-2.6-4.3-5.1-8.6-7.7-12.9c-4.1-2.2-8.3-4.5-12.4-6.7c8.6-0.2,21.3-0.4,21.3-0.4L195.9,42.4z"/></g>`,
  Средняя_дельта : `<g id="Средняя_дельта"> <polygon id="_x31__3_"  points="117.4,37.1 112,40.7 108.2,52.2 108,60.5 109.9,65.7 111.3,65.7 111.2,52.4 114.3,41.7 119.7,37.2"/> <polygon id="_x32__1_"  points="194,37.1 199.4,40.7 203.2,52.2 203.4,60.5 201.5,65.7 200.1,65.7 200.2,52.4 	197.1,41.7 191.7,37.1"/>	<path id="_x33_" d="M255.1,35.8c-2.3,1.6-4.5,3.3-6.8,4.9c-1.1,4.7-2.1,9.5-3.2,14.2c0.7,2.6,1.4,5.3,2.1,7.9 c0.6-0.5,1.3-1.1,1.9-1.6c-0.6-2.1-1.2-4.2-1.8-6.3c1-4.4,1.9-8.7,2.9-13.1c2.2-1.5,4.4-3.1,6.6-4.6	C256.3,36.8,255.7,36.3,255.1,35.8z"/>	<path id="_x33__5_" d="M330.5,35.3c2.3,1.6,4.5,3.3,6.8,4.9c1.1,4.7,2.1,9.5,3.2,14.2c-0.7,2.6-1.4,5.3-2.1,7.9 c-0.6-0.5-1.3-1.1-1.9-1.6c0.6-2.1,1.2-4.2,1.8-6.3c-1-4.4-1.9-8.7-2.9-13.1c-2.2-1.5-4.4-3.1-6.6-4.6	C329.3,36.3,329.9,35.8,330.5,35.3z"/></g>`,
  Малые_грудные : `<g id="Малые_грудные"> <path id="_x31__27_" d="M181.3,48.5c-0.6-1-1.3-2-1.9-3.1c-4.2-2.2-8.5-4.5-12.7-6.7c-2.2,0.2-4.4,0.5-6.7,0.8 c-0.9,2-1.8,4-2.6,6c4.5-0.4,9-0.9,13.5-1.3C174.3,45.5,177.8,47,181.3,48.5z"/> <path id="_x31__26_" d="M130.2,48.5c0.6-1,1.3-2,1.9-3.1c4.2-2.2,8.5-4.5,12.7-6.7c2.2,0.2,4.4,0.5,6.7,0.8	c0.9,2,1.8,4,2.6,6c-4.5-0.4-9-0.9-13.5-1.3C137.2,45.5,133.7,47,130.2,48.5z"/></g>`,
  Большие_грудные : `<g id="Большие_грудные"> <path id="_x31__13_"  d="M154.4,47.1c-0.1,3-0.2,5.9-0.2,8.9c-0.1,2.2-0.3,4.4-0.5,6.6c-1,1.5-2.1,3.1-3.1,4.7	c-1.6,0.9-3.2,1.9-4.8,2.8c-2,0.4-3.9,0.8-5.9,1.1c-2.9-1.6-5.8-3.2-8.7-4.7c-2.3-2.9-4.7-5.8-7-8.8c1.5-2.3,3.1-4.7,4.6-7	c4.1-1.6,8.2-3.2,12.3-4.8C145.6,46.3,150,46.7,154.4,47.1z"/>	<path id="_x31__14_"  d="M157,47.1c0.1,3,0.2,5.9,0.2,8.9c0.1,2.2,0.3,4.4,0.5,6.6c1,1.5,2.1,3.1,3.1,4.7	c1.6,0.9,3.2,1.9,4.8,2.8c2,0.4,3.9,0.8,5.9,1.1c2.9-1.6,5.8-3.2,8.7-4.7c2.3-2.9,4.7-5.8,7-8.8c-1.5-2.3-3.1-4.7-4.6-7	c-4.1-1.6-8.2-3.2-12.3-4.8C165.9,46.3,161.5,46.7,157,47.1z"/></g>`,
  Пресс : `<g id="Пресс"> <path id="_x31__19_"  d="M141.4,73.1c1.7-0.4,3.4-0.7,5-1.1c1.9-1.3,3.7-2.5,5.6-3.8c1.2,0.5,2.3,0.9,3.5,1.4  c1.2-0.5,2.4-0.9,3.6-1.4c2.1,1.3,4.3,2.7,6.4,4c1.4,0.2,2.9,0.5,4.3,0.8c0,0.8-0.1,1.6-0.1,2.4c-0.4,11.4-0.8,22.8-1.2,34.1 c-0.8,2.4-1.6,4.7-2.4,7.1c-0.4,3.6-0.7,7.2-1.1,10.8c-1.7,2-3.4,3.9-5.1,5.8c-1.5,0-3.1,0-4.6,0c-1.3,0-2.7,0-4,0	c-1.9-1.8-3.7-3.7-5.6-5.5c-0.3-3.7-0.6-7.4-0.9-11.2c-0.8-2.3-1.6-4.6-2.4-6.8c-0.3-11.5-0.6-23.1-1-34.6	C141.4,74.5,141.4,73.8,141.4,73.1z"/></g>`,
  Бицепсы : `<g id="Бицепсы"> <path id="_x31__16_"  d="M114.9,67.3c2.8-2.8,5.5-5.5,8.3-8.3c0.9,1.2,1.9,2.5,2.8,3.7c0.2,4.1,0.4,8.3,0.6,12.4	c-2.3,5.8-4.7,11.5-7.1,17.3c-2.4,2.5-4.8,5-7.3,7.5c-1.1-3.8-2.3-7.6-3.4-11.4c-0.1-6.9-0.2-13.8-0.3-20.7	C110.7,67.6,112.8,67.4,114.9,67.3z"/>	<path id="_x31__17_"  d="M196.4,67.3c-2.8-2.8-5.5-5.5-8.3-8.3c-0.9,1.2-1.9,2.5-2.8,3.7c-0.2,4.1-0.4,8.3-0.6,12.4	c2.4,5.8,4.7,11.5,7.1,17.3c2.4,2.5,4.9,5,7.3,7.5c1.1-3.8,2.3-7.6,3.4-11.4c0.1-6.9,0.2-13.8,0.3-20.7	C200.6,67.6,198.5,67.4,196.4,67.3z"/></g>`,
  Трицепсы : `<g id="Трицепсы"> <path id="_x32__7_"  d="M107.1,71.6c-1,4.7-2.1,9.3-3.1,14c1.1,1.5,2.2,3.1,3.3,4.6C107.3,84,107.2,77.8,107.1,71.6z"/>	<path id="_x31__12_"  d="M119.7,94.1c-2.3,2.4-4.7,4.8-7,7.2c0.6,0.8,1.2,1.6,1.8,2.4c1.6-1.7,3.3-3.4,4.9-5.1	C119.5,97,119.6,95.6,119.7,94.1z"/>	<path id="_x32__3_"  d="M204.4,71.6c1,4.7,2.1,9.3,3.1,14c-1.1,1.5-2.2,3.1-3.4,4.6C204.3,83.9,204.4,77.8,204.4,71.6z"/>	<path id="_x31__11_"  d="M191.2,94.1c2.3,2.4,4.6,4.8,7,7.2c-0.6,0.8-1.2,1.6-1.8,2.4c-1.6-1.7-3.3-3.4-4.9-5.1	C191.4,97.1,191.3,95.6,191.2,94.1z"/>	<path id="_x34__3_"  d="M260.9,56.4c-1.9,0.7-3.8,1.5-5.7,2.2c-3.1,2.3-6.3,4.6-9.4,6.9c-0.6,6.2-1.2,12.5-1.9,18.7	c1.5,3.2,3,6.3,4.5,9.4c0.7,0.1,1.3,0.2,2,0.3c2.8-2.1,5.6-4.2,8.4-6.3c1.8-4.9,3.5-9.8,5.3-14.6C263,67.5,262,61.9,260.9,56.4z"/>	<path id="_x34__4_"  d="M324.9,56.4c1.9,0.7,3.8,1.5,5.7,2.2c3.1,2.3,6.3,4.6,9.4,6.9c0.6,6.2,1.2,12.5,1.9,18.7	c-1.5,3.2-3,6.3-4.5,9.4c-0.7,0.1-1.3,0.2-2,0.3c-2.8-2.1-5.6-4.2-8.4-6.3c-1.8-4.9-3.5-9.8-5.3-14.6	C322.7,67.5,323.8,61.9,324.9,56.4z"/></g>`,
  Предпелчья : `<g id="Предпелчья"> <path id="_x31__20_"  d="M103.5,87.9c-0.6,2.3-1.2,4.6-1.9,6.9c-0.7,4.1-1.4,8.2-2.1,12.2c0.8,6.3,1.6,12.6,2.4,18.8 c3,4.1,6,8.2,9,12.3c0.3-2.7,0.6-5.3,0.9-8c2.5-6.4,5.1-12.9,7.6-19.3c0-3.3,0-6.7-0.1-10c-1.7,1.8-3.5,3.5-5.2,5.3	c-1.2-1.6-2.3-3.2-3.5-4.8c-0.6-1.9-1.2-3.8-1.8-5.8C107.1,93,105.3,90.4,103.5,87.9z"/>	<path id="_x31__21_"  d="M207.9,88.2c0.6,2.3,1.2,4.6,1.9,6.9c0.7,4.1,1.4,8.2,2.1,12.2c-0.8,6.3-1.6,12.6-2.4,18.8	c-3,4.1-6,8.2-9,12.3c-0.3-2.7-0.6-5.3-0.9-8c-2.5-6.4-5.1-12.9-7.6-19.3c0-3.3,0-6.7,0.1-10c1.7,1.8,3.5,3.5,5.2,5.3		c1.2-1.6,2.3-3.2,3.5-4.8c0.6-1.9,1.2-3.8,1.8-5.8C204.3,93.3,206.1,90.7,207.9,88.2z"/>	<path id="_x33__8_"  d="M242.6,86.4c1.6,3.1,3.2,6.2,4.9,9.3c1.2,0.1,2.4,0.2,3.6,0.3c2.1-1.8,4.3-3.6,6.4-5.4		c0,2.3-0.1,4.6-0.2,6.8c-0.4,4.6-0.8,9.1-1.2,13.6c-2.5,7.2-5,14.4-7.5,21.6c-1.3,0.6-2.6,1.3-3.9,2c-0.4,1.3-0.8,2.6-1.2,4		c-1.3,0.4-2.6,0.9-3.9,1.3c-1.1-11.1-2.2-22.1-3.3-33.2c0.8-4.8,1.7-9.7,2.5-14.6C240.1,90.3,241.4,88.4,242.6,86.4z"/>	<path id="_x34__6_"  d="M343,86.4c-1.6,3.1-3.2,6.2-4.9,9.3c-1.2,0.1-2.4,0.2-3.6,0.3c-2.1-1.8-4.3-3.6-6.4-5.4		c0,2.3,0.1,4.6,0.2,6.8c0.4,4.6,0.8,9.1,1.2,13.6c2.5,7.2,5,14.4,7.5,21.6c1.3,0.6,2.6,1.3,3.9,2c0.4,1.3,0.8,2.6,1.2,4		c1.3,0.4,2.6,0.9,3.9,1.3c1.1-11.1,2.2-22.1,3.3-33.2c-0.8-4.8-1.7-9.7-2.5-14.6C345.5,90.3,344.3,88.4,343,86.4z"/></g>`,
}





// Облегченные упражнения
let exercise_1 = {
    name : "Подтягивания к столбу",
    type : "Подтягивания",
    img : "img/exercises/exercise_1.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Вертикальный столб',
    musclelsMaster : [`Широчайшие`, `Трапеция_нижняя`],
    musclelsSlave : [`Бицепсы`, `Предпелчья`, `Задние_дельты`],
    about :  `● Найди устойчивый столб, за который тебе будет удобно держаться.<br>
              ● Схватись за столб. Кисти рук должны быть примерно на уровне солнечного сплетения.<br>
              ● Разогни руки. Твоё тело отклонится от параллели столба.<br>
              ● Начни движение к столбу со сведения лопаток и уже после переходя на сгибание рук в локтях..<br>
              ● Поднявшись до параллели со столбом - не расслабляй мышцы.<br>
              ● Медленно вернись в исходное положение - разогнув локти. Для увеличения амплитуды - округли спину.<br>`,
    url : 'https://t.me/swtBarBosS'
  }
  
  let exercise_2 = {
    name : "Отжимания от столба",
    type : "Отжимания",
    img : "img/exercises/exercise_2.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Вертикальный столб',
    musclelsMaster : [`Малые_грудные`, `Большие_грудные`, `Передняя_дельта`],
    musclelsSlave : [`Трицепсы`],
    about :  `● Встань рядом с устойчивым вертикальным столбом.<br>
              ● Схватись руками за столб. Ладони на уровне солнечного сплетения.<br>
              ● Сделай шаг назад, наклоняя тело под углом около 45° к земле.<br>
              ● Начни сгибать руки в локтях - выполнять отжимания.<br>
              ● Не поднимай пятки. <br>`,
    url : 'https://t.me/swtBarBosS'
  }

  let exercise_3 = {
    name : "Приседания с упором икрами",
    type : "Ноги",
    img : "img/exercises/exercise_3.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Низкая перекладина',
    musclelsMaster : [`Четырёхглавые`, `Ягодицы`],
    musclelsSlave : [`Икры`],
    about :  `● Найди низкую перекладину или платформу.<br>
              ● Встань перед ней, прижми икры к перекладине, стопы на ширине плеч, носки слегка развернуты наружу.<br>
              ● Медленно начни сгибать колени, опуская таз вниз и отклячиваясь назад. Держи спину ровной,<br>
              ● Опускайся до тех пор, пока бедра не станут параллельны полу или немного ниже.<br>
              ● Поднимись в исходное положение, разгибая колени и возвращая таз в верхнее положение.<br>`,
    url : 'https://t.me/swtBarBosS'
  }

  let exercise_4 = {
    name : "Додо от столба/стены",
    type : "Разводки",
    img : "img/exercises/exercise_4.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Вертикальный столб',
    musclelsMaster : [`Средняя_дельта`],
    musclelsSlave : [],
    about :  `● Найди стену или вертикальный столб.<br>
              ● Подойди к столбу сплотную, повернись боком и согни руку близжайшую к столбу руку на 90 градусов в локте.<br>
              ● Сделай один шаг от столба, наклоняя тело под углом около 45° к земле. Согнутая рука прислонена к столбу.<br>
              ● Начни отводить и приводить согнутую руку.<br>`,
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_5 = {
    name : "Бег в упоре",
    type : "Скручивания",
    img : "img/exercises/exercise_5.png",
    difficult : 'Облегченное упражнение',
    equipment : 'Пол',
    musclelsMaster : [`Пресс`],
    musclelsSlave : [`Передняя_дельта`, `Трицепсы`],
    about :  `● Займи положение - упор лёжа.<br>
              ● Согни одну ногу в колене и поднеси её к поясу.<br>
              ● Вернись в изначальное положение. После чего повтори это с другой ногой.<br>`,
    url : 'https://t.me/swtBarBosS/2937'
  }

// Базовые упражнения

  let exercise_6 = {
    name : "Австралийские подтягивания",
    type : "Подтягивания",
    img : "img/exercises/exercise_6.png",
    difficult : 'Базовое упражнение',
    equipment : 'Средняя перекладина',
    musclelsMaster : [`Широчайшие`, `Трапеция_нижняя`],
    musclelsSlave : [`Бицепсы`, `Предпелчья`, `Задние_дельты`],
    about :  `● Найди перекладину на уровне бёдер.<br>
              ● Возмись за перекладину на ширине плеч и расположись под ней.<br>
              ● Выпрями ноги и приподними таз от пола так, чтобы тело образовало прямую линию от пяток до плеч.<br>
              ● Напряги пресс. Начни сгибать руки, тянись грудью к перекладине, сводя лопатки вместе. Локти держи близко к телу.<br>
              ● В верхней точке движения задержись на секунду, чувствуя сжатие мышц спины.<br>
              ● Медленно и контролируемо опустись в исходное положение, полностью выпрямляя руки.<br>`,
    url : 'https://t.me/swtBarBosS/2937'
  }

  let exercise_7 = {
    name : 'Отжимания "Руки выше ног"',
    type : "Отжимания",
    img : "img/exercises/exercise_7.png",
    difficult : 'Базовое упражнение',
    equipment : 'Средняя перекладина',
    musclelsMaster : [`Малые_грудные`, `Большие_грудные`, `Передняя_дельта`],
    musclelsSlave : [`Трицепсы`],
    about :  `● Найди устойчивую возвышенность (скамью, ступеньку или низкий стол) высотой 30-40 см.<br>
              ● Прими упор лёжа, поставив руки на возвышенность на ширине плеч, а ноги на пол. Выпрями тело в одну линию от головы до пят.<br>
              ● Напряги пресс и ягодицы, чтобы зафиксировать правильное положение тела. Следи, чтобы поясница не провисала.<br>
              ● Плавно опусти грудь к краю возвышенности, сгибая руки в локтях. Локти держи близко к телу, направляя их назад.<br>
              ● В нижней точке твоя грудь должна почти касаться края опоры. Сохраняй контроль над движением.<br>
              ● Оттолкнись и вернись в исходное положение, полностью выпрямляя руки.<br>
              ● Сделай короткую паузу наверху, сохраняя тело прямым и готовясь к следующему повторению.<br>`,
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

