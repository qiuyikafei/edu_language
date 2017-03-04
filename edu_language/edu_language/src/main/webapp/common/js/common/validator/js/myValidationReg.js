/**
 * JiaRongZhang 2013.01.13
 * 初始化正则所有参数
 * //vReg表示对应的正则，可以到myValidationReg.js查看
 * //vL表示是否出现输入错误或者正确提示，!= undefined 或者有该属性表示不提示，否则提示
 * //提示效果是：出现在input标签后面
 * //vL != undefined 或者有该属性时,如果验证失败，会为input标签加上红框
 * 如果输入的字符长度需要改变，可以在vReg值后面加上取值范围格式为:(x,xx)，如vReg="V_NOTHTML(1,20)"
 * 对应的正则和提示信息则用{?}替代，如:"V_NOTHTML":"^.{?}$"和提示信息如:"V_NOTHTML":"不能输入HTML标签!且在{?}之间!"
 * //为了可以自定义显示错误内容，添加vTip属性，vTip属性值则为显示内容
 * //为了判断地区是否需要选择加上 V_MYAREA key值，使用时用一个容器包住includ进来的地区联动jsp,并为此容器加上属性vReg="V_MYAREA" vL="0" 记得判断是否选择地区
 * //为了满足有些input在某个地方必填，在某个地方可不填，如电话vReg="V_PHONE"：为它加上参数后：vReg="V_PHONE(|^$)"可不填，注意此参数是固定的。否则是必填的。
 * //可以有多个参数，如：vReg="TEST[(1,2)||(3,4)||(4)]"，多个参数是，参数必须放到中括号[]里面，以两竖线(||)分隔
 * 正则写法和提示信息写法请看 TEST 如："TEST":"^[0-9]{?1}$|^[a-z]{?2}$|^A{?3}$",第一个参数标识 ?1,第二个 ?2,以此类推....
 * 添加属性：vCkNum(2)//判断下拉列表至少要选择几项
 * 复选框：V_CHECKBOX(2)参数表示至少必选多少个，没有参数时表示可以不选
 */

//正则 
var vReg = {
	"V_UNAME":"^[a-z][a-z0-9_]{3,20}$",	//用户名  V_UNAME 此 key 值不要改动
	"V_PASSWORD":"^[a-zA-Z0-9]{6,20}$",	//密码，V_PASSWORD 此 key 值不要改动
	"V_NOTHTML":"^.{?}$",  				//不能输入HTML标签，key值不要改动 
	"V_RADIO":"V_RADIO",				//单选框，key值不要改动
	"V_CHECKBOX":"V_CHECKBOX",			//单选框，key值不要改动
	"V_MYAREA":"MYAREA",				//检查该子节点下的区域联动是否选择
	"V_DSNAME":"^.{?}$",  				//不能输入HTML标签，key值不要改动 
	
	"V_EMEIL":"\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\.\\w+([-.]\\w+)*{?}",		//邮箱账号
	"V_QQGROUPNAME":"^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w0-9]{?}$",			//QQ昵称
	"V_NUMBER":"^[0-9]{?}$",												//数字验证，只能输入{?}位数字
	"V_ONENUMBER":"^[1-9]{?}$",												//数字验证，只能输入[0-9]{?}位数字
	"V_PRICE_F1":"^[1-9]{1}\.\\d{1,2}$|^[0]{1}\.[1-9]$|^[1-9]\\d{1,}\.\\d{1}$|^[1-9]{1}\\d{0,}${?}",						//价格验证,格式为：正整数!最多保留1位小数!
	"V_PRICE_F2":"^[1-9]{1}\.\\d{1,2}$|^[0]{1}\.[0][1-9]$|^[0]{1}\.[1-9]\\d$|^[1-9]\\d{1,}\.\\d{1,2}$|^[1-9]{1}\\d{0,}${?}",//金额验证,格式为：正整数!最多保留2位小数!
	"V_ZHEKOU":"^[0]{1}\.[0][1-9]$|^[0]{1}\.[1-9](\\d?)$|^1(\.[0]{1,2})?${?}",												//折扣率,格式为：小于等于1的小数，最多保留2位小数!
	"V_PHONE":"^(\\d{3,4}-)?\\d{7,8}${?}",									//电话号码,{?},格式为:区号-号码/号码!
	"V_MOBILE":"^0?[1]\\d{10}${?}",											//手机号码,{?},格式为11位以1或0开头的手机号码!
	"V_FAX":"^(\\d{3,4}-)?\\d{7,8}${?}",									//传真号码,{?},格式为:区号-号码/号码
	"V_QQ":"^[1-9][0-9]{4,12}${?}",											//Q Q号码,{?},格式为:4-12位数字
	"V_ZIP":"^[1-9]\\d{5}${?}",												//邮编,{?},格式为:6位数字.但不能已0开头!
	"V_CHINEORENGLISH":"^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w-_\\s{1,4}\.]{?}$",	//名称支持中文、英文以及中括号内的符号[-_.]和4空格!长度为{?}位!
	"V_CHINEORENGLISHNUM":"^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w0-9]{?}$",		//名称支持中文、英文以及数字!长度为{?}位!
	"V_UPPERENGLISH":"^[A-Z]{?}$",											//只能输入大写英文!长度为{?}位!
	"V_LOWERENGLISH":"^[a-z]{?}$",											//只能输入小写英文!长度为{?}位!
	"V_NUMBERENGLISH":"^[a-zA-Z0-9]{?}$",									//只能输入数字和英文!长度为{?}位!
	"V_ENGLISH":"^[a-zA-Z-_\\s]{?}$",										//只能输入下划线、横线和英文!长度为{?}位!
	"V_PICTURE":".*gif|.*png|.*jpg|.*GIF|.*PNG|.*JPG${?}",					//允许GIF,PNG,JPG图片!
	"V_SEARCHSTONEMEMBER":"^$|^[^\<\>\%]{1,50}$",							//可以不填!但不能含有'<>%',长度1-50位!
	"V_OLDPWD":"^[a-zA-Z0-9]{?1}${?2}",
	"V_NOTEMPTY":"^.{1,}$",				//不能为空
	"V_EMPTY":"^$",						//
	"V_AFTERTIME":"^.{1,}$",
	"V_CENTERTIME":"^.{1,}$",
	"V_BEFORETIME":"^.{1,}$",
	"V_BEFORENOW":"^.{1,}$",//小于当前时间，格式：V_BEFORENOW(YYYY)、V_BEFORENOW(YYYY-MM)、V_BEFORENOW(YYYY-MM-DD) 参数可不写,不写已V_DATE正则匹配
	"V_AFTERNOW":"^.{1,}$",//大于当前时间，格式：V_BEFORENOW(YYYY)、V_BEFORENOW(YYYY/MM)、V_BEFORENOW(YYYY/MM/DD) 参数可不写,不写已V_DATE正则匹配
	"V_DATE":"^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(-|\/)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29))${?}",		
//	"V_DATE":"^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(-|\/)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29))\\s{1,4}((([01]?[0-9])|([2][0123])):([0-5]?[0-9]):([0-5]?[0-9]))?$",
	"TEST":"^[0-9]{?1}$|^[a-z]{?2}$|^A{?3}$"
}
	
//鼠标移上提示信息
var vTip = {
	"V_UNAME":"请输入您的用户名!格式为：数字、小写英文以字母开头4-20位!",
	"V_PASSWORD":"密码由6-20位数字、字母组成，字母区分大小写。",
	"V_NOTHTML":"请输入{?}字!不能输入成对尖括号且里面带有英文,如：<英文>或/>",
	"V_DSNAME":"请输入您的真实姓名，注册后不可修改!",
	"V_RADIO":"V_RADIO",
	"V_CHECKBOX":"V_CHECKBOX",
	"V_MYAREA":"MYAREA",
	
	"V_QQGROUPNAME":"名称支持中文、英文以及数字!最多{?}个字符!",
	"V_OLDPWD":"请输入您的密码!格式为：数字、英文{?1}位!{?2}",
	"V_EMEIL":"请输入您常用的邮箱!",
	"V_NUMBER":"只能输入{?}位数字!",
	"V_ONENUMBER":"只能输入1~9，{?}位数字",
	"V_PRICE_F1":"请输入价格,格式为：正整数!最多保留1位小数!",
	"V_PRICE_F2":"请输入金额,格式为：正整数!最多保留2位小数!",
	"V_ZHEKOU":"请输入折扣率,格式为：小于等于1的小数，最多保留2位小数!",
	"V_PHONE":"请输入您的电话号码,{?},格式为:区号-号码/号码!",
	"V_FAX":"传真{?},格式为:区号-号码/号码.",
	"V_QQ":"QQ{?},格式为:4-12位数字.",
	"V_ZIP":"邮编{?},格式为:6位数字.但不能已0开头!",
	"V_MOBILE":"请输入您常用的手机号码!",
	"V_CHINEORENGLISH":"名称支持中文、英文以及中括号内的符号[-_.]和4空格!长度为{?}位!",
	"V_CHINEORENGLISHNUM":"名称支持中文、英文以及数字!长度为{?}位!",
	"V_UPPERENGLISH":"只能输入大写英文!长度为{?}位!",
	"V_LOWERENGLISH":"只能输入小写英文!长度为{?}位!",
	"V_NUMBERENGLISH":"只能输入数字和英文!长度为{?}位!",
	"V_ENGLISH":"只能输入下划线、横线和英文!长度为{?}位!",
	"V_PICTURE":"允许GIF,PNG,JPG图片!",
	"V_SEARCHSTONEMEMBER":"可以不填!但不能含有'<>%',长度1-50位!",
	"V_NOTEMPTY":"不能为空",
	"V_EMPTY":"允许GIF,PNG,JPG图片!",
	"V_AFTERTIME":"^$",
	"V_CENTERTIME":"^$",
	"V_BEFORETIME":"^$",
	"V_DATE":"时间格式：yyyy-MM-dd 或 yyyy/MM/dd",
	
	"TEST":"允许数字{?1}位,小写英文{?2}位,大写A{?3}位!"
}
	
//错误提示信息
var vError = {
	"V_UNAME":"你输入的用户名格式[数字、小写英文以字母开头4-20位]不正确!请重新输入!",
	"V_PASSWORD":"你输入的密码格式[数字、英文6-20位]不正确!请重新输入!",
	"V_NOTHTML":"请输入{?}字!不能输入成对尖括号且里面带有英文,如：<英文>或/>",
	"V_DSNAME":"请输入{?}字!不能输入成对尖括号且里面带有英文,如：<英文>或/>",
	"V_RADIO":"还没选择!请选择!",
	"V_CHECKBOX":"CheckBox至少要选择{?1}个!",
	"V_MYAREA":"MYAREA",
	
	"V_QQGROUPNAME":"您输入的QQ群名称不正确，请重新输入！",
	"V_OLDPWD":"你输入的密码格式[数字、英文{?1}位!{?2}]不正确!请重新输入!",
	"V_EMEIL":"你输入的邮箱格式[xxx@xx.xx]不正确!请重新输入!",
	"V_NUMBER":"您输入格式[{?}]位数字]不正确!请重新输入!",
	"V_ONENUMBER":"您输入格式只能输入1~9，[{?}]位数字]不正确!请重新输入!",
	"V_PRICE_F1":"您输入价格格式[正整数!最多保留1位小数]不正确!请重新输入!",
	"V_PRICE_F2":"您输入金额,格式[正整数!最多保留2位小数]不正确!请重新输入!",
	"V_ZHEKOU":"请输入折扣率,格式为：小于等于1的小数，最多保留2位小数!",
	"V_PHONE":"您输入电话号码格式[区号-号码/号码]不正确!请重新输入!",
	"V_FAX":"您输入传真格式[区号-号码/号码]不正确!请重新输入!",
	"V_QQ":"您输入QQ格式[{4,12}位数字]不正确!请重新输入!",
	"V_ZIP":"您输入邮编格式为[6位数字.但不能已0开头]不正确!请重新输入!",
	"V_CHINEORENGLISH":"您输入格式不正确!长度为{?}位!请重新输入!",
	"V_CHINEORENGLISHNUM":"您输入格式[支持中文、英文以及数字]不正确!长度为{?}位!请重新输入!",
	"V_UPPERENGLISH":"只能输入大写英文!长度为{?}位!请重新输入!",
	"V_LOWERENGLISH":"只能输入小写英文!长度为{?}位!请重新输入!",
	"V_NUMBERENGLISH":"只能输入数字和英文!长度为{?}位!请重新输入!",
	"V_ENGLISH":"只能输入下划线、横线和英文!长度为{?}位!请重新输入!",
	"V_MOBILE":"您输入手机号码格式[11位以1或0开头]不正确!请重新输入!",
	"V_PICTURE":"您选择的图片格式[允许GIF,PNG,JPG图片]不正确!请重新输入!",
	"V_SEARCHSTONEMEMBER":"您输入的格式[可以不填!但不能含有'<>%']不正确!请重新输入!",
	"V_NOTEMPTY":"不能为空",
	"V_EMPTY":"还有未上传的图片!请先上传或取消上传!",
	"V_AFTERTIME":"^$",
	"V_CENTERTIME":"^$",
	"V_BEFORETIME":"^$",
	"V_DATE":"时间格式：yyyy-MM-dd 或 yyyy/MM/dd",
	
	"TEST":"格式：数字{?1}位,小写英文{?2}位,大写A{?3}位!"
}
	
	
$(function(){
	
	$('body').append('<div class=\"vReg_Tip_Class\"></div>');
	
	//绑定有vReg属性的标签事件
	$("[vReg],[url]:not([vReg])")
		.live("mouseover",function(){
			
			//获取标签中vReg属性的值
			var vR = $(this).attr('vReg');
			
			//单选按钮/地区下拉列表不出现提示
			if(_notTipOrCk($(this)))
				return;
			
			//取出鼠标移上提示信息
//			var tValue = vTip[vR];
			var tValue = "";
			
			var rtp = _subParam(vR,null,null,tValue);
			tValue = rtp["tValue"];
			
			$(".vReg_Tip_Class")
				.show()
				.html(tValue);
			
		})
		.live("mouseout",function(){
			//单选按钮/地区下拉列表不出现提示
			if(_notTipOrCk($(this)))
				return;
			
			$(".vReg_Tip_Class").hide();
		})
		.live("mousemove", function(event){
			//单选按钮/地区下拉列表不出现提示
			if(_notTipOrCk($(this)))
				return;
			
			var scrollTop = new Number(document.body.scrollTop);
			var scrollLeft = new Number(document.body.scrollLeft);
			var scrollHeigth = new Number(event.clientX);
			var top = (event.clientY + scrollTop + 10)+"px";
			var left = (scrollHeigth + scrollLeft)+"px";
			$(".vReg_Tip_Class").css({"top":top,"left":left});
		})
		.live("blur", function(){
			var vDom = $(this).get(0);
			var $R = $(this);
			
			//单选按钮/地区下拉列表不出现提示
			if(_notTipOrCk($R))
				return;
			
			//判断是否需要验证Value值唯一性
			if($R.attr('vPath') != undefined){
				isHasThisValue(vDom,null);
			}
			oneValidate($R,vDom);
		});
	
	/**
	 * 提交表单
	 * @memberOf {TypeName} 
	 * @return {TypeName} 
	 */
	$("form").submit(function(){
		var r = $(this);
		return cValidate(r);
	});
	
})

var cDom = null;//验证提示
var alt = null;//提示信息
/**
 * 提交表单时验证
 * @param {Object} r：form对象
 */
function cValidate(r){
	cDom = null;
		alt = null;
	var result = true;
	
	//验证是否存在密码，并两次输入的密码是否一致
	if(!samePassWord(r))
		return false;
	
	//验证是否存在单选按钮
	result = _ckRadio(r);
	
	//验证是否存在CheckBox
	if(result)
		result = _ckCheckBox(r);
	
	//验证是否有时间判断
//	result = _ckDateOrTime(r);
		
	//验证是否存在地区下拉列表
	var ma = true;
	if(result){
		result = _ckMyAreaSelect(r);
		ma = (result?false:true);//
	} 
		
	var vReg = $("[vReg]",r);
	for(var i=0;i<vReg.length;i++){
		var $R = vReg.eq(i);
		var vDom = $R.get(0);
		if(!oneValidate($R,vDom)){
			result = false;
		}
	}
	if(!result){
		if(alt != null && !ma){
			alert(alt);
		}
		if(cDom != null){
			cDom.focus();
		}
		cDom = null;
		alt = null;
	}
	return result;
}
//不验证或不提示
function _notTipOrCk($R){
	if($R.attr('vReg') == "V_RADIO" || $R.attr('vReg') == "V_MYAREA" || $R.attr("vReg").indexOf("V_CHECKBOX")>=0)
		return true;
}
/**
 * 
 * @param {Object} $R  jq对象 要验证的标签对象
 * @param {Object} vDom js对象 要验证的标签对象
 */
function oneValidate($R,vDom){
	//单选按钮、地区下拉列表不验证
	if(_notTipOrCk($R))
		return true;
	
	//获取标签的value值
	var value = $.trim($R.val());
	//获取标签中vReg属性的值
	var vR = $R.attr('vReg');
	//取出对应的正则
//	var rValue = vReg[vR];
	//取出对应的错误提示信息
//	var eValue = vError[vR];
	
	//截取参数，如果有的话
	var rValue="",eValue ="";
	var rtp = _subParam(vR,rValue,eValue,null);
	vR = rtp["vR"];
	rValue = rtp["rValue"];
	eValue = rtp["eValue"];
	
	//定义新的正则规则
	var reg = new RegExp(rValue);
	
	//验证是否存在HTML标签
	if(vR == "V_NOTHTML"){
		if(_ckHTML(value)){
			return _vRegTestFail($R,vDom,eValue);
		}
	}
	//验证是否存在HTML标签
	if(vR == "V_DSNAME"){
		if(_ckHTML(value)){
			return _vRegTestFail($R,vDom,eValue);
		}
	}
	//验证时间
	if(vR == 'V_BEFORENOW' || vR == 'V_AFTERNOW'){
		var InTime = _formatTime(value);//输入时间
		var now = new Date();//当前时间
		if(vR == 'V_BEFORENOW'?(InTime>now):(InTime<now)){
			//在要小于当前时间时，输入时间大于当前时间，要大于当前时间时，输入时间小于当前时间,验证失败
			return _vRegTestFail($R,vDom,eValue);
		}
	}
		
	
	//验证失败
	if(!reg.test(value)){
		return _vRegTestFail($R,vDom,eValue);
	}else{//验证成功
		return _vRegTestSuccess($R,vDom);
	}
}
/**
 * 验证失败
 * @param {Object} $R
 * @param {Object} vDom
 * @param {Object} cDom   验证提示
 * @param {Object} eValue 错误提示信息
 * @return {TypeName} 
 */
function _vRegTestFail($R,vDom,eValue){
	//表现为在后面提示
	if($R.attr("vL") == undefined){
		//第一次出现错误
		if($R.attr("vError") == undefined){
			//添加错误提DIV
			_setVErrorDiv(vDom,eValue);
		}else if($R.attr("vTip") != undefined){
			vDom.removeAttribute("vTip");//用完马上删除
			//添加错误提DIV
			_setVErrorDiv(vDom,eValue);
		}
	//表现为红线框
	}else{
		//select附加div出现红框
		if(vDom.nodeName == "SELECT"){
			if($R.attr("vError") == undefined){
				var time = new Date().getTime();
				vDom.setAttribute("vError",time);
				//判断是否存在包裹SPAN
				var pSpen = $R.parent();
				if(pSpen.attr("vError") == undefined){
					//生成新的SPAN包裹住SELETE
					$R.wrap('<span class=\"vReg_Error_SelectClass\" vError=\"'+time+'\"></span>');
				}else{
					pSpen.addClass("vReg_Error_SelectClass");
					pSpen.attr("vError",time);
				}
			}
		}else{
			if($R.attr('vReg') != "V_EMPTY"){
//				var border = getAttrStyle(vDom,"border");
//				var border1 = vDom.style.border;
//				vDom.setAttribute("vBorder",border);//保存原来的border
//				vDom.style.border = 'none'; //再去掉原有border
				$R.addClass("vReg_Error_Line_Class");
			}
		}
		if(cDom==null){
			var hints = $R.attr("vL");//绑定提示是那个input出现错误
			if(hints != undefined){
				eValue = (hints=="0"?eValue:hints+"："+eValue);
			}
			alt = eValue;
		}
	}
		
	//存在成功提示div,要删除
	_removeVRightDiv($R,vDom);
		
	if(cDom==null){
		cDom = $R;
	}
		
	return false;
}

/**
 * 验证成功
 * @param {Object} $R
 * @param {Object} vDom
 * @return {TypeName} 
 */
function _vRegTestSuccess($R,vDom){
	//存在错误提示div,要删除
	if($R.attr("vError") != undefined){
		//删除错误提示框
		_removeVErrorDiv($R,vDom);
	}
		
	if($R.hasClass("vReg_Error_Line_Class")){
//		var borber = vDom.getAttribute("vBorder");//获取原来被删除的border
		$R.removeClass("vReg_Error_Line_Class");
//		vDom.style.border = borber; //再附上原有border
	}
		
	//添加正确提示图片
	if($R.attr("vL") == undefined){
		//添加正确提示图片
		_setVRightDiv(vDom);
	}
	return true;
}
/**
 * 添加错误提DIV
 * @param {Object} vDom 标签的DOM对象
 * @param {Object} eValue  对应的错误提示信息
 * @param {Object} _top 标签出现的上边距
 * @param {Object} _left 标签出现的左边距
 * @param {Object} _width 标签的宽度
 */
function _setVErrorDiv(vDom,eValue){
	
//	为了可以自定义显示错误内容，添加vTip属性，vTip属性值则为显示内容
	var vTip = $(vDom).attr("vTip");
	if(vTip != undefined)
		eValue = vTip;
	
	//存在错误提示div,要删除
	if($(vDom).attr("vError") != undefined){
		//删除错误提示框
		_removeVErrorDiv($(vDom),vDom);
	}
			
	//获取验证标签的位置
	var _top = vDom.offsetTop;
	var _left = vDom.offsetLeft;
	var _width = vDom.offsetWidth;
	var _height = vDom.offsetHeight;
	//接收验证标签对象，防止在判断是否有父容器是丢失
	var newVdom = vDom;				
	//判断是否有父容器，如果存在则累加其边距
	while(vDom = vDom.offsetParent) {	//等效 vDom = vDom.offsetParent;while (vDom != undefined)
		_top += vDom.offsetTop; //叠加父容器的上边距
		_left += vDom.offsetLeft; //叠加父容器的左边距
	}
	//还原对象
	vDom = newVdom;
	
	var time = new Date().getTime();
	vDom.setAttribute("vError",time);
	$('body').append('<div class=\"vReg_Error_Class\" vError=\"'+time+'\"></div>');
	//指定错误提示div出现的位置
	var eDiv = $(".vReg_Error_Class[vError="+time+"]").get(0);
	eDiv.style.top = _top+"px";
	eDiv.style.left = _left + _width + 10+"px";
	eDiv.innerHTML = eValue;
						
	//显示错误div
	$(".vReg_Error_Class[vError="+time+"]").show();
}

/**
 * 删除错误提示框
 * @param {Object} $R
 * @param {Object} vDom
 */
function _removeVErrorDiv($R,vDom){
	var time = $R.attr("vError");
	vDom.removeAttribute("vError");
	if(vDom.nodeName == "SELECT"){
		$(".vReg_Error_SelectClass[vError="+time+"]").removeClass("vReg_Error_SelectClass");
	}else{
		$(".vReg_Error_Class[vError="+time+"]").remove();
	}
}

/**
 * 添加正确提示图片
 * @param {Object} vDom
 * @param {Object} _top 标签出现的上边距
 * @param {Object} _left 标签出现的左边距
 * @param {Object} _width 标签的宽度
 */
function _setVRightDiv(vDom){
	
	//存在成功提示div,要删除
	_removeVRightDiv($(vDom),vDom);
	
	//获取验证标签的位置
	var _top = vDom.offsetTop;
	var _left = vDom.offsetLeft;
	var _width = vDom.offsetWidth;
	var _height = vDom.offsetHeight;
	//接收验证标签对象，防止在判断是否有父容器是丢失
	var newVdom = vDom;				
	//判断是否有父容器，如果存在则累加其边距
	while(vDom = vDom.offsetParent) {	//等效 vDom = vDom.offsetParent;while (vDom != undefined)
		_top += vDom.offsetTop; //叠加父容器的上边距
		_left += vDom.offsetLeft; //叠加父容器的左边距
	}
	//还原对象
	vDom = newVdom;
	
	var time = new Date().getTime();
	vDom.setAttribute("vRight",time);
	$('body').append('<div class=\"vReg_Right_Class\" vRight=\"'+time+'\"></div>');
	//指定错误提示div出现的位置
	var rDiv = $(".vReg_Right_Class[vRight="+time+"]").get(0);
	rDiv.style.top = _top+"px";
	rDiv.style.left = _left + _width + 10+"px";
	$(".vReg_Right_Class[vRight="+time+"]").show();
}
/**
 * 存在成功提示div,要删除
 * @param {Object} $R 标签的JQ对象
 * @param {Object} vDom 标签的DOM对象
 * $R = $(vDom) || $R[0] = vDom
 */
function _removeVRightDiv($R,vDom){
	if($R.attr("vRight") != undefined){
		var time = $R.attr("vRight");
		vDom.removeAttribute("vRight");
		$(".vReg_Right_Class[vRight="+time+"]").remove();
	}
}

/**
 * 验证是否存在HTML标签
 * @param {Object} value
 */
function _ckHTML(value){
	var reg = /<(\s+)?[a-zA-Z\s]+(\s?)+([a-zA-Z\s]+)?(\s+)?([=]+)?(\s+)?([\\"\\']+)?(\s+)?([a-zA-Z\s]+)?(\s+)?([\\"\\']+)?(\s+)?\/?(\s+)?>|\/>/g;
//	var reg = /<[a-zA-Z]+\/?(\s?)+>|\/>|<|>/g;
	if(reg.test(value))
		return true;
	else
		return false;
}

/**
 * 验证是否存在改变参数
 * @param {Object} vR
 * @param {Object} rValue //取出对应的正则
 * @param {Object} eValue //取出对应的错误提示信息
 * @param {Object} tValue //取出鼠标移上提示信息
 * @return {TypeName} 
 */
function _subParam(vR,rValue,eValue,tValue){
	
	vR = new String(vR);
	//判断是否存在多个参数，多个参数以中括号包住，如：[(),()]
	var param = "";
	if(vR.indexOf("(")>0){//存在参数
		var paramList="";
		var paramStr="";
		var pi1 = vR.indexOf("[");
		var pi2 = vR.indexOf("]");
		
		if(pi1>0 && pi2>0 && pi1<pi2){
			//拿出对应的参数集合
			paramStr = vR.substring(pi1+1,pi2);
			paramList = paramStr.toString().split("||");//
//			paramList = eval(paramStr);
			
		}else{
			pi1 = vR.indexOf("(");
			paramList = vR.substring(pi1,vR.length).split("||");;
		}
		
		vR = vR.substr(0,pi1);
		//取出对应的正则
		rValue = vReg[vR];
		//取出对应的错误提示信息
		if(eValue != null)
			eValue = vError[vR];
		//取出鼠标移上提示信息
		if(tValue != null)
			tValue = vTip[vR];
		
		for(var i=0;i<paramList.length;i++){
			param = new String(paramList[i]);	
			param = param.substring((param.indexOf("(")+1),param.indexOf(")"));
			var inStr = "\{\?"+(i+1)+"\}";
			var reg = new RegExp("\\{\\?"+(i+1)+"\\}","g");
			
			rValue = new String(rValue);
			eValue = new String(eValue);
			tValue = new String(tValue);
			
			if(vR == 'V_BEFORENOW' || vR == 'V_AFTERNOW'){
				return _ckDateFormat(vR,rValue,eValue,tValue,param);
			}else{
				rValue = putParamValue(rValue,reg,inStr,param,"{"+param+"}",param);
				eValue = putParamValue(eValue,reg,inStr,param,param.replace(/\,/g,'-'),"可以不填");
				tValue = putParamValue(tValue,reg,inStr,param,param.replace(/\,/g,'-'),"可以不填");
			}
		}
	}else{
		if(vR == 'V_BEFORENOW' || vR == 'V_AFTERNOW'){
			//取出对应的正则
			rValue = vReg["V_DATE"];
			//取出对应的错误提示信息
			eValue = vError["V_DATE"];
			//取出鼠标移上提示信息
			tValue = vTip["V_DATE"];
		}else{
			//取出对应的正则
			rValue = vReg[vR];
			//取出对应的错误提示信息
			eValue = vError[vR];
			//取出鼠标移上提示信息
			tValue = vTip[vR];
		}
	}
	
	//判断正则中是否存在{?}或{?..},而vReg中又没有给参数 ，主要是在判断是否可以为空是出现
	rValue = rValue.replace(/\{\?\}|\{\?\d\}/g,'');
	eValue = eValue.replace(/\{\?\}|\{\?\d\}/g,'');
	tValue = tValue.replace(/\{\?\}|\{\?\d\}/g,'');
		
	return {"vR":vR,"rValue":rValue,"eValue":eValue,"tValue":tValue,"param":param};
}
/**
 * @param {Object} value	要改变的字符串
 * @param {Object} reg		正则	
 * @param {Object} param	替换参数
 * @param {Object} inStr	
 * @param {Object} reparam	拿来替换的字符串  不为空
 * @param {Object} emParam	拿来替换的字符串	 为空
 * @return {TypeName} 
 */
function putParamValue(value,reg,inStr,param,reparam,emParam){
	if(value != null && value != "null"){
		if(value.indexOf(inStr)>=0){
			if(param == '|^$')//该参数表示加上可以为空
				value = value.replace(reg,emParam);
			else
				value = value.replace(reg,reparam);
		}else if(value.indexOf("{?}")>=0){//为了兼容之前的
			if(param == '|^$')//该参数表示加上可以为空
				value = value.replace(/\{\?\}/g,emParam);
			else
				value = value.replace(/\{\?\}/g,reparam);
		}
	}
	return value;
}

function _ckDateFormat(vR,rValue,eValue,tValue,param){
	var tip = (vR=='V_BEFORENOW'?"小于当前时间":"大于当前时间");
	var yy = /^([a-zA-Z]{1,4})$/;
	var m1 = /^([a-zA-Z]{1,4})(-|)([a-zA-Z]{1,2})$/;
	var m2 = /^([a-zA-Z]{1,4})(\/)([a-zA-Z]{1,2})$/;
	var d1 = /^([a-zA-Z]{1,4})(-|)([a-zA-Z]{1,2})(-|)([a-zA-Z]{1,2})$/;
	var d2 = /^([a-zA-Z]{1,4})(\/)([a-zA-Z]{1,2})(\/)([a-zA-Z]{1,2})$/;
	var sH = /^([a-zA-Z]{1,4})(-|\/)([a-zA-Z]{1,2})(-|\/)([a-zA-Z]{1,2})\s{1,4}([H]{2}):([m]{2}):([s]{2})$/;
	var sh = /^([a-zA-Z]{1,4})(-|\/)([a-zA-Z]{1,2})(-|\/)([a-zA-Z]{1,2})\s{1,4}([h]{2}):([m]{2}):([s]{2})$/;
	if(yy.test(param)){//时间格式：yyyy-MM-dd 或 yyyy/MM/dd
		rValue = "^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})$";
		eValue = "只能输入年份且"+tip+",格式如：YYYY";
		tValue = "只能输入年份且"+tip+",格式如：YYYY";
	}else if(m1.test(param)){
		rValue = "^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(0[13456789]|1[012])$";
		eValue = "只能输入年份和月份且"+tip+",格式如：YYYY-MM";
		tValue = "只能输入年份和月份且"+tip+",格式如：YYYY-MM";
	}else if(m2.test(param)){
		rValue = "^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})\/(0[13456789]|1[012])$";
		eValue = "只能输入年份和月份且"+tip+",格式如：YYYY/MM";
		tValue = "只能输入年份和月份且"+tip+",格式如：YYYY/MM";
	}else if(d1.test(param)){
		rValue = "^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-)(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(-)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-)02(-)29)$";
		eValue = "只能输入年月日且"+tip+",格式如：YYYY-MM-DD";
		tValue = "只能输入年月日且"+tip+",格式如：YYYY-MM-DD";
	}else if(d2.test(param)){
		rValue = "^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(\/)(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(\/)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(\/)02(\/)29)$";
		eValue = "只能输入年月日且"+tip+",格式如：YYYY/MM/DD";
		tValue = "只能输入年月日且"+tip+",格式如：YYYY/MM/DD";
	}else if(sH.test(param)){
		rValue = "^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(-|\/)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29))\\s{1,4}((([01]?[0-9])|([2][0123])):([0-5]?[0-9]):([0-5]?[0-9]))$";
		eValue = "只能输入年月日时(24小时制)分秒且"+tip+",格式如：YYYY-MM-DD HH:mm:ss或YYYY/MM/DD HH:mm:ss";
		tValue = "只能输入年月日时(24小时制)分秒且"+tip+",格式如：YYYY-MM-DD HH:mm:ss或YYYY/MM/DD HH:mm:ss";
	}else if(sh.test(param)){
		rValue = "^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(-|\/)(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29))\\s{1,4}((([0]?[0-9])|([01][012])):([0-5]?[0-9]):([0-5]?[0-9]))$";
		eValue = "只能输入年月日时(12小时制)分秒且"+tip+",格式如：YYYY/MM/DD hh:mm:ss或YYYY-MM-DD hh:mm:ss";
		tValue = "只能输入年月日时(12小时制)分秒且"+tip+",格式如：YYYY/MM/DD hh:mm:ss或YYYY-MM-DD hh:mm:ss";
	}
	return {"vR":vR,"rValue":rValue,"eValue":eValue,"tValue":tValue};
}


function _subParam11(vR,rValue,eValue,tValue){
	vR = new String(vR);
	if(vR.indexOf("(")>0){//存在参数
		var param = vR.substring(vR.indexOf("("),vR.length);
		vR = vR.substr(0,vR.indexOf("("));
		
		//取出对应的正则
		rValue = vReg[vR];
		//取出对应的错误提示信息
		if(eValue != null)
			eValue = vError[vR];
		//取出鼠标移上提示信息
		if(tValue != null)
			tValue = vTip[vR];
			
		param = new String(param);
		param = param.substring((param.indexOf("(")+1),param.indexOf(")"));
		rValue = new String(rValue);
		var reg = /\{\?\}/g;
		if(rValue.indexOf("{?}")>=0){
			if(param == '|^$')//该参数表示加上可以为空
				rValue = rValue.replace(reg,param);
			else
				rValue = rValue.replace(reg,"{"+param+"}");
		}
		if(eValue != null){
			if(eValue.indexOf("{?}")>=0){
				if(param == '|^$')//该参数表示加上可以为空
					eValue = eValue.replace(reg,"可以不填");
				else
					eValue = eValue.replace(reg,param.replace(/\,/g,'-'));
			}
		}
		if(tValue != null){
			if(tValue.indexOf("{?}")>=0){
				if(param == '|^$')//该参数表示加上可以为空
					tValue = tValue.replace(reg,"可以不填");
				else
					tValue = tValue.replace(reg,param.replace(/\,/g,'-'));
			}
		}
		
	}else{
		//取出对应的正则
		rValue = vReg[vR];
		//取出对应的错误提示信息
		eValue = vError[vR];
		//取出鼠标移上提示信息
		tValue = vTip[vR];
		
		//判断正则中是否存在{?},而vReg中又没有给参数 ，主要是在判断是否可以为空是出现
		if(rValue.indexOf("{?}")>=0){
			rValue = rValue.replace(/\{\?\}/g,'');
			eValue = eValue.replace(/\{\?\}/g,'');
			tValue = tValue.replace(/\{\?\}/g,'');
		}
	}
	
	return {"vR":vR,"rValue":rValue,"eValue":eValue,"tValue":tValue};
}

/**
 * 判断是否选择了单选按钮
 * @param {Object} r 表单form对象
 * @return {TypeName} 
 */
function _ckRadio(r){
	var result = true;
	var eValue = "";
	var name = "";
	var vReg = $("[vReg=V_RADIO][type=radio]",r);
	for(var i=0;i<vReg.length;i++){
		var rD = vReg.eq(i)[0];
		if(rD.name != name){
			name = rD.name;
			var vName = $("[name="+name+"]",r);
			//避免有多组radio
			for(var j=0;j<vName.length;j++){
				var rN = vName.eq(j);
				if(rN.attr("vReg")=="V_RADIO"){//避免不是radio的标签有相同的name值，
					if(rN[0].checked){
						break;
					}else if(j==vName.length -1){
						eValue = vError["V_RADIO"];
						var hints =rN.attr("vL");//绑定提示是那个input出现错误
						if(hints != undefined)
							eValue = (hints=="0"?eValue:hints+"："+eValue);
						alert(eValue);
						return false;
					}
				}
			}
		}
	}
	if(!result){
		
	}
	return result;
}
/**
 * 检查checkbox
 * @param {Object} r
 * @return {TypeName} 
 */
function _ckCheckBox(r){
	var result = true;
	//截取参数，如果有的话
	var rValue="",eValue ="",param="";
	var name = "";
	var vReg = $("input[type=checkbox][vReg]",r);
	for(var i=0;i<vReg.length;i++){
		var rD = vReg.eq(i)[0];
		if(rD.name != name){
			var vR = vReg.eq(i).attr('vReg');
			var rtp = _subParam(vR,rValue,eValue,null);
			vR = rtp["vR"];
			rValue = rtp["rValue"];
			eValue = rtp["eValue"];
			param = rtp["param"];
			var ps = param.split(",")[0]; ps = (ps==""?0:ps);
			name = rD.name;
			var vName = $("[name="+name+"]",r);
			//避免有多组checkbox
			var c = (ps==0?0:1);
			for(var j=0;j<vName.length;j++){
				var rN = vName.eq(j);
				if(rN.attr("vReg")!=undefined && rN.attr("vReg")!=null && rN.attr("vReg").indexOf("V_CHECKBOX")>=0){//避免不是checkbox的标签有相同的name值，
					if(rN[0].checked){
						if(c==parseInt(ps)){
							break;
						}
						c++;
					}
					if(j==vName.length -1){
						var hints =rN.attr("vL");//绑定提示是那个input出现错误
						if(hints != undefined)
							eValue = (hints=="0"?eValue:hints+"："+eValue);
						alert(eValue);
						return false;
					}
				}
			}
		}
	}
	return result;
}
/**
 * 判断是否选择了地区下拉列表
 * @param {Object} r 表单form对象
 * @return {TypeName} 
 */
function _ckMyAreaSelect(r){
	var result = true;
	var vReg = $("[vReg=V_MYAREA]",r);
	for(var i=0;i<vReg.length;i++){
		var $R = vReg.eq(i);
		result = _ckMyAreaValue($R);
		if(!result)break;
	}
	return result;
}

function _ckMyAreaValue(r){
	var checknum = r.attr("vCkNum");//判断下拉列表至少要选择几项
	var f = $("#_myFirstArea",r)[0]!=undefined?$("#_myFirstArea",r)[0].value:null;
	var s = $("#_mySecondArea",r)[0]!=undefined?$("#_mySecondArea",r)[0].value:null;
	var t = $("#_myThirdArea",r)[0]!=undefined?$("#_myThirdArea",r)[0].value:null;
	if(f == '00' || f == '请选择'){
		alert("请选择所在的省!");
		return false;
	}
	if((s == '00' || s == '请选择') && (checknum == undefined || checknum == 2 || checknum == 3)){
		alert("请选择所在的市!");
		return false;
	}
	if((t == '00' || t == '请选择') && (checknum == undefined || checknum == 3)){
		alert("请选择所在的区/县!");
		return false;
	}
	var fp = $("#_myFirstProduct",r)[0]!=undefined?$("#_myFirstProduct",r)[0].value:null;
	var sp = $("#_mySecondProduct",r)[0]!=undefined?$("#_mySecondProduct",r)[0].value:null;
	var tp = $("#_myThirdProduct",r)[0]!=undefined?$("#_myThirdProduct",r)[0].value:null;
	if(fp == '00' || fp == '请选择'){
		alert("请选择第一级分类!");
		return false;
	}
	if((sp == '00' || sp == '请选择') && (checknum == undefined || checknum == 2 || checknum == 3)){
		alert("请选择第二级分类!");
		return false;
	}
	if((tp == '00' || tp == '请选择') && (checknum == undefined || checknum == 3)){
		alert("请选择第三级分类!");
		return false;
	}
	return true;
}

/**
 * 检查时间
 * @param {Object} r 表单form对象
 */
function _ckDateOrTime(r){
	
	var beforetime = $("[vReg=V_BEFORETIME]",r);
	var centertime = $("[vReg=V_CENTERTIME]",r);
	var aftertime = $("[vReg=V_AFTERTIME]",r);
	
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})(-|\/)(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,4})(-|\/)(\d{1,2})(-|\/)(\d{1,2})$/; 

	var rB = null;
	var rC = null;
	var rA = null;
	
	if(beforetime[0]!=null)
		rB = _formatTime(beforetime[0].value); //之前时间
	if(centertime[0]!=null)
		rC = _formatTime(centertime[0].value); ; //中间时间
	if(aftertime[0]!=null)
		rA = _formatTime(aftertime[0].value); ; //之后时间
	var rN = new Date(); //当前时间
	
	if(rA == null && rB == null && rC == null)
		return true;
	else
		return putTimeTip(aftertime,beforetime,centertime,rA,rB,rC,"不能比上一时间小!")
}

/**
 * @param {Object} time 时间字符串 格式：yyyy-MM-dd HH:mm:ss 或 yyyy/MM/dd HH:mm:ss 或 yyyy-MM-dd 或 yyyy/MM/dd
 * @return {TypeName} 时间类型
 */
function _formatTime(time){
	var rB = null;
	if(time != undefined && time != null && time != ""){
		try{
			var vB = time;
			var a = vB.toString().split(" ");
			var b = a[0].split(/-|\//g);
			var c = null;
			if(a.length>1)
				c = a[1].split(/\:/g);
			if(b == null){
				b = new Array(3);	
			}
			if(c == null){
				c = new Array(3);
			}
			for(var i=0;i<3;i++){
				if(b[i]==undefined)
					b[i] = "00";
				if(c[i]==undefined)
					c[i] = "00";
			}	
			
			rB = new Date(b[0],b[1]=="00"?b[1]:b[1]*1-1,b[2],c[0],c[1],c[2]);
		}catch(e){
			return rB;
		}
	}
	
	return rB;
}

function putTimeTip(timeA,timeB,timeC,rA,rB,rC,alt){
	if(rB != null){
		if(rC != null && rA == null){
			if(rC<rB){
				return _vRegTestFail(timeC,timeC[0],alt);
			}
			return true;
		}else if(rC == null && rA != null){
			if(rA<rB){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}else if(rC != null && rA != null){
			if(rC<rB){
				return _vRegTestFail(timeC,timeC[0],alt);
			}
			if(rA<rB){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			if(rA<rC){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}
	}else if(rC != null){
		if(rB != null && rA == null){
			if(rC<rB){
				return _vRegTestFail(timeC,timeC[0],alt);
			}
			return true;
		}else if(rB == null && rA != null){
			if(rA<rC){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}else if(rB != null && rA != null){
			if(rC<rB){
				return _vRegTestFail(timeC,timeC[0],alt);
			}
			if(rA<rB){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			if(rA<rC){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}
	}else if(rA != null){
		if(rB != null && rC == null){
			if(rA<rB){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}else if(rB == null && rC != null){
			if(rA<rC){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}else if(rB != null && rC != null){
			if(rC<rB){
				return _vRegTestFail(timeC,timeC[0],alt);
			}
			if(rA<rB){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			if(rA<rC){
				return _vRegTestFail(timeA,timeA[0],alt);
			}
			return true;
		}
	}else{
		return false;
	}
}

/**
 * 判断密码是否一致
 * @param {Object} r 表单form对象
 * @return {TypeName} 
 */
function samePassWord(r){
	var pwd1 = "";
	var pwd2 = "";
	var vReg = $("[vReg=V_PASSWORD]",r);
	if(vReg.length == 2){
		//获取标签的value值
		pwd1 = $.trim(vReg.eq(0).val());
		pwd2 = $.trim(vReg.eq(1).val());
		if($.trim(pwd1) != $.trim(pwd2)){
			if(vReg.eq(0).attr("vL") == undefined){
				_setVErrorDiv(vReg.eq(0)[0],"你输入的密码不一致!请重新输入!");
				_setVErrorDiv(vReg.eq(1)[0],"你输入的密码不一致!请重新输入!");
			}else{
				alert("你输入的密码不一致!请重新输入!");
			}
			
			//存在成功提示div,要删除
			_removeVRightDiv(vReg.eq(0),vReg.eq(0)[0]);
			_removeVRightDiv(vReg.eq(1),vReg.eq(1)[0]);
			
			vReg.eq(1).val("");
			vReg.eq(0).val("").focus();
			
			return false;
		}
		return true;
	}
	return true;
}

/**
 * 检查用户名是否存在
 * 
 * 异步请求Action，必须要有key值为b的boolean值，要来判断是否存在，b = true存在，b = false不存在
 * key值为result的返回提示结果信息，
 * @param {Object} r 要验证的input对象
 */
function isHasThisValue(r,url){
	//判断是修改还是新增，修改操作不用检测自己的值
	var hr = $("input[type=hidden][name=hide_"+r.name+"]");
	if(!chIsEmptyOrNull(hr[0].value) && !chIsEmptyOrNull(r.value) && r.value == hr[0].value){
		//修改时，没有改变原来的值..不检测
		return ;
	}
	
	if(url == null || url == undefined)
		url = r.vPath;
	var param = r.name + "=" + r.value;
	var rFun = function(ex){
		if(ex.b){
			if($(r).attr("vL") == undefined){
				_setVErrorDiv(r,ex.result);
			}else{
				alert(ex.result);
			}
			$(r).focus().val(hr.val());
		}
	}
	if($.trim(r.value)!="")
		_myAjax(url,param,rFun);
}

/**
 * 判断登录是否成功
 * @param {Object} 'flag' the type is boolean ,if true ,the result is fail.
 */
function _myInitLogin(flag,result){
	if(flag){
		if($("[vReg=V_UNAME]").attr("vL") != undefined){
			alert(result);
		}else{
			$("[vReg=V_UNAME],[vReg=V_PASSWORD]").attr("vTip",result).focus().blur();
		}
		$("[vReg=V_PASSWORD]").val("");
	}
}

function _ckImgSize(){
	var file = $("input[type=file][vReg=V_PICTURE][name=myFilePath]");
	var frm = file.parents("form");
	var url = file[0].lang+"/checkImageSizeAction!checkImgSize.do";
	var param = file[0].name + "=" + file[0].value;
	var returnFunction = function(ex){
		if(ex.b){
			alert(ex.result);
			file.addClass("vReg_Error_Line_Class");
		}
	}
	_myAjax(url,param,returnFunction);
}
/**
 * 异步请求
 * @param {Object} url 请求地址
 * @param {Object} param 请求参数
 * @param {Object} returnFunction 回调函数
 */
function _myAjax(url,param,returnFunction){
	$.ajax({
		type: "POST",
		url: url,
		data: param,
		dataType :"json",
		success: returnFunction						
	});
}

//当页面加载状态改变的时候执行这个方法. 
document.onreadystatechange = subSomething;
function subSomething(){ 
	//当页面加载状态为完全结束时进入
	if(document.readyState == "complete"){
		//检查是否存在要检测某个值的唯一性，既存在 vPath
		appenHideInput();
	}
}

/**
 * //检查是否存在要检测某个值的唯一性，既存在 vPath
 */
function appenHideInput(){
	var vpath = $("[vPath]");
	for(var i = 0;i<vpath.length;i++){
		var name = vpath.eq(i).attr("name");
		var value = vpath.eq(i).val();
		$("body").append("<input name=\"hide_"+name+"\" value=\""+value+"\" type=\"hidden\" />");
	}
}

/**
 * 判断某值val是否存在或者为空字符串
 * @param {Object} val
 * @return {TypeName} 
 */
function chIsEmptyOrNull(val){
	if(val != undefined && val != null && val != ""){
		return false;
	}else{
		return true;
	}
}

/**
 * 获取某标签的样式值
 * @param {Object} elem dom类型对象
 * @param {Object} attr 属性名
 * @return {TypeName} 
 */
function getAttrStyle(elem,attr){
	var a1 = CSS2Properties.border.valueOf();
	var a2 = window.getComputedStyle(elem,attr);
	Window.getComputedStyle(elem,attr);
	window.getComputedStyle(elem,attr);
    if(elem.attr){
        //若样式存在于html中,优先获取
        return elem.style[attr];
//    }else if(elem.currentStyle){
//        //IE下获取CSS属性最终样式(同于CSS优先级)
//        return elem.currentStyle[attr];
    }else if(document.defaultView && document.defaultView.getComputedStyle){
        //W3C标准方法获取CSS属性最终样式(同于CSS优先级)
        //注意,此法属性原格式(text-align)获取的,故要转换一下
        attr=attr.replace(/([A-Z])/g,'-$1').toLowerCase();
        //获取样式对象并获取属性值
        return document.defaultView.getComputedStyle(elem,null).getPropertyValue(attr);
    }else{
        return null;
    }
}