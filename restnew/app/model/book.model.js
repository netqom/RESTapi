module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('books', {
    name: {
    type: Sequelize.STRING
    },
    image: {
      type: Sequelize.TEXT
    },
	published: {
    type: Sequelize.INTEGER
    },
	rating: {
    type: Sequelize.FLOAT
    },
	desc: {
    type: Sequelize.TEXT
    },
	amazonlink: {
    type: Sequelize.STRING
    },
    active: {
    type: Sequelize.BOOLEAN, defaultValue: false
    },
  });
  
  return Book;
}