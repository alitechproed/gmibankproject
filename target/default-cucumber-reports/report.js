$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_09.feature");
formatter.feature({
  "name": "US_009 User can search for a new applicant by their SSN and see all their registration info populated",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
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
  "name": "Positiv Test  enter correct SSN and All information of the user filled in in the registration field should be seen",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0901"
    }
  ]
});
formatter.step({
  "name": "one Positiv user enter \"555-55-5555\" SSN  sees then firstname , lastname,email,mobilnumber,phoneNumber,addres ,ssn ,createDate",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.one_Positiv_user_enter_SSN_sees_then_firstname_lastname_email_mobilnumber_phoneNumber_addres_ssn_createDate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "two Positiv user enter \"555-55-5555\" SSN  and doesnt  see then the rest of  unfiiled Record in registration",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.two_Positiv_user_enter_SSN_and_doesnt_see_then_the_rest_of_unfiiled_Record_in_registration(java.lang.String)"
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
  "name": "Negativ Test enter incorret SSN then there shoudl not seen any data of users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0902"
    }
  ]
});
formatter.step({
  "name": "three Negativ user enter false SNN \"343-34-2323\" doesnt  see any info of users",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.three_Negativ_user_enter_false_SNN_doesnt_see_any_info_of_users(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "four  Negativ user enter incorrect SSN \"343-22-2343\" and should see aller Error messaj",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.four_Negativ_user_enter_incorrect_SSN_and_should_see_aller_Error_messaj(java.lang.String)"
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
formatter.scenarioOutline({
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
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
        "name"
      ]
    },
    {
      "cells": [
        "silgi"
      ]
    },
    {
      "cells": [
        "alex"
      ]
    },
    {
      "cells": [
        "zehra"
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
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"silgi\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.five_Positv_user_enters_to_firstname_Box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.six_Possitiv_user_doesnt_see_any_of_info_of_user()"
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
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"alex\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.five_Positv_user_enters_to_firstname_Box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.six_Possitiv_user_doesnt_see_any_of_info_of_user()"
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
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"zehra\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.five_Positv_user_enters_to_firstname_Box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.six_Possitiv_user_doesnt_see_any_of_info_of_user()"
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
  "name": "Negativ Test select from user a data and not filled data should be  displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0904"
    }
  ]
});
formatter.step({
  "name": "seven Negativ user selects from user Box a data",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.seven_Negativ_user_selects_from_user_Box_a_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eigth Negativ user can select all usersname",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.eigth_Negativ_user_can_select_all_usersname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nine  Negativ user  wont be see any data of users",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.nine_Negativ_user_wont_be_see_any_data_of_users()"
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
      "name": "@SmokeTest"
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
      "name": "@SmokeTest"
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