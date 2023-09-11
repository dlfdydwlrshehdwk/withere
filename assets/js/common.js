let common = {

	init:function(){
		
	},


	// 모달 팝업 띄우기
	openModalPopup:function( tar ){
		let _tar = $("." + tar);
						
		$("body").append("<div class='modal'>");
		$('body').addClass('oh')
		// $("body").css("position", "absolute").css("overflow", "hidden");
		$(".modal").show();

		_tar.show();
	},

	// 모달 팝업 닫기
	closeModalPopup:function(){
		$(".modal").remove();
		// $("body").css("position", "relative").css({overflowX : 'hidden',overflowY : 'auto'});
		$(".popup").hide();
		if(!window.matchMedia("(max-width : 1600px)").matches){
			console.log('dd')
			$('body').removeClass('oh')
		}
		else {
			if($('body').hasClass('oh')){
				return;
			}
			else{
				$('body').removeClass('oh')
			}
		}
	}

}

$(function () {
	common.init();
	
});