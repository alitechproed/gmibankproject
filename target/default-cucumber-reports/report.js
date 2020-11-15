$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_07.feature");
formatter.feature({
  "name": "US_07 Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_07"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC_0701 email test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0701"
    }
  ]
});
formatter.step({
  "name": "Kullanici email textBoxina tiklar",
  "keyword": "And "
});
formatter.step({
  "name": "Kullanici \"\u003cemail\u003e\" girer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici hatali email  girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.examples({
  "name": "invalid emailler",
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
        "abc122afhmail.com"
      ]
    },
    {
      "cells": [
        "abc122afh@mail"
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
  "name": "Kullanici bir user olarak acilan menuden signIn linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_bir_user_olarak_acilan_menuden_signIn_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici username textboxina \"AAbc398\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_username_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici  password textboxina \"A1b2C3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_password_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici signin butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_signin_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_sag_ustteki_insan_simgesine_tekrar_tiklar_ve_userInfo_basligini_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0701 email test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_07"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0701"
    }
  ]
});
formatter.step({
  "name": "Kullanici email textBoxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_email_textBoxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici \"abc122afhmail.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hatali email  girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_hatali_email_girdiginde_hata_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "name": "Kullanici bir user olarak acilan menuden signIn linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_bir_user_olarak_acilan_menuden_signIn_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici username textboxina \"AAbc398\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_username_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici  password textboxina \"A1b2C3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_password_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici signin butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_signin_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_sag_ustteki_insan_simgesine_tekrar_tiklar_ve_userInfo_basligini_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0701 email test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_07"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0701"
    }
  ]
});
formatter.step({
  "name": "Kullanici email textBoxina tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_email_textBoxina_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici \"abc122afh@mail\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hatali email  girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_hatali_email_girdiginde_hata_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "name": "Kullanici bir user olarak acilan menuden signIn linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_bir_user_olarak_acilan_menuden_signIn_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici username textboxina \"AAbc398\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_username_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici  password textboxina \"A1b2C3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_password_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici signin butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_signin_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_sag_ustteki_insan_simgesine_tekrar_tiklar_ve_userInfo_basligini_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0702 language  test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_07"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0702"
    }
  ]
});
formatter.step({
  "name": "Kullanici language  secenegine tiklar",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_language_secenegine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici language dropDown\u0027unun icinde sadece  \"English\" veya \"Türkçe\" dilleri oldugunu gorur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_07_StepDefinitions.kullanici_language_dropDown_unun_icinde_sadece_veya_dilleri_oldugunu_gorur(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});