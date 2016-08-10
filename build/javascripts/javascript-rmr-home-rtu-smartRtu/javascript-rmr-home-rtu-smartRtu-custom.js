$(function() {

    //Handel user layout settings using cookie
    function handleUserLayoutSetting() {
        if (typeof cookie_not_handle_user_settings != 'undefined' && cookie_not_handle_user_settings == true) {
            return;
        }
        //Collapsed sidebar
        if ($.cookie('sidebar-collapsed') == 'true') {
            $('#sidebar').addClass('sidebar-collapsed');
        }

        //Fixed sidebar
        if ($.cookie('sidebar-fixed') == 'true') {
            $('#sidebar').addClass('sidebar-fixed');
        }

        //Fixed navbar
        if ($.cookie('navbar-fixed') == 'true') {
            $('#navbar').addClass('navbar-fixed');
        }

        var color_skin = $.cookie('skin-color');
        var color_sidebar = $.cookie('sidebar-color');
        var color_navbar = $.cookie('navbar-color');

        //Skin color
        if (color_skin !== undefined) {
            $('body').addClass('skin-' + color_skin);
        }

        //Sidebar color
        if (color_sidebar !== undefined) {
            $('#main-container').addClass('sidebar-' + color_sidebar);
        }

        //Navbar color
        if (color_navbar !== undefined) {
            $('#navbar').addClass('navbar-' + color_navbar);
        }
    }
    //If you want to handle skin color by server-side code, don't forget to comment next line  
    handleUserLayoutSetting();

    //Disable certain links
    $('a[href^=#]').click(function (e) {
        e.preventDefault()
    });

    //slimScroll to fixed height tags
    $('.nice-scroll, .slimScroll').slimScroll({touchScrollStep: 30});

    //Add animation to notification and messages icon, if they have any new item
    var badge = $('.flaty-nav .dropdown-toggle > .fa-bell + .badge')
    if ($(badge).length > 0 && parseInt($(badge).html()) > 0) {
        $('.flaty-nav .dropdown-toggle > .fa-bell').addClass('anim-swing');
    }
    badge = $('.flaty-nav .dropdown-toggle > .fa-envelope + .badge')
    if ($(badge).length > 0 && parseInt($(badge).html()) > 0) {
        $('.flaty-nav .dropdown-toggle > .fa-envelope').addClass('anim-top-down');
    }

    //---------------- Tooltip & Popover --------------------//
    $('.show-tooltip').tooltip({container: 'body', delay: {show:500}});
    $('.show-popover').popover();

    //---------------- Syntax Highlighter --------------------//
    window.prettyPrint && prettyPrint();

    //---------------- Sidebar -------------------------------//
    //Scrollable fixed sidebar
    var scrollableSidebar = function() {
        if ($('#sidebar.sidebar-fixed').size() == 0) {
            $('#sidebar .nav').css('height', 'auto');
            return;
        }
        if ($('#sidebar.sidebar-fixed.sidebar-collapsed').size() > 0) {
            $('#sidebar .nav').css('height', 'auto');
            return;
        }
        var winHeight = $(window).height() - 90;
        $('#sidebar.sidebar-fixed .nav').slimScroll({height: winHeight + 'px', position: 'left'});
    }
    scrollableSidebar();
    //Submenu dropdown
    $('#sidebar a.dropdown-toggle').click(function() {
        var submenu = $(this).next('.submenu');
        var arrow = $(this).children('.arrow');
        if (arrow.hasClass('fa-angle-right')) {
            arrow.addClass('anim-turn90');
        }
        else {
            arrow.addClass('anim-turn-90');
        }
        submenu.slideToggle(400, function(){
            if($(this).is(":hidden")) {
                arrow.attr('class', 'arrow fa fa-angle-right');
            } else {
                arrow.attr('class', 'arrow fa fa-angle-down');
            }
            arrow.removeClass('anim-turn90').removeClass('anim-turn-90');
        });
    });

    //Collapse button
    $('#sidebar.sidebar-collapsed #sidebar-collapse > i').attr('class', 'fa fa-angle-double-right');
    $('#sidebar-collapse').click(function(){
        $('#sidebar').toggleClass('sidebar-collapsed');
        if ($('#sidebar').hasClass('sidebar-collapsed')) {
            $('#sidebar-collapse > i').attr('class', 'fa fa-angle-double-right');
            $.cookie('sidebar-collapsed', 'true');
            $("#sidebar ul.nav-list").parent('.slimScrollDiv').replaceWith($("#sidebar ul.nav-list"));
        } else {
            $('#sidebar-collapse > i').attr('class', 'fa fa-angle-double-left');
            $.cookie('sidebar-collapsed', 'false');
            scrollableSidebar();
        }
    });

    $('#sidebar').on('show.bs.collapse', function () {
        if ($(this).hasClass('sidebar-collapsed')) {
            $(this).removeClass('sidebar-collapsed');
        }
    });

    //Search Form
    $('#sidebar .search-form').click(function(){
        $('#sidebar .search-form input[type="text"]').focus();
    });
    $('#sidebar .nav > li.active > a > .arrow').removeClass('fa-angle-right').addClass('fa-angle-down');

    //---------------- Horizontal Menu -------------------------------//
    if ($('#nav-horizontal')) {
        var horizontalNavHandler = function() {
            var w = $(window).width();
            if (w > 979) {
                $('#nav-horizontal').removeClass('nav-xs');
                $('#nav-horizontal .arrow').removeClass('fa-angle-right').removeClass('fa-angle-down').addClass('fa-caret-down');
            }
            else {
                $('#nav-horizontal').addClass('nav-xs');
                $('#nav-horizontal .arrow').removeClass('fa-caret-down').addClass('fa-angle-right');
            }
        }
        $(window).resize(function(){
            horizontalNavHandler();
        });
        horizontalNavHandler();
    }

    //Horizontal menu dropdown
    $('#nav-horizontal a.dropdown-toggle').click(function() {
        var submenu = $(this).next('.dropdown-menu');
        var arrow = $(this).children('.arrow');
        if ($('#nav-horizontal.nav-xs').size() > 0) {
            if (arrow.hasClass('fa-angle-right')) {
                arrow.addClass('anim-turn90');
            }
            else {
                arrow.addClass('anim-turn-90');
            }
        }
        if ($('#nav-horizontal.nav-xs').size() == 0) {
            $('#nav-horizontal > li > .dropdown-menu').not(submenu).slideUp(400);
        }
        submenu.slideToggle(400, function(){
            if ($('#nav-horizontal.nav-xs').size() > 0) {
                if($(this).is(":hidden")) {
                    arrow.attr('class', 'arrow fa fa-angle-right');
                } else {
                    arrow.attr('class', 'arrow fa fa-angle-down');
                }
                arrow.removeClass('anim-turn90').removeClass('anim-turn-90');
            }
        });
    });

    //------------------ Theme Setting --------------------//
    //Toggle showing theme setting box
    $('#theme-setting > a').click(function(){
        $(this).next().animate({width:'toggle'}, 500, function(){
            if($(this).is(":hidden")) {
                $('#theme-setting > a > i').attr('class', 'fa fa-gears fa-2x');
            } else {
                $('#theme-setting > a > i').attr('class', 'fa fa-times fa-2x');
            }
        });
        $(this).next().css('display', 'inline-block');
    });
    //Change skin and colors
    $('#theme-setting ul.colors a').click(function(){
        var parent_li = $(this).parent().get(0);
        var parent_ul = $(parent_li).parent().get(0);
        var target = $(parent_ul).data('target');
        var prefix = $(parent_ul).data('prefix');
        var color = $(this).attr('class');
        var regx = new RegExp('\\b' + prefix + '.*\\b', 'g');
        $(parent_ul).children('li').removeClass('active');
        $(parent_li).addClass('active');
        //Remove current skin class if it has
        if ($(target).attr('class') != undefined) {
            $(target).attr('class', $(target).attr('class').replace(regx, '').trim());
        }
        $(target).addClass(prefix + color)
        if (target == 'body') {
            var parent_ul_li = $(parent_ul).parent().get(0);
            var next_li = $(parent_ul_li).nextAll('li:lt(2)');
            $(next_li).find('li.active').removeClass('active');
            $(next_li).find('a.' + color).parent().addClass('active');
            //Remove static color class from Navbar & Sidebar 
            $('#navbar').attr('class', $('#navbar').attr('class').replace(/\bnavbar-.*\b/g, '').trim());
            $('#main-container').attr('class', $('#main-container').attr('class').replace(/\bsidebar-.*\b/g, '').trim());
        }
        $.cookie(prefix + 'color', color);
    });
    //Handel selected color
    var theme_colors = ["blue", "red", "green", "orange", "yellow", "pink", "magenta", "gray", "black"];
    $.each(theme_colors, function(k, v) {
        if ($('body').hasClass('skin-' + v)) {
            $('#theme-setting ul.colors > li').removeClass('active');
            $('#theme-setting ul.colors > li:has(a.'+ v +')').addClass('active');
        }
    });

    $.each(theme_colors, function(k, v) {
        if ($('#navbar').hasClass('navbar-' + v)) {
            $('#theme-setting ul[data-prefix="navbar-"] > li').removeClass('active');
            $('#theme-setting ul[data-prefix="navbar-"] > li:has(a.'+ v +')').addClass('active');
        }

        if ($('#main-container').hasClass('sidebar-' + v)) {
            $('#theme-setting ul[data-prefix="sidebar-"] > li').removeClass('active');
            $('#theme-setting ul[data-prefix="sidebar-"] > li:has(a.'+ v +')').addClass('active');
        }
    });
    //Handle fixed navbar & sidebar
    if ($('#sidebar').hasClass('sidebar-fixed')) {
        $('#theme-setting > ul > li > a[data-target="sidebar"] > i').attr('class', 'fa fa-check-square-o green')
    }
    if ($('#navbar').hasClass('navbar-fixed')) {
        $('#theme-setting > ul > li > a[data-target="navbar"] > i').attr('class', 'fa fa-check-square-o green')
    }
    $('#theme-setting > ul > li > a').click(function(){
        var target = $(this).data('target');
        var check = $(this).children('i');
        if (check.hasClass('fa-square-o')) {
            check.attr('class', 'fa fa-check-square-o green');
            $('#' + target).addClass(target + '-fixed');
            $.cookie(target + '-fixed', 'true');
        } else {
            check.attr('class', 'fa fa-square-o');
            $('#' + target).removeClass(target + '-fixed');
            $.cookie(target + '-fixed', 'false');
        }
        if (target == "sidebar") {
            if (check.hasClass('fa-square-o')) {
                $("#sidebar ul.nav-list").parent('.slimScrollDiv').replaceWith($("#sidebar ul.nav-list"));
            }
            scrollableSidebar();
        }
    });

    //-------------------------- Boxes -----------------------------//
    $('.box .box-tool > a').click(function(e) {
        if ($(this).data('action') == undefined) {
            return;
        }
        var action = $(this).data('action');
        var btn = $(this);
        switch (action) {
            case 'collapse':
                $(btn).children('i').addClass('anim-turn180');
                $(this).parents('.box').children('.box-content').slideToggle(500, function(){
                    if($(this).is(":hidden")) {
                        $(btn).children('i').attr('class', 'fa fa-chevron-down');
                    } else {
                        $(btn).children('i').attr('class', 'fa fa-chevron-up');
                    }
                });
                break;
            case 'close':
                $(this).parents('.box').fadeOut(500, function(){
                    $(this).parent().remove();
                })
                break;
            case 'config':
                $('#' + $(this).data('modal')).modal('show');
                break;
        }
        e.preventDefault();
    });

    //-------------------------- Mail Page -----------------------------//
    //Collapse and Uncollapse
    $('.mail-messages .msg-collapse > a').click(function(e){
        $(this).children('i').addClass('anim-turn180');
        $(this).parents('li').find('.mail-msg-container').slideToggle(500, function(){
            var i = $(this).parents('li').find('.msg-collapse > a').children('i');
            if($(this).is(':hidden')) {
                $(i).attr('class', 'fa fa-chevron-down');
            } else {
                $(i).attr('class', 'fa fa-chevron-up');
            }
        });
    });

    //Star and Unstar
    $('.mail-content i.fa-star').click(function(){
        $(this).toggleClass('starred');
    });

    //Check All and Uncheck All message in mail list
    $('.mail-toolbar > li:first-child > input[type="checkbox"]').change(function() {
        var check = false;
        if ($(this).is(':checked')) {
            check = true;
        }
        $(this).parents('.mail-content').find('.mail-list .ml-left > input[type="checkbox"]').prop('checked', check);
        var li = $(this).parents('.mail-content').find('.mail-list > li');
        if (check) {
            $(li).addClass('checked');
        }
        else {
            $(li).removeClass('checked');
        }
    });

    //Add .checked class to selected rows
    $('.mail-list .ml-left > input[type="checkbox"]').change(function(){
        if ($(this).is(':checked')) {
            $(this).parents('li').addClass('checked');
        }
        else {
            $(this).parents('li').removeClass('checked');
        }
    })

    //--------------------- Go Top Button ---------------------//
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#btn-scrollup').fadeIn();
        } else {
            $('#btn-scrollup').fadeOut();
        }
    });
    $('#btn-scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    //---------------- Active Tile --------------------//
    if ($('.tile-active').size() > 0) {
        var tileMoveDuration = 1500;
        var tileDefaultStop = 5000;

        var tileGoUp = function(el, stop1, stop2, height) {
            $(el).children('.tile').animate({top: '-='+ height +'px'}, tileMoveDuration);
            setTimeout(function(){ tileGoDown(el, stop1, stop2, height); }, stop2 + tileMoveDuration);
        }

        var tileGoDown = function(el, stop1, stop2, height) {
            $(el).children('.tile').animate({top: '+='+ height +'px'}, tileMoveDuration);
            setTimeout(function(){ tileGoUp(el, stop1, stop2, height); }, stop1 + tileMoveDuration);
        }

        $('.tile-active').each(function(index, el){
            var tile1, tile2, stop1, stop2, height;

            tile1 = $(this).children('.tile').first();
            tile2 = $(this).children('.tile').last();
            stop1 = $(tile1).data('stop');
            stop2 = $(tile2).data('stop');
            height = $(tile1).outerHeight();

            if (stop1 == undefined) {
                stop1 = tileDefaultStop;
            }
            if (stop2 == undefined) {
                stop2 = tileDefaultStop;
            }

            setTimeout(function(){ tileGoUp(el, stop1, stop2, height); }, stop1);
        });
    }

    //------------------------- Table --------------------------//
    //Check all and uncheck all table rows
    $('.table > thead > tr > th:first-child > input[type="checkbox"]').change(function() {
        var check = false;
        if ($(this).is(':checked')) {
            check = true;
        }
        $(this).parents('thead').next().find('tr > td:first-child > input[type="checkbox"]').prop('checked', check);
    })

    $('.table > tbody > tr > td:first-child > input[type="checkbox"]').change(function() {
        var check = false;
        if ($(this).is(':checked')) {
            check = true;
        }
        if (!check) {
            $('.table > thead > tr > th:first-child > input[type="checkbox"]').prop('checked', false);
        }
    })

    //------------------------ Data Table -----------------------//
    
    if (jQuery().dataTable) {
        $('#table1').dataTable({
            "aLengthMenu": [
                [10, 15, 25, 50, 100, -1],
                [10, 15, 25, 50, 100, "All"]
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
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });
    }

    //----------------------- Chosen Select ---------------------//
    if (jQuery().chosen) {
        $(".chosen").chosen({
            no_results_text: "Oops, nothing found!",
            width: "100%"
        });

        $(".chosen-with-diselect").chosen({
            allow_single_deselect: true,
            width: "100%"
        });
    }
    
    //--------------- Password Strength Indicator ----------------//
    if (jQuery().pwstrength) {
        $('input[data-action="pwindicator"]').pwstrength();
    }

    //----------------- Bootstrap Dual Listbox -------------------//
    if (jQuery().bootstrapDualListbox) {
        $('select[data-action="duallistbox"]').bootstrapDualListbox();
    }

    //----------------------- Colorpicker -------------------------//
    if (jQuery().colorpicker) {
        $('.colorpicker-default').colorpicker({
            format: 'hex'
        });
        $('.colorpicker-rgba').colorpicker();
    }

    //----------------------- Time Picker -------------------------//
    if (jQuery().timepicker) {
        $('.timepicker-default').timepicker();
        $('.timepicker-24').timepicker({
            minuteStep: 1,
            showSeconds: true,
            showMeridian: false
        });
    }
    
    //------------------------ Date Picker ------------------------//
    if (jQuery().datepicker) {
        $('.date-picker').datepicker();
    }

    //------------------------ Date Range Picker ------------------------//
    if (jQuery().daterangepicker) {
        //Date Range Picker
        $('.date-range').daterangepicker();
    }

    //------------------------ Bootstrap WYSIWYG Editor -----------------//
    if (jQuery().wysihtml5) {
        $('.wysihtml5').wysihtml5();
    }

    //------------------------------ Form validation --------------------------//
    if (jQuery().validate) {
        var removeSuccessClass = function(e) {
            $(e).closest('.form-group').removeClass('has-success');
        }
        var $validator = $('#validation-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",

            invalidHandler: function (event, validator) { //display error alert on form submit              
                
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change dony by hightlight
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                setTimeout(function(){removeSuccessClass(element);}, 3000);
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
            }
        });
    }

    //---------------------------- prettyPhoto -------------------------------//
    if (jQuery().prettyPhoto) {
        $(".gallery a[rel^='prettyPhoto']").prettyPhoto({social_tools:'', hideflash: true});
    }

});
$(function() {

    //---------------------- Gritter Notification --------------//
    $('#gritter-sticky').click(function () {
        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a sticky notice!',
            // (string | mandatory) the text inside the notification
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            image: './img/demo/avatar/avatar1.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });
        return false;
    });

    $('#gritter-regular').click(function () {

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a regular notice!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            image: './img/demo/avatar/avatar1.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: ''
        });

        return false;

    });

    $('#gritter-max').click(function () {

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice with a max of 3 on screen at one time!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            image: './img/demo/avatar/avatar1.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function () {
                if ($('.gritter-item-wrapper').length == 3) {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });
        return false;
    });

    $('#gritter-without-image').click(function () {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice without an image!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
        });

        return false;
    });

    $('#gritter-light').click(function () {

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a light notification',
            // (string | mandatory) the text inside the notification
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });

        return false;
    });

    $("#gritter-remove-all").click(function () {

        $.gritter.removeAll();
        return false;

    });


    //------------------- Slider -------------------//
    if (jQuery().slider) {
        // basic
        $(".slider-basic").slider(); // basic sliders

        // snap inc
        $("#slider-snap-inc").slider({
            value: 100,
            min: 0,
            max: 1000,
            step: 100,
            slide: function (event, ui) {
                $("#slider-snap-inc-amount").text("$" + ui.value);
            }
        });

        $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));

        // range slider
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

        //range max

        $("#slider-range-max").slider({
            range: "max",
            min: 1,
            max: 10,
            value: 2,
            slide: function (event, ui) {
                $("#slider-range-max-amount").text(ui.value);
            }
        });

        $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));

        // range min
        $("#slider-range-min").slider({
            range: "min",
            value: 37,
            min: 1,
            max: 700,
            slide: function (event, ui) {
                $("#slider-range-min-amount").text("$" + ui.value);
            }
        });

        $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));

        // setup graphic EQ
        $("#slider-eq > span").each(function () {
            // read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });

        // vertical slider
        $("#slider-vertical").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 60,
            slide: function (event, ui) {
                $("#slider-vertical-amount").text(ui.value);
            }
        });
        $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));

        // vertical range sliders
        $("#slider-range-vertical").slider({
            orientation: "vertical",
            range: true,
            values: [17, 67],
            slide: function (event, ui) {
                $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));

        // color preview
        $(".slider-color-preview").slider({
            range: "min",
            value: 106,
            min: 1,
            max: 700
        });
    }

    //--------------------- Knob ------------------------//
    if (jQuery().knob) {
        $(".knob").knob({
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
            'skin': 'tron'
        });

        $(".circle-stats-item > input").knob({
            'readOnly': true,
            'width': 120,
            'height': 120,
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true,
            'skin':'tron'
        });
    }

    //----------------------- Tags Input -------------------------//
    if (jQuery().tagsInput) {
        $('#tag-input-1').tagsInput({
            width: 'auto',
            'onAddTag': function (tag) {
                alert('New tag added: ' + tag);
            },
        });
        $('#tag-input-2').tagsInput({
            width: 240
        });
    }

    //------------------------ Date Range Picker ------------------------//
    if (jQuery().daterangepicker) {
        $('#form-date-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'right',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            $('#form-date-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });

        $('#form-date-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));
    }

    //-------------------------- Clock Face ------------------------------//
    if (jQuery().clockface) {
        $('#clockface_1').clockface();

        $('#clockface_2').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_toggle-btn').click(function (e) {
            e.stopPropagation();
            $('#clockface_2').clockface('toggle');
        });

        $('#clockface_3').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
    }

    //----------------------------- Form Wizard -------------------------//
    if (jQuery().bootstrapWizard) {
        $('#form-wizard-1').bootstrapWizard({
            'nextSelector': '.button-next',
            'previousSelector': '.button-previous',
            onTabClick: function (tab, navigation, index) {
                alert('on tab click disabled');
                return false;
            },
            onNext: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form-wizard-1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form-wizard-1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form-wizard-1').find('.button-previous').hide();
                } else {
                    $('#form-wizard-1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form-wizard-1').find('.button-next').hide();
                    $('#form-wizard-1').find('.button-submit').show();
                } else {
                    $('#form-wizard-1').find('.button-next').show();
                    $('#form-wizard-1').find('.button-submit').hide();
                }
                var $percent = (current / total) * 100;
                $('#form-wizard-1').find('.progress-bar').css('width', $percent+'%');

                $('html, body').animate({scrollTop: $("#form-wizard-1").offset().top}, 900);
            },
            onPrevious: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form-wizard-1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form-wizard-1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form-wizard-1').find('.button-previous').hide();
                } else {
                    $('#form-wizard-1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form-wizard-1').find('.button-next').hide();
                    $('#form-wizard-1').find('.button-submit').show();
                } else {
                    $('#form-wizard-1').find('.button-next').show();
                    $('#form-wizard-1').find('.button-submit').hide();
                }
                var $percent = (current / total) * 100;
                $('#form-wizard-1').find('.progress-bar').css('width', $percent+'%');

                $('html, body').animate({scrollTop: $("#form-wizard-1").offset().top}, 900);
            },
            onTabShow: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                var $percent = (current / total) * 100;
                $('#form-wizard-1').find('.progress-bar').css({
                    width: $percent + '%'
                });
            }
        });

        $('#form-wizard-1').find('.button-previous').hide();
        $('#form-wizard-1 .button-submit').click(function () {
            alert('Finished!');
        }).hide();


        //Validation of wizard form
        if (jQuery().validate) {
            var removeSuccessClass = function(e) {
                $(e).closest('.form-group').removeClass('has-success');
            }
            var jq_validator = $('#wizard-validation').validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                errorPlacement: function(error, element) {
                    if(element.parent('.input-group').length) {
                        error.insertAfter(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                focusInvalid: false, // do not focus the last invalid input

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    
                },

                highlight: function (element) { // hightlight error inputs
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change dony by hightlight
                    $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
                    setTimeout(function(){removeSuccessClass(element);}, 3000);
                },

                success: function (label) {
                    label.closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                }
            });
        }
        //Look at onNext function to see how add validation to wizard
        $('#form-wizard-2').bootstrapWizard({
            'nextSelector': '.button-next',
            'previousSelector': '.button-previous',
            onTabClick: function (tab, navigation, index) {
                alert('on tab click disabled');
                return false;
            },
            onNext: function (tab, navigation, index) {
                var valid = $("#wizard-validation").valid();
                if(!valid) {
                    jq_validator.focusInvalid();
                    return false;
                }

                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form-wizard-2')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form-wizard-2')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form-wizard-2').find('.button-previous').hide();
                } else {
                    $('#form-wizard-2').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form-wizard-2').find('.button-next').hide();
                    $('#form-wizard-2').find('.button-submit').show();
                } else {
                    $('#form-wizard-2').find('.button-next').show();
                    $('#form-wizard-2').find('.button-submit').hide();
                }
                var $percent = (current / total) * 100;
                $('#form-wizard-2').find('.progress-bar').css('width', $percent+'%');

                $('html, body').animate({scrollTop: $("#form-wizard-2").offset().top}, 900);
            },
            onPrevious: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form-wizard-2')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form-wizard-2')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form-wizard-2').find('.button-previous').hide();
                } else {
                    $('#form-wizard-2').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form-wizard-2').find('.button-next').hide();
                    $('#form-wizard-2').find('.button-submit').show();
                } else {
                    $('#form-wizard-2').find('.button-next').show();
                    $('#form-wizard-2').find('.button-submit').hide();
                }
                var $percent = (current / total) * 100;
                $('#form-wizard-2').find('.progress-bar').css('width', $percent+'%');

                $('html, body').animate({scrollTop: $("#form-wizard-2").offset().top}, 900);
            },
            onTabShow: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                var $percent = (current / total) * 100;
                $('#form-wizard-2').find('.progress-bar').css({
                    width: $percent + '%'
                });
            }
        });

        $('#form-wizard-2').find('.button-previous').hide();
        $('#form-wizard-2 .button-submit').click(function () {
            alert('Finished!');
        }).hide();
    }

    //----------------------------- Charts -----------------------------------//
    if (jQuery().plot) {
        // used by plot functions
        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts
        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
            return res;
        }

        //Basic Chart
        function chart1() {
            if ($("#chart_1").size() == 0) {
                return;
            }
            var d1 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

            var d2 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

            var d3 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

            $.plot($("#chart_1"), [{
                label: "sin(x)",
                data: d1
            }, {
                label: "cos(x)",
                data: d2
            }, {
                label: "tan(x)",
                data: d3
            }], {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    ticks: [0, [Math.PI / 2, "\u03c0/2"],
                        [Math.PI, "\u03c0"],
                        [Math.PI * 3 / 2, "3\u03c0/2"],
                        [Math.PI * 2, "2\u03c0"]
                    ]
                },
                yaxis: {
                    ticks: 10,
                    min: -2,
                    max: 2
                },
                grid: {
                    backgroundColor: {
                        colors: ["#fff", "#eee"]
                    }
                }
            });

        }

        //Interactive Chart
        function chart2() {
            if ($("#chart_2").size() == 0) {
                return;
            }
            function randValue() {
                return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
            }
            var pageviews = [
                [1, randValue()],
                [2, randValue()],
                [3, 2 + randValue()],
                [4, 3 + randValue()],
                [5, 5 + randValue()],
                [6, 10 + randValue()],
                [7, 15 + randValue()],
                [8, 20 + randValue()],
                [9, 25 + randValue()],
                [10, 30 + randValue()],
                [11, 35 + randValue()],
                [12, 25 + randValue()],
                [13, 15 + randValue()],
                [14, 20 + randValue()],
                [15, 45 + randValue()],
                [16, 50 + randValue()],
                [17, 65 + randValue()],
                [18, 70 + randValue()],
                [19, 85 + randValue()],
                [20, 80 + randValue()],
                [21, 75 + randValue()],
                [22, 80 + randValue()],
                [23, 75 + randValue()],
                [24, 70 + randValue()],
                [25, 65 + randValue()],
                [26, 75 + randValue()],
                [27, 80 + randValue()],
                [28, 85 + randValue()],
                [29, 90 + randValue()],
                [30, 95 + randValue()]
            ];
            var visitors = [
                [1, randValue() - 5],
                [2, randValue() - 5],
                [3, randValue() - 5],
                [4, 6 + randValue()],
                [5, 5 + randValue()],
                [6, 20 + randValue()],
                [7, 25 + randValue()],
                [8, 36 + randValue()],
                [9, 26 + randValue()],
                [10, 38 + randValue()],
                [11, 39 + randValue()],
                [12, 50 + randValue()],
                [13, 51 + randValue()],
                [14, 12 + randValue()],
                [15, 13 + randValue()],
                [16, 14 + randValue()],
                [17, 15 + randValue()],
                [18, 15 + randValue()],
                [19, 16 + randValue()],
                [20, 17 + randValue()],
                [21, 18 + randValue()],
                [22, 19 + randValue()],
                [23, 20 + randValue()],
                [24, 21 + randValue()],
                [25, 14 + randValue()],
                [26, 24 + randValue()],
                [27, 25 + randValue()],
                [28, 26 + randValue()],
                [29, 27 + randValue()],
                [30, 31 + randValue()]
            ];

            var plot = $.plot($("#chart_2"), [{
                data: pageviews,
                label: "Unique Visits"
            }, {
                data: visitors,
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.05
                            }, {
                                opacity: 0.01
                            }]
                        }
                    },
                    points: {
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#eee",
                    borderWidth: 0
                },
                colors: ["#FCB322", "#A5D16C", "#52e136"],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 11,
                    tickDecimals: 0
                }
            });


            function showTooltip(x, y, contents) {
                $('<div id="tooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    display: 'none',
                    top: y + 5,
                    left: x + 15,
                    border: '1px solid #333',
                    padding: '4px',
                    color: '#fff',
                    'border-radius': '3px',
                    'background-color': '#333',
                    opacity: 0.80
                }).appendTo("body").fadeIn(200);
            }

            var previousPoint = null;
            $("#chart_2").bind("plothover", function (event, pos, item) {
                $("#x").text(pos.x.toFixed(2));
                $("#y").text(pos.y.toFixed(2));

                if (item) {
                    if (previousPoint != item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $("#tooltip").remove();
                        var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                        showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
        }

        //Tracking Curves
        function chart3() {
            if ($("#chart_3").size() == 0) {
                return;
            }
            //tracking curves:

            var sin = [],
                cos = [];
            for (var i = 0; i < 14; i += 0.1) {
                sin.push([i, Math.sin(i)]);
                cos.push([i, Math.cos(i)]);
            }

            plot = $.plot($("#chart_3"), [{
                data: sin,
                label: "sin(x) = -0.00"
            }, {
                data: cos,
                label: "cos(x) = -0.00"
            }], {
                series: {
                    lines: {
                        show: true
                    }
                },
                crosshair: {
                    mode: "x"
                },
                grid: {
                    hoverable: true,
                    autoHighlight: false
                },
                colors: ["#FCB322", "#A5D16C", "#52e136"],
                yaxis: {
                    min: -1.2,
                    max: 1.2
                }
            });

            var legends = $("#chart_3 .legendLabel");
            legends.each(function () {
                // fix the widths so they don't jump around
                $(this).css('width', $(this).width());
            });

            var updateLegendTimeout = null;
            var latestPosition = null;

            function updateLegend() {
                updateLegendTimeout = null;

                var pos = latestPosition;

                var axes = plot.getAxes();
                if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

                var i, j, dataset = plot.getData();
                for (i = 0; i < dataset.length; ++i) {
                    var series = dataset[i];

                    // find the nearest points, x-wise
                    for (j = 0; j < series.data.length; ++j)
                    if (series.data[j][0] > pos.x) break;

                    // now interpolate
                    var y, p1 = series.data[j - 1],
                        p2 = series.data[j];
                    if (p1 == null) y = p2[1];
                    else if (p2 == null) y = p1[1];
                    else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

                    legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
                }
            }

            $("#chart_3").bind("plothover", function (event, pos, item) {
                latestPosition = pos;
                if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
            });
        }

        //Dynamic Chart
        function chart4() {
            if ($("#chart_4").size() == 0) {
                return;
            }
            //server load
            var options = {
                series: {
                    shadowSize: 1
                },
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    tickFormatter: function (v) {
                        return v + "%";
                    }
                },
                xaxis: {
                    show: false
                },
                colors: ["#6ef146"],
                grid: {
                    tickColor: "#a8a3a3",
                    borderWidth: 0
                }
            };

            var updateInterval = 30;
            var plot = $.plot($("#chart_4"), [getRandomData()], options);

            function update() {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            update();
        }

        //bars with controls
        function chart5() {
            if ($("#chart_5").size() == 0) {
                return;
            }
            var d1 = [];
            for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

            var d2 = [];
            for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

            var d3 = [];
            for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

            var stack = 0,
                bars = true,
                lines = false,
                steps = false;

            function plotWithOptions() {
                $.plot($("#chart_5"), [d1, d2, d3], {
                    series: {
                        stack: stack,
                        lines: {
                            show: lines,
                            fill: true,
                            steps: steps
                        },
                        bars: {
                            show: bars,
                            barWidth: 0.6
                        }
                    }
                });
            }

            $(".stackControls input").click(function (e) {
                e.preventDefault();
                stack = $(this).val() == "With stacking" ? true : null;
                plotWithOptions();
            });
            $(".graphControls input").click(function (e) {
                e.preventDefault();
                bars = $(this).val().indexOf("Bars") != -1;
                lines = $(this).val().indexOf("Lines") != -1;
                steps = $(this).val().indexOf("steps") != -1;
                plotWithOptions();
            });

            plotWithOptions();
        }

        //graph
        function graphs() {
            if ($("#graph_1").size() == 0) {
                return;
            }

            var graphData = [];
            var series = Math.floor(Math.random() * 10) + 1;
            for (var i = 0; i < series; i++) {
                graphData[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor((Math.random() - 1) * 100) + 1
                }
            }

            $.plot($("#graph_1"), graphData, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: function (label, series) {
                                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            background: {
                                opacity: 0.8
                            }
                        }
                    }
                },
                legend: {
                    show: false
                }
            });


            $.plot($("#graph_2"), graphData, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 3 / 4,
                            formatter: function (label, series) {
                                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            background: {
                                opacity: 0.5
                            }
                        }
                    }
                },
                legend: {
                    show: false
                }
            });

            $.plot($("#graph_3"), graphData, {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
            $("#graph_3").bind("plothover", pieHover);
            $("#graph_3").bind("plotclick", pieClick);

            function pieHover(event, pos, obj) {
                if (!obj) return;
                percent = parseFloat(obj.series.percent).toFixed(2);
                $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
            }

            function pieClick(event, pos, obj) {
                if (!obj) return;
                percent = parseFloat(obj.series.percent).toFixed(2);
                alert('' + obj.series.label + ': ' + percent + '%');
            }

            $.plot($("#graph_4"), graphData, {
                series: {
                    pie: {
                        innerRadius: 0.5,
                        show: true
                    }
                }
            });
        }

        chart1();
        chart2();
        chart3();
        chart4();
        chart5();
        graphs();
    }

    //----------------------------- Calanedar --------------------------------//
    if (jQuery().fullCalendar) {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var h = {};

        if ($(window).width() <= 480) {
            h = {
                left: 'title, prev,next',
                center: '',
                right: 'month,agendaWeek,agendaDay'
            };
        } else {
            h = {
                left: 'title',
                center: '',
                right: 'prev,next,today,month,agendaWeek,agendaDay'
            };
        }

        var initDrag = function (el) {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim(el.text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            el.data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            el.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        }

        var addEvent = function (title, priority) {
            title = title.length == 0 ? "Untitled Event" : title;
            priority = priority.length == 0 ? "default" : priority;

            var html = $('<div data-class="label label-' + priority + '" class="external-event label label-' + priority + '">' + title + '</div>');
            jQuery('#event_box').append(html);
            initDrag(html);
        }

        $('#external-events div.external-event').each(function () {
            initDrag($(this))
        });

        $('#event_add').click(function () {
            var title = $('#event_title').val();
            var priority = $('#event_priority').val();
            addEvent(title, priority);
        });

        //modify chosen options
        var handleDropdown = function () {
            $('#event_priority_chzn .chzn-search').hide(); //hide search box
            $('#event_priority_chzn_o_1').html('<span class="label label-default">' + $('#event_priority_chzn_o_1').text() + '</span>');
            $('#event_priority_chzn_o_2').html('<span class="label label-success">' + $('#event_priority_chzn_o_2').text() + '</span>');
            $('#event_priority_chzn_o_3').html('<span class="label label-info">' + $('#event_priority_chzn_o_3').text() + '</span>');
            $('#event_priority_chzn_o_4').html('<span class="label label-warning">' + $('#event_priority_chzn_o_4').text() + '</span>');
            $('#event_priority_chzn_o_5').html('<span class="label label-important">' + $('#event_priority_chzn_o_5').text() + '</span>');
        }

        $('#event_priority_chzn').click(handleDropdown);

        //predefined events
        addEvent("My Event 1", "default");
        addEvent("My Event 2", "success");
        addEvent("My Event 3", "info");
        addEvent("My Event 4", "warning");
        addEvent("My Event 5", "important");
        addEvent("My Event 6", "success");
        addEvent("My Event 7", "info");
        addEvent("My Event 8", "warning");
        addEvent("My Event 9", "success");
        addEvent("My Event 10", "default");

        $('#calendar').fullCalendar({
            header: h,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.className = $(this).attr("data-class");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                className: 'label label-default',
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                className: 'label label-success',
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                className: 'label label-default',
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                className: 'label label-important',
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                className: 'label label-info',
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                className: 'label label-warning',
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                className: 'label label-success',
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                className: 'label label-warning',
            }]
        });
        //Replace buttons style
        $('.fc-button').addClass('btn');
    }

    //---------------------------- Dashboard Visitors Chart -------------------------//
    if (jQuery.plot) {
        //define placeholder class
        var placeholder = $("#visitors-chart");

        if ($(placeholder).size() == 0) {
            return;
        }
        //some data
        var d1 = [
            [1, 35],
            [2, 48],
            [3, 34],
            [4, 54],
            [5, 46],
            [6, 37],
            [7, 40],
            [8, 55],
            [9, 43],
            [10, 61],
            [11, 52],
            [12, 57],
            [13, 64],
            [14, 56],
            [15, 48],
            [16, 53],
            [17, 50],
            [18, 59],
            [19, 66],
            [20, 73],
            [21, 81],
            [22, 75],
            [23, 86],
            [24, 77],
            [25, 86],
            [26, 85],
            [27, 79],
            [28, 83],
            [29, 95],
            [30, 92]
        ];
        var d2 = [
            [1, 9],
            [2, 15],
            [3, 16],
            [4, 21],
            [5, 19],
            [6, 15],
            [7, 22],
            [8, 29],
            [9, 20],
            [10, 27],
            [11, 32],
            [12, 37],
            [13, 34],
            [14, 30],
            [15, 28],
            [16, 23],
            [17, 28],
            [18, 35],
            [19, 31],
            [20, 28],
            [21, 33],
            [22, 25],
            [23, 27],
            [24, 24],
            [25, 36],
            [26, 25],
            [27, 39],
            [28, 28],
            [29, 35],
            [30, 42]
        ];
        var chartColours = ['#88bbc8', '#ed7a53', '#9FC569', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];
        //graph options
        var options = {
                grid: {
                    show: true,
                    aboveData: true,
                    color: "#3f3f3f" ,
                    labelMargin: 5,
                    axisMargin: 0, 
                    borderWidth: 0,
                    borderColor:null,
                    minBorderMargin: 5 ,
                    clickable: true, 
                    hoverable: true,
                    autoHighlight: true,
                    mouseActiveRadius: 20
                },
                series: {
                    grow: {
                        active: false,
                        stepMode: "linear",
                        steps: 50,
                        stepDelay: true
                    },
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3,
                        steps: false
                        },
                    points: {
                        show:true,
                        radius: 4,
                        symbol: "circle",
                        fill: true,
                        borderColor: "#fff"
                    }
                },
                legend: { 
                    position: "ne", 
                    margin: [0,-25], 
                    noColumns: 0,
                    labelBoxBorderColor: null,
                    labelFormatter: function(label, series) {
                        // just add some space to labes
                        return label+'&nbsp;&nbsp;';
                     }
                },
                yaxis: { min: 0 },
                xaxis: {ticks:11, tickDecimals: 0},
                colors: chartColours,
                shadowSize:1,
                tooltip: true, //activate tooltip
                tooltipOpts: {
                    content: "%s : %y.0",
                    defaultTheme: false,
                    shifts: {
                        x: -30,
                        y: -50
                    }
                }
            };
            $.plot(placeholder, [
            {
                label: "Visits", 
                data: d1,
                lines: {fillColor: "#f2f7f9"},
                points: {fillColor: "#88bbc8"}
            }, 
            {
                label: "Unique Visits", 
                data: d2,
                lines: {fillColor: "#fff8f2"},
                points: {fillColor: "#ed7a53"}
            } 

        ], options);
    }

    //--------------------------- Sparkline --------------------------------//
    if (jQuery().sparkline) {
        $('.inline-sparkline').sparkline(
            'html',
            {
                width: '70px',
                height: '26px',
                lineWidth: 2,
                spotRadius: 3,
                lineColor: '#88bbc8',
                fillColor: '#f2f7f9',
                spotColor: '#14ae48',
                maxSpotColor: '#e72828',
                minSpotColor: '#f7941d'
            }
        );
    }


});
(function ($) {
    "use strict";

    var token = null;

    // Map Object
    var map = null;
    // Leaflet Layers control
    var layerControl = false;
    // Leaflet Layers
    var rtuGroup = false;
    var rtuGeojsonLayer = false;
    // Leaflet Info Box
    var infobox = false;
    var draggable = false;

    var description_box = false;

    var searchBox = false;

    var rtuEditingMarker = null;
    var rtuNormalMarker = null;

    var rtuRedMarker = null;
    var rtuYellowMarker = null;
    var rtuGreenMarker = null;
    var rtuGrayMarker = null;
    var rtuBlackMarker = null;

    var autoUpdateFlag = false;
    var autoUpdateRequest = null;
    var autoUpdateTimer = null;



    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.Leaflet();
            fn.Leaflet_ExtraMarkers();

            fn.GetToken();
            fn.Apps();
        },

        // Timer
        AutoUpdate: function () {
	// console.log('AutoUpdate');

        /* if there is a previous ajax request, then we abort it and then set xhr to null */
        // if( autoUpdateRequest != null ) {
        //         autoUpdateRequest.abort();
        //         autoUpdateRequest = null;
        // }




          var tmpData = {
              "paramDM" : "DM-01-01-01-01"
          }

        /* and now we can safely make another ajax request since the previous one is aborted */
        autoUpdateRequest = $.ajax({
                type: "POST",
                url: "../../../../api/wlmaManager/getFlowPressureByDM/",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(tmpData),
                beforeSend: function() {
                    // if( autoUpdateRequest != null ) {
                    //         autoUpdateRequest.abort();
                    //         autoUpdateRequest = null;
                    // }
                },
                success: function(msg) {
                    /* handle the ajax response */
                    console.log(msg);
                }
        });
    
},
        // Leaflet
        Leaflet: function () {
    // console.log('Leaflet');

    
    
	// L.Icon.Default.imagePath = '../../../../../../bower_components/leaflet/images/'
    L.Icon.Default.imagePath = '../../../../../images/rmr/leaflet/images/'
 
    // Using multiple tile layers on your map
    var osmLink = 'OpenStreetMap', 
    	thunLink = 'Thunderforest';
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; ' + osmLink + ' Contributors',
		landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', 
		thunAttrib = '&copy; ' + osmLink+' Contributors & '+thunLink;

	var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib, minZoom: 0, maxZoom: 18}),
		landMap = L.tileLayer(landUrl, {attribution: thunAttrib, minZoom: 0, maxZoom: 16});

    var googleRoadmapLayer = new L.Google('ROADMAP', {attribution: 'กองพัฒนาระบบงานผลิตและวิศวกรรมฯ', minZoom: 12, maxZoom: 20});
    // map.addLayer(googleRoadmapLayer);

    var googleSatelliteLayer = new L.Google('SATELLITE', {attribution: 'กองพัฒนาระบบงานผลิตและวิศวกรรมฯ', minZoom: 12, maxZoom: 20});
    // map.addLayer(googleSatelliteLayer);

    var googleHybridLayer = new L.Google('HYBRID', {attribution: 'กองพัฒนาระบบงานผลิตและวิศวกรรมฯ', minZoom: 12, maxZoom: 20});
    // map.addLayer(googleHybridLayer);

	map = L.map('map', {
                            fullscreenControl: true,
							layers: [googleRoadmapLayer] // only add one! 
						})
			.setView([13.708189, 100.599608], 14);

    var baseMaps = {
    	"ROADMAP": googleRoadmapLayer,
    	"SATELLITE" : googleSatelliteLayer,
    	"HYBRID" : googleHybridLayer,
    	// "OSM Mapnik": osmMap,
        // "Landscape": landMap
    };


    var rtu = L.marker([13.708189, 100.599608])
		       // .addTo(map)
		       .bindPopup("I’m here!")
		       .openPopup();

    var rtus = L.layerGroup([rtu]);

    var overlayMaps = {
    	"RTU": rtus
    };

    // L.control.layers(baseMaps, overlayMaps).addTo(map);
    if(layerControl === false) {  // var layerControl set to false in init phase; 
        // layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
        layerControl = L.control.layers(baseMaps).addTo(map);
    }

    var zoomLev;
    map.on("zoomend", function(){
    	zoomLev = map.getZoom();
    	// console.log(zoomLev);
    	if (zoomLev < 14){
    		// map.removeLayer(lariac);
    		// $('#zoom').val(zoomLev);
    	} else {
    		// $('#zoom').val(zoomLev);
    		// map.addLayer(lariac);
    	}
    });

    // map.dragging.disable();

    map.on('click', function(){
        // console.log('on click');

        // fn.ResetMarkerToDefault();
        // fn.ToggleFormInfo();
    });


    

    fn.Leaflet_AddRtuLayer();
    fn.Leaflet_AddInfoBox();
    fn.Leaflet_AddDescriptionBox();
    fn.Leaflet_FullScreen();
    // // fn.Leaflet_ZoomBox();
    // // fn.Leaflet_SearchInfoBox();
    // fn.Leaflet_DrawControl();
    // // fn.Leaflet_AddDMALayer();
    // fn.Leaflet_AddWMSLayer();
    


},
        Leaflet_AddRtuLayer: function () {
    // console.log('Leaflet_AddRtuLayer');




    $.ajax({
        url: '../../../../api/rtuManager/rtuInformationGeoJSON/',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            // console.log(response);

            rtuGeojsonLayer = L.geoJson(response, {

                onEachFeature: function (feature, layer) {
                    layer.on({
                        'click': function (e) {

                            // currentMarker = e.target;
                            // fn.HighlightMarkerToEdit();
                            // fn.ToggleFormInfo();

                            // e.target.openPopup();
                            // map.panTo(e.target.getLatLng());

                            // fn.Leaflet_ShowRTUInformation(currentMarker);

                        },
                        'dragstart': function(e) {
                            // console.log("dragstart");
                            // Disable drag and zoom handlers.

                            // map.dragging.disable();
                            // map.touchZoom.disable();
                            // map.doubleClickZoom.disable();
                            // map.scrollWheelZoom.disable();
                            // map.keyboard.disable();
                        },
                        'drag': function(e) {
                            // console.log("drag");
                            // Disable drag and zoom handlers.

                            // map.dragging.disable();
                            // map.touchZoom.disable();
                            // map.doubleClickZoom.disable();
                            // map.scrollWheelZoom.disable();
                            // map.keyboard.disable();
                        },
                        'dragend': function(e) {
                            // console.log("dragend");
                            // console.log(e.target.feature.properties.dm);

                            // dragging = true;

                            // currentMarker = e.target;
                            // fn.HighlightMarkerToEdit();
                            // fn.ToggleFormInfo();

                            // fn.Leaflet_ShowRTUInformation(currentMarker);

                            // // Enable drag and zoom handlers.
                            // map.dragging.enable();
                            // map.touchZoom.enable();
                            // map.doubleClickZoom.enable();
                            // map.scrollWheelZoom.enable();
                            // map.keyboard.enable();
                        }
                    });

                    // console.log(feature.properties.pressure_avg);

                    if (parseFloat(feature.properties.pressure_avg) < 2) {

                        layer.setIcon(rtuBlackMarker);
                        layer.bindPopup(feature.properties.dm);
                        layer.options.draggable = false;

                    } else if ((parseFloat(feature.properties.pressure_avg) >= 2) && (parseFloat(feature.properties.pressure_avg) < 6)) {

                        layer.setIcon(rtuRedMarker);
                        layer.bindPopup(feature.properties.dm);
                        layer.options.draggable = false;

                    }  else if ((parseFloat(feature.properties.pressure_avg) >= 6) && (parseFloat(feature.properties.pressure_avg) < 10)) {

                        layer.setIcon(rtuYellowMarker);
                        layer.bindPopup(feature.properties.dm);
                        layer.options.draggable = false;

                    } else if (parseFloat(feature.properties.pressure_avg) >= 10) {

                        layer.setIcon(rtuGreenMarker);
                        layer.bindPopup(feature.properties.dm);
                        layer.options.draggable = false;

                    } else {

                        layer.setIcon(rtuRedMarker);
                        layer.bindPopup(feature.properties.dm);
                        layer.options.draggable = false;
                    }

                }
            }).addTo(map);

            // console.log(rtuGeojsonLayer);

            rtuGroup = L.layerGroup()
                        .addLayer(rtuGeojsonLayer);
            map.addLayer(rtuGroup);   
            layerControl.addOverlay(rtuGroup , "ตำแหน่ง RTU");
        },
        error: function(jqXHR, textStatus, errorThrown){
            // console.log(textStatus);
            // alert('init error: ' + textStatus);
          var url = '../../../Login/';
          $(location).attr('href',url);
        }
    });
    
	



},
        Leaflet_ExtraMarkers: function () {
    // console.log('Leaflet_ExtraMarkers');

	// Creates a red marker with the coffee icon
  rtuGreenMarker = L.ExtraMarkers.icon({
    icon: 'fa-info-circle',
    markerColor: 'green-light',
    shape: 'circle',
    prefix: 'fa',
    // innerHTML: 'RTU'
  });

 // L.marker([51.941196,4.512291], {icon: rtuEditingMarker,}).addTo(map);

  rtuRedMarker = L.ExtraMarkers.icon({
          icon: 'fa-info-circle',
          markerColor: 'red',
          shape: 'circle',
          prefix: 'fa'
        });
    

  rtuYellowMarker = L.ExtraMarkers.icon({
          icon: 'fa-info-circle',
          markerColor: 'yellow',
          shape: 'circle',
          prefix: 'fa'
        });


  rtuGrayMarker = L.ExtraMarkers.icon({
          icon: 'fa-info-circle',
          markerColor: 'gray',
          shape: 'circle',
          prefix: 'fa'
        });

  rtuBlackMarker = L.ExtraMarkers.icon({
          icon: 'fa-info-circle',
          markerColor: 'black',
          shape: 'circle',
          prefix: 'fa'
        });

},
        Leaflet_FullScreen: function () {
    // console.log('Leaflet_FullScreen');

    L.Control.Fullscreen // A fullscreen button. Or use the `{fullscreenControl: true}` option when creating L.Map.

    // `fullscreenchange` Event that's fired when entering or exiting fullscreen.
	map.on('fullscreenchange', function () {
	    if (map.isFullscreen()) {
	        console.log('entered fullscreen');
	    } else {
	        console.log('exited fullscreen');
	    }
	});

	// map.isFullscreen() // Is the map fullscreen?
	// map.toggleFullscreen() // Either go fullscreen, or cancel the existing fullscreen.

    
},
        Leaflet_AddInfoBox: function () {
    // console.log('Leaflet_AddInfoBox');
        infobox = L.control({
            position: 'bottomright'
        });

        infobox.onAdd = function (e) {
            // this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this._div = L.DomUtil.create('div', 'row info'); // create a div with a class "row"
            this.refresh();
            this.showControl();
            this.hideControl();
            return this._div;
        };

        infobox.refresh = function (properties) {
            this._div.innerHTML = '<h4>RTU Information</h4>';
            this._div.innerHTML += '<hr/>';

            $("#rtu-info-box").show();
            $("#rtu-info-box").appendTo( $(this._div) );
      

        };

        infobox.showControl = function () {
            // console.log('showControl');
            // $("#rtuAddForm").show();
            // $("#rtuAddForm").appendTo( $(this._div) );
            
            // map.removeControl(infobox);
            $(".info").show();

        };

        infobox.hideControl = function () {
            // console.log('hideControl');

            $(".info").hide();

        };

        infobox.addTo(map);

        // Disable dragging when user's cursor enters the element
        infobox.getContainer().addEventListener('mouseover', function () {
            // Disable drag and zoom handlers.
            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.keyboard.disable();

            map.boxZoom.disable();
            if (map.tap) map.tap.disable();
            document.getElementById('map').style.cursor='default';
        });

        // Re-enable dragging when user's cursor leaves the element
        infobox.getContainer().addEventListener('mouseout', function () {
            // Enable drag and zoom handlers.
            map.dragging.enable();
            map.touchZoom.enable();
            map.doubleClickZoom.enable();
            map.scrollWheelZoom.enable();
            map.keyboard.enable();

            map.boxZoom.enable();
            if (map.tap) map.tap.enable();
            document.getElementById('map').style.cursor='grab';
        });

        infobox.getContainer().addEventListener('click', function (event) {
            // console.log('infobox click');
            
            event.stopPropagation()
            event.preventDefault()
            return false
        });

        $(".info").draggable();
        // $(".info").hide();
},
        Leaflet_AddDescriptionBox: function () {
    // console.log('Leaflet_AddDescriptionBox');
        description_box = L.control({
            position: 'bottomleft'
        });

        description_box.onAdd = function (e) {
            // this._div = L.DomUtil.create('div', 'desc'); // create a div with a class "desc"
            this._div = L.DomUtil.create('div', 'row desc'); // create a div with a class "row"
            this.refresh();
            this.showControl();
            this.hideControl();
            return this._div;
        };

        description_box.refresh = function (properties) {
            // this._div.innerHTML = '<h4>Description</h4>';
            // this._div.innerHTML += '<hr/>';

            $("#pressure-range-desc-box").show();
            $("#pressure-range-desc-box").appendTo( $(this._div) );
      

        };

        description_box.showControl = function () {
            // console.log('showControl');
            // $("#rtuAddForm").show();
            // $("#rtuAddForm").appendTo( $(this._div) );
            
            // map.removeControl(description_box);
            $(".desc").show();

        };

        description_box.hideControl = function () {
            // console.log('hideControl');

            $(".desc").hide();

        };

        description_box.addTo(map);

        // Disable dragging when user's cursor enters the element
        description_box.getContainer().addEventListener('mouseover', function () {
            // Disable drag and zoom handlers.
            map.dragging.disable();
            map.touchZoom.disable();
            map.doubleClickZoom.disable();
            map.scrollWheelZoom.disable();
            map.keyboard.disable();

            map.boxZoom.disable();
            if (map.tap) map.tap.disable();
            document.getElementById('map').style.cursor='default';
        });

        // Re-enable dragging when user's cursor leaves the element
        description_box.getContainer().addEventListener('mouseout', function () {
            // Enable drag and zoom handlers.
            map.dragging.enable();
            map.touchZoom.enable();
            map.doubleClickZoom.enable();
            map.scrollWheelZoom.enable();
            map.keyboard.enable();

            map.boxZoom.enable();
            if (map.tap) map.tap.enable();
            document.getElementById('map').style.cursor='grab';
        });

        description_box.getContainer().addEventListener('click', function (event) {
            // console.log('description_box click');
            
            event.stopPropagation()
            event.preventDefault()
            return false
        });

        $(".desc").draggable();
        // $(".desc").hide();
},
        // Get Token
        GetToken: function () {
	// console.log('GetToken');

    $.ajax({
      	url: '../../../../api/loginManager/getJWT/',
      	type: 'GET',
      	contentType: 'application/json',
      	dataType: 'json',
      	cache: false,
        //async: false,
        success: function(data) {
            //console.log(data);

            fn.token = data.jwt;
            //console.log(fn.token);

        },
        error: function(jqXHR, textStatus, errorThrown){
        	// alert('init error: ' + textStatus);
          var url = '../../../Login/';
          $(location).attr('href',url);
        }
    });
    
},
        // Logout
        Logout: function () {
	// console.log('Logout');

    $.ajax({
      	url: '../../../../api/loginManager/logout/',
      	type: 'POST',
      	contentType: 'application/json',
      	dataType: 'json',
      	cache: false,
        //async: false,
        success: function(data) {
            //console.log(data);

            //window.location.href = '../Admin/';
            var url = '../../../Login/';
            $(location).attr('href',url);

            //console.log(window.location.pathname);

        },
        error: function(jqXHR, textStatus, errorThrown){
        	alert('init error: ' + textStatus);
        }
    });
    
},
        // Apps
                Apps: function () {
        	// console.log('Apps');

            $('#button-logout').bind('click', function(){
            	fn.Logout();
            });

            $('#btn-auto-update').bind('click', function(){
            	// console.log("auto update");

            	if (!autoUpdateFlag) {

            		
                    $('#btn-auto-update').html('<i class="fa fa-spinner fa-pulse"></i>');

                    
                    autoUpdateTimer = setTimeout(fn.AutoUpdate(), 2000);

            		autoUpdateFlag = true;

            	} else {
            		
                    $('#btn-auto-update').html('<i class="fa fa-clock-o"></i>');

                    clearTimeout(autoUpdateTimer);

            		autoUpdateFlag = false;
            	}

            });

        }

    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);



