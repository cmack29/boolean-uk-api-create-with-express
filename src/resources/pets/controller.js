const Pet = require("./model")
const db = require("../../utils/database")

Pet();

function createOne(req, res) {
    const petToCreate = {
        ...req.body
    };

    console.log(petToCreate);

    const createOne = `
    INSERT INTO pets 
    (name, age, type, breed, microchip)
    VALUES 
    ($1, $2, $3, $4, $5)
    RETURNING *`;

    db.query(createOne, [petToCreate.name, petToCreate.age,
         petToCreate.type, petToCreate.breed, petToCreate.microchip])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);

}

module.exports = {
    createOne
  };
