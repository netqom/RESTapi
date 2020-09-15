const db = require('../config/db.config.js');
const Book = db.books;
const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: books } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, books, totalPages, currentPage };
};

// Post a Customer
exports.create = (req, res) => {  
  // Save to MySQL database
  Book.create({  
    name: req.body.name,
    published: req.body.published,
    rating: req.body.rating,
    image: req.body.image,
    desc: req.body.desc,
    amazonlink: req.body.amazonlink,
 /*    image: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXm5uazs7OwsLDa2trJycnX19fp6enh4eHPz8/l5eXd3d2urq7R0dG9vb24uLi1tbXBwcHTzhj9AAACdklEQVR4nO3d626jMBBAYcfAQBJu7/+0uxjShEy7q+BpI0/P96NSIoHkIxrCzQkBAAAAAAAAAAAAAAAAAAAA+C855nn5N47AloSq6fu+O2BZ/LysYn3ZX3xUkWaIhy09UpPt9XV2EEUuYzwd99Hk9kaqVDbprhlFPmtSvXtIuaTO2UhcNpE+M4nDJm1uEn9NZMhN4q/JJXszcdck+wPWY5NpP744DS9H8tbkvC8QO5F2UqP+XU2ePk4GWb7nv7il+G4S6+VI5dW9M01oQhOaLGii0USjiUYTjSYaTTSaaDTRaKLRRKOJRhONJhpNNKsmbaDJUxOZAk32TaS/dkKTfZPxNLGd7JosVz9iLzR5bDL+/TvR5EGolgViQ5O77XaNkSZ3VdxK3C4002S63dUz0ORrNKEJTWhCk4QmGk00mmg00Wii0USjiUYTjSYaTTSaaDTRaKLRRKOJRhONJhpNNJpoNNFootFEe3q+OM36U9FkPxqR/JkufDU5xbl+9dF8901M0IQmNKEJTRKaaDTRvqfJ5d3DyvI9TcqeA3PX5Ph0qTvXuuy5Uu9N4mmuTXRV2Uk+msSxOTjz8j/mYi7U1iR6mBrYytaEJA/WJoXvKIylJtFwRyFt8fOWr00auxU2TvbFsTVbX3o0sPB/ResmIa2v7OOds/UYHDRJzzVafsZ6aDIvUSa7FTpoEhrjnbGHJiFdzomdVRQPTbafQYhza3Pw5qHJ+o0iVekaAy6ahLPpKaWTiyahtTjf+MhBk3DO+kmiT5qUfY56Jf0YLbOUfQy4EanqIf8mi9XgYTNJ7E6kuthKAAAAAAAAAAAAAAAAAAAAgB/zB8nrM+X3qvXOAAAAAElFTkSuQmCC" */
  }).then(book => {
    res.send(book);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};
// FETCH all books
exports.findAll = (req, res) => {
   const { page, size } = req.query;
   const { limit, offset } = getPagination(page, size);
  Book.findAndCountAll({  limit,offset }).then(data => {
    // Send all books to Client
	const response = getPagingData(data, page, limit);
    res.send(response);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};