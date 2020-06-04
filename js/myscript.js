$(window).scroll(function(){
       var sct =  $(this).scrollTop();
       if( $("html").hasClass("mobile") ) {
              if(sct>50 ) {
                  $(".to_top").show()
            } else {
                $(".to_top").hide()
          }
       } else {
             $(".to_top").show()
       }
})

$(".to_top").on("click", function(){
    $("body, html").animate({scrollTop:"0px"}, 600)
})
var winWidth;
function init(){
        winWidth = $(window).width()
    if ( winWidth > 799 ) {
            $("#header").removeClass("on")
            $("html").addClass("minTb").removeClass("mobile")
            $("to_top").show()
    } else {
            $("html").addClass("mobile").removeClass("minTb")
    }
}

$(window).resize(function(){
       init()
})

$(window).load(function(){
        $(".loadingAni").delay(1000).fadeOut(500)
      init()
})

$(".depth1 > li > a").on("mouseover  focus", function(){
                if ( $(this).parents("#header").hasClass("on") ) {
                        $(this).next().fadeOut(0)
                } else { 
                        $(this).next().stop().fadeIn(200)
                        $(this).parent().siblings().children(".dep2box")
                        .stop().fadeOut(200)
                }
})
$(".depth1 > li").on("mouseleave", function(){
        $(this).children(".dep2box").stop().fadeOut(200)
})
$(".depth1 >li:last   .depth2 > li:last > a").on("blur", function(){
    $(this).parents(".dep2box").stop().fadeOut(200)
})


$("#header  .openMOgnb").on("click", function(){
       $(this).parents("#header").addClass("on")
       if ( !$(this).parents("#header").hasClass("on") ) {
                $(this).parents("#header").addClass("on")
       }
})

$("#header  .closeMOgnb").on("click", function(){
        $(this).parents("#header").removeClass("on")
  })
  
  $(".place_list > li > a").on("click", function(e){
          e.preventDefault();
          var href = $(this).attr("href")
          var src = $(this).attr("data-src")
          var text = $(this).find("h3").text()
          var info = $(this).find("p").text()
          var alt = $(this).find("img").attr("alt")
          $(".popupBox").addClass("on")
          if (winWidth <= 799 ) {
                var litop = $(this).parent().offset().top;
                $(".popupBox  .inner").css({
                        top:litop,
                        width:"80%",
                        left:"0%",
                        transform:"translate(0%)",
                        margin:"0  10%"
                })
        }
          $(".popupBox   .inner  h3").text(text)
          $(".popupBox   .inner   p").text(info)
          $(".popupBox   .inner   div  a").attr("href", href)
          $(".popupBox   .inner   div  img").attr("src", src).attr("alt", alt).attr("width", "100%")
  })
  
  $(".popupBox  button").on("click", function(){
          $(this).parents(".popupBox").removeClass("on")
  }) 

  $(".visualRoll").slick({
          autoplay: true,                        // 자동재생, 기본값이 false로 설정
          autoplaySpeed: 3000,          // 간격시간
          dots: true,                               // 동그라미 버튼, 기본값이 false로 설정
          speed: 600,                            // 슬라이드 동작하는데 걸리는 시간(생략가능)
          slidesToShow: 1,                   // 보여지는 슬라이드 수(생략가능)
          slidesToScroll: 1,                   // 넘어가는 슬라이드 수(생략가능)
          pauseOnHover: true,          //  슬라이드 위에 마우스 over을할시 슬라이드 멈춤여부  false는 안멈춤(생략가능)
          pauseOnDotsHover: true,  //  동그라미 버튼 위에 마우스 over할시 멈춤여부(생략가능)
          pauseOnfocus: false,            // 동그라미 버튼 클릭시 자동실행 멈춤여부
          cssEase: 'linear',                  //  슬라이드 움직임에 대한 가속도 함수값(생략가능)
          draggable: true,                   //  마우스를 드래그했을때 움직임 여부(생략가능)
          fade: false,                            //  true값일시 제자리에서 fadein fadeout 효과가 적용됨(제자리에서 다른화면으로 변경됨)(생략가능)
          arrows: true,                         //  기본값은 true이며  슬라이드 좌우측 방향 버튼(생략가능)
          prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
  })         

  $(".main_rolling_pc .plpa").toggle(
        function(){
                $(".visualRoll").slick("slickPause")
                $(this).find("i").removeClass("fa-pause").addClass("fa-play")
        },
        function(){
                $(".visualRoll").slick("slickPlay")
                $(this).find("i").removeClass("fa-play").addClass("fa-pause")
        }
)

// $(".plpa").on("click", function(){
//         if(  $(this).find("i").hasClass("fa-pauce") ) {
//                 $(".visualRoll").slick("slickPause")
//                 $(this).find("i").removeClass("fa-pause").addClass("fa-play")
//         }else{
//               $(".visualRoll").slick("slickPlay")
//               $(this).find("i").removeClass("fa-play").addClass("fa-pause")
//         }
// })

$(".multi_visual").slick({
        autoplay: true,                        // 자동재생, 기본값이 false로 설정
        autoplaySpeed: 3000,          // 간격시간
        dots: true,                               // 동그라미 버튼, 기본값이 false로 설정
        speed: 600,                            // 슬라이드 동작하는데 걸리는 시간(생략가능)
        centerMode:true,                  // 좌우측에 다다음슬라이드가 살짝비치는것
        centerPadding:"80px",         
        slidesToShow: 3,                   // 보여지는 슬라이드 수(생략가능)
        slidesToScroll: 1,                   // 넘어가는 슬라이드 수(생략가능)
        pauseOnHover: true,          //  슬라이드 위에 마우스 over을할시 슬라이드 멈춤여부  false는 안멈춤(생략가능)
        pauseOnDotsHover: true,  //  동그라미 버튼 위에 마우스 over할시 멈춤여부(생략가능)
        pauseOnfocus: false,            // 동그라미 버튼 클릭시 자동실행 멈춤여부
        cssEase: 'linear',                  //  슬라이드 움직임에 대한 가속도 함수값(생략가능)
        draggable: true,                   //  마우스를 드래그했을때 움직임 여부(생략가능)
        fade: false,                            //  true값일시 제자리에서 fadein fadeout 효과가 적용됨(제자리에서 다른화면으로 변경됨)(생략가능)
        arrows: true,                         //  기본값은 true이며  슬라이드 좌우측 방향 버튼(생략가능)
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
                breakpoint: 800,
                settings:{
                        centerMode:true,                  // 좌우측에 다다음슬라이드가 살짝비치는것
                        centerPadding:"100px",         
                        slidesToShow: 1,                   // 보여지는 슬라이드 수(생략가능)
                }
        }]
})