$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_03.feature");
formatter.feature({
  "name": "US_003 Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_0301  Positiv Test  at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0301"
    }
  ]
});
formatter.step({
  "name": "bir user sent data to new Password Box \"\u003cPassword\u003e\" and verify the level chart",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Password"
      ]
    },
    {
      "cells": [
        "Betul2015."
      ]
    },
    {
      "cells": [
        "BeT201*"
      ]
    }
  ]
});
formatter.background({
  "name": "user register gmibank hopage click and reache",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_gmibank_anasayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0301  Positiv Test  at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc0301"
    }
  ]
});
formatter.step({
  "name": "bir user sent data to new Password Box \"Betul2015.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.bir_user_sent_data_to_new_Password_Box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user register gmibank hopage click and reache",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_gmibank_anasayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0301  Positiv Test  at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTests"
    },
    {
      "name": "@tc0301"
    }
  ]
});
formatter.step({
  "name": "bir user sent data to new Password Box \"BeT201*\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.bir_user_sent_data_to_new_Password_Box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});