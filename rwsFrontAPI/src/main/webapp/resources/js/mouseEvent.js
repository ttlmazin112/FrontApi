
vmap.on('pointermove', function(event){
	
	 if (event.dragging) { // 커서이벤트가 발생해야 하는 위치인지 true,false 확인
		
		    return;
		  }
		  var pixel = vmap.getEventPixel(event.originalEvent);
		  var feature = vmap.hasFeatureAtPixel(pixel); //true,false
		  
		  vmap.getTargetElement().style.cursor = feature ? 'pointer' : '';
		
});
/*var pos =  ol.proj.fromLonLat([127.06090605383382, 37.541377286743725]);*/
var popup = new ol.Overlay({
	element :$(this).attr('popup')
});
vmap.addOverlay(popup);
/*var marker = new ol.Overlay({
	position : pos,
	positioning : 'center-center',
	element : $(this).attr('marker'), 
	stopEvent : false,
});
vmap.addOverlay(marker);

var vienna = new ol.Overlay({
	position : pos,
	element :  $(this).attr('vienna'),
});
vmap.addOverlay(vienna);*/

vmap.on('click', function(evt) {
	console.log(evt)
	var name;
	var id ;
	vmap.forEachFeatureAtPixel(evt.pixel, function(feature) { //feature의 속성을 가지고 와서 id값 추출
		//console.log(feature)
		name= feature.get('name');
		 id = feature.get('id');		
	});
	var ft= vmap.getEventPixel(evt.originalEvent);
	var feature = vmap.hasFeatureAtPixel(ft); // 그려진 feature위에 있는지 true, false로 판단.
	
	var element = popup.element;
	var coordinate = evt.coordinate;

	// var hdms =ol.coordinate.tostringhdms(ol.proj.transform(coordinate,'EPSG: 900913', 'EPSG: 4326'));
	var hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
	$(element).popover('dispose');
	popup.setPosition(coordinate);
	$(element).popover({
		
		container : element,
		placement : 'top',
		animation : false,
		html : true,
		content : '<p>좌표</p><code>' + hdms + '</code>'+'<p>ID</p><code>'+ id+'('+name+')'+'</code>',
	});
 vmap.getTargetElement().style.cursor = feature ? $(element).popover('show') : $(element).popover('hide');
})


/*------------------------------------------------------------------------*/
/* 포인트 그리기 */

/*  var source = new ol.source.Vector({wrapX: false});
  
  var vector = new ol.layer.Vector({ source: source, });
  
  var typeSelect = document.getElementById('type');
  
  var draw ; // global so we can remove it later function addInteraction() {
  var value = typeSelect.value; if (value !== 'None') { draw = new
  ol.interaction.Draw({ source: source, type: typeSelect.value, });
  vmap.addInteraction(draw); } 
  

     Handle change event.
    

  typeSelect.onchange = function () { vmap.removeInteraction(draw);
  addInteraction(); };
  
  document.getElementById('undo').addEventListener('click', function () {
  draw.removeLastPoint(); });
  
  addInteraction();
 
/*-----------------------------------------------------------------------------*/
