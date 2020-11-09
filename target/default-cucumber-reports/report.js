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
  "name": "TC_014 invalid SSN test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@TC_015"
    }
  ]
});
formatter.step({
  "name": "kullanici SSN textboxina sayilar arasinda bosluk koyarak giris yapar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_SSN_textboxina_sayilar_arasinda_bosluk_koyarak_giris_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invalid numara girildiginde textbox\u0027in kenar rengi kirmizi gorulur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.invalid_numara_girildiginde_textbox_in_kenar_rengi_kirmizi_gorulur()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[rgb(207, 195, 202)]\u003e but was:\u003c[#ced4da]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat gmibank.stepdefinitions.US_02_Step_Definitions.invalid_numara_girildiginde_textbox_in_kenar_rengi_kirmizi_gorulur(US_02_Step_Definitions.java:68)\r\n\tat ✽.invalid numara girildiginde textbox\u0027in kenar rengi kirmizi gorulur(file:///C:/Users/TTR/IdeaProjects/gmibankproject/src/test/resources/features/us_02.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});