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
  "name": "user clicks manageAccounts link21",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_manageAccounts_link21()"
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
  "name": "TC1402 manage accounts date selection positive test",
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
      "name": "@TC1402"
    }
  ]
});
formatter.step({
  "name": "user clicks manageAccounts link21",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_manageAccounts_link21()"
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
  "name": "user account send a date \"12122020\" and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_account_send_a_date_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user account send a time \"1000\" and user click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_account_send_a_time_and_user_click_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user account click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_account_click_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user account verifies valid data entry to Create Date box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_account_verifies_valid_data_entry_to_Create_Date_box()"
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
  "name": "TC1403 manage customers date selection positive test",
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
      "name": "@TC1403"
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
  "status": "passed"
});
formatter.step({
  "name": "user clicks createANewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_createANewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer send a date \"12122020\" and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_send_a_date_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer send a time \"1000\" and user click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_send_a_time_and_user_click_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_click_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer verifies valid data entry to Create Date box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_verifies_valid_data_entry_to_Create_Date_box()"
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
  "name": "TC1404 manage customers user selection positive test",
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
      "name": "@TC1404"
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
  "status": "passed"
});
formatter.step({
  "name": "user clicks createANewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_createANewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer click user box and select a user",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_click_user_box_and_select_a_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer verifies valid selection of user",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_verifies_valid_selection_of_user()"
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
  "name": "TC1405 manage customers Zelle box selection test",
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
  "status": "passed"
});
formatter.step({
  "name": "user clicks createANewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_clicks_createANewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer click Zelle Enrolled box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_click_Zelle_Enrolled_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user customer verifies that there is no allert message related to Zelle box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_14_Step_Definitions.user_customer_verifies_that_there_is_no_allert_message_related_to_Zelle_box()"
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