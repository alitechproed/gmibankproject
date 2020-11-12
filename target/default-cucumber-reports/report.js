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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
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
  "name": "TC_0308 Negativ test at least 1 special char and see the level bar change accordingly",
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
      "name": "@SmokeTests"
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
});