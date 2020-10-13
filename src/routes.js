const express = require('express');

const UserController = require('./controllers/UserController');
const SaleController = require('./controllers/SaleController');

const routes = express.Router();



routes.post('/sale', 
  /* #swagger.tags = ['Sale']
    #swagger.description = 'Endpoint to add a sale.' 

      #swagger.parameters['newSale'] = {
        in: 'body',
        description: 'Informações das vendas.',
        required: true,
        type: 'object',
              
      } 
    #swagger.responses[201] = { description: 'Sale successfully registered!' }
    #swagger.responses[500] 
  */
SaleController.create);
routes.get('/sales',
  //#swagger.tags = ['Sale']
  //#swagger.description = 'Endpoint for a list of registered sales'

  /*
    #swagger.parameters['month'] = {
      in: 'query',
      description: "Find by Month",
      type: "string"
    }
  */

  //#swagger.responses[404]
  //#swagger.responses[200]
SaleController.list);
routes.get('/amount', 
    //#swagger.tags = ['Sale']
  //#swagger.description = 'Endpoint for a list of Amount sales'

  /*
    #swagger.parameters['month'] = {
      in: 'query',
      description: "List by Amount and month",
      type: "string"
    }
  */

  //#swagger.responses[404]
  //#swagger.responses[200]
SaleController.amount);
routes.get('/sale/:id', 
    /*  #swagger.tags = ['Sale']
        #swagger.parameters['id'] = {
            description: 'Sale ID.'
        }
        
        #swagger.responses[200]
        #swagger.responses[204]
        #swagger.responses[404]
    */
SaleController.index);

routes.post('/user', 
  /* #swagger.tags = ['User']
    #swagger.description = 'Endpoint to add a User.' 

      #swagger.parameters['newUser'] = {
        in: 'body',
        description: 'Informações sobre o usuário.',
        required: true,
        type: 'object',
              
      } 
    #swagger.responses[201] = { description: 'User successfully registered!' }
    #swagger.responses[500] 
  */
UserController.create);


module.exports = routes;