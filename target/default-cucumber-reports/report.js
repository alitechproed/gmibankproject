$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US10.feature");
formatter.feature({
  "name": "US10 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "zipcode positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc1001"
    }
  ]
});
formatter.step({
  "name": "user send data to zipcode box \"\u003czipcode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
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
        "zipcode"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "asdasd"
      ]
    },
    {
      "cells": [
        "das455"
      ]
    },
    {
      "cells": [
        "4a"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "zipcode positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1001"
    }
  ]
});
formatter.step({
  "name": "user send data to zipcode box \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "zipcode positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1001"
    }
  ]
});
formatter.step({
  "name": "user send data to zipcode box \"asdasd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "zipcode positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1001"
    }
  ]
});
formatter.step({
  "name": "user send data to zipcode box \"das455\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "zipcode positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1001"
    }
  ]
});
formatter.step({
  "name": "user send data to zipcode box \"4a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "zipcode negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1002"
    }
  ]
});
formatter.step({
  "name": "user send nothing to zipcode box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendNothingToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid zipcode data entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesInvalidZipcodeDataEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "adress positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc1003"
    }
  ]
});
formatter.step({
  "name": "user send data to adress box \"\u003cadress\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
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
        "adress"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "asdasd"
      ]
    },
    {
      "cells": [
        "das455"
      ]
    },
    {
      "cells": [
        "4a"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adress positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1003"
    }
  ]
});
formatter.step({
  "name": "user send data to adress box \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToAdressBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adress positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1003"
    }
  ]
});
formatter.step({
  "name": "user send data to adress box \"asdasd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToAdressBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adress positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1003"
    }
  ]
});
formatter.step({
  "name": "user send data to adress box \"das455\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToAdressBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adress positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1003"
    }
  ]
});
formatter.step({
  "name": "user send data to adress box \"4a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToAdressBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "adress negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1004"
    }
  ]
});
formatter.step({
  "name": "user send nothing to adress box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendNothingToAdressBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid acress data entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesInvalidAcressDataEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "city positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc1005"
    }
  ]
});
formatter.step({
  "name": "user send data to city box \"\u003ccity\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid data entry to city box",
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
        "city"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "asdasd"
      ]
    },
    {
      "cells": [
        "das455"
      ]
    },
    {
      "cells": [
        "4a"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "city positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1005"
    }
  ]
});
formatter.step({
  "name": "user send data to city box \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToCityBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to city box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToCityBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "city positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1005"
    }
  ]
});
formatter.step({
  "name": "user send data to city box \"asdasd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToCityBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to city box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToCityBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "city positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1005"
    }
  ]
});
formatter.step({
  "name": "user send data to city box \"das455\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToCityBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to city box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToCityBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "city positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1005"
    }
  ]
});
formatter.step({
  "name": "user send data to city box \"4a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToCityBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to city box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToCityBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "city negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1006"
    }
  ]
});
formatter.step({
  "name": "user send nothing to city box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendNothingToCityBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid city data entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesInvalidCityDataEntry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "country positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1007"
    }
  ]
});
formatter.step({
  "name": "user select a country from dropbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSelectACountryFromDropbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies a country can be selected",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesACountryCanBeSelected()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "state positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc1008"
    }
  ]
});
formatter.step({
  "name": "user send data to state box \"\u003cstate\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user verifies valid data entry to state box",
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
        "state"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "asdasd"
      ]
    },
    {
      "cells": [
        "das455"
      ]
    },
    {
      "cells": [
        "4a"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "state positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1008"
    }
  ]
});
formatter.step({
  "name": "user send data to state box \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToStateBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to state box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToStateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "state positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1008"
    }
  ]
});
formatter.step({
  "name": "user send data to state box \"asdasd\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToStateBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to state box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToStateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "state positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1008"
    }
  ]
});
formatter.step({
  "name": "user send data to state box \"das455\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToStateBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to state box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToStateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
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
  "location": "gmibank.stepdefinitions.US01StepDefinitions.Given_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Ankara06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "state positive test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US10"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc1008"
    }
  ]
});
formatter.step({
  "name": "user send data to state box \"4a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSendDataToStateBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to state box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userVerifiesValidDataEntryToStateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US10StepDefinitions.userSignOut()"
});
formatter.result({
  "status": "passed"
});
});