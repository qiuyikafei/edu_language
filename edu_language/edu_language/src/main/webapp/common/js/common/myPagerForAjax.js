
/**
 * 点击上一页、下一页以及中间的数字也时触发
 * @param {Object} url 跳转地址，Page标签自带${pageUrl}
 * @param {Object} containerId 要装住返回回来的页面的容器ID，
 */
function queryPageUpOrNextForAjax(url,containerId){
	var param = null
	var rFun = function($html) {
		$("#"+containerId).html($html);
	};
	$.post(url, param, rFun);
}
function queryPageUpOrNextByMyPager(pager,url,containerId){
	if(url != undefined && url != null)
		url = url.toString().replace("pager.offset",pager+".offset")
	queryPageUpOrNextForAjax(url,containerId);
}

/**
 * 点击确定，跳转到某一页时触发
 * @param {Object} path 跳转路径
 * @param {Object} total 总条数，在Action中获取${totalCount}
 * @param {Object} pager 总页数，在Action中获取${totalPage}
 * @param {Object} returnPageId 输入跳转页数框(input)的ID，当前页面必须唯一
 * @param {Object} maxPageItems 每页显示的条数
 * @param {Object} containerId 要装住返回回来的页面的容器ID，
 * @return {TypeName} 
 */
function queryReturnPagerForAjax(path,total,pager,returnPageId,containerId,maxPageItems){
	var offset = document.getElementById(returnPageId).value;
	var reg = /^[1-9]([0-9]+)?$/;
	if(!reg.test(offset)){
		alert("页数只能输入整数!")
		return false;
	}

	if(parseInt(pager) >= parseInt(offset)){
		offset = (offset - 1)*maxPageItems;
		path.toString().indexOf("?")>=0?param="&":param="?";
		var url = path + param + "totalCount=" + total + "&pager.offset=" + offset;
		queryPageUpOrNextForAjax(url,containerId);
	}else{
		alert("此页大于总页数,不能跳到此页!")
	}
}
function queryReturnPagerByMyPager(path,total,pager,returnPageId,containerId,maxPageItems,pagerObj,totalObj){
	var offset = document.getElementById(returnPageId).value;
	var reg = /^[1-9]([0-9]+)?$/;
	if(!reg.test(offset)){
		alert("页数只能输入整数!")
		return false;
	}

	if(parseInt(pager) >= parseInt(offset)){
		offset = (offset - 1)*maxPageItems;
		path.toString().indexOf("?")>=0?param="&":param="?";
		var url = path + param + totalObj + "=" + total + "&"+pagerObj+".offset=" + offset;
		queryPageUpOrNextForAjax(url,containerId);
	}else{
		alert("此页大于总页数,不能跳到此页!")
	}
}

/**
 * 回车事件
 * @param {Object} evt event对象
 * @param {Object} r 当前输入跳转页码框this
 * @param {Object} path 跳转路径
 * @param {Object} total 总条数，在Action中获取${totalCount}
 * @param {Object} pager 总页数，在Action中获取${totalPage}
 * @param {Object} maxPageItems 每页显示的条数
 * @param {Object} containerId 要装住返回回来的页面的容器ID，
 * @return {TypeName} 
 */
function returnPageIdKeyPress(evt,r,path,total,pager,maxPageItems,containerId){
	evt = (evt) ? evt : ((window.event) ? window.event : "") //兼容IE和Firefox获得keyBoardEvent对象
	var key = evt.keyCode?evt.keyCode:evt.which; //兼容IE和Firefox获得keyBoardEvent对象的键值
	if(key == 13){		
		queryReturnPagerForAjax(path,total,pager,r.id,containerId,maxPageItems);
	}
	else{
		return void(0);
	}
}
function returnPageIdKeyPressByMyPager(evt,r,path,total,pager,maxPageItems,containerId,pagerObj,totalObj){
	evt = (evt) ? evt : ((window.event) ? window.event : "") //兼容IE和Firefox获得keyBoardEvent对象
	var key = evt.keyCode?evt.keyCode:evt.which; //兼容IE和Firefox获得keyBoardEvent对象的键值
	if(key == 13){		
		queryReturnPagerByMyPager(path,total,pager,r.id,containerId,maxPageItems,pagerObj,totalObj);
	}
	else{
		return void(0);
	}
}

/**
 * 异步搜索
 * @param {Object} r 当前节点对象
 * @param {Object} boxId 包囊搜索结果的容器ID
 * @param {Object} url	请求数据路径 不能为空
 * @param {Object} param 请求数据参数	null时，默认是该包含 r 的Form的序列话
 * @param {Object} rFun	请求数据回调函数 null是，用boxId包囊
 */
function querySearchForAjax(r,boxId,url,param,rFun){
	if(rFun==null || rFun == undefined){
		rFun = function($html){
			$("#"+boxId).html($html);
		}
	}
	if(param == null || param == undefined){
		param = $(r).parents("form").serialize();
	}
	if(url == null || url == undefined){
		var act = $(r).parents("form")[0].action;
		if(act != null && act != undefined && act != ''){
			url = act;
		}else{
			alert("异步搜索!请求数据路径不能为空!");
			return;
		}
	}
	$.post(url, param, rFun);
}

/**
 * 异步提交表单
 * @param {Object} r  当前节点对象
 * @param {Object} url  请求数据路径 不能为空
 * @param {Object} param 请求数据参数	null时，默认是该包含 r 的Form的序列话
 * @param {Object} rFun  请求数据回调函数 null时，只提示成功或失败!
 * @return {TypeName} 
 */
function submitMyFormForAjax(r,url,param,rFun){
	var frm = $(r).parents("form");
	if(cValidate(frm)){
		if(rFun==null || rFun == undefined){
			rFun = function(ex){
				if(ex.b){
					
				}
				alert(ex.result);
			}
		}
		
		if(param == null || param == undefined){
			param = frm.serialize();
		}
		
		if(url == null || url == undefined){
			var act = $(r).parents("form")[0].action;
			if(act != null && act != undefined && act != ''){
				url = act;
			}else{
				alert("异步提交表单!请求数据路径不能为空!");
				return;
			}
		}
		_myAjax(url,param,rFun);
	}
}
/**
 * 回车异步搜索或提交表单
 * @param {Object} evt
 * @param {Object} r 当前节点对象
 * @param {Object} boxId 包囊搜索结果的容器ID 搜索时用，提交时为null
 * @param {Object} url	请求数据路径 不能为空
 * @param {Object} param 请求数据参数	null时，默认是该包含 r 的Form的序列话
 * @param {Object} rFun	请求数据回调函数 null是，用boxId包囊
 * @param {Object} type	回车事件类型（type='submit'时提交表单，type='search'时搜索）
 * @return {TypeName} 
 */
function subOrSearchOnKeyPress(evt,r,boxId,type,url,param,rFun){
	evt = (evt) ? evt : ((window.event) ? window.event : "") //兼容IE和Firefox获得keyBoardEvent对象
	var key = evt.keyCode?evt.keyCode:evt.which; //兼容IE和Firefox获得keyBoardEvent对象的键值
	if(key == 13){		
		if(type == 'submit'){
			submitMyFormForAjax(r,url,param,rFun);
		}else if(type == 'search'){
			querySearchForAjax(r,boxId,url,param,rFun);
		}
	}
	else{
		return void(0);
	}
}
