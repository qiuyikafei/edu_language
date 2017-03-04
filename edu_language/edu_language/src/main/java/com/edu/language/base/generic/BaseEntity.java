package com.edu.language.base.generic;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 *	日期		:	2017年3月1日
 *	作者		:	liXiu
 *	项目		:	edu_language
 *	功能		:	基本的实体类
 */
public class BaseEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id; 		//主键

	private Date createTime; 	//创建时间

	private Integer createrId; 	//创建人

	private Date updateTime; 	//更新时间

	private Integer updaterId;	//更新人

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Integer getCreaterId() {
		return createrId;
	}

	public void setCreaterId(Integer createrId) {
		this.createrId = createrId;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public Integer getUpdaterId() {
		return updaterId;
	}

	public void setUpdaterId(Integer updaterId) {
		this.updaterId = updaterId;
	}

}
