const Book = require("./model")
const db = require("../../utils/database")

Book();

function createOne(req, res) {
    const bookToCreate = {
        ...req.body
    };

    console.log(bookToCreate);

    const createOne = `
    INSERT INTO books 
    (title, type, author, topic, publicationDate)
    VALUES 
    ($1, $2, $3, $4, $5)
    RETURNING *`;

    db.query(createOne, [bookToCreate.title, bookToCreate.type,
         bookToCreate.author, bookToCreate.topic, bookToCreate.publicationDate])
    .then((result) => res.json({ data: result.rows[0] }))
    .catch(console.error);

}

module.exports = {
    createOne
  };