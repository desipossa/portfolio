$(function(){
  $('.main_visual').slick({
    // arrows:false,
    autoplay:true,
    dots:true,
    prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',
    nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',
  });

  // event,slick,current 
  $('.main_visual').on('afterChange',function(e,s,c){
    $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
  })

  $('.mopen').on('click', function(){
    $('#header').toggleClass('on');
  });
  $('#header nav>ul>li a ').on('click', function(){
    if($('#header').hasClass('on')){
      $(this).next().slideToggle();
      $(this).parent().siblings().find('.submenu').slideUp();
    }
  });

  $(window).on('resize', function(){
    if($(window).width() >768){
      $('#header').removeClass('on');
      $('.submenu').removeAttr('style');
    }
  })
})

