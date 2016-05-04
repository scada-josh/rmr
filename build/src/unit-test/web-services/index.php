<?php
    date_default_timezone_set("Asia/Bangkok");

    require_once '../../packages/autoload.php';

	function getProd($category) {
	    if ($category == "books") {
	        // return join(",", array(
	        //     "The WordPress Anthology",
	        //     "PHP Master: Write Cutting Edge Code",
	        //     "Build Your Own Website the Right Way"));
	        return json_encode(array("cmd" => "LOGIN",
	        						 "status" => "LOGINOK",
	        						 "fullname" => "John Smith", 
	        						 "phone" => "0987654321", 
	        						 "credit" => "5600", 
	        						 "session" => "ID24324343434"));
		}
		else {
	            return "No products listed under that category";
		}
	}

	$server = new soap_server();
	// $server->register("getProd");
	$server->configureWSDL("productlist", "urn:productlist");

	$server->register("getProd",
				    array("category" => "xsd:string"),
				    array("return" => "xsd:string"),
				    "urn:productlist",
				    "urn:productlist#getProd",
				    "rpc",
				    "encoded",
				    "Get a listing of products by category");

	// $server->service($HTTP_RAW_POST_DATA);
	if ( !isset( $HTTP_RAW_POST_DATA ) ) $HTTP_RAW_POST_DATA =file_get_contents( 'php://input' );
	$server->service($HTTP_RAW_POST_DATA);
?>