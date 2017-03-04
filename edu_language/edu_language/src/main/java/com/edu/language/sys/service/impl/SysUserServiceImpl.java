package com.edu.language.sys.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edu.language.base.domain.SysUser;
import com.edu.language.base.persistence.SysUserMapper;
import com.edu.language.sys.service.SysUserService;

@Service
public class SysUserServiceImpl implements SysUserService {
	@Resource
	private SysUserMapper sysUserMapper;

	@Override
	public SysUser findUser(SysUser user) {
		SysUser sysUser = sysUserMapper.findUser(user);
		return sysUser;
	}

}
