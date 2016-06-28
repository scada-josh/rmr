<?php
session_start(); //start session.
?>

<!DOCTYPE html>
<html>
    <head>
        <base href="/rmr/build/src/desktop/Home/REPORT/WLMA-SCADA/WS-01-01/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>WLMA-SCADA : Flow & Pressure</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link href="../../../../../../stylesheets/stylesheet-rmr-home-report-wlma_scada-ws_01_01.css" rel="stylesheet" type="text/css" />

        <link rel="shortcut icon" href="../../../../../../images/rmr/favicon.ico">
    </head>
    <body>

        <!-- PHP Script - Check JWT Sesstion -->
                <?php

            if(isset($_SESSION['jwt']) && $_SESSION['jwt'] != "") {
                    //Task to do
            } else {

                header('Location: ../../../../Login/index.php'); //redirect URL
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
                        <img class="nav-user-photo" src="../../../../../../images/images-flaty_theme/img/demo/avatar/avatar5.jpg" alt="User's Photo" />
                        <span class="hhh" id="user_info">
                            User
                        </span>
                        <i class="fa fa-caret-down"></i>
                    </a>

                    <!-- BEGIN User Dropdown -->
                    <ul class="dropdown-menu dropdown-navbar" id="user_menu">
                        <!-- <li class="nav-header">
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
                        </li> -->
                        
                        <li class="nav-header">
                            <i class="fa fa-clock-o"></i>
                            WLMA Extension
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa fa-question"></i>
                                Help
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
                                <input type="text" name="search" placeholder="Search ..." autocomplete="off" disabled />
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
                            <span>WLMA-SCADA</span>
                            <b class="arrow fa fa-angle-right"></b>
                        </a>

                        <!-- BEGIN Submenu -->
                        <ul class="submenu">
                            <li class="">
                                <a href="./">Pressure & Flow</a>
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
                        <h1><i class="fa fa-file-o"></i>   Presure & Flow</h1>
                        <h4>แสดงรายการข้อมูล Presure & Flow แยกตาม DM</h4>
                    </div>
                </div>
                <!-- END Page Title -->
			    	<!-- Home - Container - MainContent - breadCrumbs  -->
			    	                <!-- BEGIN Breadcrumb -->
                <div>
                    <ul class="breadcrumb">
                        <li class="">
                        	<i class="fa fa-home"></i> 
                        	<a href="../../../">Home</a>
                        	<span class="divider"><i class="fa fa-angle-right"></i></span>
                        </li>
                        <li class="active">
                            WLMA-SCADA
                            <span class="divider"><i class="fa fa-angle-right"></i></span>
                        </li>
                        <li class="active">
                            Presure & Flow
                        </li>
                        <!-- <li class="active"> &nbsp; </li> -->
                    </ul>
                </div>
                <!-- END Breadcrumb -->



					
					

			        <!-- Home - Container - MainContent - menuTile  -->
			    	                        <div class="box" >
                            <div class="box-title">
                                <h3><i class="fa fa-file"></i> รายการข้อมูล RTU</h3>
                                <div class="box-tool">
                                    <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                                    <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                                </div>
                            </div>
                            <div class="box-content" >

                                <div class="btn-toolbar pull-right clearfix">
                                    <div class="btn-group">
                                        <a class="btn btn-circle" title="Sync Data" href="#" id="sync-data">
                                        <span class="glyphicon glyphicon-transfer"></span>
                                        </a>
                                    </div>
                                    <div class="btn-group">
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-circle show-tooltip" title="Refresh" id="refresh-data" href="#"><i class="fa fa-repeat"></i></a>
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
                                                <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">IP</th>
                                                <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">(LAT, LNG)</th>
                                                <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">Flow</th>
                                                <th class="text-center hidden-xs hidden-sm" style="vertical-align:middle">Pressure</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                         
                                        <tbody>
                                            <tr>
                                                <th class="text-center " style="vertical-align:middle">DM-01-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">B01</th>
                                                <th class="text-center " style="vertical-align:middle">01</th>
                                                <th class="text-center " style="vertical-align:middle">DMA-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">10.30.122.30</th>
                                                <th class="text-center " style="vertical-align:middle">(13.7629890,100.4732361)</th>
                                                <th class="text-center " style="vertical-align:middle">5.35</th>
                                                <th class="text-center " style="vertical-align:middle">102.3</th>
                                                <th>
                                                    <div class="btn-group">
                                                        <a class="btn btn-sm show-tooltip" title="" href="javascript:;" data-original-title="Map">
                                                            <i class="fa fa-globe"></i>
                                                        </a>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="text-center " style="vertical-align:middle">DM-01-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">B01</th>
                                                <th class="text-center " style="vertical-align:middle">01</th>
                                                <th class="text-center " style="vertical-align:middle">DMA-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">10.30.122.30</th>
                                                <th class="text-center " style="vertical-align:middle">(13.7629890,100.4732361)</th>
                                                <th class="text-center " style="vertical-align:middle">5.35</th>
                                                <th class="text-center " style="vertical-align:middle">102.3</th>
                                                <th>
                                                    <div class="btn-group">
                                                        <a class="btn btn-sm show-tooltip" title="" href="javascript:;" data-original-title="Map">
                                                            <i class="fa fa-globe"></i>
                                                        </a>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="text-center " style="vertical-align:middle">DM-01-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">B01</th>
                                                <th class="text-center " style="vertical-align:middle">01</th>
                                                <th class="text-center " style="vertical-align:middle">DMA-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">10.30.122.30</th>
                                                <th class="text-center " style="vertical-align:middle">(13.7629890,100.4732361)</th>
                                                <th class="text-center " style="vertical-align:middle">5.35</th>
                                                <th class="text-center " style="vertical-align:middle">102.3</th>
                                                <th>
                                                    <div class="btn-group">
                                                        <a class="btn btn-sm show-tooltip" title="" href="javascript:;" data-original-title="Map">
                                                            <i class="fa fa-globe"></i>
                                                        </a>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="text-center " style="vertical-align:middle">DM-01-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">B01</th>
                                                <th class="text-center " style="vertical-align:middle">01</th>
                                                <th class="text-center " style="vertical-align:middle">DMA-01-01-01</th>
                                                <th class="text-center " style="vertical-align:middle">10.30.122.30</th>
                                                <th class="text-center " style="vertical-align:middle">(13.7629890,100.4732361)</th>
                                                <th class="text-center " style="vertical-align:middle">5.35</th>
                                                <th class="text-center " style="vertical-align:middle">102.3</th>
                                                <th>
                                                    <div class="btn-group">
                                                        <a class="btn btn-sm show-tooltip" title="" href="javascript:;" data-original-title="Map">
                                                            <i class="fa fa-globe"></i>
                                                        </a>
                                                    </div>
                                                </th>
                                            </tr>
                                            
                                            
                                        </tbody>       
                                    </table>
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

        <script src="../../../../../../javascripts/javascript-rmr-home-report-wlma_scada-ws_01_01.js" type="text/javascript"></script>

    </body>
</html>