
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

	//メッセージ ユーザーネーム横ボタン
	$('.more_btn').on("click",function(){
		$(this).next(".more_area").fadeToggle(200);
	});

	//メッセージ メッセージで取引を開始する
	$('#start_message').on("click",function(){
		$('#mypage_message .message').fadeIn();
		$('#mypage_message .message_form').fadeIn();
		$('#mypage_message .request_btn_area').remove();
	});

	$('#message_fixed_btn').on("click",function(){
		$('#mypage_message .notes_area_fixed').fadeIn();
		$('#mypage_message .notes_area_completion').remove();
	});

	// 支払情報の登録 - modal
	var open = $('#payment_open'),
	close = $('.payment_open'),
	container = $('.payment_area');

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

	//続きを読むボタン
	var $text = $('#item_detail .explanation');
	var $more = $('#item_detail .explanation_more');
	var lineNum = 8;
	var textHeight = $text.height();
	var lineHeight = parseFloat($text.css('line-height'));
	var textNewHeight = lineHeight * lineNum;
	if (textHeight > textNewHeight) {
	$text.css({
		height: textNewHeight,
		overflow: 'hidden',
	});
	$more.click(function () {
		$(this).hide();
		$text.css({
		'height': textHeight,
		'overflow': 'visible',
		});
		return false;
	});
	} else {
	$more.hide();
	}

	//よくあるご質問
	$("#faq dt").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass("active");
	});


	//お問い合わせ - 全部入力するとactive
	$('#sending').prop("disabled", true);

	$("[id^= input]").change(function () {
		let send = true;
		$("[id^= input]").each(function(index) {
		  if ($("[id^= input]").eq(index).val() === "") {
			send = false;
		  }
		});
		if (send) {
			$('#sending').prop("disabled", false);
		}
		else {
			$('#sending').prop("disabled", true);
		}
	});
 
});



