import GET from './getJSON.mjs';

const people = new Array();
const nature = new Array();
const foodAndDrink = new Array();
const activity = new Array();
const place = new Array();
const objects = new Array();
const symbols = new Array();
const flags = new Array();

GET('../json/people.json', (data) => {
  Object.assign(people, data.data);
});
GET('../json/nature.json', (data) => {
  Object.assign(nature, data.data);
});
GET('../json/foodAndDrink.json', (data) => {
  Object.assign(foodAndDrink, data.data);
});
GET('../json/activity.json', (data) => {
  Object.assign(activity, data.data);
});
GET('../json/place.json', (data) => {
  Object.assign(place, data.data);
});
GET('../json/objects.json', (data) => {
  Object.assign(objects, data.data);
});
GET('../json/symbols.json', (data) => {
  Object.assign(symbols, data.data);
});
GET('../json/flags.json', (data) => {
  Object.assign(flags, data.data);
});

const PosJSON = {
  people,
  nature,
  foodAndDrink,
  activity,
  place,
  objects,
  symbols,
  flags,
};

export default PosJSON;
