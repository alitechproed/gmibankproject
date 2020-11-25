$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_26.feature");
formatter.feature({
  "name": "US_26 System should allow to update countries using api end point",
  "description": "          \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_26"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "TC_2601 User can just update each country 1 by 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_26"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2601"
    }
  ]
});
formatter.step({
  "name": "Use api end point  \"https://www.gmibank.com/api/tp-countries/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_26_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User finds out the size of the country list",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_26_Step_Definitions.user_finds_out_the_size_of_the_country_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User send a Put request endpoint \"https://www.gmibank.com/api/tp-countries/\" as \"Pays-Bas\" for upddate Cekya",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_26_Step_Definitions.user_send_a_Put_request_endpoint_as_for_upddate_Cekya(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify the contry was updated",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_26_Step_Definitions.user_verify_the_contry_was_updated()"
});
formatter.result({
  "status": "passed"
});
});