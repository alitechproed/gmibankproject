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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User finds out the size of the country list",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User update the countries",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User verify if the countries were updated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});