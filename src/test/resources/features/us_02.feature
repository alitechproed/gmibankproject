@gmibank
Feature: GmiBankTest

  Background: Kullanici bir user olarak gmibank anasayfasina gider
    Given Kullanici bir user olarak gmibank anasayfasina gider
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden register linkine tiklar


  @TC_013
    And  kullanici textboxlari bos birakip register butonuna tiklar
    Then kullanici bos birakilan textbox'larda uyari yazisi ciktigini dogrular


  @TC_014
    And  kullanici SSN textboxina sayilar arasinda bosluk koyarak giris yapar
    Then invalid numara girildiginde textbox'in kenar renginin kirmizi oldugunu dogrulayiniz

    @TC_015
    And kullanici Mobile Phone Number textbox'ini sayilar arasinda ozel karakter kullanmadan doldurur
    Then kullanici mobile number'in invalid oldugunu dogrular mobile phone number yazisinin kirmizi oldugunu dogrular

    @TC_016