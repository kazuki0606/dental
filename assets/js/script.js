$(function(){

  $('.hamburger').click(function(){
    $('#sp-menu').fadeIn();
    $('.fa-times').addClass('out');
    $('.hamburger').addClass('hum-off');

    });

  $('.fa-times').click(function(){
   
    $(this).removeClass('out');
    $('#sp-menu').fadeOut();
  $('.hamburger').removeClass('hum-off');
    });
  


  var pagetop=$('#page-top');

  pagetop.hide();
  
  $(window).scroll(function(){
    if($(this).scrollTop()>1000){
      //---- 画面を1000pxスクロールしたらボタンを表示
      pagetop.fadeIn();
    }else{
      //---- 画面が1000pxより上ならボタンを表示しない
      pagetop.fadeOut();
    }
  });
  
  $(pagetop).click(function(){
  
    $('html, body').animate({
      'scrollTop':0
      
    },1000);



  
});


var $win = $(window),
$header = $('.header'),
fixedClass = 'fixed';

var $headerW = $('.header__wrapper'),
transformClass = 'transform';

var $headerBtn = $('.header__btn--blue'),
radiusClass = 'radius';

$win.on('load scroll', function() {
var value = $(this).scrollTop();

if ( value > 1000 ) {
$header.addClass(fixedClass);
$headerW.addClass(transformClass);
$headerBtn.addClass(radiusClass);


} else {
$header.removeClass(fixedClass);
$headerW.removeClass(transformClass);
$headerBtn.removeClass(radiusClass);

}

});


$('.header__link--hover').hover(
  function() {
    // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
    $('.dropdown').addClass('active');
    $('.header__link--hover').addClass('deg');
  },
  function() {
    // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
     $('.dropdown').removeClass('active');
     $('.header__link--hover').removeClass('deg');
    
  }
);



  
var effect_pos = -100; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });

        
    });



    var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

//親要素と子要素のcssを定義
$('.scroll-fade-row').css({
  opacity: 0
});
$('.scroll-fade-row').children().each(function(){
  $(this).css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });
});

// スクロールまたはロードするたびに実行
$(window).on('scroll load', function(){
  var scroll_top = $(this).scrollTop();
  var scroll_btm = scroll_top + $(this).height();
  var effect_pos = scroll_btm - effect_btm;

  //エフェクトが発動したとき、子要素をずらしてフェードさせる
  $('.scroll-fade-row').each( function() {
      var this_pos = $(this).offset().top;
      if ( effect_pos > this_pos ) {
          $(this).css({
              opacity: 1,
              transform: 'translateY(0)'
          });
          $(this).children().each(function(i){
              $(this).delay(100 + i*200).queue(function(){
                  $(this).css({
                      opacity: 1,
                      transform: 'translateY(0)'
                  }).dequeue();
              });
          });
      }
  });
});





      load_effect();
      $(window).scroll(function (){
        scroll_effect();
    });
 

  //ふわっとロード
  function load_effect(){
      var tt = $(window).scrollTop();
      var hh = $(window).height();

      $('.load-fade').each(function(){
          var yy = $(this).offset().top;
          if (tt > yy - hh){
              $(this).addClass('done');
          }
      });
  
      $('.load-fade2').each(function(){
          var yy = $(this).offset().top;
          if (tt > yy - hh){
              $(this).addClass('done');
          }
      });
      $('.load-fade3').each(function(){
          var yy = $(this).offset().top;
          if (tt > yy - hh){
              $(this).addClass('done');
          }
      });


  }

  //ふわっとスクロール
function scroll_effect(){
  var tt = $(window).scrollTop();
  var hh = $(window).height();

  $('.scroll-up').each(function(){
      var yy = $(this).offset().top+100;//効果発生開始タイミングを操作したい場合は数値を変更する
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });
}




  });