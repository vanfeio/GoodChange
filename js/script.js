
$(function () {
	// common - include
	$("#header").load("./include/header.html");
	$("#footer").load("./include/footer.html");
	$("#header_login").load("./include/header_login.html");
	$("#category").load("./include/category.html");
	$("#mypage_menu").load("./include/mypage_menu.html");
	$("#search").load("./include/search.html");

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

	// カテゴリー選択モーダル
	var open = $('#category_open'),
	close = $('.category_close'),
	container = $('.category_area');

	open.on('click',function(){ 
		container.addClass('active');
		return false;
	});

	close.on('click',function(){  
		container.removeClass('active');
	});

	$(document).on('click',function(e) {
	if(!$(e.target).closest('.category_area .modal_container').length) {
		container.removeClass('active');
	}
	});
	
	//カテゴリtoggle
	$('.parent').click(function() {
		$(this).next('ul').slideToggle('fast');
		$(this).toggleClass('open', 800);
	});
	$('.child01').click(function(e) {
		$(this).children('ul').slideToggle('fast');
		$(this).toggleClass('open', 800);
		e.stopPropagation();
	});

	$('.sp_toggle_btn').click(function() {
		$(".sp_toggle").slideToggle('fast');
	});

});

