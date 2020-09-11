var express = require('express');
var app = express();
const fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static('public')); //to access the files in public folder 
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(fileUpload()); 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./app/route/book.route.js')(app);

// file upload api
app.post('/api/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
});
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})