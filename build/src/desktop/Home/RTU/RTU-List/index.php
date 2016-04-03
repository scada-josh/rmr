<?php
session_start(); //start session.
?>

<!DOCTYPE html>
<html>
    <head>
        <base href="/rmr/build/src/desktop/Home/RTU/RTU-List/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>RTU Manager - RTU List</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link href="../../../../../stylesheets/stylesheet-rmr-home-rtu-rtuList.css" rel="stylesheet" type="text/css" />

        <link rel="shortcut icon" href="../../../../../images/rmr/favicon.ico">
    </head>
    <body>

        <!-- PHP Script - Check JWT Sesstion -->
                <?php

            if(isset($_SESSION['jwt']) && $_SESSION['jwt'] != "") {
                    //Task to do
            } else {

                header('Location: ../../../Login/index.php'); //redirect URL
            }
        ?>


                <!-- Admin - Navbar  -->
                <!-- BEGIN Navbar -->
        <!-- <div id="navbar" class="navbar"> -->
        <div id="navbar" class="navbar navbar-fixed navbar-blue">
            <button type="button" class="navbar-toggle navbar-btn collapsed" data-toggle="collapse" data-target="#sidebar">
                <span class="fa fa-bars"></span>
            </button>
            <a class="navbar-brand" href="#">
                <small>
                    <i class="fa fa-desktop"></i>
                    WLMA-Extension
                </small>
            </a>

            <!-- BEGIN Navbar Buttons -->
            <ul class="nav flaty-nav pull-right">

                        <!-- navbar - Button Task  -->

                        <!-- navbar - Button Notifications  -->

                        <!-- navbar - Button Messages  -->

                        <!-- navbar - Button User  -->
                                        <!-- BEGIN Button User -->
                <li class="user-profile">
                    <a data-toggle="dropdown" href="#" class="user-menu dropdown-toggle">
                        <img class="nav-user-photo" src="../../../../../images/images-flaty_theme/img/demo/avatar/avatar_kapook.jpg" alt="Kapook's Photo" />
                        <span class="hhh" id="user_info">
                            Kapook
                        </span>
                        <i class="fa fa-caret-down"></i>
                    </a>

                    <!-- BEGIN User Dropdown -->
                    <ul class="dropdown-menu dropdown-navbar" id="user_menu">
                        <li class="nav-header">
                            <i class="fa fa-clock-o"></i>
                            Logined From 20:45
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa fa-cog"></i>
                                Account Settings
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa fa-user"></i>
                                Edit Profile
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa fa-question"></i>
                                Help
                            </a>
                        </li>

                        <li class="divider visible-xs"></li>

                        <li class="visible-xs">
                            <a href="#">
                                <i class="fa fa-tasks"></i>
                                Tasks
                                <span class="badge badge-warning">4</span>
                            </a>
                        </li>
                        <li class="visible-xs">
                            <a href="#">
                                <i class="fa fa-bell"></i>
                                Notifications
                                <span class="badge badge-important">8</span>
                            </a>
                        </li>
                        <li class="visible-xs">
                            <a href="#">
                                <i class="fa fa-envelope"></i>
                                Messages
                                <span class="badge badge-success">5</span>
                            </a>
                        </li>

                        <li class="divider"></li>

                        <li>
                            <!-- <a href="../Login/index.php">
                                <i class="fa fa-off"></i>
                                Logout
                            </a> -->
                            <a href="#" id="button-logout">
                                <i class="fa fa-off"></i>
                                Logout
                            </a>
                        </li>
                    </ul>
                    <!-- BEGIN User Dropdown -->
                </li>
                <!-- END Button User -->

            </ul>
            <!-- END Navbar Buttons -->
        </div>
        <!-- END Navbar -->

        <!-- BEGIN Container -->
        <div class="container sidebar-blue" id="main-container">

        		<!-- Home - Container - Sidebar  -->
			                <!-- BEGIN Sidebar -->
            <!-- <div id="sidebar" class="navbar-collapse collapse"> -->
            <div id="sidebar" class="navbar-collapse collapse sidebar-fixed">
                <!-- BEGIN Navlist -->
                <ul class="nav nav-list">
                    <!-- BEGIN Search Form -->
                    <li>
                        <form target="#" method="GET" class="search-form">
                            <span class="search-pan">
                                <button type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                                <input type="text" name="search" placeholder="Search ..." autocomplete="off" />
                            </span>
                        </form>
                    </li>
                    <!-- END Search Form -->

                        <!-- sidebar - Dashboard  -->
                                            <li class="">
                        <a href="../">
                            <i class="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>




                    

                        <!-- sidebar - RMR  -->
                                            <li class="active">
                        <a href="#" class="dropdown-toggle">
                            <i class="fa fa-desktop"></i>
                            <span>RTU Manager</span>
                            <b class="arrow fa fa-angle-right"></b>
                        </a>

                        <!-- BEGIN Submenu -->
                        <ul class="submenu">
                            <li class="">
                                <a href="./">รายการข้อมูล RTU</a>
                            </li>
                        </ul>
                        <!-- END Submenu -->
                    </li>

                   

                    
                </ul>
                <!-- END Navlist -->

                <!-- BEGIN Sidebar Collapse Button -->
                <div id="sidebar-collapse" class="visible-lg">
                    <i class="fa fa-angle-double-left"></i>
                </div>
                <!-- END Sidebar Collapse Button -->
            </div>
            <!-- END Sidebar -->

			    <!-- BEGIN Content -->
			    <div id="main-content" >


			    	<!-- Home - Container - MainContent - pageTitle  -->
			    	                <!-- BEGIN Page Title -->
                <div class="page-title">
                    <div>
                        <h1><i class="fa fa-dashboard"></i>   รายการข้อมูล RTU</h1>
                        <h4>You can start your customization from this one!</h4>
                    </div>
                </div>
                <!-- END Page Title -->
			    	<!-- Home - Container - MainContent - breadCrumbs  -->
			    	                <!-- BEGIN Breadcrumb -->
                <div>
                    <ul class="breadcrumb">
                        <li>
                        	<i class="fa fa-home"></i> 
                        	<a href="../../">Home</a>
                            <span class="divider"><i class="fa fa-angle-right"></i></span>
                        </li>
                        <li class="active">
                            RTU Manager
                            <span class="divider"><i class="fa fa-angle-right"></i></span>
                        </li>
                        <!-- <li class="active">รายการข้อมูล RTU</li> -->
                        <li class="active breadcrumb-rtuLink-rtuList">
                            <span class="rtuLink"> รายการข้อมูล RTU </span>
                            <span class="divider breadcrumb-angleRight-rtuList" style="display:none">   
                                <i class="fa fa-angle-right"></i>
                            </span>
                        </li>
                        <li class="active breadcrumb-title-rtuList" style="display:none">
                            เพิ่มข้อมูล RTU / แก้ไขข้อมูล RTU
                        </li>
                    </ul>
                </div>
                <!-- END Breadcrumb -->






			    	<!-- Home - Container - MainContent - sampleBox  -->
			    	<div class="box canvas-rtuInformation" id="canvas-rtuInformation-default">
        <div class="box-title">
            <h3><i class="fa fa-file"></i> รายการข้อมูล RTU</h3>
            <div class="box-tool">
                <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                <!-- <a data-action="close" href="#"><i class="fa fa-times"></i></a> -->
            </div>
        </div>
        <div class="box-content" >

            <div class="btn-toolbar pull-right clearfix">
                <!-- <div class="btn-group">
                    <a class="btn btn-circle show-tooltip" title="Add new record" href="#"><i class="fa fa-plus"></i></a>
                    <a class="btn btn-circle show-tooltip" title="Edit selected" href="#"><i class="fa fa-edit"></i></a>
                    <a class="btn btn-circle show-tooltip" title="Delete selected" href="#"><i class="fa fa-trash-o"></i></a>
                </div> -->
                <div class="btn-group">
                    <a class="btn btn-circle show-tooltip goto-addEvent" title="Add new record" href="#" id="rtuList-goto-add">
                    <i class="fa fa-plus"></i>
                    </a>
                </div>
                <div class="btn-group">
                    <!-- <a class="btn btn-circle show-tooltip" title="Print" href="#"><i class="fa fa-print"></i></a> -->
                    <a class="btn btn-circle show-tooltip" title="Export to PDF" href="#"><i class="fa fa-file-text-o"></i></a>
                    <a class="btn btn-circle show-tooltip" title="Export to Exel" href="#"><i class="fa fa-table"></i></a>
                </div>
                <div class="btn-group">
                    <a class="btn btn-circle show-tooltip" title="Refresh" id="AttendeeParticipateEventDataTable_btnRefresh" href="#"><i class="fa fa-repeat"></i></a>
                </div>
            </div>

<br/><br/>
<div class="clearfix"></div>


            <div class="table-responsive" style="border:0">
                <table class="table table-advance" id="mainRtuDataTable" style="width: 100% !important;" >
                    <thead>
                        <tr>
                            <th class="text-center " style="vertical-align:middle">DM</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">BRANCH</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">ZONE</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">DMA</th>
                            <th class="text-center " style="vertical-align:middle">IP</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">COMM</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">(LAT, LNG)</th>
                            <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">LOCATION</th>
                            <th ></th>
                        </tr>
                    </thead>
                     
                    <tbody>
                     
                        <!-- <tr>
                            <th >DM-01-01-01-01</th>
                            <th >B01</th>
                            <th >10.202.68.253</th>
                            <th ></th>
                            <th ></th>
                        </tr> -->
                        
                    </tbody>       
                </table>
            </div>             
        </div>
</div>

                        
			    	    
<div class="row canvas-rtuInformation" id="canvas-rtuInformation-mapBox" style="display:none">
    <div class="col-md-12">
        <div class="box">
            <div class="box-title">
                <h3><i class="fa fa-file"></i> แผนที่แสดงตำแหน่ง RTU</h3>
                <div class="box-tool">
                    <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                    <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                </div>
            </div>
            <div class="box-content" style="height:400px;" id="map">
                <!-- <p>Blank page</p> -->
            </div>
        </div>
    </div>
</div>

			    	

			        <footer>
			            <p>Copyright © 2015 MWA. All rights reserved.</p>
			        </footer>
			        <a id="btn-scrollup" class="btn btn-circle btn-lg" href="#"><i class="fa fa-chevron-up"></i></a>
			    </div>
			    <!-- END Content -->
        </div>
        <!-- END Container -->
        

        <script src="http://maps.google.com/maps/api/js?v=3&amp;sensor=false"></script>
        <script src="../../../../../javascripts/javascript-rmr-home-rtu-rtuList.js" type="text/javascript"></script>

    </body>
</html>