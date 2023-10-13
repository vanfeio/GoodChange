
$(function () {
	// common - include
	$("#header").load("./include/header.html");
	$("#footer").load("./include/footer.html");
	$("#header_login").load("./include/header_login.html");

	// top - 商品一覧カテゴリタブ
	$('.tab').on('click', function() {
		$('.tab, .panel').removeClass('active');
	
		$(this).addClass('active');
		
		var index = $('.tab').index(this);
		$('.panel').eq(index).addClass('active');
	});

	// 出品 - 初回モーダルクローズ
	$(".beginner_modal_close").on("click",function(){
		$(".beginner_modal").fadeOut(200);
	});


	// カテゴリ選択 - toggle
	$('.category_area .parent').click(function() {
		$(this).next('ul').slideToggle('fast');
		$(this).toggleClass('open', 800);
	  });
	  $('.child01').click(function(e) {
		$(this).children('ul').slideToggle('fast');
		$(this).toggleClass('open', 800);
		e.stopPropagation();
	  });
});

