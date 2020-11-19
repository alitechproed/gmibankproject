$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_17.feature");
formatter.feature({
  "name": "US17 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_17"
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1701 USER activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1701"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to USER",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_change_the_profile_to_USER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin reactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1702 USER information verifying by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1702"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1703 EMPLOYEE activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1703"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to EMPLOYEE",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminChangeTheProfileToEMPLOYEE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deactivate EMPLOYEE",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_deactivate_EMPLOYEE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin reactivate EMPLOYEE",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateEMPLOYEE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1704 EMPLOYEE verifying by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1704"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1705 MANAGER activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1705"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to MANAGER",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminChangeTheProfileToMANAGER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deactivate MANAGER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeactivateMANAGER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin reactivate MANAGER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateMANAGER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1706 MANAGER verifying by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1706"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1707 ADMIN activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1707"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to ADMIN",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminChangeTheProfileToADMIN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin reactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1708 ADMIN verifying by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1708"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1709 CUSTOMER activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1709"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to CUSTOMER",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminChangeTheProfileToCUSTOMER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin reactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateUSER()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1710 CUSTOMER verifying by CUSTOMER",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1710"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1711 ADMIN creation and deletion by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1711"
    }
  ]
});
formatter.step({
  "name": "admin creates new ADMIN profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminCreatesNewADMINProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert new profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertNewProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deletes new created profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeletesNewCreatedProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin asserts new profile is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertsNewProfileIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1712 EMPLOYEE creation and deletion by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1712"
    }
  ]
});
formatter.step({
  "name": "admin creates new EMPLOYEE profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminCreatesNewEMPLOYEEProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert new profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertNewProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deletes new created profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeletesNewCreatedProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin asserts new profile is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertsNewProfileIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1713 MANAGER creation and deletion by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1713"
    }
  ]
});
formatter.step({
  "name": "admin creates new MANAGER profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminCreatesNewMANAGERProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert new profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertNewProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deletes new created profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeletesNewCreatedProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin asserts new profile is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertsNewProfileIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1714 USER creation and deletion by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1714"
    }
  ]
});
formatter.step({
  "name": "admin creates new USER profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminCreatesNewUSERProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert new profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertNewProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deletes new created profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeletesNewCreatedProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin asserts new profile is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertsNewProfileIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
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
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc_1715 CUSTOMER creation and deletion by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc_1715"
    }
  ]
});
formatter.step({
  "name": "admin creates new CUSTOMER profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminCreatesNewCUSTOMERProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin assert new profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertNewProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin deletes new created profile",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeletesNewCreatedProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin asserts new profile is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertsNewProfileIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
  "status": "passed"
});
});