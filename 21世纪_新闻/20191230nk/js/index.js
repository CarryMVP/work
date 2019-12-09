  
$().ready(function(){
    // 音乐控制
    $('.music').click(function(e){
        e.preventDefault();
        if($(this).attr('state')=='play'){
            audio.pause();
            $(this).attr('src','images/music/music_close.png'+static_version);
            $(this).attr('state','close');
            $(this).removeClass('musiczhuan1');
        }else{
            audio.play();
            $(this).attr('src','images/music/music_open.png'+static_version);
            $(this).attr('state','play');
            $(this).addClass('musiczhuan1');
        }
    });

    // 按钮点击效果
    var has=0;
    $('.btn').on('touchstart',function(e){
      if($(this).hasClass('huxi')){
         $(this).removeClass('huxi');
         has=1;
      }else{
         has=0;
      }
      $(this).addClass('btnClcked');
    })

    $('.btn').on('touchend',function(){
      $(this).removeClass('btnClcked');
      if(has==1){
         $(this).addClass('huxi');
      }
    })

    $('input,select').bind('blur',function(){
        $('body').scrollTop(0);
    })
   
    $('input,select,textarea').bind('blur',function(){
        $('body,html').scrollTop(0);
        setTimeout(function() {
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
            window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
    })

    var lod_time = new Date;
    var lod_time_moth = lod_time.getMonth() + 1;
    $("#lod_time").html(lod_time.getFullYear() +' . '+ lod_time_moth +' . '+ lod_time.getDate());
    


    $("#p2_3_div").click(function(e){
        e.preventDefault;
        window.location.href= "https://m.21jingji.com/article/20190930/99b635b94ccb26978ffdfc1f716f0cec.html";
        // window.location.replace("https://m.21jingji.com/article/20190930/99b635b94ccb26978ffdfc1f716f0cec.html");
    })


    $("#p3_1_div_bt").click(function(e){
        e.preventDefault;
        window.location.href= "https://m.21jingji.com/article/20190930/0119e18851f98184ff9ae6d1137480b9.html";
    })

    $("#p3_2_div_bt").click(function(e){
        e.preventDefault;
         window.location.href= "https://m.21jingji.com/article/20190930/df89f53ba6ebe36970f32d1b043b75f8.html";
    })
    
    $("#p4_1_div").click(function(e){
        e.preventDefault;
         window.location.href= "https://m.21jingji.com/article/20190930/90194b46e86d02ced432cffa486072df.html";
    })

    $("#p4_2_div").click(function(e){
        e.preventDefault;
         window.location.href= "https://m.21jingji.com/article/20190930/df89f53ba6ebe36970f32d1b043b75f8.html";
    })

    $("#p4_3_div").click(function(e){
        e.preventDefault;
         window.location.href= "https://m.21jingji.com/article/20190930/25d6718d9f877e61b13535be4abee63b.html";
    })

   

    

    


    $(".hb_btn").click(function(e){
          e.preventDefault;
        var id_number = $(this).next().html();
        console.log(id_number); 
        $("#jietudiv_1_img").attr("src",'images/p1/hb_' +id_number+ '.png');
        $(".swiper-container").css("visibility",'hidden');
        $("#gif_lod").css('display','block');
        setTimeout(function(){
           $("#gif_lod").css('display','none');
           p7();
        },2000)
    })

    $("#jt_btn").click(function(e){
         e.preventDefault;
      $("#p7").css('display','none');
      $(".swiper-container").css("visibility",'visible');  
    })
});

function isPhoneNo(phone){ 
    var pattern = /^1[34578]\d{9}$/; 
    return pattern.test(phone);
}
function p1(){
  $('#p1').fadeIn();
  jinzhi=0;
} 

function p2(){
  $('#p2').fadeIn();
  jinzhi=0;
}

function p3(i){
  $('#p3').fadeIn(); 
  jinzhi=0;
}

function p4(i){
  $('#p4').fadeIn();
  jinzhi = 0;
}

function p5(i){
  $('#p5').fadeIn();
  jinzhi=0;
}

function p6(i){
  $('#p6').fadeIn();
  jinzhi=0;
}

function p7(i){
  $('#p7').fadeIn();
  setTimeout(function(){
         html2canvas(document.getElementById("jietudiv"), {
              useCORS: true,
              scale: 1,
              logging:false,
              width:$('#jietudiv').width(),//设置canvas尺寸与所截图尺寸相同，防止白边
              height:$('#jietudiv').height(),
          }).then(function(canvas) {
              console.log(canvas);
              var base = canvas.toDataURL('image/jpeg');
              $('#canimg').attr('src', base);
          });
    },1000)
   // jinzhi=0;
}

function createRandom2(num,from,to){
    var arr=[];
    var json={};
    while(arr.length<num){
        //产生单个随机数
        var ranNum=Math.ceil(Math.random()*(to-from))+from;
        //通过判断json对象的索引值是否存在 来标记 是否重复
        if(!json[ranNum]){
            json[ranNum]=1;
            arr.push(ranNum);
        } 
    }
    return arr;
};

