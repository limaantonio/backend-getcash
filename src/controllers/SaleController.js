const { emit } = require('../models/Sale');
const Sale = require('../models/Sale');

module.exports = {
  async create (request, response){
    try {
      const {value, payment, date, flag, status} = request.body;

      let flagImgUrl = '';

      if(flag === 'Mastercard')
        flagImgUrl = 'https://ik.imagekit.io/dtx0soiaky/master_M3GRo-q6d.png';
      if(flag === 'Visa')
        flagImgUrl = 'https://ik.imagekit.io/dtx0soiaky/visa_ifHUZ10yl.png';
      if(flag === 'Elo')
        flagImgUrl = 'https://ik.imagekit.io/dtx0soiaky/image_3_B2vFYf278.png';
      if(flag === 'Alelo')
        flagImgUrl = 'https://ik.imagekit.io/dtx0soiaky/alelo-logo_ZVwCUbgAe.png';
      if(flag === 'American Express'){
        flagImgUrl = 'https://ik.imagekit.io/dtx0soiaky/express_P1mtvNVuz.png';
      }


      
       const sale = await Sale.create({
          value: value,
          payment: payment,
          date: date,
          flag: flag,
          flagImgUrl: flagImgUrl,
          status: status
        });

      return response.status(201).json(sale);
    } catch (error) {
      console.log(error);
      return response.status(400).send({error: 'Error creating new Sale'})
    }
  },

  async list (request, response){
    try {
      const sales = await Sale.find();

      return response.status(200).json(sales);
    } catch (error) {
      return response.status(400).json({message : 'Error loading sales.'})
    }
  },

  async amount(req, res) {
    Sale.aggregate(
      [
        {
          $group: {
            _id: {month: {$month : "$date"}, year: {$year: "$date"}},
            total: {
              $sum: "$value"
            }
          }
        }
      ],
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    );
 
  },

  async index(request, response){
    const {id} = request.params;

    try {
      const sale = await Sale.findById(id);

      return response.status(200).json(sale);
    } catch (error) {
      return response.status(400).json({message : 'Error loading sale.'})
    }
  },
}