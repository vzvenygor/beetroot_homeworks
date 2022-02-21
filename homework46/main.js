async function initMap() {
  const styles = await fetch("/mapStyles.json").then((res) => res.json());

  const cityHall = { lat: 48.922771652809864, lng: 24.710402126712253 };
  const bastion = { lat: 48.922521197484436, lng: 24.7076679998733 };
  const lake = { lat: 48.91497977649175, lng: 24.691838458240067 };
  const paneDayCopiyku = { lat: 48.919443472103545, lng: 24.712668562966446 };
  const po100IPoDomam = { lat: 48.92061850942012, lng: 24.704699062461707 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: cityHall,
    styles,
  });

  const contentCityHall =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "<img src='/assets/ratusha.jpg' style='width: 100%'>" +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Міська ратуша</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Міська ратуша</b>, Ратуша в стилі ар-деко з краєзнавчим музеєм і восьмикутною вежею, звідки відкриваються краєвиди на місто.</p>" +
    "</div>" +
    "</div>";

  const infowindowCityHall = new google.maps.InfoWindow({
    content: contentCityHall,
    maxWidth: 200,
  });

  const markerCityHall = new google.maps.Marker({
    position: cityHall,
    map: map,
    title: "Ivano-Frankivsk City Hall",
  });

  markerCityHall.addListener("click", () => {
    infowindowCityHall.open({
      anchor: markerCityHall,
      map,
      shouldFocus: true,
    });
    map.setCenter(cityHall);
  });

  const contentBastion =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "<img src='/assets/bastion.jpg' style='width: 100%'>" +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Бастіон</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Фортечна галерея «Бастіон»</b> знаходиться поруч із однією з історичних пам'яток Івано-Франківська — залишками міського фортечного муру. Назву торгово-розважальному комплексу позичив один з бастіонів Станіславської фортеці, який реставрували 2002 р. Залишки старовинного муру включені у нову будівлю, яка нагадує історичний бастіон.</p>" +
    "</div>" +
    "</div>";

  const infowindowBastion = new google.maps.InfoWindow({
    content: contentBastion,
    maxWidth: 200,
  });

  const markerBastion = new google.maps.Marker({
    position: bastion,
    map: map,
  });

  markerBastion.addListener("click", () => {
    infowindowBastion.open({
      anchor: markerBastion,
      map,
      shouldFocus: true,
    });
    map.setCenter(bastion);
  });

  const contentLake =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "<img src='/assets/lake.jpg' style='width: 100%'>" +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Міське озеро</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Міське́ о́зеро</b> — найбільше штучне озеро міста Івано-Франківська. Розташоване в південно-західній частині міста, на захід від Парку імені Тараса Шевченка. Площа водного дзеркала 36 га. Споруджене 1955 року. Облаштоване набережними, є кілька причалів для човнів.</p>" +
    "</div>" +
    "</div>";

  const infowindowLake = new google.maps.InfoWindow({
    content: contentLake,
    maxWidth: 200,
  });

  const markerLake = new google.maps.Marker({
    position: lake,
    map: map,
  });

  markerLake.addListener("click", () => {
    infowindowLake.open({
      anchor: markerLake,
      map,
      shouldFocus: true,
    });
    map.setCenter(lake);
  });

  const contentPaneDayCopiyku =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "<img src='/assets/paneDaiCopiiku.jpg' style='width: 100%'>" +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Пане, дай копійку!</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Гроза Стометрівки</b> або «Пане, дай копійку» - легендарна особа в Івано-Франківську. Хто бодай раз гуляв “стометрівкою”, знає жебрака Пане Дайте Пару Копійок. Щодня на одному й тому ж місці, щоразу легендарна фраза: «Пане, дайте пару копійок», а для дівчат: «Пані, файну маєш сраку».</p>" +
    "</div>" +
    "</div>";

  const infowindowPaneDayCopiyku = new google.maps.InfoWindow({
    content: contentPaneDayCopiyku,
    maxWidth: 200,
  });

  const markerPaneDayCopiyku = new google.maps.Marker({
    position: paneDayCopiyku,
    map: map,
  });

  markerPaneDayCopiyku.addListener("click", () => {
    infowindowPaneDayCopiyku.open({
      anchor: markerPaneDayCopiyku,
      map,
      shouldFocus: true,
    });
    map.setCenter(paneDayCopiyku);
  });

  const contentPo100IPoDomam =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "<img src='/assets/5nytsya.jpg' style='width: 100%'>" +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Тут завершуються гулянки(</h1>' +
    '<div id="bodyContent">' +
    "<p><b>5ниця</b> - місце, де найчастіще можне почути фразу «Ну, ще по 100 і по домам». Дуже сумно :))</p>" +
    "</div>" +
    "</div>";

  const infowindowPo100IPoDomam = new google.maps.InfoWindow({
    content: contentPo100IPoDomam,
    maxWidth: 200,
  });

  const markerPo100IPoDomam = new google.maps.Marker({
    position: po100IPoDomam,
    map: map,
  });

  markerPo100IPoDomam.addListener("click", () => {
    infowindowPo100IPoDomam.open({
      anchor: markerPo100IPoDomam,
      map,
      shouldFocus: true,
    });
    map.setCenter(po100IPoDomam);
  });
}
