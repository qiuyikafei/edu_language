<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/common/base.jsp"%>
<%@ include file="/WEB-INF/view/include/taglib.jsp"%>
<html>
	<head>
		<meta charset="utf-8">
		<title>注册页面</title>
		<link rel="stylesheet" type="text/css" href="${ctx}/common/css/register.css" />
<script language="javascript">
function loadimage(){
document.getElementById("randImage").src = "/image.jsp?"+Math.random();
}
</script>
		<script type="text/javascript">
			$(document).ready(function(){
			
	       $("#register").submit(function(){
			 var flag=$('.registrulecheck').is(':checked:');
			 var pwd = $("#password").val();
			 var repwd = $("#repassword").val();
				if(!flag){
				alert("请先确认同意用户协议！");
				return false;
				}
				if(pwd!=repwd){
					alert("确认密码与密码不一致,请重新输入");
					return false;
				}
			  
			});
			
			/**用户协议的显示与隐藏*/
			
			 $("#yonghuxieyiAnniu").click(function(){
			  $("#rullllle").toggle();
			  });
  		});
		
	
		function changeBorder(aa){
		$(aa).addClass("borderChange");
		}
		function removeBorder(aa){
		$(aa).removeClass("borderChange");
		}
	function testPlayersName(path, nodeName) {
	$('.registerTableTd').removeClass("borderChange");
	
		if ($("#username").val().length > 0 && nodeName == "name") {			
			var reg=/[ ]/;			
			if(reg.test($("#username").val())){
				alert("姓名不能包含空格,请重新输入！");
				$("#username").attr("value", "");
				return;
			}
			var data = {
				"studentBean.name" : $("#username").val()
			};
			ajaxpostAction(false, path + "/studentAction!testRegisterDataByName.do",
					data, CallBack);
		}
	}
	function CallBack(data) {
		if (data == "nameExist") {
			alert($("#username").val() + "这个姓名已存在");
			$("#username").attr("value", "");
		} else  if(data == "emptyInName"){
			alert("姓名不能包含空格,请重新输入！");
			$("#username").attr("value", "");
		}
	}
			/**
		 * ajax post请求调用
		 * @param flag 是否异步
		 * @param url  请求地址
		 * @param data json参数
		 * @param functionName 回调函数
		 * @return
		 */
		function ajaxpostAction(flag,url,data,functionName){
			$.ajax({
				async:flag,
				type:"post",
				url : url,
				data:data,
				dataType:"string",
				success : function(data) {
					return functionName(data);
				}
			});
		}
</script>

	</head>
	<body class="registerBody">
	   <%@include file="/common/header.jsp"%>
		<div class="register">
			<form id="register" action="studentAction!insertStudentOnWeb.htm"
				method="post" enctype="multipart/form-data" name="uploadForm">
				<table class="registerTable">
				<tr>
						<td align="right">
							<img src="${ctx}/common/resource/image/nickNamePic.jpg" />
						</td>
						<td>
							<input onfocus="changeBorder(this);" type="text" class="registerTableTd"
								name="studentBean.name" id="username" value=""
								 maxlength="8" vReg="V_DSNAME(2,8)" vL="姓名" onblur="checkContainsSpace()"/>
						</td>
					</tr>
					
					<tr>
						<td height="30"></td>
						<td height="30"></td>
					</tr>
					<tr>
						<td align="right">
							<img src="${ctx}/common/resource/image/passwordpic.jpg" />
						</td>
						<td>
							<input onfocus="changeBorder(this);" type="password" id="password" name="studentBean.password"
								onblur="removeBorder(this)" 
								class="registerTableTd" maxlength="12" vReg="V_PASSWORD" vL="密码" />
						</td>
						
					</tr>
					<tr>
						<td height="30"></td>
						<td height="30"></td>
					</tr>
					<tr>
						<td align="right">
							<img src="${ctx}/common/resource/image/repasswordpic.jpg" />
						</td>
						<td>
							<input onfocus="changeBorder(this);" type="password" id="repassword" name="repassword"
								onblur="removeBorder(this)" 
								class="registerTableTd" maxlength="12" vReg="V_PASSWORD" vL="确认密码" />
						</td>				
					</tr>
					<tr>
						<td height="30"></td>
						<td height="30"></td>
					</tr>
					<tr>
						<td align="right">
							<img src="${ctx}/common/resource/image/mobile.jpg" />
						</td>
						<td>
							<input onfocus="changeBorder(this);" id="mobile" name="studentBean.mobile" type="text" maxlength="12"
							onblur="removeBorder(this)" 
								value="" class="registerTableTd"
								vReg="V_MOBILE(|^$)" vL="手机号码" />

						</td>
					</tr>
					<tr>
						<td height="30"></td>
						<td height="30"></td>
					</tr>
					<!--  
					<tr>
						<td align="right">
							<img src="/resource/image/email.jpg" />
						</td>
						<td width="260" >
							<input onfocus="changeBorder(this);" type="text" class="registerTableTd" align="bottom"
								name="studentBean.loginid" id="email"
								value="" maxlength="50" vReg="V_EMEIL"
								vL="邮箱" onblur="testPlayersName('','email')" />
						</td>
					</tr>
					-->
					
					<tr>
						<td height="30"></td>
						<td height="30"></td>
					</tr>
					<tr>
						<td align="right">
							<img src="${ctx}/common/resource/image/validateCode.jpg" />&nbsp;&nbsp;
						</td>
						<td>
						
							<input onfocus="changeBorder(this);" type="text"  style="padding-top:14px;padding-bottom:14px; width:160px; height: 12px; float:left;
                   background-color: #F2F2F2;padding-left: 10px;font-size: 12px;margin:0 auto;"
							onblur="removeBorder(this)" 
								name="validateCode" id="name" value=""
								 maxlength="8" vReg="V_NUMBER(4)" vL="数字验证"/>
							<a style="display: block; margin-top:10px; float:right;width:80px; height:27px;text-decoration: none;border: none;" href="javascript:loadimage();"><img alt="code..." name="randImage" id="randImage" src="${ctx}/servlet/validateCodeServlet" width="80" height="27" border="0" align="absmiddle"></img>
						</td>
					</tr>
				</table>
				<br />
				<br />
				<input class="registrulecheck"  type="checkbox" style="vertical-align:middle; width: 14px; height: 14px; margin-left: 120px;" /><a href="aboutAction!getYonghuxieyiByIdToWeb.htm#" style="text-decoration: none; vertical-align:middle; font-size: 14px;" id="yonghuxieyiAnniu">我已阅读并同意《大思注册用户协议》</a>
				<br />
				<div class="registerRule" id="rullllle" align="left">
				<p>重要提示：广州大思教育科技发展有限公司（下称&ldquo;本公司&rdquo;）依据本协议的规定为用户提供服务，本协议在用户和本公司间具有合同法上的法律效力。本公司在此特别提醒用户认真阅读、充分理解本协议各条款，特别是其中所涉及的免除、限制本公司责任的条款、对用户权利限制条款、争议解决和法律适用等。请用户审慎阅读并选择接受或不接受本协议（未成年人应在监护人陪同下阅读）。除非用户接受本协议所有条款，否则用户无权使用本公司于本协议下所提供的服务。用户在本网站注册、登录或使用本网站服务，即表示用户完全接受本协议的全部条款，并同意接受其约束。<br />
一、定义<br />
在本协议中所使用的下列词语，除非另有定义，应具有以下含义：<br />
1.1 本网站，是指广州大思科技发展有限公司大思英语学习网站。<br />
1.2 用户，是指符合本协议所规定的条件，同意遵守本公司各种规则、条款，并使用本协议下本公司所提供服务的个人或组织。<br />
1.3 商品，是指用户在本网站提供的服务。<br />
1.4 卖家，是指利用本网站出售商品的用户。<br />
1.5 买家，是指通过本网站购买商品的用户。<br />
1.6 成交，是指买家根据卖家所发布的交易要求信息，在特定时间内提出的交易条件，买卖双方就该商品或服务交易达成一致的状态。<br />
二、用户资格<br />
2.1 符合下列条件之一的个人、组织，才能申请成为用户，才能使用本协议项下的服务：<br />
2.1.1 年满十八周岁，并具有民事权利能力和民事行为能力的自然人；<br />
2.1.2 未满十八周岁，但监护人（包括但不仅限于父母）予以书面同意的自然人；<br />
2.1.3 根据中国法律、法规成立并合法存在的公司等企业法人、事业单位、社团组织和其他组织。<br />
无民事行为能力人、限制民事行为能力人以及无经营或特定经营资格的组织不当注册为用户或超过其民事权利或行为能  力范围从事交易的，其与本公司之间的协议自始无效，本公司一经发现，有权立即注销该用户。<br />
2.2 用户必须按本网站规定办理注册手续，获得帐号及其密码。用户不得将自身帐号转让、转借给其他第三人使用，对  该帐号及其密码负保管义务，并对由此引起的纠纷、损失和法律责任担责。<br />
2.3 用户必须如实填写并及时更新有效的联系地址和联系电话，并提供真实姓名或名称。<br />
三、用户的权利和义务<br />
3.1 用户有权根据本协议的规定及本公司发布的相关规则，利用本网站交易平台登录<br />
、发布交易信息、查询商品信息、购买商品、与其他用户订立商品买卖合同、在本公司社区发帖、参加本公司的有关活动，  有权按本公司规定享受其他的有关资讯及信息服务。<br />
3.2 用户有权根据自身需要，更改自身帐号下的密码。用户不得以任何形式擅自转让或授权他人使用自己在本网站注册  的帐号。<br />
3.3 用户确保向本公司提供的注册信息等资料系真实、准确、完整、合法，该资料包括但不限于真实姓名或名称、身份  证号、联系电话、地址、邮政编码等；用户保证本公司及其他第三方可以通过上述联系方式与自己进行联系；用户也应在相  关资料实际变更时，予以及时更新。 本公司对用户提供的信息予以保密。<br />
3.4 用户在本网站交易平台发布的交易信息应真实、准确、合法、完整，并遵守本公司相关发布规则。<br />
3.5 用户不得在本网站交易平台买卖国家禁止销售的或限制销售的商品、不得买卖侵犯他人知识产权或其他合法权益的  商品，也不得买卖违背社会公共利益或公共道德的商品。交易平台应对用户及其行为、商品的合法性做基本的监管，依据本  协议及本网站相关规定对用户的违法行为及商品有权作出相应的处理。<br />
3.6 用户不得在本公司发布各类违法或违规信息，包括但不限于商品信息、交易信息、社区帖子、商品留言，店铺留言  ，评价内容等。<br />
3.7 用户在本网站上交易中应当遵守诚实信用原则，不得以干预或操纵商品价格等不正当竞争方式扰乱网上交易秩序，  不得从事与网上交易无关的不当行为。<br />
3.8 用户不应采取不正当手段（包括但不限于虚假交易、互换好评等方式）提高自身或他人信用度，或采用不正当手段恶意  诋毁其他用户，降低其他用户信用度。<br />
3.9 用户承诺自己在使用本网站交易平台实施的所有行为遵守国家法律、法规和本公司的相关规定以及社会公共利益或  公共道德。对于因违法上述规定而导致不利后果的的发生，用户独立承担相应的责任。<br />
3.10 用户在本公司网上交易过程中如与其他用户因交易产生纠纷，可以请求本公司从中予以协调。用户如发现其他用户  有违法或违反本公司相关规则的行为，可以向本公司举报。<br />
3.11 用户应自行承担因交易产生的相关费用，并依法纳税。<br />
3.12 户不得使用包括但不限于以下方式登陆或破坏本网站：<br />
3.13.1 以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其它自动方式访问或登录本网站；<br />
3.13.2 通过任何方式对本网站施以不合理或不合比例的重大负荷；<br />
3.13.3 通过任何方式干扰或试图干扰本网站正常工作；<br />
四、 本公司的权利和义务<br />
4.1 用户理解并同意：鉴于本协议下本公司所提供服务的特征，本公司不是传统意义上的&ldquo;拍卖商&rdquo;，而是仅为用户提  供一个信息交流、进行商品买卖的平台，充当买卖双方之间的交流媒介，并非买主或卖主的代理商、合伙人、雇员或雇主等  经营关系人。公布在本公司上的交易商品是用户自行上传进行交易的商品，并非本公司所有。<br />
本公司发现的可能违反国家法律法规、侵犯他人隐私等合法权益、违背市场及行业基本规律的的行为、商品、信息等，  本公司将作出相应处理。<br />
4.2 本公司有义务在现有技术水平的基础上，努力确保整个网上交易平台的正常运行，尽力避免服务中断，或应将中断  时间限制在最短时间内，保证用户网上交易活动的顺利进行。<br />
4.3 本公司有义务对用户在注册使用本网站交易平台中所遇到的问题及反映的情况及时作出回复。<br />
4.4 本公司有权对用户的注册资料进行查阅，对存在任何问题或怀疑的注册资料，本公司有权发出通知询问用户并要求  用户做出解释、改正，或根据情况，直接做出处罚、删除等处理。<br />
4.5 用户因在本公司网上交易与其他用户产生纠纷的，用户可通过仲裁、诉讼或国家法律规定的其他程序解决纠纷，应  国家权力机关依法开展调查时要求本公司提供相关资料的，本公司将积极配合并依法提供有关资料；用户将纠纷告知本公司  ，或本公司知悉纠纷情况的，本公司审核后有权通过书面、电子邮件及电话，向纠纷双方了解纠纷情况，并有权根据需要将  所了解的情况通过书面、电子邮件及电话告知对方。<br />
4.6 因网上交易平台的特殊性，本公司没有义务对所有用户的注册资料、所有的交易行为以及与交易有关的其他事项进  行事先审查，但如发生以下情形，本公司有权限制用户的活动、向用户核实有关资料、发出警告通知、暂时中止、无限期地  中止及拒绝向该用户提供服务。<br />
4.6.1 用户实施了违反本协议的行为。<br />
4.6.2 本公司发现存在明显的违反国家法律法规、侵犯他人隐私等合法权益、违背市场及行业基本规律的的行为、商品  、信息等；<br />
4.6.3存在用户或其他第三方通知本公司，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据，而本公  司通过该用户填写的联系方式无法联系到该用户进行核实，或本公司认为该用户向本公司提供的资料不够真实和完整。<br />
4.6.4存在用户或其他第三方通知本公司，认为某个用户或具体交易事项存在违法或不当行为，并提供相关证据。本公司  以普通非专业交易者的知识水平标准对相关内容进行判别，可以明显认为这些内容或行为可能对用户、本公司及第三人造成  损失的。<br />
4.7 争议交易款项处理规则：<br />
4.7.1 在反网络欺诈行动中，本着保护广大用户利益的原则，当用户举报自己交易可能存在欺诈风险而产生交易争议时  ，本网站有权通过表面判断暂时冻结相关用户账号及争议货款，并有权核对当事人身份资料及要求提供交易相关证明材料。  本网站将依据交易用户注册登记的联系方式通知被冻结账号用户，如果在本网站发出上述通知后5天内被冻结账号用户不作任  何响应，或被冻结账号用户不能提供详尽有效的资料及证明材料，交易双方在此一致授权本网站可自行判断并通知支付平台  将争议货款的全部或部分支付给交易一方或双方；<br />
4.7.2 如果本网站根据自行判断结果处理完争议货款后，交易一方对本网站的处理结果有异议，可在法定时效内向有管  辖权的人民法院起诉交易另一方。<br />
4.7.3 如果交易双方或一方已经将交易争议提交仲裁机关、公安机关、或法院寻求救济，本网站根据有效的立案通知书  或案件受理通知书暂停对争议货款的处理，并将继续冻结争议货款直至交易双方通过诉讼或仲裁等方式解决交易争议，本网  站根据有效的裁判文书或和解协议将争议货款全部或部分支付给交易一方或双方 ；<br />
4.8 根据国家法律法规、本协议的内容、本公司的相关规则，依据本公司所掌握的事实依据，可以认定用户存在违法或  违反本协议行为以及在本公司交易平台上的其他不当行为。<br />
4.9 本公司有权在不通知用户的前提下删除或采取其他限制性措施处理下列信息：包括但不限于以规避费用为目的；以  炒作信用为目的；存在欺诈等恶意或虚假内容；与网上交易无关或不是以交易为目的；存在恶意竞价或其他试图扰乱正常交  易秩序因素；该信息违反公共利益或可能严重损害本公司和其他用户合法利益的。<br />
4.10 用户因注册使用本公司服务而提供的与用户相关的信息数据，本公司应采取技术、管理措施对其充分保护。<br />
五、服务的中断和终止<br />
5.1 在本公司未向用户收取相关服务费用的情况下，本公司可自行全权决定以合理的理由 (包括但不限于本公司认为用  户已违反本协议的字面意义和精神，或用户在超过180天内未登录本公司等) 终止对用户的服务。<br />
本公司应确保系统的安全性、稳定性，确保服务的延续性。公司如需暂停或中止全部或部分服务的，应提前24小时以用  户所提供的方式中尽可能快捷的方式告知用户，确保用户及时作出相应的准备。公司应依照国家法律、法规及行业相关规定  将用户信息、商品信息、交易信息等在内的用户资料保存至一定期限。<br />
5.2 如用户向本公司提出注销本公司注册用户身份，需经本公司审核同意，由本公司注销该注册用户，用户即解除与本  公司的协议关系，但本公司仍保留下列权利：<br />
5.2.1 用户注销后，本公司有权保留该用户的资料，包括但不限于以前的用户资料、店铺资料、商品资料和交易记录等  。<br />
5.2.2 用户注销后，如用户在注销前在本公司交易平台上存在违法行为或违反本协议的行为，本公司仍可行使本协议所  规定的权利。<br />
5.3 如存在下列情况，本公司可以通过注销用户的方式终止服务：<br />
5.3.1 在用户违反本协议相关规定时，本公司有权终止向该用户提供服务。本公司将在中断服务时通知用户。但如该用  户在被本公司终止提供服务后，再一次直接或间接或以他人名义注册为用户的，本公司有权再次单方面终止为该用户提供服  务；<br />
5.3.2 一旦本公司发现用户注册资料中主要内容是虚假的，本公司有权随时终止为该用户提供服务；<br />
5.3.3 本协议终止或更新时，用户未确认新的协议的。<br />
5.3.4 其它本公司认为需终止服务的情况。<br />
5.4 因用户违反相关法律法规或者违反本协议规定等原因而致使本公司中断、终止对用户服务的，对于服务中断、终止  之前用户交易行为依下列原则处理：<br />
5.4.1 服务中断、终止之前，用户已经上传至本公司的商品尚未交易或交易尚未完成的，本公司有权在中断、终止服务  的同时删除此项商品的相关信息。<br />
5.4.2 服务中断、终止之前，用户已经就其他用户出售的具体商品做出要约，但交易尚未结束，本公司有权在中断或终止服  务的同时删除该用户的相关要约和信息。<br />
5.5 本公司若因用户的行为（包括但不限于发布的商品、在本公司社区发帖等）侵害了第三方的权利或违反了相关规定  ，而受到第三方的追偿或受到主管机关的处分时，用户应赔偿本公司因此所产生的一切损失及费用。<br />
5.6 对违反相关法律法规或者违反本协议规定，且情节严重的用户，本公司有权终止该用户使用本公司的其它服务。<br />
六、协议的修订<br />
本协议可由本公司修订，并将修订后的协议公告于本网站，修订后的条款内容自公告时起生效，并成为本协议的一部分  。公司在协议修订完成后应将协议修订后的条款以网站公告方式告知用户，用户有选择继续接受或拒绝接受修订后协议的权  利。若在本协议修改之后，用户未在一定期限内做出拒绝接受的意思表示，或仍继续使用本网站相关服务的，视为用户接受  和自愿遵守修订后的协议。<br />
七、本公司的责任范围<br />
当用户接受该协议时，用户应明确了解并同意∶<br />
7.1 用户使用本网站之风险由用户个人负担。本网站是在现有技术基础上提供的。本网站不保证以下事项∶<br />
7.1.1 本网站将符合用户的要求。<br />
7.1.2 本网站不受除基本安全、稳定以外的其他外部干扰、黑客攻击等。<br />
7.1.3 用户使用本网站服务所取得结果是完全正确或可靠的。<br />
7.1.4 用户经由本网站购买或取得的任何产品将符合用户的期望。<br />
7.2 是否经由本网站下载或取得任何资料，由用户自行考虑、衡量并且自负风险，因下载任何资料而导致非因本网站自  身缺陷导致的用户电脑系统的任何损坏或资料流失，用户应负完全责任。<br />
7.3 用户经由本网站取得的建议和资讯，无论其形式或表现，绝不构成本协议未明示规定的任何保证。<br />
7.4 本网站只是为用户提供一个交易的平台，对于用户所刊登的交易物品的合法性、真实性及其品质，以及用户履行交  易的能力等，本网站一律不负任何担保责任。<br />
7.5 本网站提供与其它互联网上的网站或资源的链接，用户可能会因此连结至其它运营商经营的网站，但不表示本网站  与这些运营商有任何关系。其它运营商经营的网站均由各经营者自行负责，不属于本网站控制及负责范围之内。对于存在或  来源于此类网站或资源的任何内容、广告、产品或其它资料，本网站亦不予保证或负责。因使用或依赖任何此类网站或资源  发布的或经由此类网站或资源获得的任何内容、物品或服务所产生的任何损害或损失，本网站不负任何直接或间接的责任。 <br />
八、知识产权<br />
8.1 本网站及本网站所使用的任何相关软件、程序、内容，包括但不限于作品、图片、档案、资料、网站构架、网站版  面的安排、网页设计、经由本网站或广告商向用户呈现的广告或资讯，均由本公司或其它权利人依法享有相应的知识产权，  包括但不限于著作权、商标权、专利权或其它专属权利等，受到相关法律的保护。未经本公司或权利人明示授权，用户保证  不修改、出租、出借、出售、散布本网站及本网站所使用的上述任何资料和资源，或根据上述资料和资源制作成任何种类物  品。<br />
8.2 本公司授予用户不可转移及非专属的使用权，使用户可以通过单机计算机使用本网站的目标代码（以下简称&quot;软件&quot;  ），但用户不得且不得允许任何第三方，复制、修改、创作衍生作品、进行还原工程、反向组译，或以其它方式破译或试图  破译源代码，或出售、转让&quot;软件&quot;或对&quot;软件&quot;进行再授权，或以其它方式移转&quot;软件&quot;之任何权利。用户同意不以任何方式修  改&quot;软件&quot;，或使用修改后的&quot;软件&quot;。<br />
8.3 用户不得经由非本网站所提供的界面使用本网站。<br />
九、不可抗力<br />
因不可抗力或者其他意外事件，使得本协议的履行不可能、不必要或者无意义的，双方均不承担责任。本合同所称之不  可抗力意指不能预见、不能避免并不能克服的客观情况，包括但不限于战争、台风、水灾、火灾、雷击或地震、罢工、暴动  、法定疾病、黑客攻击、网络病毒、电信部门技术管制、政府行为或任何其它自然或人为造成的灾难等客观情况。<br />
十、争议解决方式<br />
10.1 本协议及其修订本的有效性、履行和与本协议及其修订本效力有关的所有事宜，将受中华人民共和国法律约束，任  何争议仅适用中华人民共和国法律。 <br />
10.2 本协议签订地为本公司住所地。因本协议所引起的用户与本公司的任何纠纷或争议，首先应友好协商解决，协商不  成的，用户在此完全同意将纠纷或争议提交本公司住所地有管辖权的人民法院诉讼解决。</p>
<p>&nbsp;</p>
				</div>
				
				<div class="registerBtn" style="text-align: center;">
					<button  class="wwwBtn" type="submit"></button>
				</div>
			</form>
			<br />
			<br />
			<br />
			<br />
			<br /><br /><br /><br /><br />
		</div>
<div class="newArticleFoot">
  <%@include file="/common/footer.jsp"%>
  </div>
	<script type="text/javascript" src="${ctx}/common/js/login/register.js"></script>	
	</body>

</html>
