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
  "name": "TC_2701 before DELETE request",
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
  "name": "I send a GET request to REST API end point  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_GET_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before delete request HTTP Status Code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before delete request response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before delete request id should be \"1801\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_id_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before delete request name should be \"ALASKA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_name_should_be(java.lang.String)"
});
formatter.result({
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
  "name": "I send a DELETE request to REST API end point  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_DELETE_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After delete request HTTP Status Code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [204] but found [200]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_HTTP_Status_Code_should_be(US_27_Step_Definitions.java:82)\r\n\tat ✽.After delete request HTTP Status Code should be \"200\"(file:///C:/Users/TTR/IdeaProjects/gmibankproject/src/test/resources/features/us_27.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "After delete request response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "After delete request response after delete should contain nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_response_after_delete_should_contain_nothing()"
});
formatter.result({
  "status": "skipped"
});
});