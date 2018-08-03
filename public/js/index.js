/**
 * Created by bjwsl-001 on 2017/7/22.
 */
//�м�������Ƽ�
var lis = document.querySelectorAll("#tab_title .tab_title_nav li");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        for(let i= 0;i<lis.length;i++){
            lis[i].className="";
        }
        this.className="active";
    }
}
//热门商圈
var rm = document.querySelectorAll(".area_clearfix em");
console.log(rm);
var a = 0;
for(var n=0;n<rm.length;n++){
    rm[n].style.top=a+"px";
    a+=31;
}


//轮播图

function task() {
        var n =parseInt($("#lb>li.appear").index())+1;
        $("#lb>li.appear").next().addClass("appear").siblings().removeClass("appear");
        $("#lbxd").children(":eq("+n+")").addClass("active").siblings().removeClass("active");

    if($("#lb>li.appear").next().length==0){
            $("#lb").children(":first").addClass("appear").siblings().removeClass("appear");
            $("#lbxd").children(":first").addClass("active").siblings().removeClass("active");
        }
 }

 var timer = setInterval(task,3000);


//登录成功

window.onload = function () {
    var u = sessionStorage.getItem("uname");
    if(u){
        $("#lisa1").html(`${u} <a href="register.html">退出登录</a>`);
        $("#sp1").html(`欢迎回来`)
    }
};
$("#lisa1").click(e=>{
        sessionStorage.clear();
});


//副搜索框
$(function(){
    var height = $("#banner").offset().top;
    $(window).scroll(function () {
        var this_scrollTop =$(this).scrollTop();
        if(this_scrollTop>height){
            $(".titleTop").css("display","block");
        }else{
            $(".titleTop").css("display","none");
        }
    })
});

// 楼层滚动
$(function () {
    var oNav = $(".lcgd");
    var aNav = $(".lcgd>li");
    var oDiv = $(".hoteBox");

    $(window).scroll(function () {
        //    可视窗口高度
        var winH = $(window).height();
    //    鼠标滚动的距离
        var iTop = $(window).scrollTop();
        if(iTop>=$(".hoteBox").height()){
            oNav.fadeIn();
            $(".lcgd>li.active").siblings().addClass('active').removeClass('active');
        }else if(iTop>=$(".hoteBox1").height()){
            oNav.css("display","none");
        }
        else{
            oNav.css("display","none");
        }

    })
});
//暑假去哪
$(".tab_title_nav>li").mouseover(e=>{
  var i =  $(e.target).index();
    $(".dad_right").children(":eq("+i+")").removeClass("hide").siblings().addClass("hide");
});
