<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+"/";%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<c:set var="ctxCommon" value="${pageContext.request.contextPath}/common"/>
<c:set var="basePath" value="<%=basePath%>"/>