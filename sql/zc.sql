-- 注册
CREATE DATABASE tongcheng CHARSET = UTF8;
USE tongcheng;
CREATE TABLE zc_login(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR (25),
  upwd VARCHAR (22)
);
