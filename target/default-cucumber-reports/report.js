$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_009.feature");
formatter.feature({
  "name": "US_009 User can search for a new applicant by their SSN and see all their registration info populated",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user enter correct SSN data and use may edit or fill the data of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0905"
    }
  ]
});
formatter.step({
  "name": "ten user enter correct ssn data \"\u003c555-55-5555\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "eleven user fill miss box of data",
  "keyword": "Then "
});
formatter.step({
  "name": "twelve user click save",
  "keyword": "Then "
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "555-55-5555"
      ]
    },
    {
      "cells": [
        "222-22-2222"
      ]
    },
    {
      "cells": [
        "555-55-5555"
      ]
    }
  ]
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
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
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"vivi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user enter correct SSN data and use may edit or fill the data of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc0905"
    }
  ]
});
formatter.step({
  "name": "ten user enter correct ssn data \"222-22-2222\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.ten_user_enter_correct_ssn_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eleven user fill miss box of data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.eleven_user_fill_miss_box_of_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "twelve user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.twelve_user_click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
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
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"vivi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user enter correct SSN data and use may edit or fill the data of user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc0905"
    }
  ]
});
formatter.step({
  "name": "ten user enter correct ssn data \"555-55-5555\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.ten_user_enter_correct_ssn_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eleven user fill miss box of data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.eleven_user_fill_miss_box_of_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "twelve user click save",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.twelve_user_click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});