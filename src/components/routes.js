const routeFromCity = ({ id, name }) => ({
  to: `/city/${id}`,
  name,
});

const routeFromStreet = ({ id, name }) => ({
  to: `/street/${id}`,
  name,
});

const cities = [
  { id: 13, name: 'Kapellen' },
  { id: 23, name: 'Stabroek' },
].map(routeFromCity);

const streets = [
  { id: 5514, name: 'Papenboslaan', cityId: 13 },
  { id: 7338, name: 'Markt', cityId: 23 },
].map(routeFromStreet);

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/midi', name: 'Midi' },
  { path: '/topics', name: 'Topics' },
  { path: '/city', name: 'Cities', children: cities },
  { path: '/street', name: 'Streets', children: streets },
  // { path: '/city/23/streets', name: 'Streets' },
];

export default routes;
