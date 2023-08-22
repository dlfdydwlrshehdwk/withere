let ani = {
  init: function () {
  }


};

$(function () {
    ani.init();

    // .scrolltop 을 누르면 맨위로
    $('.scrolltop').click(function(){
      // location.reload()
      $(window).scrollTop(0)
      $('.headerwrap').css({top:'0'})
      $('#header').css({top:0})
    })

    // 네비게이션 오버시 
    $('.nav').hover(
    function(){
      $('.sub-menu').css({
        height : 'auto'
      })
      $('.headerwrap').css({
        height : '272px'
      })
    },
    // 네비게이션 오버 뗐을때
    function(){
      $('.sub-menu').css({
        overflow:'hidden',
        height : '0'
      })
      $('.headerwrap').css({height : '100px' })
    });

    // product부분 초기에 안보이게 셋팅
    $('.product-bottombx').hide()
    $('.product-sc').hover(
      // 오버시
      function(){
        console.log('h')
        $(this).find('.product-bottombx').stop().slideDown()
      },
      // 아웃시
      function(){
        $(this).find('.product-bottombx').stop().slideUp()
      });

      // aside li ▼ 누르면 서브메뉴 펼쳐지기 + 닫히기
      $('.mobile-nav-list').click(function(event){
          event.preventDefault()
          $(this).parent().find('.mobile-submenu').stop().slideToggle()
          $(this).find('.mobile-state').toggleClass('db')
      })

      // btn-drawer를 누르면 aside창이 펼쳐지기
      $('.btn-drawer').click(function(){
        $('#aside').addClass('on')
      })
      // aside-close 누르면 aside창이 닫아지기 + 열려있던 sub li 들 닫기 + 화살표들 아래로가게 정리
      $('.aside-close').click(function(){
        initAside()
      })
      // mobile-demo 누르면 팝업창이 나옴과동시에 aside창이 닫아지게 하기 
      $('.mobile-demo').click(function(){
        initAside()
      })
      function initAside(){ // 기능 aside창이 닫힘 + 화살표초기화 + submenu 초기화
        // 이렇게 4줄잘라서 함수화
        $('#aside').removeClass('on')
        $('.mobile-submenu').css({display : 'none'})
        $('.mobile-state:even').addClass('db')
        $('.mobile-state:odd').removeClass('db')
      }

      // ko en 버튼 누를시 회색 동그라미 옮겨가기 
      $('.btn-lang').click(function(){
        $('.btn-lang').removeClass('active')
        $(this).addClass('active')
      })

});
