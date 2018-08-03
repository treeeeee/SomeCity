const http = require("http");
const express = require("express");
const mysql = require("mysql");
const qs = require("querystring");
//创建链接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"tongcheng",
    port:3306,
    connectionLimit:25
});
//创建express对象
var app = express();

// 创建服务器对象
var server = http.createServer(app);
server.listen(8082);
app.use(express.static("public"));
//模块一 用户注册；

app.get("/reg",(req,res)=>{
   var uname = req.query.uname;
    var upwd = req.query.upwd;
//   获取链接池中的链接
    pool.getConnection((err,conn)=>{
        if(err) throw err;
    //    创建一个sql 链接
        var sql = "insert into zc_login values(null,?,?)";
        conn.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            res.json({code:1,"msg":"添加成功"});
            conn.release();
        })
    })
});



//用户登录
 app.post("/login",(req,res)=>{
    req.on("data",(data)=>{
        // 1、获取用户参数，
        var str = data.toString();
        var obj = qs.parse(str);
    //    获取数据库连接
        pool.getConnection((err,conn)=>{
            if(err) throw err;
            var sql = "select * from zc_login where uname = ? and upwd = ? ";
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                if(result.length<1){
                    res.json({code:-1,msg:"输入错误"});
                }else{
                    res.json({code:1,msg:"登录成功",uid:result[0].uid})
                }
                conn.release();
            })
        })
    })
 });