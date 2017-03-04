package com.edu.language.login.controller;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.edu.language.base.domain.SysUser;
import com.edu.language.common.utils.GenerateLinkUtils;
import com.edu.language.common.utils.PropertiesUtils;
import com.edu.language.sys.service.SysUserService;

@Controller
public class loginController {
	@Resource
	private SysUserService userService;
	
	@RequestMapping("/login")
	public String login() {
		return "index/firstPage";
	}
	
	/**
	 * 
	 * Description : 根据用户名密码
	 * @param request
	 * @param response
	 * @param user
	 * @return HashMap<String, Object> map
	 */
	@RequestMapping("/checkLogin")
	@ResponseBody
	public HashMap<String, Object> checkLogin(HttpServletRequest request,    
			HttpServletResponse response,SysUser user) {
		
		HashMap<String, Object> map = new HashMap<>();
		user.setPassWord(GenerateLinkUtils.md5(user.getPassWord()));	//对密码进行加密
		SysUser sysUser = userService.findUser(user);	//根据用户名和密码查询出该用户
		
		if (sysUser == null) {	//账户不存在
			map.put("resultMessage", false);
		} else {
			map.put("resultMessage", true);
			request.getSession().setAttribute("user",sysUser); //将查询出来的用户放到session中
			request.getSession().setMaxInactiveInterval(
					Integer.valueOf(PropertiesUtils.getProperties("sessionMaxTime"))); //设置session的时限
		}
		
		return map;
	}
	
	@RequestMapping("/loginIn")
	public String loginIn(HttpServletRequest request,    
			HttpServletResponse response,SysUser user) {
		return "";
	}

}
