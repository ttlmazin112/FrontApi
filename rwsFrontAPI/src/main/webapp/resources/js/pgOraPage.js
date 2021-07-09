

//테이블 만들기
var pgView = new wijmo.collections.CollectionView(url,  {
	trackChanges: true,
	  pageSize: 10,
	  pageChanged: updateCurrentPage
			
});


/*페이징 처리 시작*/
pgView.onPageChanged();

function updateCurrentPage() {
    var curr = wijmo.format('Page {index:n0} of {cnt:n0}', {
        index: pgView.pageIndex + 1,    
        cnt: pgView.pageCount,
    
    });
    
    document.querySelector('#spanCurrent').textContent = curr;
}

document.querySelector('#pager').addEventListener('click',function( e ) {
    var btn = wijmo.closest(e.target, 'button'), id = btn ? btn.id : '';
    //
    switch (id) {
        case 'btnFirst':
        	pgView.moveToFirstPage();
        	
            break;
        case 'btnPrev':
        	pgView.moveToPreviousPage();
        	
            break;
        case 'btnNext':
        	pgView.moveToNextPage();
        
            break;
        case 'btnLast':
        	pgView.moveToLastPage();
        	
            break;
    }
});
/*페이징 처리 끝*/

var dbName;
$('#dbName').on('change',function(){
	dbName =$('#dbName option:selected').val();
	
	if(dbName=='PgAdmin'){
	alert('aa')	
		
	}else if(dbName=='Oracle'){
		alert('bb')	
		
	}
})


var pgGrid = new wijmo.grid.FlexGrid('#pgGrid', {
    itemsSource: pgView,    
   
/*       columns: [
    { binding: 'pk', header: 'pk' },
    { binding: 'name', header: 'name' },
    { binding: 'table_name', header: 'Table_name' },
    { binding: '비고', header: '비고' }
    ],*/
    //allowAddNew: true,
    //allowDelete: true,
    isReadOnly: true, //읽기만 가능, 수정, 삭제 안됨
/*    loadedRows: function () {        	 
    	pgGrid.getColumn('table_name').header='PgAdmin'
    
    }, */ 
});


/*검색기능 시작*/
//그리드 검색 박스 생성
new wijmo.grid.search.FlexGridSearch('#theSearch', {
placeholder: '검색하세요',
grid: pgGrid,

});
//필터를 적용할 때 현재 필터링된 아이템 수 표시
//updateItemCount();
/*theGrid.collectionView.collectionChanged.addHandler(function() {
updateItemCount();
});*/
/*function updateItemCount() {
var cnt = theGrid.collectionView.items.length;
document.getElementById('item-count').textContent = wijmo.Globalize.format(cnt, 'n0');
}*/

/*검색기능 끝*/
var selector = new wijmo.grid.selector.Selector(pgGrid, {
   
  });

var url =  wijmo.httpRequest ('http://localhost:8090/Rest/adminPgViwe', { 
	 success : function (xhr) { 
		 pgView.sourceCollection  = JSON.parse (xhr.response);
		  		 			  
	 } 
}); 

$('a').remove();

$(this).attr('EnrollmentBtn').addEventListener('click', function() {
	var data=[];
	 $('input[type="checkbox"]:checked').each(function (i) {
		
			
				data.push({tableName:pgGrid.selectedItems[i].tableName});
				   
	    });
	 console.log(data)
     $.ajax({
     	type:"GET",
     	url:"http://localhost:8090/Rest/admin",
     	data: {list:JSON.stringify(data)},
     	dataType:'JSON',
     	success:function(data){
     		console.log('success!!!'+data)           		 
     	}, 
     	error:function(){
     		alert('Error while request...');
     	}         	
     })	
			
});

