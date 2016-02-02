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

        <?php

            if(isset($_SESSION['userName']) && $_SESSION['userName'] != "") {
                    //Task to do
            } else {

                header('Location: ../../../../../Login/index.php'); //redirect URL
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
                    WLMA-Admin
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
                        <li class="active">รายการข้อมูล RTU</li>
                    </ul>
                </div>
                <!-- END Breadcrumb -->

			    	<!-- Home - Container - MainContent - sampleBox  -->
			    	                        <div class="box canvas-rtuInformation" id="canvas-rtuInformation-default">
                            <div class="box-title">
                                <h3><i class="fa fa-file"></i> รายการ RTU</h3>
                                <div class="box-tool">
                                    <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                                    <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                                </div>
                            </div>
                            <div class="box-content" >
                                <!-- <p>Blank page</p> -->


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
        <th >DM</th>
        <th >Branch</th>
        <th >IP</th>
        <th >lat, lng</th>
        <th ></th>
    </tr>
</thead>
 
<tbody>
 
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    <tr>
        <th >DM-01-01-01-01</th>
        <th >B01</th>
        <th >10.202.68.253</th>
        <th ></th>
        <th ></th>
    </tr>
    
</tbody>
                        
</table>

</div>



                                
                            </div>
                        </div>

                        
			    	<!-- <div class="box canvas-rtuInformation" id="canvas-rtuInformation-add" style="display:none">
    <div class="box-title">
        <h3><i class="fa fa-file"></i> Add Box</h3>
        <div class="box-tool">
            <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
            <a data-action="close" href="#"><i class="fa fa-times"></i></a>
        </div>
    </div>
    <div class="box-content" style="height:400px;">
    </div>
</div> -->

<div class="row canvas-rtuInformation" id="canvas-rtuInformation-add" style="display:none">
    <div class="col-md-12">
        <div class="box">
            <div class="box-title">
                <h3><i class="fa fa-bars"></i> เพิ่มข้อมูล RTU</h3>
                <div class="box-tool">
                    <a data-action="collapse" href="#"><i class="fa fa-chevron-up"></i></a>
                    <a data-action="close" href="#"><i class="fa fa-times"></i></a>
                </div>
            </div>
            <div class="box-content">
                <form action="#" class="form-horizontal" id="form-wizard-rtuList-validation">
                   <div class="form-wizard" id="form-wizard-rtuList">
                      <ul class="row steps steps-fill">
                         <li class="col-xs-12 col-sm-6 col-lg-4">
                            <a href="#tab2-1" data-toggle="tab" class="step active">
                                <span class="number">1</span>
                                <span class="desc"><i class="fa fa-check"></i> ข้อมูลพื้นฐาน</span>   
                            </a>
                         </li>
                         <li class="col-xs-12 col-sm-6 col-lg-4">
                            <a href="#tab2-2" data-toggle="tab" class="step">
                                <span class="number">2</span>
                                <span class="desc"><i class="fa fa-check"></i> ระบุพิกัด RTU</span>   
                            </a>
                         </li>
                         <li class="col-xs-12 col-sm-6 col-lg-4">
                            <a href="#tab2-3" data-toggle="tab" class="step">
                                <span class="number">3</span>
                                <span class="desc"><i class="fa fa-check"></i> Confirm</span>   
                            </a> 
                         </li>
                      </ul>
                      <div class="progress progress-striped">
                         <div class="progress-bar progress-bar-primary"></div>
                      </div>
                      <div class="tab-content">


                     <div class="tab-pane active" id="tab2-1">

    <div class="form-group">
        <label for="firstname2" class="col-sm-3 col-lg-2 control-label">DM : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="firstname2" id="firstname2" class="form-control" >
        </div>
    </div>

    <div class="form-group">
        <label for="firstname2" class="col-sm-3 col-lg-2 control-label">Branch : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="firstname2" id="firstname2" class="form-control" >
        </div>
    </div>

    <div class="form-group">
        <label for="firstname2" class="col-sm-3 col-lg-2 control-label">Zone : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="firstname2" id="firstname2" class="form-control" >
        </div>
    </div>

    <div class="form-group">
        <label for="firstname2" class="col-sm-3 col-lg-2 control-label">DMA : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="firstname2" id="firstname2" class="form-control" >
        </div>
    </div>


    <div class="form-group">
        <label for="lastname2" class="col-sm-3 col-lg-2 control-label">IP Address : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="lastname2" id="lastname2" class="form-control" >
        </div>
    </div>

    <div class="form-group">
        <label for="lastname2" class="col-sm-3 col-lg-2 control-label">Logger Device</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="lastname2" id="lastname2" class="form-control" >
        </div>
    </div>

    <div class="form-group">
        <label for="lastname2" class="col-sm-3 col-lg-2 control-label">Location</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="lastname2" id="lastname2" class="form-control" >
        </div>
    </div>


 </div>
                     <div class="tab-pane" id="tab2-2">

   
 <img style="width: 100%" src="../../../../../images/rmr/map-prototype.png">
  


    <!-- <div class="form-group">
        <label for="username2" class="col-sm-3 col-lg-2 control-label">Username</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="username2" id="username2" class="form-control" data-rule-required="true" data-rule-minlength="3">
        </div>
    </div>
    <div class="form-group">
        <label for="password2" class="col-sm-3 col-lg-2 control-label">Password</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="password" name="password2" id="password2" class="form-control" data-rule-required="true" data-rule-minlength="6">
        </div>
    </div>
    <div class="form-group">
        <label for="re-password2" class="col-sm-3 col-lg-2 control-label">Password Again</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="password" name="re-password2" id="re-password2" class="form-control" data-rule-required="true" data-rule-minlength="6" data-rule-equalTo="#password2">
        </div>
    </div>
    <div class="form-group">
        <label for="email2" class="col-sm-3 col-lg-2 control-label">Email</label>
        <div class="col-sm-5 col-lg-3 controls">
            <input type="text" name="email2" id="email2" class="form-control" data-rule-required="true" data-rule-email="true">
        </div>
    </div> -->
 </div>
                     <div class="tab-pane" id="tab2-3">
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">DM : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">DM-01-01-01-01</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">Branch : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">B01</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">Zone : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">01</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">DMA : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">DMA-01-01-01</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">IP Address : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">10.102.13.24</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">Logger Device : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">WAGO</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">Location : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">จรัญสนิทวงค์ ใกล้ 7-11 ปากซอยวัดบัวขวัญ</span>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 col-lg-2 control-label">พิกัด Lat,Lng : </label>
        <div class="col-sm-5 col-lg-3 controls">
            <span class="text">(13.757616, 100.567193)</span>
        </div>
    </div>
 </div>

                      </div>
                      <div class="form-group">
                        <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
                            <a href="javascript:;" class="btn button-previous">Back</a>
                            <a href="javascript:;" class="btn btn-primary button-next">Continue</a>
                            <a href="javascript:;" class="btn btn-success button-submit">Submit</a>
                        </div>
                      </div>
                   </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- END Main Content -->







			    	

			        <footer>
			            <p>Copyright © 2015 MWA. All rights reserved.</p>
			        </footer>
			        <a id="btn-scrollup" class="btn btn-circle btn-lg" href="#"><i class="fa fa-chevron-up"></i></a>
			    </div>
			    <!-- END Content -->
        </div>
        <!-- END Container -->

        <script src="../../../../../javascripts/javascript-rmr-home-rtu-rtuList.js" type="text/javascript"></script>

    </body>
</html>