var express = require('express');
var router = express.Router();

// start connect API
const { Pool, Client } = require('pg')
const connectionString = 'postgres://sezfxvfd:fcfgYpLxTvIpKnsliDYq_NLqswImFHOl@john.db.elephantsql.com:5432/sezfxvfd'

// end connect API


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* add product page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

/* GET product page. */
router.get('/getproduct', function(req, res, next) {
  const client = new Client({ connectionString})
  client.connect(function(error){
    client.query('SELECT * FROM product_info', (err, response) => {
      if(error) {  // nếu lỗi thì trả về error
        return console.error('error running query', error);
      } else {   // Nếu thành công trả về response
        
        // console.log(response.rows); //console chỉ xem được trên backend thôi
        
        res.send(response.rows);  //send dữ liệu phía api
      }
      // client.end(); // đóng cổng kết nói csdl
    })
  })
  
});

module.exports = router;