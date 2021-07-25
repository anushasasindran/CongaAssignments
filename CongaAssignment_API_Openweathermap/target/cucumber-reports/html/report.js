$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scenarios1to5.feature");
formatter.feature({
  "line": 1,
  "name": "API Testing for OpenWeatherMap",
  "description": "",
  "id": "api-testing-for-openweathermap",
  "keyword": "Feature"
});
formatter.before({
  "duration": 474700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test 1: Validate that attempt to register a weather station \"without\" an APIKey (response code \u003d 401 - error)",
  "description": "",
  "id": "api-testing-for-openweathermap;test-1:-validate-that-attempt-to-register-a-weather-station-\"without\"-an-apikey-(response-code-\u003d-401---error)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@NegativeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "# Test 1"
    },
    {
      "line": 6,
      "value": "#Given I have cleaned all stations associated with my APIKey in OpenWhetherMap"
    }
  ],
  "line": 7,
  "name": "I have registered a new station to OpenWhetherMap \"without\" APIKey and following values",
  "rows": [
    {
      "cells": [
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 8
    },
    {
      "cells": [
        "DEMO 0",
        "My Negative Test",
        "1.3",
        "2.2",
        "222.3"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the message body with \"code\" as \"401\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the message body with \"message\" as \"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 51
    }
  ],
  "location": "StepsScenario1to5.iHaveRegisteredANewStationToOpenWhetherMapAPIKeyAndFollowingValues(String,DataTable)"
});
formatter.result({
  "duration": 5160156300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "code",
      "offset": 36
    },
    {
      "val": "401",
      "offset": 46
    }
  ],
  "location": "StepsScenario1to5.iShouldSeeTheMessageBodyWithAs(String,String)"
});
formatter.result({
  "duration": 788056400,
  "error_message": "java.lang.NullPointerException\r\n\tat APItesting.resouces.OpenWeatherMap.getValueByKey(OpenWeatherMap.java:80)\r\n\tat APItesting.stepDefinitions.StepsScenario1to5.iShouldSeeTheMessageBodyWithAs(StepsScenario1to5.java:34)\r\n\tat ✽.Then I should see the message body with \"code\" as \"401\"(Scenarios1to5.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 36
    },
    {
      "val": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.",
      "offset": 49
    }
  ],
  "location": "StepsScenario1to5.iShouldSeeTheMessageBodyWithAs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 188200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Test 2 to Test 5:",
  "description": "    Test 2: validate registering weather stations successfully (response code \u003d 201)\r\n    Test 3: Validate values after registering a weather station\r\n    Test 4: Validate deleting weather stations successfully (response code \u003d 204 )\r\n    Test 5: Validate deleting non-existing weather stations (response code \u003d 404 and message \u003d \u0027Station not found\u0027)",
  "id": "api-testing-for-openweathermap;test-2-to-test-5:",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ProgressionTest"
    },
    {
      "line": 14,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Test 2 - Register a new station with the following details and verify that HTTP response code is 201."
    }
  ],
  "line": 22,
  "name": "I have registered a new station to OpenWhetherMap with values of \"\u003cexternal_id\u003e\",\"\u003cname\u003e\",\"\u003clatitude\u003e\",\"\u003clongitude\u003e\",\"\u003caltitude\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I have received HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# Test 3 - Using \"Get/stations\" API to verify that the station was stored in the DB and their values are the same as specified in registration request"
    }
  ],
  "line": 26,
  "name": "I see my new station with values of \"\u003cexternal_id\u003e\",\"\u003cname\u003e\",\"\u003clatitude\u003e\",\"\u003clongitude\u003e\",\"\u003caltitude\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "# Test 4"
    }
  ],
  "line": 29,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I have received HTTP response code of \"204\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Test 5"
    }
  ],
  "line": 33,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I have received HTTP response code of \"404\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see the message body with \"message\" as \"Station not found\"",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "api-testing-for-openweathermap;test-2-to-test-5:;",
  "rows": [
    {
      "cells": [
        "external_id",
        "name",
        "latitude",
        "longitude",
        "altitude"
      ],
      "line": 38,
      "id": "api-testing-for-openweathermap;test-2-to-test-5:;;1"
    },
    {
      "cells": [
        "DEMO_TEST001",
        "Test Station 001",
        "33.33",
        "-111.43",
        "444"
      ],
      "line": 39,
      "id": "api-testing-for-openweathermap;test-2-to-test-5:;;2"
    },
    {
      "cells": [
        "DEMO_TEST002",
        "Test Station 002",
        "33.44",
        "-122.44",
        "444"
      ],
      "line": 40,
      "id": "api-testing-for-openweathermap;test-2-to-test-5:;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 273601,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Test 2 to Test 5:",
  "description": "    Test 2: validate registering weather stations successfully (response code \u003d 201)\r\n    Test 3: Validate values after registering a weather station\r\n    Test 4: Validate deleting weather stations successfully (response code \u003d 204 )\r\n    Test 5: Validate deleting non-existing weather stations (response code \u003d 404 and message \u003d \u0027Station not found\u0027)",
  "id": "api-testing-for-openweathermap;test-2-to-test-5:;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ProgressionTest"
    },
    {
      "line": 14,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Test 2 - Register a new station with the following details and verify that HTTP response code is 201."
    }
  ],
  "line": 22,
  "name": "I have registered a new station to OpenWhetherMap with values of \"DEMO_TEST001\",\"Test Station 001\",\"33.33\",\"-111.43\",\"444\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I have received HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# Test 3 - Using \"Get/stations\" API to verify that the station was stored in the DB and their values are the same as specified in registration request"
    }
  ],
  "line": 26,
  "name": "I see my new station with values of \"DEMO_TEST001\",\"Test Station 001\",\"33.33\",\"-111.43\",\"444\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "# Test 4"
    }
  ],
  "line": 29,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I have received HTTP response code of \"204\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Test 5"
    }
  ],
  "line": 33,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I have received HTTP response code of \"404\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see the message body with \"message\" as \"Station not found\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST001",
      "offset": 66
    },
    {
      "val": "Test Station 001",
      "offset": 81
    },
    {
      "val": "33.33",
      "offset": 100
    },
    {
      "val": "-111.43",
      "offset": 108
    },
    {
      "val": "444",
      "offset": 118
    }
  ],
  "location": "StepsScenario1to5.iHaveRegisteredANewStationToOpenWhetherMapWithValuesOf(String,String,String,String,String)"
});
formatter.result({
  "duration": 758770400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 34809700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST001",
      "offset": 37
    },
    {
      "val": "Test Station 001",
      "offset": 52
    },
    {
      "val": "33.33",
      "offset": 71
    },
    {
      "val": "-111.43",
      "offset": 79
    },
    {
      "val": "444",
      "offset": 89
    }
  ],
  "location": "StepsScenario1to5.iSeeMyNewStationWithValuesOf(String,String,String,String,String)"
});
formatter.result({
  "duration": 145554300,
  "status": "passed"
});
formatter.match({
  "location": "StepsScenario1to5.iDeleteMyLatestStationsAssociatedWithMyAPIKeyInOpenWhetherMap()"
});
formatter.result({
  "duration": 650363400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 415700,
  "status": "passed"
});
formatter.match({
  "location": "StepsScenario1to5.iDeleteMyLatestStationsAssociatedWithMyAPIKeyInOpenWhetherMap()"
});
formatter.result({
  "duration": 533522800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 548900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 36
    },
    {
      "val": "Station not found",
      "offset": 49
    }
  ],
  "location": "StepsScenario1to5.iShouldSeeTheMessageBodyWithAs(String,String)"
});
formatter.result({
  "duration": 33202700,
  "status": "passed"
});
formatter.after({
  "duration": 155401,
  "status": "passed"
});
formatter.before({
  "duration": 125900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Test 2 to Test 5:",
  "description": "    Test 2: validate registering weather stations successfully (response code \u003d 201)\r\n    Test 3: Validate values after registering a weather station\r\n    Test 4: Validate deleting weather stations successfully (response code \u003d 204 )\r\n    Test 5: Validate deleting non-existing weather stations (response code \u003d 404 and message \u003d \u0027Station not found\u0027)",
  "id": "api-testing-for-openweathermap;test-2-to-test-5:;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ProgressionTest"
    },
    {
      "line": 14,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Test 2 - Register a new station with the following details and verify that HTTP response code is 201."
    }
  ],
  "line": 22,
  "name": "I have registered a new station to OpenWhetherMap with values of \"DEMO_TEST002\",\"Test Station 002\",\"33.44\",\"-122.44\",\"444\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I have received HTTP response code of \"201\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# Test 3 - Using \"Get/stations\" API to verify that the station was stored in the DB and their values are the same as specified in registration request"
    }
  ],
  "line": 26,
  "name": "I see my new station with values of \"DEMO_TEST002\",\"Test Station 002\",\"33.44\",\"-122.44\",\"444\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "# Test 4"
    }
  ],
  "line": 29,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I have received HTTP response code of \"204\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# Test 5"
    }
  ],
  "line": 33,
  "name": "I delete my latest station associated with my APIKey in OpenWeatherMap",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I have received HTTP response code of \"404\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I should see the message body with \"message\" as \"Station not found\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST002",
      "offset": 66
    },
    {
      "val": "Test Station 002",
      "offset": 81
    },
    {
      "val": "33.44",
      "offset": 100
    },
    {
      "val": "-122.44",
      "offset": 108
    },
    {
      "val": "444",
      "offset": 118
    }
  ],
  "location": "StepsScenario1to5.iHaveRegisteredANewStationToOpenWhetherMapWithValuesOf(String,String,String,String,String)"
});
formatter.result({
  "duration": 539989500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 441501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEMO_TEST002",
      "offset": 37
    },
    {
      "val": "Test Station 002",
      "offset": 52
    },
    {
      "val": "33.44",
      "offset": 71
    },
    {
      "val": "-122.44",
      "offset": 79
    },
    {
      "val": "444",
      "offset": 89
    }
  ],
  "location": "StepsScenario1to5.iSeeMyNewStationWithValuesOf(String,String,String,String,String)"
});
formatter.result({
  "duration": 125960100,
  "status": "passed"
});
formatter.match({
  "location": "StepsScenario1to5.iDeleteMyLatestStationsAssociatedWithMyAPIKeyInOpenWhetherMap()"
});
formatter.result({
  "duration": 518745301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 444700,
  "status": "passed"
});
formatter.match({
  "location": "StepsScenario1to5.iDeleteMyLatestStationsAssociatedWithMyAPIKeyInOpenWhetherMap()"
});
formatter.result({
  "duration": 589896099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "StepsScenario1to5.iHaveReceivedHTTPResponseCodeOf(String)"
});
formatter.result({
  "duration": 385599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "message",
      "offset": 36
    },
    {
      "val": "Station not found",
      "offset": 49
    }
  ],
  "location": "StepsScenario1to5.iShouldSeeTheMessageBodyWithAs(String,String)"
});
formatter.result({
  "duration": 21705800,
  "status": "passed"
});
formatter.after({
  "duration": 121700,
  "status": "passed"
});
});