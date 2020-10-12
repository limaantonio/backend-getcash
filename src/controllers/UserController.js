const User = require('../models/User');

module.exports = {
  async create (request, response){
    try {
      const user = await User.create(request.body);

      return response.status(201).json(user);
    } catch (error) {
      console.log(error);
      return response.status(400).send({error: 'Error creating new User'})
    }
  },
}