package com.edu.language.sys.service;

import com.edu.language.base.domain.SysUser;

public interface SysUserService {
	//根据用户信息 查询某一用户对象
	SysUser findUser(SysUser user);
}
