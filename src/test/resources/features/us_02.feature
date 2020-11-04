@gmibank
Feature: GmiBankTest

  Background: Kullanici bir user olarak gmibank anasayfasina gider
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar

  @TC_013
    And kullanici SSN textboxini doldurur
    And  kullanici First Name doldurur
    And  kullanici Last Name textboxini doldurur
    And  kullanici Address
