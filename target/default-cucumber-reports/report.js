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
  "error_message": "java.lang.AssertionError: did not expect [background-color: rgb(221, 221, 221);] but found [background-color: rgb(221, 221, 221);]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:1399)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:1404)\r\n\tat gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserWritesSixUpperCasesAndSeesTheChangeOfPasswordScales(US_08_Step_Definitions.java:217)\r\n\tat ✽.testcasefive user writes six upper cases and sees the change of password scales(file:///C:/Users/samet/IdeaProjects/gmibankproject/src/test/resources/features/us_08.feature:49)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "testcasefive user writes six digits and sees the change of password scales",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.testcasefiveUserWritesSixDigitsAndSeesTheChangeOfPasswordScales()"
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
formatter.embedding("image/png", "embedded0.png", null);
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMET-PC\u0027, ip: \u0027192.168.2.33\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\samet\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6e5590847ef0b3607936c5bc437a1243\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link(US_08_Step_Definitions.java:38)\r\n\tat ✽.us08 user clicks signIn link(file:///C:/Users/samet/IdeaProjects/gmibankproject/src/test/resources/features/us_08.feature:7)\r\n",
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
  "status": "skipped"
});
formatter.step({
  "name": "user writes two lower cases and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoLowerCasesAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user write one more lower cases and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreLowerCasesAndSeesToChanging()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user writes two upper cases and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoUpperCasesAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user write one more upper cases and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreUpperCasesAndSeesToChanging()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user writes two digits and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoDigitsAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user write one more digits and sees to changing",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreDigitsAndSeesToChanging()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user writes two special chars and doesn\u0027t see the change of password scales",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWritesTwoSpecialCharsAndDoesnTSeeTheChangeOfPasswordScales()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user write one more special chars and sees to changing",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_08_Step_Definitions.userWriteOneMoreSpecialCharsAndSeesToChanging()"
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
formatter.embedding("image/png", "embedded1.png", null);
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMET-PC\u0027, ip: \u0027192.168.2.33\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\samet\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6e5590847ef0b3607936c5bc437a1243\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_08_Step_Definitions.us08_user_clicks_signIn_link(US_08_Step_Definitions.java:38)\r\n\tat ✽.us08 user clicks signIn link(file:///C:/Users/samet/IdeaProjects/gmibankproject/src/test/resources/features/us_08.feature:7)\r\n",
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
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});