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
  "name": "TC_013 registiration test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@TC_014"
    }
  ]
});
formatter.step({
  "name": "kullanici textboxlari bos birakip register butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_textboxlari_bos_birakip_register_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici bos birakilan textbox\u0027larda uyari yazisi ciktigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_bos_birakilan_textbox_larda_uyari_yazisi_ciktigini_dogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});