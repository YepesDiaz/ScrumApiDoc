define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\Danie\\Desktop\\Scrum\\ApiDocumentation\\doc\\main.js",
    "groupTitle": "C:\\Users\\Danie\\Desktop\\Scrum\\ApiDocumentation\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/ScrumApi/projects",
    "title": "FindAll projects",
    "name": "FindAll",
    "version": "0.2.0",
    "group": "Projects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objectives.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"projects\": [\n         {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title proof\",\n             \"objectives\": \"objetivo1,objetivo2\",\n             \"sprint\": \"sprint\",\n             \"stakeHolder\": \"st\"\n          }\n       ]\n }",
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
            "field": "Error",
            "description": "<p>findAll projects 'Error findAll projects'</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/ScrumApi/projects",
    "title": "FindAll projects",
    "name": "FindAll",
    "version": "0.1.0",
    "group": "Projects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objectives.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"projects\": [\n         {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title prueba\",\n             \"objectives\": \"objetivo1,objetivo2\",\n             \"sprint\": \"sprint\",\n             \"stakeHolder\": \"st\"\n          }\n       ]\n }",
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
            "field": "Error",
            "description": "<p>findAll projects 'Error findAll projects'</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/ScrumApi/project/:id",
    "title": "GetProject by Id",
    "name": "GetProject",
    "version": "0.2.0",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Project unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objectives.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"projects\": {\n         \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title proof\",\n         \"objectives\": \"objetivo1,objetivo2\",\n         \"sprint\": \"sprint\",\n         \"stakeHolder\": \"st\"\n       }\n }",
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
            "field": "Project",
            "description": "<p>not Found for id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"message\": \"project NO exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/ScrumApi/project/:id",
    "title": "GetProject by Id",
    "name": "GetProject",
    "version": "0.1.0",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Project unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objetives.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"projects\": {\n         \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title prueba\",\n         \"objectives\": \"objetivo1,objetivo2\",\n         \"sprint\": \"sprint\",\n         \"stakeHolder\": \"st\"\n       }\n }",
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
            "field": "Project",
            "description": "<p>not Found for id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"message\": \"project NO exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "/ScrumApi/project",
    "title": "Save project",
    "name": "SavepProject",
    "version": "0.2.0",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objectives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Json of project example :",
          "content": "{\n    \"title\": \"title proof\",\n    \"objectives\": \"objetivo1,objetivo2\",\n    \"sprint\": \"sprint\",\n    \"stakeHolder\": \"st1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"project\": {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title proof\",\n             \"objectives\": \"objetivo1,objetivo2\",\n             \"sprint\": \"sprint\",\n             \"stakeHolder\": \"st\"\n       }\n }",
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
            "field": "Error",
            "description": "<p>making POST request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n {\n   \"message\": \"Error making POST request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "/ScrumApi/project",
    "title": "Save project",
    "name": "SavepProject",
    "version": "0.1.0",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Project's title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Project's objetives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Project's sprints.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Project's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Json of project example :",
          "content": "{\n    \"title\": \"title prueba\",\n    \"objectives\": \"objetivo1,objetivo2\",\n    \"sprint\": \"sprint\",\n    \"stakeHolder\": \"st1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"project\": {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title prueba\",\n             \"objectives\": \"objetivo1,objetivo2\",\n             \"sprint\": \"sprint\",\n             \"stakeHolder\": \"st\"\n       }\n }",
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
            "field": "Error",
            "description": "<p>making POST request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n {\n   \"message\": \"Error making POST request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/ScrumApi/sprints",
    "title": "FindAll sprints",
    "name": "FindAll",
    "version": "0.1.0",
    "group": "Sprints",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "Sprint",
            "description": "<p>'s task list.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sprint's project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    [\n \"sprints\": {\n     \"task\": [\n        \"5efaa7669a16910404a41da1\",\n        \"5efab04732b2b02950240bb8\"\n     ],\n     \"_id\": \"5efab63fad4edc2ec87f3a1c\",\n     \"name\": \"sprint\",\n     \"description\": \"description\",\n     \"initialDate\": \"2020-05-20T05:05:00.000Z\",\n     \"finalDate\": \"2020-09-20T05:05:00.000Z\"\n }\n]",
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
            "field": "Error",
            "description": "<p>findAll sprints 'Error findAll sprints'</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Sprints"
  },
  {
    "type": "get",
    "url": "/ScrumApi/sprint/:id",
    "title": "GetSprint by Id",
    "name": "GetSprint",
    "version": "0.1.0",
    "group": "Sprints",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sprint unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "Sprint",
            "description": "<p>'s task list.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sprint's project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  {\n\"sprints\": {\n    \"task\": [\n       \"5efaa7669a16910404a41da1\",\n       \"5efab04732b2b02950240bb8\"\n    ],\n    \"_id\": \"5efab63fad4edc2ec87f3a1c\",\n    \"name\": \"sprint\",\n    \"description\": \"description\",\n    \"initialDate\": \"2020-05-20T05:05:00.000Z\",\n    \"finalDate\": \"2020-09-20T05:05:00.000Z\"\n}\n    }",
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
            "field": "Sprint",
            "description": "<p>not Found for id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"message\": \"sprint NO exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Sprints"
  },
  {
    "type": "post",
    "url": "/ScrumApi/sprint",
    "title": "Save sprint",
    "name": "SaveSprint",
    "version": "0.1.0",
    "group": "Sprints",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "Sprint",
            "description": "<p>'s task list, split by commas.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sprint's project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  {\n\"sprints\": {\n    \"task\": [\n       \"5efaa7669a16910404a41da1\",\n       \"5efab04732b2b02950240bb8\"\n    ],\n    \"_id\": \"5efab63fad4edc2ec87f3a1c\",\n    \"name\": \"sprint\",\n    \"description\": \"description\",\n    \"initialDate\": \"2020-05-20T05:05:00.000Z\",\n    \"finalDate\": \"2020-09-20T05:05:00.000Z\"\n}\n    }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Json of project example :",
          "content": "{\n\t\"name\": \"sprint\",\n   \"description\": \"description\",\n   \"tasks\": [\"5efaa7669a16910404a41da1\"],\n   \"initialDate\": \"2020-05-20T05:05:00Z\",\n   \"finalDate\": \"2020-09-20T05:05:00Z\"\n}",
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
            "field": "Error",
            "description": "<p>making POST request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n {\n   \"message\": \"Error making POST request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Sprints"
  },
  {
    "type": "get",
    "url": "/ScrumApi/tasks",
    "title": "FindAll tasks",
    "name": "FindAll_tasks",
    "version": "0.2.0",
    "group": "Tasks",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"tasks\": [\n         {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title proof\",\n             \"satus\": \"active // inactive\",\n             \"active\": true,\n          }\n       ]\n }",
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
            "field": "Error",
            "description": "<p>findAll tasks 'Error findAll tasks'</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/ScrumApi/tasks",
    "title": "FindAll tasks",
    "name": "FindAll_tasks",
    "version": "0.1.0",
    "group": "Tasks",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"tasks\": [\n         {\n             \"_id\": \"5edef236ce57a93424efd36b\",\n             \"title\": \"title prueba\",\n             \"satus\": \"active // inactive\",\n             \"active\": true,\n          }\n       ]\n }",
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
            "field": "Error",
            "description": "<p>findAll tasks 'Error findAll tasks'</p>"
          }
        ]
      }
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/ScrumApi/task/:id",
    "title": "GetTask by Id",
    "name": "GetTask",
    "version": "0.2.0",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Task's status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Task's activve.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"task\": {\n         \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title proof\",\n         \"status\": \"active// inactive\",\n         \"active\": true,\n       }\n }",
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
            "field": "Task",
            "description": "<p>not Found for id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"message\": \"task NO exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "/ScrumApi/task/:id",
    "title": "GetTask by Id",
    "name": "GetTask",
    "version": "0.1.0",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Task unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Task's status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Task's activve.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"task\": {\n         \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title prueba\",\n         \"status\": \"active// inactive\",\n         \"active\": true,\n       }\n }",
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
            "field": "Task",
            "description": "<p>not Found for id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n {\n   \"message\": \"task NO exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "post",
    "url": "/ScrumApi/task",
    "title": "Save task",
    "name": "SavepTask",
    "version": "0.2.0",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task's title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Task's objectives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Task's sprints.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Task's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Json of Task example :",
          "content": "{\n            \"_id\": \"5edef236ce57a93424efd36b\",\n           \"title\": \"title proof\",\n           \"status\": \"active// inactive\",\n           \"active\": true,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"task\": {\n          \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title proof\",\n         \"status\": \"active// inactive\",\n         \"active\": true,\n       }\n }",
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
            "field": "Error",
            "description": "<p>making POST request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n {\n   \"message\": \"Error making POST request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "post",
    "url": "/ScrumApi/task",
    "title": "Save task",
    "name": "SavepTask",
    "version": "0.1.0",
    "group": "Tasks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task's title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "objectives",
            "description": "<p>Task's objetives.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sprint",
            "description": "<p>Task's sprints.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stakeHolder",
            "description": "<p>Task's stakeHolders.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Json of Task example :",
          "content": "{\n            \"_id\": \"5edef236ce57a93424efd36b\",\n           \"title\": \"title prueba\",\n           \"status\": \"active// inactive\",\n           \"active\": true,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"task\": {\n          \"_id\": \"5edef236ce57a93424efd36b\",\n         \"title\": \"title prueba\",\n         \"status\": \"active// inactive\",\n         \"active\": true,\n       }\n }",
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
            "field": "Error",
            "description": "<p>making POST request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n {\n   \"message\": \"Error making POST request\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./apidoc.js",
    "groupTitle": "Tasks"
  }
] });
