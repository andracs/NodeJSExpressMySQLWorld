var express = require('express');
var mysql = require('mysql2');

var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root'
});

connection.query('USE world');

router.get('/', function(req, res){
  connection.query('SELECT * FROM country', function(err, rows){
    
    rows.map((row) => {row.name;});

    res.render('world', {
      title: 'Countries in the World.sql database',
      world : rows,
      raw: JSON.stringify(rows)
    });
  });
});

router.get('/rest', function(req, res){
  connection.query('SELECT * FROM country', function(err, rows){
    var world = {countries: rows} 
    res.send(world);
  });
});

module.exports = router;



