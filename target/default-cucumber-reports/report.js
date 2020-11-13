$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_04.feature");
formatter.feature({
  "name": "US_04 succes login with valid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_04"
    },
    {
      "name": "@SmokeTest"
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
  "name": "Kullanici bir user olarak acilan menuden login linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_login_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0401 success message to login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_04"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0401"
    }
  ]
});
formatter.step({
  "name": "Kullanici acilan Sign in sayfasinda username textboxina \"AAbc398\" girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_acilan_Sign_in_sayfasinda_username_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici acilan Sign in sayfasinda password textboxina \"A1b2C3\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_acilan_Sign_in_sayfasinda_password_textboxina_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici acilan Sign in sayfasinda Login butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_acilan_Sign_in_sayfasinda_Login_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici ismini kayit oldugu ismini acilan sayfada goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_ismini_kayit_oldugu_ismini_acilan_sayfada_goruntuler()"
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
  "name": "Kullanici bir user olarak acilan menuden login linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_login_linkine_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0402 cancel login option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_04"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0402"
    }
  ]
});
formatter.step({
  "name": "Kullanici acilan Sign in sayfasinda Cancel butonunu goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_04_Step_Definitions.kullanici_acilan_Sign_in_sayfasinda_Cancel_butonunu_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});