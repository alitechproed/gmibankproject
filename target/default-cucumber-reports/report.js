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
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"karak\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC1401 manage accounts date selection today test",
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
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createANewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_createANewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends an earlier date",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_sends_an_earlier_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies date is an early date",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_verifies_date_is_an_early_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut from Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_signOut_from_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});