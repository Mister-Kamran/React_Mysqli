const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:'amazon'

})

app.get('/',(req,res)=>{

const sql = "SELECT * FROM filim";

db.query(sql,(err,result)=>{

    if(err) return res.json({Message:"Error server"});
    return res.json(result);

})

})

app.listen(8080, () => {
    console.log("call");
});
