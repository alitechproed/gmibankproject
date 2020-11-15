$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_10.feature");
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToZipcodeBox()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToZipcodeBox()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToZipcodeBox()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToZipcodeBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to zipcode box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToZipcodeBox()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendNothingToZipcodeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid zipcode data entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesInvalidZipcodeDataEntry()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToAdressBox()"
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
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSendDataToAdressBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid data entry to adress box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userVerifiesValidDataEntryToAdressBox()"
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
  "name": "user enters admin username \"sametyaprak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
