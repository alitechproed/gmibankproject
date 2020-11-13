@US_07
Feature: US_07 Test

  Background: Kullanici bir user olarak gmibank anasayfasina gider
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And  Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And  Kullanici bir user olarak acilan menuden signIn linkine tiklar

  @TC_060
  Scenario: TC_060 email test
    Given Kullanici username ve password bolumunu doldurur
    And Kullanici signin butonuna tiklar
    And Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer
    And Kullanici email textBoxina tiklar
    And Kullanici email girer
    Then kullanici hatali email  girdiginde hata mesajini gorur


  @TC_061
  Scenario: TC_061 language  test
  Given Kullanici language  secenegine tiklar
  And Kullanici language dropDown'unun icinde sadece  English veya Turkish dilleri oldugunu gorur