let ani = {
  init: function () {
    // .scrolltop 을 누르면 맨위로
    $('.scrolltop').click(function(){
      // location.reload()
      $(window).scrollTop(0)
      $('.headerwrap').css({top:'0'})
      $('#header').css({top:0})
    })
    let suchi = $('.headerwrap').width();
    $(window).resize(function(){
      suchi = $('.headerwrap').width()
    })
      // 네비게이션 오버시 
      $('.nav').hover(
      function(){
        if(suchi > 1440){
          $('.sub-menu').css({
            height : '180px'
          })
          $('.headerwrap').css({
            height : '280px',
        })
        }
      },
      // 네비게이션 오버 뗐을때
      function(){
        if(suchi > 1440){
          $('.sub-menu').css({
            overflow:'hidden',
            height : '0'
          })
          $('.headerwrap').css({height : '100px'})
        }
      });

      // 모바일기준 서브메뉴 띄우기 + 사라지기
      $('.btn-drawer').click(function(){
        $('.gnb').toggleClass('mobile')
      })
      // 모바일기준 1440px 아래일때 nav 클릭함수
      $('.main-menu').click(function(event){
        initList($(this))
        initArrow($(this))
        arrow($(this))
      })
      // 화살표 위로가르키기
      function arrowUp(a){
        a.find('.arrow').eq(0).removeClass('show')
        a.find('.arrow').eq(1).addClass('show')
      }
      // 화살표 아래로 가르키기
      function arrowDown(a){
        a.find('.arrow').eq(1).removeClass('show')
        a.find('.arrow').eq(0).addClass('show')
      }
      // 화살표 조건에 맞게 분포한 함수
      function arrow(a){
        if(a.find('.arrow').eq(0).hasClass('show') == true){
          arrowUp(a)
          listDown(a)
        }
        else if(a.find('.arrow').eq(0).hasClass('show') == false){
          arrowDown(a)
          listUp(a)
        }
      }
      // 리스트 아래로펼치기
      function listDown(a){
        a.find('.sub-menu').addClass('open')
      }
      // 리스트 위로 올라오기
      function listUp(a){
        a.find('.sub-menu').removeClass('open')
      }
      // 모든리스트 위로 올라오기
      function initList(a){
        a.siblings().find('.sub-menu').removeClass('open')

      }
      // 모든화살표 초기화
      function initArrow(a){
        a.siblings().find('.arrow:odd').removeClass('show')
        a.siblings().find('.arrow:even').addClass('show')
      }

    // product부분 초기에 안보이게 셋팅
    $('.product-bottombx').hide()
    $('.product-sc').hover(
      // 오버시
      function(){
        $(this).find('.product-bottombx').stop().slideDown()
      },
      // 아웃시
      function(){
        $(this).find('.product-bottombx').stop().slideUp()
      });
      // ko en 버튼 누를시 회색 동그라미 옮겨가기 
      $('.btn-lang').click(function(){
        $('.btn-lang').removeClass('active')
        $(this).addClass('active')
      })
  },
};

$(function () {
    ani.init();
});
