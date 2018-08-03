//阅读旅游服务条框
//手机号码验证拼
//登录密码验证
// 确认密码验证
// 创建正则表达式
var reg = /^1[3|4|5|7|8]\d{9}$/i;//验证手机正则
var reg1 = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
(function(){
    $("#phone").focus((e)=>{
        $(e.target).css("","")
    $(e.target).parent().next().html("手机号码必须输入");
    });
    $("#phone").blur((e)=>{

    if(reg.test($(e.target).val())){
        $(e.target).parent().next().html("手机号码正确").removeClass().addClass("reg_add_zq");
    }else{
        $(e.target).parent().next().html("手机号码错误").removeClass().addClass("reg_add_cw");
    }

    $.ajax({

    })
    // 密码验证

    });
    $("#pwd").focus(e=>{
        $(e.target).parent().next().html("密码必须为6-22位数字或英文");
    })
    $("#pwd").blur(e=>{

        if(reg1.test($(e.target).val())){
            $(e.target).parent().next().html("密码输入正确").removeClass().addClass("reg_add_zq");
        }else{
            $(e.target).parent().next().html("密码验证错误，请重新输入").removeClass().addClass("reg_add_cw");
        }
    });
    $("#pwd2").blur(e=>{
        if($(e.target).val()===$("#pwd").val()&&$(e.target).val()!=""){
            $(e.target).parent().next().html("密码正确").removeClass().addClass("reg_add_zq");
        }else{
            $(e.target).parent().next().html("密码与上次输入不符，请重新输入").removeClass().addClass("reg_add_cw");
        }
    });
    //提交按钮
    $(".btn").click(e=>{
        var phone = $("#phone").val();
        var pwd = $("#pwd").val();
        if(reg.test($("#phone").val())&&reg1.test($("#pwd").val())&&$("#pwd2").val()===$("#pwd").val()){
            $.ajax({
                type:"GET",
                url:"../reg",
                data:{uname:phone,upwd:pwd},
                success:function (data) {
                    // console.log(data);
                    if(data.code>0){
                        alert("注册成功，3s后跳转首页");
                        setInterval(function () {
                            location.href = "index.html";
                        },3000)

                    }
                },
                error:function () {
                    alert("网络连接失败，请重新输入！");
                }
            })
        }else{
            alert("错误，重新输入");
        }
    });

    $("#check").click((e)=>{
        if($(e.target).prop("checked")===false){
            $(".gou").css("display","block");

        }else if($(e.target).prop("checked")===true){
            $(".gou").css("display","none");

        }
    });

})();

