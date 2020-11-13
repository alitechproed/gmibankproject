@US_07
Feature:

  Background: Kullanici bir user olarak gmibank anasayfasina gider
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And  Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And  Kullanici bir user olarak acilan menuden signIn linkine tiklar

  @TC_060
  Scenario: TC_060 email kontrol test
    Given Kullanici username ve password bolumunu doldurur
    And Kullanici signin butonuna tiklar
    And Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer
    And Kullanici email textBoxina tiklar
    And Kullanici email textBoxina


  @TC_061
  Scenario: TC_061 dil secenegi testi
  Given
  And