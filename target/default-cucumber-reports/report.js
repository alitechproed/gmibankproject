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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "manage accounts date selection today test",
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
      "name": "@TC1401"
    }
  ]
});
formatter.step({
  "name": "user clicks manageAccounts link",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks createANewAccount link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click calender icon and click today",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user verifies date is correct",
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