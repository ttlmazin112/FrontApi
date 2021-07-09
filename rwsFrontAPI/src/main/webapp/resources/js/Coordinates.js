function multiLine(){
	
$.ajax({
	url : 'http://localhost:8090/Rest/getMultiLine',
	data : {},
	datatype : 'JSON',
	success : function(r) {
		$.grep(r, function(e) {
			var id = e.sngid;
			var multyLineData = [];				 
				$.grep(e._geometry.geom.subgeoms[0].subgeoms, function(ee) {						
					/*var source = new Proj4js.Proj("EPSG:5181"); // 중부원점
					var dest = new Proj4js.Proj("EPSG:900913");
					var p = new Proj4js.Point([ ee.x, ee.y ]);
					var pvalue = Proj4js.transform(source, dest, p);*/
						multyLineData.push([ ee.x, ee.y ]);												 
						});

					var multyLine_feature = new ol.Feature({
						geometry : new ol.geom.LineString(multyLineData),
						name : '멀티라인',
						id:id
						// Multi 이기때문에 좌표들을 배열안으로 한번 더 감싸줘야 합니다.
						});
						//console.log(multyLine_feature)
					var style = [ new ol.style.Style({
						stroke : new ol.style.Stroke({
						color : '#3a02f0',
						width : 4
							}),
						zIndex : 2
						}) ]; // 스타일 정의
						multyLine_feature.name='멀티라인';
						multyLine_feature.line='line';
						//multyLine_feature.all='all';
						multyLine_feature.setStyle(style);

						featureSource.addFeature(multyLine_feature);
						// vmap.addLayer(featureLayer); // 멀티라인 객체 등록

					});

		},
	});

}

function multiPolagon(){

 $.ajax({
  url:"http://localhost:8090/Rest/getMultiPoly",
  data:{}, // gridData에 담아둔 저장된 데이터 내용 모두 list변수에 담아서 주고받기
  datatype: 'json',
  success:function(r){	   		
	  $.grep(r, function(e){
          var id = e.gid;
           var coordinates = [];
              // 좌표 설정 변수
               $.grep(e._geometry.geom.subgeoms[0].subgeoms[0].subgeoms, function(ee) {
                  var source = new Proj4js.Proj("EPSG:5181"); // 중부원점
                  var dest = new Proj4js.Proj("EPSG:900913");
                  var p = new Proj4js.Point([ ee.x, ee.y]);	             
                  var pvalue = Proj4js.transform(source, dest, p);	                 
                  coordinates.push([ pvalue.x, pvalue.y]);
               
               });   
              
               var polygon_feature = new ol.Feature({ // polygon_feature 생성
		    		   geometry : new ol.geom.Polygon([coordinates]), //좌표값 coordinates를 feature에 담아줌
		    		   name : '폴리곤',
		    		   id:id
		    		}); 
              
		   		var style = [new ol.style.Style({ // polygon 스타일 정의
				   stroke : new ol.style.Stroke({
				      color : [ 0, 255, 0, .7 ],
				      width : 3
				   }),
				   fill : new ol.style.Fill({
				      color : [ 0, 0, 255, .4 ]
				   })
		    	})];
		    	polygon_feature.setStyle(style); // 정의한 스타일을 적용 	
		    	polygon_feature.setId(id);
		    	polygon_feature.name='폴리곤';
		    	polygon_feature.line='polygon'
		        //polygon_feature.all='all'
		    	featureSource.addFeature(polygon_feature);	
		    	
		    	
	   		});
	   	/*	vmap.addLayer(vector_layer); // 폴리곤 객체 등록
*/	   	},	   	
	   	error:function(request,status,error){
	        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	   	}
	});
}

function point(){
	$.ajax({
	    url : 'http://localhost:8090/Rest/getPoint',
	    data : {},
	    datatype : 'JSON',
	    success : function(r) { 
	    		    	
	  	  $.grep(r, function(e) {
	  		  
	  		var id = e.sngid;	         
	        var pointData = [];
	        
	          var geom = e._geometry.geom;      
	             pointData.push(geom.x, geom.y);
	         
	            var point_feature = new ol.Feature({
	             geometry : new ol.geom.Point(pointData),
	             name : '포인트',
	             id : id
	          });
	         // console.log(pointData)
	          var style = [ new ol.style.Style({
	        	  image: new ol.style.Icon({
	        	      color: '#BADA55',
	        	      crossOrigin: 'anonymous',
	        	      scale: 0.5,
	        	      src:'https://openlayers.org/en/latest/examples/data/dot.svg',
	        	    }),
	             
	             zIndex : 2
	          }) ]; // 스타일 정의
	          point_feature.name='포인트';
	          point_feature.line='point'
	        //point_feature.all='all'	  
	          point_feature.setStyle(style);
	          featureSource.addFeature(point_feature);
	          
	  	  });
	  	/* vmap.addLayer(featureLayer_p); */	 
 },

});
}

function all(){
	$.ajax({
		url : 'http://localhost:8090/Rest/getMultiLine',
		data : {},
		datatype : 'JSON',
		success : function(r) {
			$.grep(r, function(e) {
				var id = e.sngid;
				var multyLineData = [];				 
					$.grep(e._geometry.geom.subgeoms[0].subgeoms, function(ee) {						
						/*var source = new Proj4js.Proj("EPSG:5181"); // 중부원점
						var dest = new Proj4js.Proj("EPSG:900913");
						var p = new Proj4js.Point([ ee.x, ee.y ]);
						var pvalue = Proj4js.transform(source, dest, p);*/
							multyLineData.push([ ee.x, ee.y ]);												 
							});

						var multyLine_feature1 = new ol.Feature({
							geometry : new ol.geom.LineString(multyLineData)
							// Multi 이기때문에 좌표들을 배열안으로 한번 더 감싸줘야 합니다.
							});
							//console.log(multyLine_feature)
						var style = [ new ol.style.Style({
							stroke : new ol.style.Stroke({
							color : '#3a02f0',
							width : 4
								}),
							zIndex : 2
							}) ]; // 스타일 정의
						
							multyLine_feature1.all='all';
							multyLine_feature1.setStyle(style);

							featureSource.addFeature(multyLine_feature1);
							// vmap.addLayer(featureLayer); // 멀티라인 객체 등록

						});

			},
		});
	$.ajax({
		  url:"http://localhost:8090/Rest/getMultiPoly",
		  data:{}, // gridData에 담아둔 저장된 데이터 내용 모두 list변수에 담아서 주고받기
		  datatype: 'json',
		  success:function(r){	   		
			  $.grep(r, function(e){
		          var id = e.gid;
		           var coordinates = [];
		              // 좌표 설정 변수
		               $.grep(e._geometry.geom.subgeoms[0].subgeoms[0].subgeoms, function(ee) {
		                  var source = new Proj4js.Proj("EPSG:5181"); // 중부원점
		                  var dest = new Proj4js.Proj("EPSG:900913");
		                  var p = new Proj4js.Point([ ee.x, ee.y]);	             
		                  var pvalue = Proj4js.transform(source, dest, p);	                 
		                  coordinates.push([ pvalue.x, pvalue.y]);
		               
		               });   
		              
		               var polygon_feature1 = new ol.Feature({ // polygon_feature 생성
				    		   geometry : new ol.geom.Polygon([coordinates])//좌표값 coordinates를 feature에 담아줌

				    		}); 
		              
				   		var style = [new ol.style.Style({ // polygon 스타일 정의
						   stroke : new ol.style.Stroke({
						      color : [ 0, 255, 0, .7 ],
						      width : 3
						   }),
						   fill : new ol.style.Fill({
						      color : [ 0, 0, 255, .4 ]
						   })
				    	})];
				    	polygon_feature1.setStyle(style); // 정의한 스타일을 적용 	
				    	//polygon_feature1.setId(id);
				    	
				    		polygon_feature1.all='all'
				    	featureSource.addFeature(polygon_feature1);	
				    	
				    	
			   		});
			   	/*	vmap.addLayer(vector_layer); // 폴리곤 객체 등록
		*/	   	},	   	
			   	error:function(request,status,error){
			        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			   	}
			});
	$.ajax({
	    url : 'http://localhost:8090/Rest/getPoint',
	    data : {},
	    datatype : 'JSON',
	    success : function(r) { 
	    		    	
	  	  $.grep(r, function(e) {
	  		  
	  		var id = e.sngid;
	         
	          var pointData = [];
	        
	          var geom = e._geometry.geom;      
	             pointData.push(geom.x, geom.y);
	         
	            var point_feature1 = new ol.Feature({
	             geometry : new ol.geom.Point(pointData)
	          });
	         // console.log(pointData)
	          var style = [ new ol.style.Style({
	        	  image: new ol.style.Icon({
	        	      color: '#BADA55',
	        	      crossOrigin: 'anonymous',
	        	      scale: 0.5,
	        	      src:'https://openlayers.org/en/latest/examples/data/dot.svg',
	        	    }),
	             
	             zIndex : 2
	          }) ]; // 스타일 정의
	         
	          point_feature1.all='all'	  
	          point_feature1.setStyle(style);
	          featureSource.addFeature(point_feature1);
	          
	  	  });
	  	/* vmap.addLayer(featureLayer_p); */	 
 },

});
	
	
}



/*function remove_f(layer,source,btn){
	//console.log(layer.getSource().getFeatures());
	$.grep(layer.getSource().getFeatures(), function(e) {			
		 source.removeFeature(e);		
		 vmap.removeLayer(layer);
	});
	 $(btn).css("backgroundColor", "transparent")
	//vmap.getLayers().array_[2].getSource().clear()
	//vmap.removeLayer(featureLayer);	
}*/
function remove_f(line,btn){
var Features =featureLayer.getSource().getFeatures();

	$.grep(Features, function(even) {
		if(even.line==line){ // featur 생성 시에 name을 추가하여 get으로 불러낸다. 
			
		featureSource.removeFeature(even);
			
		}else if(even.all==line){
			featureSource.removeFeature(even);
		}
	});
	 $(btn).css("backgroundColor", "transparent")
	//vmap.getLayers().array_[2].getSource().clear()
	//vmap.removeLayer(featureLayer);	
}


/*$.ajax({
    url : 'http://localhost:8090/Rest/getMultiLine',
    data : {},
    datatype : 'JSON',
	
    success : function(r) {      	 
       $.grep(r, function(e) {	            		                
          var id = e.sngid;
         
          var multyLineData = [];
          $.grep(e[0], function(ee) {
       	 var xy=ee; 
             multyLineData.push([ xy[0], xy[1]]);               
          });   
          
          var multyLine_feature = new ol.Feature({
             geometry : new ol.geom.LineString(multyLineData)
          // Multi 이기때문에 좌표들을 배열안으로 한번 더 감싸줘야 합니다.
          });
          
        
          var style = [ new ol.style.Style({
             stroke : new ol.style.Stroke({
                color : '#3a02f0',
                width : 4
             }),
             zIndex : 2
          }) ]; // 스타일 정의
          multyLine_feature.setStyle(style);
         
          
          featureSource.addFeature(multyLine_feature);
      
         // featureSource.removeFeature(multyLine_feature);
          //vmap.getLayers().array_[2].getSource().removeFeature(multyLine_feature)       
          
          
       });
      
    
                   
    },
 
 });*/