<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html>
  <head>
    <title>大思英语</title>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/headCss.css"/>
	<script type="text/javascript" src="${ctx}/common/js/login/login.js"></script>	
  </head>
  <body onbeforeunload="onbeforeunloadLogOut()" class="headBody" style="margin-top: 0px;">
  <div id="headtop" style="margin-top:8px;">
  <br />
  	<div class="top" style="font-family: '宋体';color: #000000;font-size: 12px; position: relative;">
  	    
  		 <form class="registerForm" action="${ctx}/loginIn"
				method="post" enctype="multipart/form-data" name="registerForm" id="registerForm">
  	        <div style="float:left;width:634px;height:24px;"> &nbsp;用户名
	  		<input type="text" class="topinput" name="userName" id="userNameId" /><!--密码和验证码前去掉一个空格，避免有些机器验证码录入框错位 -->&nbsp;密码
	  		<input type="password" class="topinput" name="passWord" id="passWordId"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证码
	  		<input type="text" class="topinput2" name="validateCode" id="validateCodeId" value="" maxlength="8"  /></div>
			
			<a style="display: block;float:left; margin-left:0px;margin-top:2px; width:60px; height:24px;text-decoration: none;border: none;" 
				onclick="refresh()">
			<img alt="code..." name="randImage" id="randImage" src="${ctx}/servlet/validateCodeServlet" 
					width="60" height="20" border="0" align="left"></img>
			</a>
			
			<div style="float:left;width:140px;height:24px;margin-top:2px;">				
		  		<button type="button" id="btnlog" class="login"  style="float:left;" onclick="submitbtn(1)">登录</button>
		  			<span style="float:left;height:14px;margin-top:3px;">|</span>
		  		<button type="button" id="btnreg" class="login"  style="float:left;" onclick="submitbtn(2)">注册</button>
	  		</div>
  		</form>
  		
  		<div class="topright">
  		<img style="float:left;margin-top:7px;" src="${ctx}/common/resource/image/phone.jpg" alt="" />
  		<img style="float:left;margin-top:7px;" src="${ctx}/common/resource/image/phonenum.png" border="0" width="106px" height="16px" alt="" />
  		</div>
  		</div>
  		<div class="topmed">
  		    <div class="topNav">
  			<span class="topmedspan" style="font-family: '宋体';color: #000000;font-size: 12px;"><span style="float:left;">&nbsp;您所在的位置：</span><span>
  			首页
  			</span></span>
  			</div>
  		</div>
  	</div>
  </body>
	
</html>