const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"northwind"
  });


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  


app.get('/',(req,res)=>{
    let sql ='SELECT `CustomerID` , `ContactName` FROM `customers`';
    db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(result);
        res.send(result);
    });
});
app.get('/customerInfo/:id',(req,res)=>{
    let sql =`SELECT  ContactName ,CompanyName, ContactTitle, Address ,City ,Phone  FROM customers   WHERE CustomerID ='${req.params.id}' `;
    db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(result);
        res.send(result);
    });
});


app.get('/customer/:id',(req,res)=>{
    // sql will executed depend on the radio button

    let sql =`SELECT OrderID ,OrderDate ,ShipCountry, ShipCity
     FROM orders 
     WHERE CustomerID='${req.params.id}'`;

    //  if(customer details radio button===checked){
    //  sql =`SELECT CompanyName, ContactTitle, Address, City ,Country ,Phone 
    // FROM customers  WHERE CustomerID ='${req.params.id}'`;
    //  }
    db.query(sql,(err,result)=>{
    if(err)throw err;
    console.log(req.params.id);
        res.send(result);
    });
});

app.get('/order/:id',(req,res)=>{

    let sql ='SELECT ProductID, UnitPrice , Quantity  FROM `order details`  WHERE OrderID =?';
   
    db.query(sql,req.params.id,(err,result)=>{
    if(err)throw err;
    console.log(req.params.id);
        res.send(result);
    });
});


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>console.log(`server on port ${PORT}`));