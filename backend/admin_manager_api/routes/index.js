var express = require('express');
var router = express.Router();

// start connect API
const { Client } = require('pg');
const connectionString = 'postgres://ydmfuklr:WyzTuBivhRvzpD-MZOds5b90rPn2cavk@topsy.db.elephantsql.com:5432/ydmfuklr'
const client = new Client({ connectionString})
// end connect API

// /* GET product page. */
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


// tạo router lấy dữ liệu
router.get('/edit_product', function(req, res, next) {
  res.render('edit_product',{})
});

// tạo router method="post"
router.post('/edit_product', function(req, res, next) {
  const client = new Client({ connectionString})

  // phai co client.connect ở đây thì mới được
  client.connect(function(error){
    var product_name = req.body.product_name,
    product_price = req.body.product_price,
    description = req.body.description,
    quantity = req.body.quantity,
    product_image = req.body.product_image,
    product_vendor = req.body.vendor,
    type_product = req.body.type_product,
    product_variant = req.body.variant,
    p_collection = req.body.collection;
    sql = "insert into product_info (product_name,product_price,description,quantity,product_image,vendor,type_product,variant,collection) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
    client.query(sql,[product_name,product_price,description,quantity,product_image,product_vendor,type_product,product_variant,p_collection],(err,result) => {
      if(error) {
        res.send(error);
      } else {
        res.send('Insert du lieu thanh cong ' + product_name + product_price + description + quantity + product_image + product_vendor + type_product + product_variant + p_collection)
      }
    })
  })
});

// // /* DELETE product. */
// router.get('/getproduct', function(req, res, next) {
//   const client = new Client({ connectionString})
//   client.connect(function(error){

//   })
// });
module.exports = router;