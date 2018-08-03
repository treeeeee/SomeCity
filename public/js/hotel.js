//轮播图
function task(){
    var $ulList = $(".ulList>li.show");
    $ulList.next().addClass("show").siblings().removeClass("show");
    if($ulList.next().length===0){
        $(".ulList").children(":first").addClass("show").siblings().removeClass("show");
    }

}var timer = setInterval(task,3000);

//酒店搜索
$(".gnjdss_List").on("click","li",e=>{
    $(e.target).addClass("orange").siblings().removeClass("orange");
    var i = $(e.target).index();
    $(`.ipt${i+1}`).show().siblings(".ipt").hide();
});

//热门酒店
$(".tab").on("click","li",e=>{
    $(e.target).addClass("active").siblings().removeClass("active");
    var i = $(e.target).index();
    $(".pub").children(":eq("+i+")").removeClass("hide").siblings().addClass("hide");
});

//度假主题
$(".nav>ul").on("click","li",function(e){
    var i=$(this).index();
    console.log(i)
    var T=-i*100;
    offsetL(this,T);
   offsetT(this,T);

});

function offsetT(ele,t){
    $(ele).children("i").css("background-position",`-100px ${t}px`);
}
function offsetL(ele,t){
    $(ele).children("i").siblings().css("background-position",`0px ${t}px`);

}


