var express = require('express');
var router = express.Router();
var pool = require('./connectDb');

// /* GET product page. */
router.get('/getproduct', function(req, res) {
  pool.connect(function(error){
    pool.query('SELECT * FROM product_info', (err, response) => {
      if(error) {  // nếu lỗi thì trả về error
        return console.error('error running query', error);
      } else {   // Nếu thành công trả về response
        
        // console.log(response.rows); //console chỉ xem được trên backend thôi
        
        res.send(response.rows);  //send dữ liệu phía api
      }
      // pool.end(); // đóng cổng kết nói csdl
    })
  })
  
});


// tạo router lấy dữ liệu
router.get('/edit_product', function(req, res) {
  res.render('edit_product',{})
});

// tạo router method="post"
router.post('/add', function(req, res, next) {
  pool.connect(function(error){   // phải có pool.connect ở đây thì mới được
    var product_name = req.body.product_name,
    product_price = req.body.product_price,
    description = req.body.description,
    quantity = req.body.quantity,
    product_image = req.body.product_image,
    product_vendor = req.body.vendor,
    type_product = req.body.type_product,
    product_variant = req.body.variant,
    p_collection = req.body.collection;
    comparison_price = req.body.comparison_price;
    sql = "insert into product_info (product_name,product_price,description,quantity,product_image,vendor,type_product,variant,collection,comparison_price) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
    pool.query(sql,[product_name,product_price,description,quantity,product_image,product_vendor,type_product,product_variant,p_collection,comparison_price],(err,result) => {
      if(error) {
        res.send(error);
      } else {
        res.send('Insert du lieu thanh cong ' + product_name + product_price + description + quantity + product_image + product_vendor + type_product + product_variant + p_collection + comparison_price)
      }
    })
  })
});

router.put('/edit_product', function(req, res, next) {
  var product_name = action.getItem.product_name;
  product_price = action.getItem.product_price,
  description = action.getItem.description,
  quantity = action.getItem.quantity,
  product_image = action.getItem.product_image,
  product_vendor = action.getItem.vendor,
  type_product = action.getItem.type_product,
  product_variant = action.getItem.variant,
  p_collection = action.getItem.collection;
  comparison_price = action.getItem.comparison_price;
  pool.query(
    'UPDATE product_info SET product_name=$2,product_price=$3,description=$4,quantity=$5,product_image=$6,vendor=$7,type_product=$8,variant=$9,collection=$10,comparison_price=$11 WHERE id=$1',
    [id,product_name,product_price,description,quantity,product_image,product_vendor,type_product,product_variant,p_collection,comparison_price],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
})

// /* DELETE product. */
router.delete('/getproduct', function(req, res, next) {
  const pool = new pool({ connectionString})
  const product_id = req.body.product_id
  pool.query(`DELETE FROM product_info WHERE pid = $1`, [ product_id ],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
  })  
});
module.exports = router;