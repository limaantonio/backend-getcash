const Sale = require('../models/Sale');

module.exports = {
  async create (request, response){
    try {
      const sale = await Sale.create(request.body);

      return response.status(201).json(sale);
    } catch (error) {
      console.log(error);
      return response.status(400).send({error: 'Error creating new Sale'})
    }
  }
}