define({ "api": [
  {
    "name": "CheckUserPassword",
    "group": "Login_Manager",
    "version": "0.1.0",
    "type": "post",
    "url": "/loginManager/checkUserPassword/",
    "title": "Check User Password",
    "description": "<p>คำอธิบาย : ในส่วนนี้จะมีหน้าที่ตรวจสอบ User และ Password ก่อนเข้าใช้งานระบบ</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api/loginManager/checkUserPassword/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>แสดงข้อความทักทายผู้ใช้งาน</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"msg\": \"Hello, anusorn\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Login_Manager"
  },
  {
    "name": "Logout",
    "group": "Login_Manager",
    "version": "0.1.0",
    "type": "post",
    "url": "/loginManager/logout/",
    "title": "Log Out",
    "description": "<p>คำอธิบาย : ในส่วนนี้จะมีหน้าที่ Log out เพื่อออกจากระบบ</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api/loginManager/logout/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>แสดงข้อความทักทายผู้ใช้งาน</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"msg\": \"Hello, anusorn\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Login_Manager"
  },
  {
    "name": "GetMsg",
    "group": "TEST_Manager",
    "version": "0.1.0",
    "type": "get",
    "url": "/testManager/getMsg/:name",
    "title": "GET Msg (v 0.1.0)",
    "description": "<p>คำอธิบาย : ทดสอบ GET - RESTful Web Service</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New name of the user</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api/testManager/getMsg/:name"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>แสดงข้อความทักทายผู้ใช้งาน</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"msg\": \"Hello, anusorn\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "TEST_Manager"
  },
  {
    "name": "CheckUserPasswordFromWLMA",
    "group": "Wlma_Manager",
    "version": "0.1.0",
    "type": "post",
    "url": "/wlmaManager/checkUserPasswordFromWLMA/",
    "title": "Check User Password from WLMA",
    "description": "<p>คำอธิบาย : ในส่วนนี้จะมีหน้าที่ตรวจสอบสิทธิ์การเข้าใช้งานระบบ โดยจะเป็นการส่งค่า User &amp; Password ไปตรวจสอบที่ฐานข้อมูลในระบบ WLMA</p> ",
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api/wlmaManager/checkUserPasswordFromWLMA/"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>แสดงข้อความทักทายผู้ใช้งาน</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"msg\": \"Hello, anusorn\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Wlma_Manager"
  },
  {
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api, iOS RESTKit use content-type is \"application/json\"\nWeb Form, Advance REST Client App use content-type is \"application/x-www-form-urlencoded\""
      }
    ],
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./index.php",
    "group": "_Applications_XAMPP_xamppfiles_htdocs_rmr_build_src_api_index_php",
    "groupTitle": "_Applications_XAMPP_xamppfiles_htdocs_rmr_build_src_api_index_php",
    "name": ""
  },
  {
    "sampleRequest": [
      {
        "url": "http://localhost/rmr/build/src/api, iOS RESTKit use content-type is \"application/json\"\nWeb Form, Advance REST Client App use content-type is \"application/x-www-form-urlencoded\""
      }
    ],
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./index.php",
    "group": "_Applications_XAMPP_xamppfiles_htdocs_rmr_build_src_api_index_php",
    "groupTitle": "_Applications_XAMPP_xamppfiles_htdocs_rmr_build_src_api_index_php",
    "name": ""
  }
] });