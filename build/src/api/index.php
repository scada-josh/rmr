<?php
session_start(); //start session.
?>

<?php
    date_default_timezone_set("Asia/Bangkok");

    require_once '../../packages/autoload.php';

    /* Connect Database Manager Partial */
    $conn_db2 = "";
        $dsn = "mysql:dbname=rmr_db;host=localhost;charset=UTF8";
    $username = "root";
    $password = "";
    $pdo = new PDO($dsn, $username, $password);
    $db = new NotORM($pdo);



    /* Slim framework 2.x */
    $app = new \Slim\Slim();

    use \Firebase\JWT\JWT;
    $app->add(new \Slim\Middleware\JwtAuthentication([
         //"secure" => false,
        "secret" => "supersecretkeyyoushouldnotcommittogithub",
        //"path"=> "/user",
        "callback" => function ($options) use ($app) {
            $app->jwt = $options["decoded"];
        },
        "rules" => [
            new \Slim\Middleware\JwtAuthentication\RequestPathRule([
                "path" => ["/token", "/user"],
                "passthrough" => ["/user"]
            ]),
            new \Slim\Middleware\JwtAuthentication\RequestMethodRule([
                "passthrough" => ["OPTIONS"]
            ])
        ]
    ]));



    $app->post("/token", function () use ($app) {

      /* Here generate and return JWT to the client. */
      // $key = "supersecretkeyyoushouldnotcommittogithub";
      // $token = array(
      //     "id" => "1",
      //     "exp" => time() + (60 * 60 * 24)
      //     );
      // $jwt = JWT::encode($token, $key);
      // $app->response->headers->set('Content-Type', 'application/json');
      // echo json_encode(array("token" =>$jwt));

       $secretKey = base64_decode("supersecretkeyyoushouldnotcommittogithub");


       /*** Extract the jwt from the Bearer ***/
       $request = $app->request();
       $authHeader = $request->headers('authorization');
       list($jwt) = sscanf( (string)$authHeader, 'Bearer %s');


       if (in_array("delete", $app->jwt->scope)) {
        /* Code for deleting item */
        $token = $app->jwt->id;
      } else {
        /* No scope so respond with 401 Unauthorized */
        $this->app->response->status(401);
      }

       echo json_encode(array("AuthHeader" => $authHeader, "Hash_Token" => $jwt, "token" => $token));
      //print_r($app->jwt);

    });





    /* Test Manager */
    $app->get('/testManager/getMsg/:name',function($name) use ($app) { getMsg($app, $name); });



    $app->get("/user", function () use ($app) {

        // $app->response->headers->set('Content-Type', 'application/json');
        // echo json_encode(array("token" => $$app->jwt));

      $key = "supersecretkeyyoushouldnotcommittogithub";
      $token = array(
          "id" => "1",
          "exp" => time() + (60 * 10),
          "scope" => ["read", "write", "delete"]
          );
      $jwt = JWT::encode($token, $key);
      $app->response->headers->set('Content-Type', 'application/json');
      echo json_encode(array("token" =>$jwt));

    });



    $app->get('/login', function () use ($app) {

      $params = $app->request()->getBody();
      $key = "supersecretkeyyoushouldnotcommittogithub";
      $token = array(
          "id" => "2",
          "exp" => time() + (60 * 60 * 24),
          "scope" => ["read", "write", "delete"]
          );
      $jwt = JWT::encode($token, $key);
      $app->response->headers->set('Content-Type', 'application/json');
      echo json_encode(array("token" =>$jwt));

    });




    /* Login manager */
    $app->post('/loginManager/checkUserPassword/',function() use ($app, $pdo, $db) { checkUserPassword($app, $pdo, $db); });
    $app->post('/loginManager/logout/',function() use ($app, $pdo, $db) { logout($app, $pdo, $db); });

    /* WLMA manager */
    $app->post('/wlmaManager/checkUserPasswordFromWLMA/',function() use ($app, $pdo, $conn_db2) { checkUserPasswordFromWLMA($app, $pdo, $conn_db2); });
    $app->post('/wlmaManager/reportPressureAverage/',function() use ($app, $pdo, $conn_db2) { reportPressureAverage($app, $pdo, $conn_db2); });

    // $corsOptions = array("origin" => "*");
    // $app->post('/loginManager/logout/',\CorsSlim\CorsSlim::routeMiddleware($corsOptions) ,function() use ($app, $pdo, $db) { 
    //     logout($app, $pdo, $db); 
    // });
	

	$app->run();

    /* Test Manager Partial */
        /**
     *
     * @apiName GetMsg
     * @apiGroup TEST Manager
     * @apiVersion 0.1.0
     *
     * @api {get} /testManager/getMsg/:name GET Msg (v 0.1.0)
     * @apiDescription คำอธิบาย : ทดสอบ GET - RESTful Web Service
     *
     *
     * @apiParam {String} name     New name of the user
     *
     * @apiSampleRequest /testManager/getMsg/:name
     *
     * @apiSuccess {String} msg แสดงข้อความทักทายผู้ใช้งาน
     *
     * @apiSuccessExample Example data on success:
     * {
     *   "msg": "Hello, anusorn"
     * }
     *
     * @apiError UserNotFound The <code>id</code> of the User was not found.
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "UserNotFound"
     *     }
     *
     */

    function getMsg($app, $name) {

        //$name = $request->getAttribute('name');
        //echo "สวัสดี, $name";
        $return_m = array("msg" => "สวัสดี, $name");

        //$response->getBody()->write("Hello, $name");
        // $response->header("Content-Type", "application/json");
        // $response->getBody()->write($return_m);

        $app->response()->header("Content-Type", "application/json");
        echo json_encode($return_m);
    };

    /* Login Manager Partial */
    	/**
	 *
	 * @apiName CheckUserPassword
	 * @apiGroup Login Manager
	 * @apiVersion 0.1.0
	 *
	 * @api {post} /loginManager/checkUserPassword/ Check User Password
	 * @apiDescription คำอธิบาย : ในส่วนนี้จะมีหน้าที่ตรวจสอบ User และ Password ก่อนเข้าใช้งานระบบ
	 *
	 *
	 * @apiSampleRequest /loginManager/checkUserPassword/
	 *
	 * @apiSuccess {String} msg แสดงข้อความทักทายผู้ใช้งาน
	 *
	 * @apiSuccessExample Example data on success:
	 * {
	 *   "msg": "Hello, anusorn"
	 * }
	 *
	 * @apiError UserNotFound The <code>id</code> of the User was not found.
	 * @apiErrorExample {json} Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 *
	 */
	 function checkUserPassword($app, $pdo, $db) {

	 	/* ************************* */
        /* เริ่มกระบวนการรับค่าพารามิเตอร์จากส่วนของ Payload ซึ่งอยู่ในรูปแบบ JSON */
        /* ************************* */
        $headers = $app->request->headers;
        $ContetnType = $app->request->headers->get('Content-Type');

        /**
        * apidoc @apiSampleRequest, iOS RESTKit use content-type is "application/json"
        * Web Form, Advance REST Client App use content-type is "application/x-www-form-urlencoded"
        */
        if ($ContetnType == "application/json") {

	        $request = $app->request();
	        $result = json_decode($request->getBody());

	        /* receive request */
	        $postUserName = $result->userName;
	        $postPassWord = $result->passWord;


		} else if ($ContetnType == "application/x-www-form-urlencoded"){

		    //$userID = $app->request()->params('userID_param');
		    //$userID = $app->request()->post('userID_param');
		}


	 	//$_SESSION['userName'] = $postUserName;

	 	$_SESSION['userName'] = "aaa";

	  	//$return_m = array("msg" => "Hello, Current PHP version: ". phpversion());
	  	$return_m = array("UserName" => $_SESSION['userName'], "PassWord" => $postPassWord);
	    echo json_encode($return_m);

	 }
	 
    	/**
	 *
	 * @apiName Logout
	 * @apiGroup Login Manager
	 * @apiVersion 0.1.0
	 *
	 * @api {post} /loginManager/logout/ Log Out
	 * @apiDescription คำอธิบาย : ในส่วนนี้จะมีหน้าที่ Log out เพื่อออกจากระบบ
	 *
	 *
	 * @apiSampleRequest /loginManager/logout/
	 *
	 * @apiSuccess {String} msg แสดงข้อความทักทายผู้ใช้งาน
	 *
	 * @apiSuccessExample Example data on success:
	 * {
	 *   "msg": "Hello, anusorn"
	 * }
	 *
	 * @apiError UserNotFound The <code>id</code> of the User was not found.
	 * @apiErrorExample {json} Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 *
	 */
	 function logout($app, $pdo, $db) {

	 	/* ************************* */
        /* เริ่มกระบวนการรับค่าพารามิเตอร์จากส่วนของ Payload ซึ่งอยู่ในรูปแบบ JSON */
        /* ************************* */
        $headers = $app->request->headers;
        $ContetnType = $app->request->headers->get('Content-Type');

        /**
        * apidoc @apiSampleRequest, iOS RESTKit use content-type is "application/json"
        * Web Form, Advance REST Client App use content-type is "application/x-www-form-urlencoded"
        */
        if ($ContetnType == "application/json") {

	        $request = $app->request();
	        $result = json_decode($request->getBody());

	        /* receive request */
	        // $postUserName = $result->userName;
	        // $postPassWord = $result->passWord;


		} else if ($ContetnType == "application/x-www-form-urlencoded"){

		    //$userID = $app->request()->params('userID_param');
		    //$userID = $app->request()->post('userID_param');
		}


	 	//$_SESSION = array();
	 	//session_unregister("userName"); // ลบบางตัวที่ใช้งาน
		session_destroy();					// ลบทั้งหมด

	  	$return_m = array("msg" => "Good bye - user logout.");
	  	
	  	$app->response()->header("Content-Type", "application/json");
	    echo json_encode($return_m);

	 }
	 

    /* WLMA Manager Partial */
    	/**
	 *
	 * @apiName CheckUserPasswordFromWLMA
	 * @apiGroup Wlma Manager
	 * @apiVersion 0.1.0
	 *
	 * @api {post} /wlmaManager/checkUserPasswordFromWLMA/ Check User Password from WLMA
	 * @apiDescription คำอธิบาย : ในส่วนนี้จะมีหน้าที่ตรวจสอบสิทธิ์การเข้าใช้งานระบบ โดยจะเป็นการส่งค่า User & Password ไปตรวจสอบที่ฐานข้อมูลในระบบ WLMA
	 *
	 *
	 * @apiSampleRequest /wlmaManager/checkUserPasswordFromWLMA/
	 *
	 * @apiSuccess {String} msg แสดงข้อความทักทายผู้ใช้งาน
	 *
	 * @apiSuccessExample Example data on success:
	 * {
	 *   "msg": "Hello, anusorn"
	 * }
	 *
	 * @apiError UserNotFound The <code>id</code> of the User was not found.
	 * @apiErrorExample {json} Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 *
	 */
	 function checkUserPasswordFromWLMA($app, $pdo, $conn_db2) {

	    /* ************************* */
        /* เริ่มกระบวนการเชื่อมต่อฐานข้อมูล DB2 ของ WLMA */
        /* ************************* */
        $reports = array();

        $sql = "select * from AUTH_USER_INFO order by USER_ID";

        if ($conn_db2) {
            // # code...
            $stmt = db2_exec($conn_db2, $sql);

            while ($row = db2_fetch_array($stmt)) {
                
                $userID = iconv("TIS-620", "UTF-8",$row[0]);
                $name = iconv("TIS-620//IGNORE", "UTF-8//IGNORE",$row[1]);

                $reports[] = array(
                	"USER_ID" => $userID,
                	"NAME" => $name
                );
            }
        }

        $rowCount = count($reports);

        /* ************************* */
        /* เริ่มกระบวนการส่งค่ากลับ */
        /* ************************* */
        $resultText = "success";

        $reportResult = array("result" =>  $resultText, "msg" => "สวัสดี, $name", "count" => $rowCount, "rows" => $reports);
        //$reportResult = array("result" =>  $resultText, "msg" => "สวัสดี, $name");
        //$reportResult = array("result" =>  $resultText);
        
        $app->response()->header("Content-Type", "application/json");
        echo json_encode($reportResult);

	 }
	 
    	/**
	 *
	 * @apiName ReportPressureAverage
	 * @apiGroup Wlma Manager
	 * @apiVersion 0.1.0
	 *
	 * @api {post} /wlmaManager/reportPressureAverage/ Report Pressure Average by DMA
	 * @apiDescription คำอธิบาย : ในส่วนนี้จะมีหน้าที่แสดงรายงานแรงดันเฉลี่ยแยกตามแต่ละ DMA ในช่วงวันที่กำหนด
	 *
	 *
	 * @apiSampleRequest /wlmaManager/reportPressureAverage/
	 *
	 * @apiSuccess {String} msg แสดงข้อความทักทายผู้ใช้งาน
	 *
	 * @apiSuccessExample Example data on success:
	 * {
	 *   "msg": "Hello, anusorn"
	 * }
	 *
	 * @apiError UserNotFound The <code>id</code> of the User was not found.
	 * @apiErrorExample {json} Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 *
	 */
	 function reportPressureAverage($app, $pdo, $conn_db2) {

	 	/* ************************* */
        /* เริ่มกระบวนการรับค่าพารามิเตอร์จากส่วนของ Payload ซึ่งอยู่ในรูปแบบ JSON */
        /* ************************* */
        $headers = $app->request->headers;
        $ContetnType = $app->request->headers->get('Content-Type');

        /**
        * apidoc @apiSampleRequest, iOS RESTKit use content-type is "application/json"
        * Web Form, Advance REST Client App use content-type is "application/x-www-form-urlencoded"
        */
        if ($ContetnType == "application/json") {

	        $request = $app->request();
	        $result = json_decode($request->getBody());

	        /* receive request */
	        $postStartDate = $result->startDate;
	        $postEndDate = $result->endDate;


		} else if ($ContetnType == "application/x-www-form-urlencoded"){

		    //$userID = $app->request()->params('userID_param');
		    //$userID = $app->request()->post('userID_param');
		}


	    /* ************************* */
        /* เริ่มกระบวนการเชื่อมต่อฐานข้อมูล DB2 ของ WLMA */
        /* ************************* */
        $reports = array();

        $sql = "select to_char(log_dt, 'YYYY-MM-DD') as Date, area_code, avg(p) as AveragePressure from core_area, meter_hist 
where meter_code in (select meter_code from core_area_meter where core_area_meter.area_code = core_area.area_code and meter_inout='I')
and log_dt between timestamp('".$postStartDate."') and timestamp('".$postEndDate." 23:59:00')
and to_char(log_dt, 'HH24') between '05' and '09'
and area_axis_code = 'D'
group by area_code, to_char(log_dt, 'YYYY-MM-DD')";

        if ($conn_db2) {
            // # code...
            $stmt = db2_exec($conn_db2, $sql);

            while ($row = db2_fetch_array($stmt)) {
                
                $tmpDate = iconv("TIS-620", "UTF-8",$row[0]);
                $tmpAreaCode = iconv("TIS-620//IGNORE", "UTF-8//IGNORE",$row[1]);
                $tmpAveragePressure = iconv("TIS-620//IGNORE", "UTF-8//IGNORE",$row[2]);

                $reports[] = array(
                	"date" => $tmpDate,
                	"area_code" => "DMA-".$tmpAreaCode,
                	"average_pressure" => $tmpAveragePressure
                );
            }
        }

        $rowCount = count($reports);

        /* ************************* */
        /* เริ่มกระบวนการส่งค่ากลับ */
        /* ************************* */
        $resultText = "success";

        $reportResult = array("result" =>  $resultText, "count" => $rowCount, "rows" => $reports);
        //$reportResult = array("result" =>  $resultText, "msg" => "สวัสดี, $name");
        //$reportResult = array("result" =>  $resultText);
        
        $app->response()->header("Content-Type", "application/json");
        echo json_encode($reportResult);

	 }
	 
    
?>