$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_17.feature");
formatter.feature({
  "name": "US_17 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
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
      "name": "@SmokeTest1"
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
formatter.uri("file:src/test/resources/features/us_18.feature");
formatter.feature({
  "name": "US_18 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"AAbc398\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"A1b2C3\"",
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
formatter.scenario({
  "name": "tc1801 user should show the account information of the customer First Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1801"
    }
  ]
});
formatter.step({
  "name": "ADMIN can select First Name, Last Name, Middle Initial, Email, Mobile Phone Nummer, Phone Nummer, Address,Date updated",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminCanSelectFirstNameLastNameMiddleInitialEmailMobilePhoneNummerPhoneNummerAddressDateUpdated()"
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
  "name": "user enters admin username \"AAbc398\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"A1b2C3\"",
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
formatter.scenario({
  "name": "tc1802 There should be a View option where customer can be navigated to all customer info and see  edit button there",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1802"
    }
  ]
});
formatter.step({
  "name": "ADMIN should show Edit Button and verify valid",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminShouldShowEditButtonAndVerifyValid()"
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
  "name": "user enters admin username \"AAbc398\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"A1b2C3\"",
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
formatter.scenario({
  "name": "There should be an Edit button where all customer information",
  "description": "  can be populated",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1803"
    }
  ]
});
formatter.step({
  "name": "ADMIN should write and new the Email address",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminShouldWriteAndNewTheEmailAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN click Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminClickSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN verifies translation not found[gmiBankBackendApp.tPCustomer.updated",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminVerifiesTranslationNotFoundGmiBankBackendAppTPCustomerUpdated()"
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
  "name": "user enters admin username \"AAbc398\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"A1b2C3\"",
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
formatter.scenario({
  "name": "The Edit portal can allow user to create or update the user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1804"
    }
  ]
});
formatter.step({
  "name": "ADMIN  should write and new the Phone Nummer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminShouldWriteAndNewThePhoneNummer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN click Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminClickSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN  verifies translations not found[gmiBankBackendApp.tPCustomer.updated",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminVerifiesTranslationsNotFoundGmiBankBackendAppTPCustomerUpdated()"
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
  "name": "user enters admin username \"AAbc398\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"A1b2C3\"",
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
formatter.scenario({
  "name": "User can delete a customer, but seeing a message if the user is",
  "description": "  sure about deletion",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_18"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1805"
    }
  ]
});
formatter.step({
  "name": "ADMIN should write and new the Address",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminShouldWriteAndNewTheAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN click Save three Button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminClickSaveThreeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADMIN  verifies translat not found[gmiBankBackendApp.tPCustomer.updated",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_18_Step_Definitions.adminVerifiesTranslatNotFoundGmiBankBackendAppTPCustomerUpdated()"
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
formatter.uri("file:src/test/resources/features/us_19.feature");
formatter.feature({
  "name": "US_19 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
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
  "name": "user enters admin username \"pader49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"pader49.\"",
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
  "name": "user clicks manageAccounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_createNewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1901 admin enter Description",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1901"
    }
  ]
});
formatter.step({
  "name": "admin click Description",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_click_Description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click Balance",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_click_Balance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin sees required message",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_sees_required_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "And "
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
  "name": "user enters admin username \"pader49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"pader49.\"",
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
  "name": "user clicks manageAccounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_createNewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1902 should provide a balance as a Dollar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1902"
    }
  ]
});
formatter.step({
  "name": "admin create as a dollar account \"200\" and verify",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_create_as_a_dollar_account_and_verify(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "And "
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
  "name": "user enters admin username \"pader49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"pader49.\"",
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
  "name": "user clicks manageAccounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_createNewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1903 can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1903"
    }
  ]
});
formatter.step({
  "name": "admin select an account as CHECKING and verify",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_select_an_account_as_CHECKING_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin select an account as a SAVING and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_select_an_account_as_a_SAVING_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin select an account as a CREDIT_CARD and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_select_an_account_as_a_CREDIT_CARD_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin select an account as a INVESTING and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_select_an_account_as_a_INVESTING_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "And "
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
  "name": "user enters admin username \"pader49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"pader49.\"",
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
  "name": "user clicks manageAccounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_createNewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1904 should account status defined as ACTIVE, SUESPENDED or CLOSED",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1904"
    }
  ]
});
formatter.step({
  "name": "admin click Account Status Type defined as a ACTIVE and verify",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_click_Account_Status_Type_defined_as_a_ACTIVE_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click Account Status Type defined as a  SUESPENDED and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_click_Account_Status_Type_defined_as_a_SUEPENDED_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click Account Status Type defined as a  CLOSED and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_click_Account_Status_Type_defined_as_a_CLOSED_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "And "
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
  "name": "user enters admin username \"pader49\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"pader49.\"",
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
  "name": "user clicks manageAccounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_manageAccounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewAccount link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_13_Step_Definitions.user_clicks_createNewAccount_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "tc1905 can select an employee from the drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_19"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc1905"
    }
  ]
});
formatter.step({
  "name": "admin select Employee and verify the selectet Employee",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_19_Step_Definitions.admin_select_Employee_and_verify_the_selectet_Employee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_20.feature");
formatter.feature({
  "name": "US_20 system should allow to read all customers info using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_20"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "TC_2001 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "use api end point  \"https://www.gmibank.com/api/tp-customers\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all customers\u0027 information as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.get_all_customers_information_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2001 read all customers you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_20"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2001"
    }
  ]
});
formatter.step({
  "name": "find out how many customers are and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.find_out_how_many_customers_are_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all the information of the seventh customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.getAllTheInformationOfTheSeventhCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify seventh customers \"ssn\" is \"321-54-9800\" and \"state\" is \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.verifySeventhCustomersIsAndIs(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_2001 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "use api end point  \"https://www.gmibank.com/api/tp-customers\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all customers\u0027 information as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.get_all_customers_information_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2002 read all customers you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_20"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify first customer\u0027s \"firstName\" \"John\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.verifyFirstCustomerS(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify second customer\u0027s \"lastName\" \"Stone\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.verifySecondCustomerS(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify fifth customer\u0027s country \"UNITED STATES\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.verifyFifthCustomerSCountry(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get last customer\u0027s id and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_20_Step_Definitions.get_first_customer_s_id_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_21.feature");
formatter.feature({
  "name": "US_21 system should allow to read all customers info using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_21"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "TC_2101 and TC_2102 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "use this api end point  \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.useThisApiEndPoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all countries information as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.getAllCountriesInformationAsDeSerialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2101 read all countries you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_21"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2101"
    }
  ]
});
formatter.step({
  "name": "find out how many countries are and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.find_out_how_many_countries_are_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all the information of the eighth contries",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.getAllTheInformationOfTheEighthContries()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify eighth Country \"id\" is \"18902\" and \"name\" is \"Hollanda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.verifyEighthCountryIsAndIs(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_2101 and TC_2102 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "use this api end point  \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.useThisApiEndPoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all countries information as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.getAllCountriesInformationAsDeSerialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2102 read all countries you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_21"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify all countries you created and validate them one by one",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_21_Step_Definitions.verifyAllCountriesYouCreatedAndValidateThemOneByOne()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_22.feature");
formatter.feature({
  "name": "US_22 System should allow to read states using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2201 Read all states you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2001"
    }
  ]
});
formatter.step({
  "name": "find out how many states",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.find_out_how_many_states_are_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify id of Koblenz is (integer) \"19241\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_id_of_Koblenz_is_integer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains \u003cstates\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "states"
      ]
    },
    {
      "cells": [
        "Centre"
      ]
    },
    {
      "cells": [
        "Auvergne"
      ]
    },
    {
      "cells": [
        "Koblenz"
      ]
    },
    {
      "cells": [
        "Virginia"
      ]
    }
  ]
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Centre",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Centre()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Auvergne",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Auvergne()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Koblenz",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Koblenz()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Virginia",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Virginia()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_23.feature");
formatter.feature({
  "name": "US_23 system should allow to read all Applicants using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_23"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "TC_2301 and TC_2302 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us_o23 use api end point  \"https://www.gmibank.com/api/tp-account-registrations\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.us__use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all applicants\u0027 information",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.get_all_applicants_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2301 read all countries you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_23"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2301"
    }
  ]
});
formatter.step({
  "name": "verify that the status code is 200",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.verifyThatTheStatusCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "find out 829 applicants are and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.findOutApplicantsAreAndVerify(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Find the number of those whose id is less than 5000 and verify the number",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.findTheNumberOfThoseWhoseIdIsLessThanAndVerifyTheNumber(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify if there are any applicants named \"Ali\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.verifyIfThereAreAnyApplicantsNamed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_2301 and TC_2302 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us_o23 use api end point  \"https://www.gmibank.com/api/tp-account-registrations\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.us__use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all applicants\u0027 information",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.get_all_applicants_information()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2302 read all customers you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_23"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2302"
    }
  ]
});
formatter.step({
  "name": "one get seventh applicants id 1605 and verify",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.oneAndVerify(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "two get seventh applicants ssn \"432-45-6780\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "three get seventh applicants \"firstName\" \"Orhan\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.threeGetSeventhApplicantsAndVerify(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "four get seventh applicants \"lastName\" \"Keskin\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.fourGetSeventhApplicantsAndVerify(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "five get seventh applicants \"address\" \"Just a street\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.fiveGetSeventhApplicantsAndVerify(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "six get seventh applicants \"mobilePhoneNumber\": \"222-333-4444\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.six(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seven get seventh applicants \"userId\": 1555 and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.sevenAndVerify(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eigth get seventh applicants \"userName\": \"orhan\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.eigth(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nine get seventh applicants \"email\": \"emailexample@gmail.com\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.nine(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ten get seventh applicants \"createDate\": \"2020-10-17T22:57:07.690Z\" and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_23_Step_Definitions.ten(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_24.feature");
formatter.feature({
  "name": "US_24 System should allow to create new states using api endpoint",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_24"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.scenario({
  "name": "User can Just create each state 1 by 1 / TC_2401 before POST request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_24"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "name": "user enter REST API endpoint as \"http://gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.user_enter_REST_API_endpoint_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request should be HTTP Status Code 200",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.before_post_request_should_be_HTTP_Status_Code(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request should be response format \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.before_post_request_should_be_response_format(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request user finds out the size of the state list",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.before_post_request_user_finds_out_the_size_of_the_state_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sends a POST request to REST API endpoint \"http://gmibank.com/api/tp-states\" as \"Russelsheim\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.user_sends_a_POST_request_to_REST_API_endpoint_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can Just create each state 1 by 1 / TC_2401 after POST request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_24"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "name": "After creation user sends a GET request to REST API endpoint \"http://gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.after_creation_user_sends_a_GET_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After state creation HTTP Status Code should be 200",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.after_state_creation_HTTP_Status_Code_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After creation user verifies the created \"Russelsheim\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.after_creation_user_verifies_the_created(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After the creation request, the user sees the size of the status list",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_24_Step_Definitions.after_the_creation_request_the_user_sees_the_size_of_the_status_list()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_25.feature");
formatter.feature({
  "name": "US_25 System should allow to create new countries using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_25"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.scenario({
  "name": "TC_2501 User can just create each country 1 by 1 / TC_2501 before POST request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_25"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2501"
    }
  ]
});
formatter.step({
  "name": "User enter REST API Endpoint as \"https://www.gmibank.com/api/tp-countries/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.user_enter_REST_API_Endpoint_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request HTTP Status Code should be \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.before_post_request_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request response format should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.before_post_request_response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before post request user finds out the size of the country list",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.before_post_request_user_finds_out_the_size_of_the_country_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User send a POST request to REST API endpoint \"https://www.gmibank.com/api/tp-countries/\" as \"Belgium\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.user_send_a_POST_request_to_REST_API_endpoint_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2502 User can read countries 1 by 1 / TC_2502 after POST request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_25"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2502"
    }
  ]
});
formatter.step({
  "name": "After creation send a GET request to REST API end point \"https://www.gmibank.com/api/tp-countries/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.after_creation_send_a_GET_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After creation user verifies the created country \"Belgium\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.after_creation_user_verifies_the_created_country(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After creation HTTP Status Code should be \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.after_creation_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After creation user finds out the size of the country list",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_25_Step_Definitions.after_creation_user_finds_out_the_size_of_the_country_list()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_26.feature");
formatter.feature({
  "name": "US_26 System should allow to update countries using api end point",
  "description": "          \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_26"
    },
    {
      "name": "@SmokeTest1"
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
      "name": "@SmokeTest1"
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
  "name": "User send a Put request endpoint \"https://www.gmibank.com/api/tp-countries/25562\" as \"Van\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_26_Step_Definitions.user_send_a_Put_request_endpoint_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_27.feature");
formatter.feature({
  "name": "US_27 System should allow to delete states using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.scenario({
  "name": "TC_2701 before DELETE request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2701"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to REST API end point  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_GET_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Before delete request HTTP Status Code should be \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c404\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_HTTP_Status_Code_should_be(US_27_Step_Definitions.java:41)\r\n\tat ✽.Before delete request HTTP Status Code should be \"200\"(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_27.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Before delete request response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Before delete request id should be \"1801\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_id_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Before delete request name should be \"ALASKA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.before_delete_request_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_2702 check DELETE request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_27"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC_2702"
    }
  ]
});
formatter.step({
  "name": "I send a DELETE request to REST API end point  \"https://www.gmibank.com/api/tp-states/1801\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.i_send_a_DELETE_request_to_REST_API_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "After delete request HTTP Status Code should be \"204\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_HTTP_Status_Code_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [500] but found [204]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:839)\r\n\tat org.testng.Assert.assertEquals(Assert.java:849)\r\n\tat gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_HTTP_Status_Code_should_be(US_27_Step_Definitions.java:83)\r\n\tat ✽.After delete request HTTP Status Code should be \"204\"(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_27.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "After delete request response format should be \"application/json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_response_format_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "After delete request response after delete should contain nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_27_Step_Definitions.after_delete_request_response_after_delete_should_contain_nothing()"
});
formatter.result({
  "status": "skipped"
});
});