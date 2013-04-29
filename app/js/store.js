App = require('./app');

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter,
  revision: 12
});

// App.Store = DS.Store.extend({
//   adapter: DS.LSAdapter.create(),
//   revision: 12
// });
