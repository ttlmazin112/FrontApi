

//테이블 만들기
var adminView = new wijmo.collections.CollectionView(url,  {
	trackChanges: true,
	  pageSize: 10,
	  pageChanged: updateCurrentPage
			
});




/*페이징 처리 시작*/
adminView.onPageChanged();

function updateCurrentPage() {
    var curr = wijmo.format('Page {index:n0} of {cnt:n0}', {
        index: adminView.pageIndex + 1,
        cnt: adminView.pageCount,
      
    });
    
    document.querySelector('#spanCurrent').textContent = curr;
}

document.querySelector('#pager').addEventListener('click',function( e ) {
    var btn = wijmo.closest(e.target, 'button'), id = btn ? btn.id : '';
    //
    switch (id) {
        case 'btnFirst':
        	adminView.moveToFirstPage();
        
            break;
        case 'btnPrev':
        	adminView.moveToPreviousPage();
        
            break;
        case 'btnNext':
        	adminView.moveToNextPage();
        	
            break;
        case 'btnLast':
        	adminView.moveToLastPage();
        	
            break;
    }
});
/*페이징 처리 끝*/

/*var dbName;
$('#dbName').on('change',function(){
	dbName =$('#dbName option:selected').val();
	
	if(dbName=='adminPgViwe'){
		$('#pgGrid').show();
		$('#oraGrid').hide();
		
	}else if(dbName=='adminOrViwe'){
		$('#oraGrid').show();
		$('#pgGrid').hide();
		
	}
})
$('#pgGrid').show();
$('#oraGrid').hide();*/

var adminView = new wijmo.grid.FlexGrid('#adminView', {
    itemsSource: adminView,     
    columns: [
    { binding: 'pk', header: 'pk' },
    { binding: 'name', header: 'name' },
    { binding: 'tableName', header: 'Table_name' },
    { binding: '비고', header: '비고' }
    ],
    //allowAddNew: true,
    //allowDelete: true,
    isReadOnly: true, //읽기만 가능, 수정, 삭제 안됨
 /*   loadedRows: function () {        	 
    	pgGrid.getColumn('table_name').header='PgAdmin'
    
    },*/  
});


/*검색기능 시작*/
//그리드 검색 박스 생성
new wijmo.grid.search.FlexGridSearch('#theSearch', {
placeholder: '검색하세요',
grid: adminView

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


var url =  wijmo.httpRequest ('http://localhost:8090/Rest/admin', { 
	 success : function (xhr) { 
		 adminView.sourceCollection  = JSON.parse (xhr.response);
		  		 			  
	 } 
});

 

