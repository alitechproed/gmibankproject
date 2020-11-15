@US_02  @SmokeTest
Feature: US_02 Test
  Background: Kullanici bir user olarak gmibank anasayfasina gider
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar

  @TC_014
  Scenario: TC_014 registiration test
    And  kullanici textboxlari bos birakip register butonuna tiklar
    Then kullanici bos birakilan textbox'larda uyari yazisi ciktigini dogrular
  @TC_015
  Scenario:  TC_015 invalid SSN test
    And  kullanici SSN textboxina sayilar arasinda bosluk koyarak giris yapar
    Then invalid numara girildiginde textbox'in kenar rengi kirmizi gorulur
  @TC_016
  Scenario: TC_016 invalid mobile phone number test
    And kullanici Mobile Phone Number textbox'ini sayilar arasinda ozel karakter kullanmadan doldurur
    Then  invalid giris yapildiginda mobile phone number yazisi kirmizi olur
  @TC_017
  Scenario Outline: TC_017
    And  kullanici "<email>" adresini girer
    Then kullanici invalid email girdiginde hata mesajini gorur
    Examples: emailler
      | email           |
      | alicangmail.com |
      | alican@gmail    |