(function($){

    $.fn.dataGrid = function(options){

        var settings = $.extend({
            colWidth:'120px',
            headers : [],
            data:[]
        },options);

        return this.each(function(){
            var grid = $(this);
            var gridHeader = $('<div>');
            if(settings.headers.length>0){
                gridHeader.addClass('grid-header');

                    for(h in settings.headers){
                        var header = settings.headers[h];
                        
                        var colContent = $('<span>');
                        var colSortable = null;
                        var headerCol = $('<div>');
                        if(header.sortable != undefined && header.sortable == true){
                            colSortable = $('<span>');
                            colSortable.html("&#9660;");
                        }
                        
                        headerCol.append(colContent.text(header.caption))
                                 .append(colSortable);
                        headerCol.addClass('gh-col').css('width',settings.colWidth);
                        gridHeader.append(headerCol);
                    }

                    
                    
                
                grid.append(gridHeader);
            }

            var rowContainer = $('<div>');
            rowContainer.addClass('row-container');

            rowContainer.width((settings.colWidth*settings.headers.length));
            if(settings.data.length>0){
                
                for(d in settings.data){
                    var gridRow = $('<div>');
                    var data = settings.data[d];
                    gridRow.addClass('grid-row');
                    if(d==0){

                    }
                    if(data.length > 0){
                        for(d in data){
                            var r = data[d];
                            var grCol = $('<div>');
                            grCol.addClass('gr-col').css('width',settings.colWidth);
                            grCol.text(r);
                            gridRow.append(grCol);
                        }
                    }

                    
                    rowContainer.append(gridRow);
                }
                grid.append(rowContainer);
            }
        });

        

    };

}(jQuery));