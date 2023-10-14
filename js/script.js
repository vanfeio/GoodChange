
$(function () {
	// common - include
	$("#header").load("./include/header.html");
	$("#footer").load("./include/footer.html");
	$("#header_login").load("./include/header_login.html");
	$("#category").load("./include/category.html");
	$("#mypage_menu").load("./include/mypage_menu.html");

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

	// 変数に要素を入れる
	var open = $('#category_open'),
	close = $('.category_close'),
	container = $('.category_area');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){ 
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){  
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
	if(!$(e.target).closest('.category_area .modal_container').length) {
		container.removeClass('active');
	}
	});


});

