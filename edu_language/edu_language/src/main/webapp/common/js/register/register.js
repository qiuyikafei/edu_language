//校验该用户名是否包含空格
function checkContainsSpace() {
	var reg=/[ ]/;	//校验规则
	var userName = $("#username").val(); //获取输入的用户名
	if(reg.test(userName)) {
		alertify.alert("警告","姓名不能包含空格,请重新输入!");
		$("#username").attr("value", "");
		return;
	}
}