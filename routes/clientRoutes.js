'use strict';

var clientController = require('../controllers/clientController');

function UserRoutes(api) {
  api.post('/api/client', clientController.createClient);
  api.get('/api/client', clientController.getClient);
}

module.exports.routes = UserRoutes;