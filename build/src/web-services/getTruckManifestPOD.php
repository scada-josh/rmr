<?php header('Content-Type: text/html; charset=utf-8'); ?>

<?php
require_once '../../packages/autoload.php';

// $client = new nusoap_client("http://58.137.5.126/epodws/service.asmx?wsdl", true);
$client = new nusoap_client("http://58.137.5.126/epodws/service.asmx?wsdl", true);
// $client->soap_defencoding = 'UTF-8';
$endpoint = "http://58.137.5.126/epodws/service.asmx?wsdl";
$client->forceEndpoint = $endpoint;


$client->soap_defencoding = 'UTF-8';
$client->decode_utf8 = false; // แก้ปัญหาตัวอักษรภาษาไทยแสดง ???????? (web service unicode characters dispaly as question marks)
$client->encode_utf8 = true;



// $params = array(
//                 'strEmpId' => '',
//                 'strJobNo' => 'JHO160429090'  
//                 );
// $result = $client->call('getTruckManifestPOD', $params);
// $result = $client->call('getTruckManifestPOD', array("strJobNo" => "JHO160429090", "strEmpId" => ""));




// print_r($result);

$error = $client->getError();
if ($error) {
    echo "<h2>Constructor error</h2><pre>" . $error . "</pre>";
}

// $params = array(
//                 'strEmpId' => '',
//                 'strJobNo' => 'JHO160429090'  
//                 );
// $result = $client->call('getTruckManifestPOD', $params);
$result = $client->call('getTruckManifestPOD', array("strJobNo" => "JHO160429090", "strEmpId" => ""));


// echo '<h2>Request</h2><pre>' . htmlspecialchars($client->request, ENT_QUOTES) . '</pre>';
// echo '<h2>Response</h2><pre>' . htmlspecialchars($client->response, ENT_QUOTES) . '</pre>';
// echo '<h2>Debug</h2><pre>' . htmlspecialchars($client->debug_str, ENT_QUOTES) . '</pre>';



$mydata = json_decode($result["getTruckManifestPODResult"],true); // json decode from web service



if ($client->fault) {
    echo "<h2>Fault</h2><pre>";
    print_r($result);
    echo "</pre>";
} else {
    $error = $client->getError();
    if ($error) {
        echo "<h2>Error</h2><pre>" . $error . "</pre>";
    }
    else {
        // echo $mydata;
        for ($i=0; $i < count($mydata["array"]); $i++) { 
            echo $mydata["array"][$i]['doc_id']."<br/>";
            echo $mydata["array"][$i]['sender']."<br/>"; 
            echo $mydata["array"][$i]['recipient']."<br/>"; 
            echo $mydata["array"][$i]['recipient_addres']."<br/>"; 
            echo $mydata["array"][$i]['est_date']."<br/>"; 
            echo $mydata["array"][$i]['doc_date']."<br/>"; 
            echo $mydata["array"][$i]['job_type']."<br/>"; 
            echo $mydata["array"][$i]['qty']."<br/>"; 
            echo $mydata["array"][$i]['cod_amount']."<br/>"; 
            echo $mydata["array"][$i]['remark']."<br/>"; 
            echo $mydata["array"][$i]['db_name']."<br/>"; 
            echo $mydata["array"][$i]['recipient_id']."<br/>"; 
            echo $mydata["array"][$i]['phone']."<br/>"; 
            echo "- - - - - - - - - - - - - - - - - - - - "."<br/>";


        }
        

    }
}

?>