//三十天内自动登录
$(".ck").click(e=>{
   if($(e.target).prop("checked")==false){
       $(".cb11").css("display","none");
   }else if($(e.target).prop("checked")==true){
       $(".cb11").css("display","block");
   }
});

//登录页面
$("#btn").click(e=>{
    var u = $("#ipt").val();
    var p = $("#ipw").val();
//    发送ajax请求
    $.ajax({
        type:"POST",
        url:"/login",
        data:{uname:u,upwd:p},
        success:function(data){
           if(data.code===1){
               sessionStorage.setItem("uname",u);
               alert("登录成功,三秒后跳转到首页");
               setTimeout(function () {
                   location.href = "index.html"
               },3000);
           }else{
               alert("错误");
           }
        },error:function () {
            alert("错误");
        }
    })
});