(function ($) {
    "use strict";
 
    ///////////////////////////////////////////////////// Your
    // var venueAddress = "Grand Place, 1000, Brussels"; // Venue

    
    /////////////////////////////////////////////////// Adress
 
    var fn = {
 
        // Launch Functions
        Launch: function () {
            fn.MainRtuDataTable();
            fn.Apps();
        },
        // Main RTU DataTable
        MainRtuDataTable: function () {
    // console.log('MainRtuDataTable');

    //------------------------ mainRtuDataTable -----------------------//
    if (jQuery().dataTable) {

        mainRtuDataTable = $('#mainRtuDataTable').DataTable( {
            // "processing": true,
            // "ajax": {
            //     "url": "../../../../api/rtuManager/listRTUFromBranch/",
            //     "type": "GET",
            //     "dataSrc": "rows",
            //     // "success": function(data) {
            //     //     console.log(data);
            //     // },
            //     "error": function(jqXHR, textStatus, errorThrown){
            //         // alert('init error: ' + textStatus);
            //         var url = '../../../Login/';
            //         $(location).attr('href',url);
            //     }
            // },
            "aLengthMenu": [
                    [5, 10, 15, 25, 50, 100, -1],
                    [5, 10, 15, 25, 50, 100, "All"]
                ],
            "iDisplayLength": 10,
            "oLanguage": {
                    "sLengthMenu": "_MENU_ Records per page",
                    "sInfo": "_START_ - _END_ of _TOTAL_",
                    "sInfoEmpty": "0 - 0 of 0",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
            },
            "aoColumnDefs": [],
            "order" : [] //disable default sorting, eg sorting on 1st column
            
        });

    }

},


        // Logout
        Logout: function () {
	// console.log('Logout');

      $.ajax({
        url: '../../../../../api/loginManager/logout/',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        cache: false,
        //async: false,
        success: function(data) {
            //console.log(data);

            //window.location.href = '../Admin/';
            var url = '../../../../Login/';
            $(location).attr('href',url);

            //console.log(window.location.pathname);

        },
        error: function(jqXHR, textStatus, errorThrown){
                alert('init error: ' + textStatus);
            }
        });
    
},

 		// Apps
        // Apps
Apps: function () {
	// console.log('Apps');

	$('#button-logout').bind('click', function(){
		fn.Logout();
	});

}

    };
 
    $(document).ready(function () {
        fn.Launch();
    });
 
})(jQuery);

