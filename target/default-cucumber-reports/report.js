$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_14.feature");
formatter.feature({
  "name": "US14 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin username \"karak\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "manage customers Zelle box selection test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC1405"
    }
  ]
});
formatter.step({
  "name": "user clicks manageCustomers link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_manageCustomers_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks createANewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_createANewCustomer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user customer click Zelle Enrolled box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user customer verifies that there is no allert message related to Zelle box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});