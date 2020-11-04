$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_02.feature");
formatter.feature({
  "name": "GmiBankTest",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_02"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_017",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_016"
    }
  ]
});
formatter.step({
  "name": "kullanici \"\u003cemail\u003e\" adresini girer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici invalid email girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.examples({
  "name": "emailler",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email"
      ]
    },
    {
      "cells": [
        "alicangmail.com"
      ]
    },
    {
      "cells": [
        "alican@gmail"
      ]
    }
  ]
});
formatter.background({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_gmibank_anasayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_017",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@TC_016"
    }
  ]
});
formatter.step({
  "name": "kullanici \"alicangmail.com\" adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici invalid email girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_invalid_email_girdiginde_hata_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Kullanici bir user olarak gmibank anasayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_gmibank_anasayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_017",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@TC_016"
    }
  ]
});
formatter.step({
  "name": "kullanici \"alican@gmail\" adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici invalid email girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.Us_02_StepDef.kullanici_invalid_email_girdiginde_hata_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
});