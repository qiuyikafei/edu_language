package com.edu.language.base.persistence;

import com.edu.language.base.domain.SysUser;

public interface SysUserMapper {
	//查找用户
	SysUser findUser(SysUser user);
}
