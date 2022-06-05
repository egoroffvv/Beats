let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [46.838131, 29.454164],
    zoom: 14,
    controls: [],
  });

  let coords = [
      [46.844005, 29.464831],
      [46.824752, 29.475611],
      [46.837654, 29.484944],
      [46.820929, 29.488591],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);