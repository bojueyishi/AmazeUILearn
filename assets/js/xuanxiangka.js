$(function() {
	$(".blist").on("click", "li", function() {
		// 设index为当前点击
		var index = $(this).index();
		// 点击添加样式利用siblings清除其他兄弟节点样式
		$(this).addClass("active").siblings().removeClass("active");
		// 同理显示与隐藏
		$(this).parents(".wrap").find(".blsit-list li").eq(index).show().siblings().hide();
	})
})

$(function() {
	generateLi();
});

//动态生成li，点击改变其他li颜色
function generateLi() {
	for(var i = 0; i < 6; i++) {
		$(".guige-canshu-ul")
			.append(
				"<li id = 'li"+i+"' class = 'am-panel-list-li' onclick = 'changeColor2(this,"+i+")' > 我是规格参数"+i+" </li>");
			}
	}

	//=================================//   
	//=========以下两个方法都可以实现========//
	//=================================//
	//只修改指定ul下的li列表
	function changeColor(obj) {
		//改变所有li样式，寻找id为jquery_genr的ul元素的所有li元素
		$("ul[id=jquery_genr] >li")
			.removeClass()
			.addClass("normalCss");;
		//改变当前li样式
		$(obj).addClass("selectedCss");
	}

	//只修改指定ul下的li列表
	function changeColor2(obj, i) {
		$(obj).removeClass().addClass("liSelectedCss");
		//选中id为li+i的元素的同胞元素（不包括自己）来修改样式
		$("ul[id=guige-canshu-ul] > li[id=li" + i + "]")
			.siblings()
			.removeClass()
			.addClass("am-panel-list-li");

	}