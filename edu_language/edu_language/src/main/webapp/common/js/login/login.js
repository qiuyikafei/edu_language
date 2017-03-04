//从cookie中获取验证码的值
function getCookie(cookie_name) {  
	var allcookies = document.cookie;  
	var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度  
	// 如果找到了索引，就代表cookie存在，  
	// 反之，就说明不存在。  
	if (cookie_pos != -1) {  
	// 把cookie_pos放在值的开始，只要给值加1即可。  
		cookie_pos += cookie_name.length + 1; //这里我自己试过，容易出问题，所以请大家参考的时候自己好好研究一下。。。  
		var cookie_end = allcookies.indexOf(";", cookie_pos);  
		if (cookie_end == -1) {  
			cookie_end = allcookies.length;  
		}  
		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。  
	}  
	return value;  
}
	
//验证码局部刷新页面
function refresh() {
	$("#randImage").attr("src", "${ctx}/servlet/validateCodeServlet?"+Math.random());
}

//校验用户名and密码and校验码是否正确
function submitbtn(btntype) {
	var userName = $("#userNameId").val(); //获取用户名
	var passWord = $("#passWordId").val(); //获取密码
	var codeCheck = $("#validateCodeId").val(); //获取验证码
	var validate = false; //校验通过与否的标志 true:校验通过,false:校验未通过
	
	if(btntype == 1) { 	//1 代表的登录
		$("#btnlog").attr('disabled',"true"); //登录按钮置为不可用状态
		$.ajax({
			url : "checkLogin", //校验用户名密码
			async:false,	//要指定不能异步,必须等待后台服务校验完成再执行后续代码
	        data: {userName:userName, passWord:passWord},
			type : "post",  
			dataType : "json", 
			success : function(result) {
				if (result.resultMessage) {
					validate = true;
				} else {
					validate = false;
					$("#btnlog").attr('disabled',"false"); //登录按钮置为可用状态
					alertify.alert('警告','登录失败,用户名和密码不符');
				}
			}  
		});
		
		//校验验证码
		var cookie_val = getCookie("validateCode");  //获得缓存中的验证码
		if (cookie_val == codeCheck) {
			validate = true;
		} else {
			validate = false;					
			$("#btnlog").attr('disabled',"false"); //登录按钮置为可用状态
			alertify.alert('警告','验证码输入有误，请重新输入');
		}
		
		if (validate) { //如果校验通过,提交表单
			$("#registerForm").form();
		}
		
		
	   }
	   
	
	   if(btntype == 2) {	//2 代表的注册
		$("#registerForm").submit(); //表单提交
		$("#btnreg").attr('disabled',"true"); //注册按钮置为不可用状态
	   }
	   
}
