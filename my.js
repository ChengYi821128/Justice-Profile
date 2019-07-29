/**
 * Created by RENPINGSHENG on 2018/4/6.
 */


window.onload = function () {
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");

    var config = [
        {
            width:300,
            top:20,
            left:80,
            opacity:0.2,
            zIndex:2
        },
        {
            width:500,
            top:70,
            left:0,
            opacity:0.8,
            zIndex:3
        },
        {
            width:800,
            top:100,
            left:200,
            opacity:1,
            zIndex:4
        },
        {
            width:500,
            top:70,
            left:700,
            opacity:0.8,
            zIndex:3
        },
        {
            width:300,
            top:20,
            left:800,
            opacity:0.2,
            zIndex:2
        }
    ];

    wrap.onmouseover = function () {
        animate(arrow,{"opacity":1});
        clearInterval(timer);
    }
    wrap.onmouseout = function () {
        animate(arrow,{"opacity":0});
        timer = setInterval(function(){
          auto();
        },2000)
    }
    function assign() {
        for(var i = 0;i < lis.length;i++){
            animate(lis[i],config[i],function(){
                flag = true;
            })
        }
    }

    var flag = true;
    assign();
    arrRight.onclick = function () {
        flag = false;
        config.push(config.shift());
        assign();
    };
    arrLeft.onclick = function () {
        flag = false;
        config.unshift(config.pop());
        assign();
    }
    var timer = setInterval(function(){
      auto();
    },2000)

    function auto(){
      flag = false;
      config.push(config.shift());
      assign();
    }


}
