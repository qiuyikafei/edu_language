<%@ page contentType="text/html;charset=UTF-8" %>
<%@include file="/common/base.jsp"%>
<%@ include file="/WEB-INF/view/include/taglib.jsp"%>
<html>
<head>
	<meta charset="utf-8">
    <title>大思英语</title>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/js/common/validator/css/myValidationReg.css"/>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/alertify.css"/>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/default.css"/>
	<script type="text/javascript" src="${ctx}/common/js/members/checkBrowser.js"></script>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/index.css"/>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/footCss.css"/>
	<script type="text/javascript" src="${ctx}/common/js/common/myPagerForAjax.js"></script>
	<link rel="stylesheet" type="text/css" href="${ctx}/common/css/courseInfoToWeb.css"/>
	<script type="text/javascript" src="${ctx}/common/js/common/validator/js/jquery.min.js"></script>
	<script type="text/javascript" src="${ctx}/common/js/common/jquery.corner.js"></script>
	<script type="text/javascript" src="${ctx}/common/js/common/alertify.js"></script>
    <script type="text/javascript">
    
	jQuery(document).ready(function(){
     var loginFlag=null;
     if(loginFlag==2){alert("您输入的账号或密码不正确，请重新输入！");}
     if(loginFlag==3){alert("您的状态被禁用，请联系管理员！");}
     if(loginFlag==4){alert("您已处于在线状态,不能重复登录,谢谢!");}
		});
	</script>
  </head>
  
<body class="indexBody">
   <%@include file="/common/header.jsp"%>
  	<div class="index">
  	 	<div class="newArticleBody">
  			<div id="box_4_4_4" class="page">
							<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/0aff84ff85f14022830776ee84e0d9d9.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程1（第一级）</span>
						</div>
							<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_2.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/19/1c2fda97e3c24dfb8c49cfbb3221ad27.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_2.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程2（第一级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_4.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/7a031c01d99f440da1fb1fb2c181d1c8.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_4.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程3（第一级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_3.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/fcfc7c9296e54c46827a15d07b193ec0.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_3.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程4（第一级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_5.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/196e070250ad4d78b3d8e2b6469f074b.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_5.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:1980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程1（第二级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_9.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/2d858fb0c00f47379bfb0f643046b514.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_9.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程2（第二级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_6.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/26e537e258f84a3abbfb015e0b581a27.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_6.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程3（第二级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_7.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2014/12/11/9a8155c6e1614afa98d2376e8417036c.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_7.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程4（第二级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_8.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/19/bd291d946cd1419eae33f1447de1f66a.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_8.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程1（第三级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_10.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/19/2a8451eddcf34a71b460eb1f11250189.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_10.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程2（第三级）</span>
						</div>
						<!-- 上锁的 -->	
						<div class="bookbox" style="position: relative;">
							<a href="bookAction!getBookByIdToWeb_11.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/19/36c4e784db484867b7815bc831666910.jpg"/></a>
							<a href="bookAction!getBookByIdToWeb_11.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
							<br/><span style="font-size:14px;" >课程3（第三级）</span>
						</div>
						<!-- 上锁的 -->
						<div class="bookbox" style="position: relative;">
						<a href="bookAction!getBookByIdToWeb_12.htm"><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/19/f7fae95e18924f72904400365279a51f.jpg"/></a>
						<a href="bookAction!getBookByIdToWeb_12.htm"><img src="${ctx}/common/resource/image/close.png" title="本课程的价格是:2980元" width="35" height="45" style="position: absolute; bottom:50px; right:15px; z-index: 1000;"/></a>
						<br/><span style="font-size:14px;" >课程4（第三级）</span>
						</div>
						<div class="bookbox">
							<a><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/20/3cd831848ca54de0a3f5770febea648c.jpg"/></a>
							<br/><span style="font-size:14px;" >大思英语体验版（一）</span>
						</div>
						<div class="bookbox">
							<a><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/1/22/e20101312bcf4a97861ca8746a509085.jpg"/></a>
							<br/><span style="font-size:14px;" >大思英语体验版（四）</span>
						</div>
<!-- 						  onclick=alert("请先登录，登录后可以免费学习此课程!") 
 -->						<div class="bookbox">
							<a><img title="" class="cricleimg" width="160" height="190" src="${ctx}/common/uploadtwo/2015/4/7/d8423546601a439eb094bd819ebe6fdd.jpg"/></a>
							<br/><span style="font-size:14px;" >英语故事绘本</span>
						</div>
			 	</div>
			</div>
  	</div>
  	<script type="text/javascript">
			 $(".cricleimg").corner();
	</script>
  	
  	<div class="newArticleFoot" style="float: left;
    height: 80px;
    margin-top:50px;
    width: 100%;">
  </div>
  <%@include file="/common/footer.jsp"%>
  </body>
  
	
</html>
