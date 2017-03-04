package com.edu.language.base.domain;

import java.io.Serializable;

import com.edu.language.base.generic.BaseEntity;
/**
 * 
 *	日期		:	2017年3月1日
 *	作者		:	liXiu
 *	项目		:	edu_language
 *	功能		:	用户管理实体类
 */
public class SysUser extends BaseEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String userName; //用户名
	private String passWord; //密码
	private String phone; 	 //电话
	private String address;	 //地址
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassWord() {
		return passWord;
	}
	
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
}
