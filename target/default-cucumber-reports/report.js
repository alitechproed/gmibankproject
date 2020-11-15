$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_01.feature");
formatter.feature({
  "name": "US_01 success register with valid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_01"
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
  "name": "TC_0101 gecerli SSN test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0101"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina \"333-22-4444\" numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_SSN_textboxina_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxinin bir hata uyarisi vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_SSN_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0102 gecersiz SSN test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0102"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina gecersiz  \"\u003cSSN\u003e\" numarasini girer",
  "keyword": "Given "
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your SSN is invalid\" hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.examples({
  "name": "TC_0102 SSN numaralari",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN"
      ]
    },
    {
      "cells": [
        "333-22-44445"
      ]
    },
    {
      "cells": [
        "333-22-443"
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
  "name": "TC_0102 gecersiz SSN test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0102"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina gecersiz  \"333-22-44445\" numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_SSN_textboxina_gecersiz_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your SSN is invalid\" hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_hata_mesajini_goruntuler(java.lang.String)"
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
  "name": "TC_0102 gecersiz SSN test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0102"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina gecersiz  \"333-22-443\" numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_SSN_textboxina_gecersiz_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your SSN is invalid\" hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_hata_mesajini_goruntuler(java.lang.String)"
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
  "name": "TC_0103  gecerli first name positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0103"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxina \"Ali\" ismini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_First_Name_textboxina_ismini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxinin bir hata uyarisi vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler()"
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
  "name": "TC_0104 bos first name negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0104"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxini \" \" bos birakir",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_First_Name_textboxini_bos_birakir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your First Name is required\" hata uyarisini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_hata_uyarisini_goruntuler(java.lang.String)"
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
  "name": "TC_0105  gecerli last name positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0105"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxina \"Smith\" soyismini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
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
  "name": "TC_0106 bos last name negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0106"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxini \" \" bos birakir",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Last_Name_textboxini_bos_birakir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your Last Name is required\" hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_hata_mesajini_goruntuler(java.lang.String)"
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
  "name": "TC_0107  gecerli address test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0107"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxina \"A mah. B cad. No:1 66300 Istanbul Sariyer\"  adresini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Address_textboxina_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Address_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
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
  "name": "TC_0108 gecerli mobile phone number test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0108"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina \"123-123-1234\" cep telefonu numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_cep_telefonu_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
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
  "name": "TC_0109 gecersiz mobile phone number negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0109"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan \"1231231234\" cep telefonu numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_tire_olmadan_cep_telefonu_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak \"Your mobile phone number is invalid\" hata mesajini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_hata_mesajini_goruntuler(java.lang.String)"
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
  "name": "TC_0110 gecerli kullanici adi test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0110"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina  \"Abc123\" kullanici adini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Username_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
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
  "name": "TC_0111 gecersiz kullanici adi test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0111"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina  sadece sayilardan olusan \"123\" kullanici adini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Username_textboxina_sadece_sayilardan_olusan_kullanici_adini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxinin cerceve renginin kirmizi oldugunu goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Username_textboxinin_cerceve_renginin_kirmizi_oldugunu_goruntuler()"
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
  "name": "TC_0112 gecerli email test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0112"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina \"abc@mail.com\" mail adresini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxinin bir hata mesaji vermedigini goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_vermedigini_goruntuler()"
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
  "name": "TC_0113 gecerli verilerle hesap olusturma",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0113"
    }
  ]
});
formatter.step({
  "name": "Kullanici bir user olarak SSN textboxina \"333-28-4444\" numarasini girer",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_SSN_textboxina_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak First Name textboxina \"Ali\" ismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_First_Name_textboxina_ismini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Last Name textboxina \"Smith\" soyismini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Address textboxina \"A mah. B cad. No:1 66300 Istanbul Sariyer\"  adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Address_textboxina_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Mobile Phone Number textboxina \"123-123-1234\" cep telefonu numarasini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_cep_telefonu_numarasini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Username textboxina  \"AAbc123\" kullanici adini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Email textboxina \"abc12@mail.com\" mail adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password textboxina \"A1b2C3\" sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_New_password_textboxina_sifresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak New password confirmation textboxina \"A1b2C3\" sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_New_password_confirmation_textboxina_sifresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak Register butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_Register_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir user olarak basarili bir kayit olusturulduguna dair mesaj goruntuler",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_basarili_bir_kayit_olusturulduguna_dair_mesaj_goruntuler()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_02.feature");
formatter.feature({
  "name": "US_02 Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_02"
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
  "name": "TC_0201 registiration test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0201"
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
  "name": "TC_0202 invalid SSN test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0202"
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
  "name": "TC_0203 invalid mobile phone number test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0203"
    }
  ]
});
formatter.step({
  "name": "kullanici Mobile Phone Number textbox\u0027ini sayilar arasinda ozel karakter kullanmadan doldurur",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_Mobile_Phone_Number_textbox_ini_sayilar_arasinda_ozel_karakter_kullanmadan_doldurur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "invalid giris yapildiginda mobile phone number yazisi kirmizi olur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.invalid_giris_yapildiginda_mobile_phone_number_yazisi_kirmizi_olur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0204 email adress test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0204"
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
  "name": "TC_0204 email adress test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0204"
    }
  ]
});
formatter.step({
  "name": "kullanici \"alicangmail.com\" adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici invalid email girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_invalid_email_girdiginde_hata_mesajini_gorur()"
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
  "name": "TC_0204 email adress test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_02"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0204"
    }
  ]
});
formatter.step({
  "name": "kullanici \"alican@gmail\" adresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_adresini_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici invalid email girdiginde hata mesajini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_02_Step_Definitions.kullanici_invalid_email_girdiginde_hata_mesajini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_03.feature");
formatter.feature({
  "name": "US_003 Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
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
        "Betul2015"
      ]
    },
    {
      "cells": [
        "BeT201"
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
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0301"
    }
  ]
});
formatter.step({
  "name": "bir user sent data to new Password Box \"Betul2015\" and verify the level chart",
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
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0301"
    }
  ]
});
formatter.step({
  "name": "bir user sent data to new Password Box \"BeT201\" and verify the level chart",
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
formatter.scenarioOutline({
  "name": "TC_0302 Negative Test at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0302"
    }
  ]
});
formatter.step({
  "name": "iki user sent to newPassword Box \"\u003cPassword\u003e\" and verify the level chart",
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
        "BETUL2015!!!"
      ]
    },
    {
      "cells": [
        "BET201!.....B"
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
  "name": "TC_0302 Negative Test at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0302"
    }
  ]
});
formatter.step({
  "name": "iki user sent to newPassword Box \"BETUL2015!!!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.iki_user_sent_to_newPassword_Box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0302 Negative Test at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0302"
    }
  ]
});
formatter.step({
  "name": "iki user sent to newPassword Box \"BET201!.....B\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.iki_user_sent_to_newPassword_Box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"\u003cPassword\u003e\" and verify the level chart",
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
        "BeT201!"
      ]
    },
    {
      "cells": [
        "aBE3."
      ]
    },
    {
      "cells": [
        "bet2015"
      ]
    },
    {
      "cells": [
        "BET2015a"
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
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"Betul2015.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.uc_user_sent_to_newPass_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"BeT201!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.uc_user_sent_to_newPass_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"aBE3.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.uc_user_sent_to_newPass_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"bet2015\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.uc_user_sent_to_newPass_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0303 Positiv Test at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0303"
    }
  ]
});
formatter.step({
  "name": "uc user sent to newPass box \"BET2015a\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.uc_user_sent_to_newPass_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0304 Negativ test  at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0304"
    }
  ]
});
formatter.step({
  "name": "dort user sent to newPassword field \"\u003cPassword\u003e\" and verify the level chart",
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
        "BETUL2015."
      ]
    },
    {
      "cells": [
        "BT201!"
      ]
    },
    {
      "cells": [
        "BT2015434!"
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
  "name": "TC_0304 Negativ test  at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0304"
    }
  ]
});
formatter.step({
  "name": "dort user sent to newPassword field \"BETUL2015.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.dort_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0304 Negativ test  at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0304"
    }
  ]
});
formatter.step({
  "name": "dort user sent to newPassword field \"BT201!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.dort_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0304 Negativ test  at least 1 lowercase char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0304"
    }
  ]
});
formatter.step({
  "name": "dort user sent to newPassword field \"BT2015434!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.dort_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0305 Positiv test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0305"
    }
  ]
});
formatter.step({
  "name": "bes user sent to newPassword field \"\u003cPassword\u003e\" and verify the level chart",
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
        "Bet2a.!"
      ]
    },
    {
      "cells": [
        "Ba!2C4"
      ]
    },
    {
      "cells": [
        "345a!B"
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
  "name": "TC_0305 Positiv test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0305"
    }
  ]
});
formatter.step({
  "name": "bes user sent to newPassword field \"Bet2a.!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.bes_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0305 Positiv test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0305"
    }
  ]
});
formatter.step({
  "name": "bes user sent to newPassword field \"Ba!2C4\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.bes_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0305 Positiv test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0305"
    }
  ]
});
formatter.step({
  "name": "bes user sent to newPassword field \"345a!B\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.bes_user_sent_to_newPassword_field_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0306 Negativ test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0306"
    }
  ]
});
formatter.step({
  "name": "alti user sent to newPassword  \"\u003cPassword\u003e\" and verify the level chart",
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
        "BETULa."
      ]
    },
    {
      "cells": [
        "Besdfbbdf!!!!"
      ]
    },
    {
      "cells": [
        "BeTdfsdgb!!!..!"
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
  "name": "TC_0306 Negativ test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0306"
    }
  ]
});
formatter.step({
  "name": "alti user sent to newPassword  \"BETULa.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.alti_user_sent_to_newPassword_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0306 Negativ test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0306"
    }
  ]
});
formatter.step({
  "name": "alti user sent to newPassword  \"Besdfbbdf!!!!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.alti_user_sent_to_newPassword_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0306 Negativ test at least 1 digit and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0306"
    }
  ]
});
formatter.step({
  "name": "alti user sent to newPassword  \"BeTdfsdgb!!!..!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.alti_user_sent_to_newPassword_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0307 Positiv test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0307"
    }
  ]
});
formatter.step({
  "name": "yedi user sent to newPASWORD box \"\u003cPassword\u003e\" and verify the level chart",
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
        "BE24La."
      ]
    },
    {
      "cells": [
        "Bet2!a2"
      ]
    },
    {
      "cells": [
        "BeTdf34dgb!!..!"
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
  "name": "TC_0307 Positiv test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0307"
    }
  ]
});
formatter.step({
  "name": "yedi user sent to newPASWORD box \"BE24La.\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.yedi_user_sent_to_newPASWORD_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0307 Positiv test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0307"
    }
  ]
});
formatter.step({
  "name": "yedi user sent to newPASWORD box \"Bet2!a2\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.yedi_user_sent_to_newPASWORD_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0307 Positiv test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0307"
    }
  ]
});
formatter.step({
  "name": "yedi user sent to newPASWORD box \"BeTdf34dgb!!..!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.yedi_user_sent_to_newPASWORD_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0308"
    }
  ]
});
formatter.step({
  "name": "sekiz user sent to newPASvORD box \"\u003cPassword\u003e\" and verify the level chart",
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
        "BETULa23"
      ]
    },
    {
      "cells": [
        "Bet2"
      ]
    },
    {
      "cells": [
        "BeTd35"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_Step_Definitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedConstructorAccessor19.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 55 more\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.pages.US_01_Page.\u003cinit\u003e(US_01_Page.java:10)\r\n\tat gmibank.stepdefinitions.US_01_Step_Definitions.\u003cinit\u003e(US_01_Step_Definitions.java:15)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0308"
    }
  ]
});
formatter.step({
  "name": "sekiz user sent to newPASvORD box \"BETULa23\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.sekiz_user_sent_to_newPASvORD_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_01_Step_Definitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedConstructorAccessor19.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 55 more\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.pages.US_01_Page.\u003cinit\u003e(US_01_Page.java:10)\r\n\tat gmibank.stepdefinitions.US_01_Step_Definitions.\u003cinit\u003e(US_01_Step_Definitions.java:15)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Kullanici bir user olarak acilan menuden register linkine tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_01_Step_Definitions.kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0308"
    }
  ]
});
formatter.step({
  "name": "sekiz user sent to newPASvORD box \"Bet2\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.sekiz_user_sent_to_newPASvORD_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0308"
    }
  ]
});
formatter.step({
  "name": "sekiz user sent to newPASvORD box \"BeTd35\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.sekiz_user_sent_to_newPASvORD_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0309 Positiv Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0309"
    }
  ]
});
formatter.step({
  "name": "dokuz user sent to newPassWORD box \"\u003cPassword\u003e\" and verify the level chart",
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
        "Be2.!Al"
      ]
    },
    {
      "cells": [
        "Bet2a!.a345"
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
  "name": "TC_0309 Positiv Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0309"
    }
  ]
});
formatter.step({
  "name": "dokuz user sent to newPassWORD box \"Be2.!Al\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.dokuz_user_sent_to_newPassWORD_box_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0309 Positiv Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0309"
    }
  ]
});
formatter.step({
  "name": "dokuz user sent to newPassWORD box \"Bet2a!.a345\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.dokuz_user_sent_to_newPassWORD_box_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_0310 Negativ Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0310"
    }
  ]
});
formatter.step({
  "name": "on user sent to newPass field \"\u003cPassword\u003e\" and verify the level chart",
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
        "Be2.!A"
      ]
    },
    {
      "cells": [
        "Bet2a"
      ]
    },
    {
      "cells": [
        "aB2!"
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
  "name": "TC_0310 Negativ Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0310"
    }
  ]
});
formatter.step({
  "name": "on user sent to newPass field \"Be2.!A\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.on_user_sent_to_newPass_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0310 Negativ Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0310"
    }
  ]
});
formatter.step({
  "name": "on user sent to newPass field \"Bet2a\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.on_user_sent_to_newPass_field_and_verify_the_level_chart(java.lang.String)"
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
  "name": "TC_0310 Negativ Test  at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0310"
    }
  ]
});
formatter.step({
  "name": "on user sent to newPass field \"aB2!\" and verify the level chart",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_03_Step_Definitions.on_user_sent_to_newPass_field_and_verify_the_level_chart(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_04.feature");
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
formatter.uri("file:src/test/resources/features/us_05.feature");
formatter.feature({
  "name": "US_05 Login page should not be accessible with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0501"
    }
  ]
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin username \"\u003cuserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin password \"Betul2015\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.step({
  "name": "assert error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName"
      ]
    },
    {
      "cells": [
        "aaaaaaa"
      ]
    },
    {
      "cells": [
        "adkssla"
      ]
    },
    {
      "cells": [
        "iso1945"
      ]
    },
    {
      "cells": [
        "12jksks"
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
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0501"
    }
  ]
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
  "name": "user enters admin username \"aaaaaaa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0501"
    }
  ]
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
  "name": "user enters admin username \"adkssla\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0501"
    }
  ]
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
  "name": "user enters admin username \"iso1945\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0501"
    }
  ]
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
  "name": "user enters admin username \"12jksks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Betul2015\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0502"
    }
  ]
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin username \"asilcan\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.step({
  "name": "assert error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "password"
      ]
    },
    {
      "cells": [
        "aaaaaaa25"
      ]
    },
    {
      "cells": [
        "adkssla41"
      ]
    },
    {
      "cells": [
        "iso194578"
      ]
    },
    {
      "cells": [
        "12jksks39"
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
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0502"
    }
  ]
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
  "name": "user enters admin username \"asilcan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"aaaaaaa25\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0502"
    }
  ]
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
  "name": "user enters admin username \"asilcan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"adkssla41\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0502"
    }
  ]
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
  "name": "user enters admin username \"asilcan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"iso194578\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0502"
    }
  ]
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
  "name": "user enters admin username \"asilcan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"12jksks39\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0503"
    }
  ]
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin username \"\u003cuserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters admin password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.step({
  "name": "assert error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "aaaaaaa25",
        "adkssla41"
      ]
    },
    {
      "cells": [
        "iso194578",
        "haksk7852"
      ]
    },
    {
      "cells": [
        "12jksks39",
        "aaaaaaa25"
      ]
    },
    {
      "cells": [
        "adkssla41",
        "fjfjfl781"
      ]
    },
    {
      "cells": [
        "iso194578",
        "12jksks39"
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
formatter.scenario({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0503"
    }
  ]
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
  "name": "user enters admin username \"aaaaaaa25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"adkssla41\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0503"
    }
  ]
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
  "name": "user enters admin username \"iso194578\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"haksk7852\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0503"
    }
  ]
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
  "name": "user enters admin username \"12jksks39\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"aaaaaaa25\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0503"
    }
  ]
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
  "name": "user enters admin username \"adkssla41\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"fjfjfl781\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User cannot login with invalid username and password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0503"
    }
  ]
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
  "name": "user enters admin username \"iso194578\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"12jksks39\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
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
formatter.scenario({
  "name": "User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0504"
    }
  ]
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
  "name": "user enters admin username \"aaaaaaa25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"adkssla41\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click reset button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.userClickResetButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user write invalid mail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.userWriteInvalidMail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.userClickSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "assert succesful message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assertSuccesfulMessage()"
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
formatter.scenario({
  "name": "User should be given the option to navigate to registration page if they did not register yet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_05"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0505"
    }
  ]
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
  "name": "user enters admin username \"aaaaaaa25\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"adkssla41\"",
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
  "name": "assert error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assert_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "assert register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_05_Step_Definitions.assertRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/us_06.feature");
formatter.feature({
  "name": "US_06 user info segment should be editable on Homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0601 user settings test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0601"
    }
  ]
});
formatter.step({
  "name": "\"Resit\" must be entered as first name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.must_be_entered_as_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Heim\" must be entered as last name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.must_be_entered_as_last_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"almanbaki@yandex.com\" must be entered as email",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.must_be_entered_as_first_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"English\" must be selected as language",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.mustBeSelectedAsLanguage(java.lang.String)"
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
  "name": "TC_002 There should be 2 languages available",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_0602"
    }
  ]
});
formatter.step({
  "name": "user select \"\u003coptions\u003e\" language",
  "keyword": "Given "
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
        "options"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 There should be 2 languages available",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0602"
    }
  ]
});
formatter.step({
  "name": "user select \"0\" language",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_select_language(java.lang.String)"
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
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_002 There should be 2 languages available",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0602"
    }
  ]
});
formatter.step({
  "name": "user select \"1\" language",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_select_language(java.lang.String)"
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
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0603 update firstname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0603"
    }
  ]
});
formatter.step({
  "name": "user clears first name textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userClearsFirstNameTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates first name as \"Kolay\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_updates_first_name_as(java.lang.String)"
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
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0604 update lastname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0604"
    }
  ]
});
formatter.step({
  "name": "user clears last name textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userClearsLastNameTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User updates last name as \"Gelsin\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_updates_last_name_as(java.lang.String)"
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
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0605 positive test update email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0605"
    }
  ]
});
formatter.step({
  "name": "user clears email textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userClearsEmailTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uses the \"@\" sign when they update their email address",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_uses_the_sign_when_they_update_their_email_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uses the new \".com\" sign when they update their email address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userUsesTheNewSignWhenTheyUpdateTheirEmailAddress(java.lang.String)"
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
  "name": "user enters gmibank homepage then reaches sign in link and clicks user info",
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin username \"aslinda\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin password \"Alman.1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the username on the top right",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_the_username_on_the_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on user info link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.user_clicks_on_user_info_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_0606 negative test update email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_06"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_0606"
    }
  ]
});
formatter.step({
  "name": "user don\u0027t uses the @ sign when they update their email address",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userDonTUsesTheSignWhenTheyUpdateTheirEmailAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user don\u0027t uses the .com sign when they update their email address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_06_Step_Definitions.userDonTUsesTheComSignWhenTheyUpdateTheirEmailAddress()"
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
formatter.uri("file:src/test/resources/features/us_07.feature");
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
    },
    {
      "name": "@hata"
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
      "name": "@hata"
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
      "name": "@hata"
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
      "name": "@hata"
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
formatter.uri("file:src/test/resources/features/us_08.feature");
formatter.feature({
  "name": "US_08 Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    }
  ]
});
formatter.background({
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The old password should not be used",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0801"
    }
  ]
});
formatter.step({
  "name": "user clicks password link and old password for three textbox \"User123_\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link_and_old_password_for_three_textbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user doesn\u0027t save",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_doesn_t_save()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 uppercase char for stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0802"
    }
  ]
});
formatter.step({
  "name": "user clicks password link and writes one random uppercase",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link_and_writes_one_random_uppercase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes six lower cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_writes_six_lower_cases_and_sees_the_change_of_password_scales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes six digits and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_writes_six_digits_and_sees_the_change_of_password_scales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes six special chars and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_writes_six_special_chars_and_sees_the_change_of_password_scales()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0803"
    }
  ]
});
formatter.step({
  "name": "user clicks password link and writes one random lowercase",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userClicksPasswordLinkAndWritesOneRandomLowercase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "0user writes six digits and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesSixDigitsAndSeesTheChangeOfPasswordScales(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes six upper cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesSixUpperCasesAndSeesTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes  six special chars and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesSixSpecialCharsAndSeesTheChangeOfPasswordScales()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 digit char for stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0804"
    }
  ]
});
formatter.step({
  "name": "testcasefour user clicks password link and writes one random digit",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefourUserClicksPasswordLinkAndWritesOneRandomDigit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefour user writes six upper cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefourUserWritesSixUpperCasesAndSeesTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefour user writes six special chars and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefourUserWritesSixSpecialCharsAndSeesTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefour user writes six lower cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefourUserWritesSixLowerCasesAndSeesTheChangeOfPasswordScales()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 special char for stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0805"
    }
  ]
});
formatter.step({
  "name": "testcasefive user clicks password link and user writes one random special character",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserClicksPasswordLinkAndUserWritesOneRandomSpecialCharacter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefive user writes six lower cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserWritesSixLowerCasesAndSeesTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefive user writes six upper cases and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserWritesSixUpperCasesAndSeesTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "testcasefive user writes six digits and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserWritesSixDigitsAndSeesTheChangeOfPasswordScales()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0806"
    }
  ]
});
formatter.step({
  "name": "user clicks password link and writes one random uppercase, lowercase, digit and special char",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userClicksPasswordLinkAndWritesOneRandomUppercaseLowercaseDigitAndSpecialChar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes two lower cases and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoLowerCasesAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user write one more lower cases and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreLowerCasesAndSeesToChanging()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes two upper cases and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoUpperCasesAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user write one more upper cases and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreUpperCasesAndSeesToChanging()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes two digits and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoDigitsAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user write one more digits and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreDigitsAndSeesToChanging()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes two special chars and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoSpecialCharsAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user write one more special chars and sees to changing",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreSpecialCharsAndSeesToChanging()"
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
  "name": "us08 user enters gmibank homepage then reaches password menu link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "us08 user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_gmibank_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_userEntry_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "us08 user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link(US_08_Step_Definitions.java:41)\r\n\tat ✽.us08 user clicks signIn link(file:///C:/Users/TTR/IdeaProjects/gmibankproject/src/test/resources/features/us_08.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "us08 user enters admin username \"USER1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "us08 user enters admin password \"User123_\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_enters_admin_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "us08 user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks password link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.user_clicks_password_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The new password should be confirmed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_08"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@hata"
    },
    {
      "name": "@TC_0807"
    }
  ]
});
formatter.step({
  "name": "user clicks password link and writes random password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userClicksPasswordLinkAndWritesRandomPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user saves new password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userSavesNewPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:26)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/us_09.feature");
formatter.feature({
  "name": "US_009 User can search for a new applicant by their SSN and see all their registration info populated",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US009"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_10_Step_Definitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 55 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.pages.US_10_Page.\u003cinit\u003e(US_10_Page.java:10)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.\u003cinit\u003e(US_10_Step_Definitions.java:14)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin username \"vivi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"Betul2015.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Positiv Test  enter correct SSN and All information of the user filled in in the registration field should be seen",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0901"
    }
  ]
});
formatter.step({
  "name": "one Positiv user enter \"555-55-5555\" SSN  sees then firstname , lastname,email,mobilnumber,phoneNumber,addres ,ssn ,createDate",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.one_Positiv_user_enter_SSN_sees_then_firstname_lastname_email_mobilnumber_phoneNumber_addres_ssn_createDate(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "two Positiv user enter \"555-55-5555\" SSN  and doesnt  see then the rest of  unfiiled Record in registration",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.two_Positiv_user_enter_SSN_and_doesnt_see_then_the_rest_of_unfiiled_Record_in_registration(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:26)\r\n",
  "status": "failed"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_10_Step_Definitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 55 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.pages.US_10_Page.\u003cinit\u003e(US_10_Page.java:10)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.\u003cinit\u003e(US_10_Step_Definitions.java:14)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin username \"vivi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"Betul2015.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Negativ Test enter incorret SSN then there shoudl not seen any data of users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0902"
    }
  ]
});
formatter.step({
  "name": "three Negativ user enter false SNN \"343-34-2323\" doesnt  see any info of users",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.three_Negativ_user_enter_false_SNN_doesnt_see_any_info_of_users(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "four  Negativ user enter incorrect SSN \"343-22-2343\" and should see aller Error messaj",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.four_Negativ_user_enter_incorrect_SSN_and_should_see_aller_Error_messaj(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.stepdefinitions.Hooks.tearDown(Hooks.java:26)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
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
        "name"
      ]
    },
    {
      "cells": [
        "silgi"
      ]
    },
    {
      "cells": [
        "alex"
      ]
    },
    {
      "cells": [
        "zehra"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank.stepdefinitions.US_10_Step_Definitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\r\n\tat org.testng.TestRunner.run(TestRunner.java:585)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.GeneratedConstructorAccessor23.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 55 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-GIHN8273\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\TTR\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:54289}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63118bb8c30d7dd54376426caa0c97f2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat gmibank.utilities.Driver.getDriver(Driver.java:55)\r\n\tat gmibank.pages.US_10_Page.\u003cinit\u003e(US_10_Page.java:10)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.\u003cinit\u003e(US_10_Step_Definitions.java:14)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin username \"vivi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"Betul2015.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks manageCostomers link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_manageCostomers_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks createNewCustomer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_createNewCustomer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": ": Positiv Test enter to out of SSN search Box a data then user should not see any data of users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US009"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc0903"
    }
  ]
});
formatter.step({
  "name": "five Positv user enters to firstname Box \"silgi\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.five_Positv_user_enters_to_firstname_Box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "six  Possitiv user doesnt see any of info of user",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_09_Step_Definitions.six_Possitiv_user_doesnt_see_any_of_info_of_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userSignOut()"
});
formatter.result({
  "status": "skipped"
});
