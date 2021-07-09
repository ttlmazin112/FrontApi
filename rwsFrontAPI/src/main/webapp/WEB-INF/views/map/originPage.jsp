<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>api2.0_maptest</title>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">

<!-- <link rel="stylesheet" href="ol/ol.css" type="text/css">
<link rel="stylesheet" href="css/map.css" type="text/css">
 -->
<!-- <script type="text/javascript" src="//map.vworld.kr/js/vworldMapInit.js.do?version=2.0&apiKey=767B7ADF-10BA-3D86-AB7E-02816B5B92E9"></script> -->
<script src="https://unpkg.com/elm-pep"></script>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v5.3.0/css/ol.css">
<script
	src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v5.3.0/build/ol.js"></script>

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="resources/css/btncss.css">

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>

<script type="text/javascript" src="proj4js/lib/proj4js-combined.js"></script>

</head>
<body>

<div id="vmap">
	<div id="btns">
	<input id="base-layer" class="base-layer" type="button" value="지도" onclick="baseChange('satellite')"> 
	<input type="button"  id="firstBtn" class="firstBtn" value="멀티라인">
	<input type="button"  id="secondBtn" class="secondBtn" value="멀티폴리곤">
	<input type="button"  id="threeBtn" class="threeBtn" value="포인트">
	<input type="button"  id="allBtn" class="allBtn" value="ALL">

	</div>	
	
</div>
<div style="display: none;">
<!--       Clickable label for Vienna
  <a class="overlay" id="vienna" target="_blank" href="http://en.wikipedia.org/wiki/Vienna">Vienna</a>
  <div id="marker" title="Marker"></div> -->
      <!-- Popup -->
  <div id="popup" title="Welcome to OpenLayers"></div>
</div>


<!-- poin등 그리기 옵션 -->
<!-- 	   <form class="form-inline">
      <label for="type">Geometry type: &nbsp;</label>
      <select class="form-control mr-2 mb-2 mt-2" id="type">
        <option value="Point">Point</option>
        <option value="LineString">LineString</option>
        <option value="Polygon">Polygon</option>
        <option value="Circle">Circle</option>
        <option value="None">None</option>
      </select>
      <input class="form-control mr-2 mb-2 mt-2" type="button" value="Undo" id="undo">
    </form> 


<!-- <div id="mouseCoordinate" ></div> -->


</body>
<script src = "resources/js/map.js"></script>

<!-- <script src = "js/mouseEvent.js"></script>
<script src = "js/Coordinates.js"></script> -->
</html>