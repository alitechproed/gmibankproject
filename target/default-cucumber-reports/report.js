$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_27.feature");
formatter.feature({
  "name": "US_27 System should allow to delete states using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "TC_2701 Before DELETE request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2701"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to REST API URL  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_GET_request_to_REST_API_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get Accept type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.get_Accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "HTTP Status Code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.http_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "id should be \"1801\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.id_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "name should be \"ALASKA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2702 check DELETE request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2702"
    }
  ]
});
formatter.step({
  "name": "I send a DELETE request to REST API URL  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "When "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_DELETE_request_to_REST_API_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "delete Accept type is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.delete_Accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "HTTP Status Code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.http_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat gmibank.stepdefinitions.US_27_Step_Definitions.http_Status_Code_should_be(US_27_Step_Definitions.java:46)\r\n\tat ✽.HTTP Status Code should be \"200\"(file:///C:/Users/TTR/IdeaProjects/gmibankproject/src/test/resources/features/us_27.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should contain nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.response_should_contain_nothing()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});