$(function () {

                    $('#button-logout').bind('click', function(){

                      //alert('logout');


                      $.ajax({
                        url: '../../../api/loginManager/logout/',
                        type: 'POST',
                        contentType: 'application/json',
                        dataType: 'json',
                        cache: false,
                        //async: false,
                        success: function(data) {
                            //console.log(data);

                            //window.location.href = '../Admin/';
                            var url = '../../Login/';
                            $(location).attr('href',url);

                            //console.log(window.location.pathname);

                        },
                        error: function(jqXHR, textStatus, errorThrown){
                                alert('init error: ' + textStatus);
                            }
                        });
                });

});
