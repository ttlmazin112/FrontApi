Proj4js.defs["EPSG:5181"] = "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs";
document.write("<script src='js/Coordinates.js'></script>");
document.write("<script src='js/mouseEvent.js'></script>");



// vworld 원본지도
/*
 * vw.MapControllerOption = { container : "vmap", // 지도그릴 div영역 mapMode :
 * "2d-map", basemapType : vw.ol3.BasemapType.GRAPHIC, controlDensity :
 * vw.ol3.DensityType.EMPTY, interactionDensity : vw.ol3.DensityType.BASIC,
 * controlsAutoArrange : true, homePosition : vw.ol3.CameraPosition,
 * initPosition : vw.ol3.CameraPosition, };
 * 
 * mapController = new vw.MapController(vw.MapControllerOption);
 */
// openlayerse 로 vmap구현

/*-----------------------------------------------------------------------------*/

/* 마우스 포인트지점의 좌표 가져오기 */
/*
 * var mouseControlCoordinate = new ol.control.MousePosition({ coordinateFormat:
 * new ol.coordinate.createStringXY(4), projection: 'EPSG:4326',//좌표계 설정
 * className: 'mposition', //css 클래스 이름
 * target:$(this).attr('mouseCoordinate'),//좌표를 뿌릴 element }); });
 */
/*-----------------------------------------------------------------------------*/
/* 지도 마커, 팝업, 위치정보 */

/*-----------------------------------------------------------------------------*/
var layers = {};

layers['vworld'] = new ol.layer.Tile({
   title : 'VWorld Base Map',
   visible : true,
   type : 'base',
   source : new ol.source.XYZ({
      url : 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png' // Hybrid
   })
});
// 위성사진
layers['satellite'] = new ol.layer.Tile(
      {
    	 title : 'VWorld satellite Map', 
         visible : true,
         type : 'base',
         source : new ol.source.XYZ(
               {
                  // projection: projection,
                  // tileSize: 256,
                  minZoom : 8,
                  maxZoom : 19,
                  crossOrigin : 'Anonymous',
                  url : 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg',

               })
      });

// vectorSource 선언
var vectorSource = new ol.source.Vector({
   projection : 'EPSG:4326'
});

// vectorLayer 선언
var vectorLayer = new ol.layer.Vector({
   source : vectorSource
});

var vmap = new ol.Map({ // 지도 그리는 함수
   layers : [ layers['vworld'], vectorLayer ],
   target : 'vmap', // 지도영역 div의 id
   interactions : ol.interaction.defaults({  // 지도에 추가 된 상호 작용
      altShiftDragRotate : false, // alt + shift 드래그 회전이 필요한지 여부
      pinchRotate : false // 핀치 회전이 필요한지 여부
   }),
   // controls: new ol.control.defaults().extend([mouseControlCoordinate]),
   /*
    * layers:[ //지도기본 타일 생성 new ol.layer.Tile({ // source : new ol.source.OSM() //
    * open street Map (ol에서 제공해주는 기본지도) //url: mapController // vworld에서 참조할 지도
    * url source : new ol.source.XYZ({ // sorce 옵션 통해서 vworld 절대경로 url 참조 url :
    * 'http://xdworld.vworld.kr:8080/2d/Hybrid/202002/{z}/{x}/{y}.png' })
    *  }) ],
    */
   view : new ol.View({ // 지도의 어느부분을 보여줄 것인지 설정 (중심좌표 설정)
            center : ol.proj.fromLonLat([127.06090605383382, 37.541377286743725]), // 중심좌표 지도에 맞는 좌표계로 변환
            zoom : 14,
            minZoom : 7,
            maxZoom : 19,
         })
})

function baseChange(data) {
   if (data == "satellite") { // 위성으로 변경
      $("#base-layer").val("위성");
      $("#base-layer").attr("onclick", "baseChange('vworld')");

   } else { // 지도로 변경
      $("#base-layer").val("지도");
      $("#base-layer").attr("onclick", "baseChange('satellite')");

   }

   var layer = layers[data];
   if (layer) {
      layer.setOpacity(1);
      updateRenderEdgesOnLayer(layer);
      vmap.getLayers().setAt(0, layer);
   }
}

// 타일 변경
var updateRenderEdgesOnLayer = function(layer) {
   if (layer instanceof ol.layer.Tile) {
      var source = layer.getSource();
   }
};

/* 좌측상단 zoom (확대/축소) 버튼 숨김 */
vmap.controls.array_[0].element.style.display = 'none';

//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//여기부터 멀티라인 =================================================================================================
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
var action=true;

//FETURE -> SOURCE -> LAYER
//Feature들을 담아줄 Source
var featureSource = new ol.source.Vector({});

//Source들을 담아줄 Layer
var featureLayer = new ol.layer.Vector({
 source : featureSource
 
//여기에서 위에서 생성한 Source를 포함하여 레이어를 생성해줍니다.
});
vmap.addLayer(featureLayer); // 멀티라인,멀티폴리곤,포인트 객체 등록

$(this).attr('firstBtn').addEventListener('click', function(){
	  if (action) {		
		 
		  multiLine();
		
	    $('#firstBtn').css("backgroundColor", "#476e9e");
    	  } else {	     
    		/* remove_f(featureLayer,featureSource,'#firstBtn');*/
    		 remove_f('line','#firstBtn')
    			       		 
            }
            
         action=!action   


});
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//여기부터 멀티폴리곤2 =================================================================================================
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
var action1 = true;
/*var feature_Source = new ol.source.Vector({});
var vector_layer = new ol.layer.Vector({ // feature값 받아와서 vector_layer그려줌
	   source : feature_Source
	});
*/
$(this).attr('secondBtn').addEventListener('click', function() {
	if (action1) {
	
	 multiPolagon()
		
	 $('#secondBtn').css("backgroundColor", "#5cbf2a"); 	
	}else{			
		/* remove_f(vector_layer,feature_Source,'#secondBtn');*/
		remove_f('polygon','#secondBtn');
		 
			}
	action1=!action1;
});

//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//여기부터 포인트 =================================================================================================
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
//FETURE -> SOURCE -> LAYER
//Feature들을 담아줄 Source
var action2 = true;
/*var featureSource_p = new ol.source.Vector({});
//Source들을 담아줄 Layer
var featureLayer_p = new ol.layer.Vector({
source : featureSource_p

//여기에서 위에서 생성한 Source를 포함하여 레이어를 생성해줍니다.
});*/
$(this).attr('threeBtn').addEventListener('click', function() {
	if (action2) {
		
		 point()
		
		 $('#threeBtn').css("backgroundColor", "#6c7c7c"); 	
		  
		 }else{			
			/* remove_f(featureLayer_p,featureSource_p,'#threeBtn');*/
			 remove_f('point','#threeBtn');
			}
			action2 = !action2;
			
});

var action3 = true;

$(this).attr('allBtn').addEventListener('click', function() {
	if (action3) {
		/*  multiLine();
		  point()
		  multiPolagon()*/
		all();
			
		 $('#allBtn').css("backgroundColor", "#6c7c7c"); 	
		  
		 }else{			
			/* remove_f(featureLayer_p,featureSource_p,'#threeBtn');*/
			 remove_f('all','#allBtn');
			}
			action3 = !action3;
			
});

//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
/* 멀티라인 */

// FETURE -> SOURCE -> LAYER
// Feature들을 담아줄 Source
/*
 * var featureSource = new ol.source.Vector({});
 *  // Source들을 담아줄 Layer var featureLayer = new ol.layer.Vector({ source:
 * featureSource // 여기에서 위에서 생성한 Source를 포함하여 레이어를 생성해줍니다. });
 * 
 * var multiLineString = new ol.Feature({ geometry: new ol.geom.LineString(
 * coordinates1 ) // Multi 이기때문에 좌표들을 배열안으로 한번 더 감싸줘야 합니다. }); var style = new
 * ol.style.Style({ stroke : new ol.style.Stroke({ color : [ 0, 255, 0, .7 ],
 * width : 3 }), fill : new ol.style.Fill({ color : [ 0, 0, 255, .4 ] }) }); //
 * 스타일 정의 multiLineString.setStyle(style);
 * 
 * featureSource.addFeature(multiLineString);
 */


