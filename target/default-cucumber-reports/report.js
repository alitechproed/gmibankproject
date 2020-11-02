$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/firstfeaturefile.feature");
formatter.feature({
  "name": "Google search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googleTest"
    }
  ]
});
formatter.background({
  "name": "user is in the google page // bu kisim background in tanimi",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.user_is_in_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user search teapod in google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleTest"
    },
    {
      "name": "@Teapot"
    }
  ]
});
formatter.step({
  "name": "user searches teapod",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.user_searches_teapod()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify result has teapot",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.verify_result_has_teapot()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user is in the google page // bu kisim background in tanimi",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is in the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.user_is_in_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user searches nokia in google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googleTest"
    },
    {
      "name": "@Nokia"
    }
  ]
});
formatter.step({
  "name": "user searches nokia",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.user_searches_nokia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify result has nokia",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.GoogleSearchStepDefinitions.verify_result_has_nokia()"
});
formatter.result({
  "status": "passed"
});
});