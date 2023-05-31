const knex = require('../database/knex');
const DiskStorage = require('../providers/DiskStorage');

class FoodImageController {
  async update (req, res) {
    const { id } = req.params;
    const imageFileName = req.file.filename;
    const diskStorage = new DiskStorage;

    const food = await knex("food").where({ id }).first();

    if (food.image) {
      await diskStorage.deleteFile(food.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);
    food.image = filename;

    await knex("food").update(food).where({ id });

    return res.json(food);
  }
}

module.exports = FoodImageController;