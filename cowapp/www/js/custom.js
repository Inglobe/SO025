
          var oTable;
          var giRedraw = false;

          $(document).ready(function() {
            $('#activelist').dataTable( {
                    "sScrollY": "150px",
                    "bPaginate": false,
                    "bInfo": false             
                } );
            /* Add a click handler to the rows - this could be used as a callback */
            $("#activelist tbody").click(function(event) {
              $(oTable.fnSettings().aoData).each(function (){
                $(this.nTr).removeClass('row_selected');
              });
              $(event.target.parentNode).addClass('row_selected');
            });
            
            /* Add a click handler for the delete row */
            $('#delete').click( function() {
              var anSelected = fnGetSelected( oTable );
              oTable.fnDeleteRow( anSelected[0] );
            } );
            
            /* Init the table */
            oTable = $('#activelist').dataTable( );
          } );

          $(document).ready(function() {
            $('#activeb').dataTable( {
                    
                    "bPaginate": false,
                    "bFilter": false,
                    "bInfo": false             
                } );
            /* Add a click handler to the rows - this could be used as a callback */
            $("#activeb tbody").click(function(event) {
              $(oTable.fnSettings().aoData).each(function (){
                $(this.nTr).removeClass('row_selected');
              });
              $(event.target.parentNode).addClass('row_selected');
            });
            
            /* Add a click handler for the delete row */
            $('#delete').click( function() {
              var anSelected = fnGetSelected( oTable );
              oTable.fnDeleteRow( anSelected[0] );
            } );
            
            /* Init the table */
            oTable = $('#activeb').dataTable( );
          } );


          /* Get the rows which are currently selected */
          function fnGetSelected( oTableLocal )
          {
            var aReturn = new Array();
            var aTrs = oTableLocal.fnGetNodes();
            
            for ( var i=0 ; i<aTrs.length ; i++ )
            {
              if ( $(aTrs[i]).hasClass('row_selected') )
              {
                aReturn.push( aTrs[i] );
              }
            }
            return aReturn;
          }