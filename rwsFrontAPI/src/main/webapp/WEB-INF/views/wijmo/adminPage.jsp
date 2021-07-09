<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>adminPage</title>
<!-- Wijmo 레퍼런스 (필수) -->
<link
  href="https://cdn.grapecity.com/wijmo/5.latest/styles/wijmo.min.css"
  rel="stylesheet"
/>

<script src="https://cdn.grapecity.com/wijmo/5.latest/controls/wijmo.min.js"></script>

<!-- Wijmo 컨트롤 (옵션, 필요한 컨트롤 만 추가) -->
<script src="https://cdn.grapecity.com/wijmo/5.latest/controls/wijmo.grid.min.js"></script>
<script src="https://cdn.grapecity.com/wijmo/5.latest/controls/wijmo.input.min.js"></script>

<!-- Wijmo custom culture (옵션, 원하는 문화권을 추가) -->
<script src="https://cdn.grapecity.com/wijmo/5.latest/controls/cultures/wijmo.culture.ko.min.js"></script>
<script src="https://cdn.grapecity.com/wijmo/5.latest/controls/wijmo.grid.search.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="resources/css/adminPage.css">



</head>
<body>

<div id="adminView"></div>

<div id="pager">
 	<button id="btnFirst" class="btn">
		<span class="wj-glyph-step-backward"></span>
	</button>
	<button id="btnPrev" class="btn">
		<span class="wj-glyph-left"></span>
	</button>
		<span id="spanCurrent"></span>
	<button id="btnNext" class="btn">
		<span class="wj-glyph-right"></span>
	</button>
	<button id="btnLast" class="btn">
		<span class="wj-glyph-step-forward"></span>
	</button>
	  <div id="theSearch"></div>
<!-- 	<p>
    현재 총 테이블 수는 <b><span id="item-count"></span></b>개 입니다.
  </p> -->

	</div>


</body>
 <script src="resources/js/adminPage.js"></script>
 
</html>