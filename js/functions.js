$(function(){

	// select默认选中项颜色
	var unSelected = "#999";
	var selected = "#333";
	$("select").css("color", unSelected);
	$("option").css("color", selected);
	$("select").change(function () {
		var selItem = $(this).val();
		if (selItem == $(this).find('option:first').val()) {
			$(this).css("color", unSelected);
		} else {
			$(this).css("color", selected);
		}
	});



});
function words_deal(){
	// 字数限制
	var curLength=$("#textArea").val().length;
	if(curLength>100){
		var num=$("#textArea").val().substr(0,100);
		$("#textArea").val(num);
		alert("超过字数限制，多出的字将被截断！" );
	}
	else{
		$(".textNum em").text(0+$("#textArea").val().length);
	}
}
function imgHeight(){
	// 图片限定高度
	$(".item-pic").each(function(){
		var w = $(this).width();
		$(this).css({"height": w});
	});
}



