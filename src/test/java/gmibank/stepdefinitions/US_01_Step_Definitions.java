package gmibank.stepdefinitions;

import gmibank.pages.US_01_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.Color;

import java.awt.*;

public class US_01_Step_Definitions {
    US_01_Page us01Page = new US_01_Page();

    @Given("Kullanici bir user olarak gmibank anasayfasina gider")
    public void kullanici_bir_user_olarak_gmibank_anasayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_url"));
    }

    @Given("Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar")
    public void kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar() {
        us01Page.loginAndRegisterButton.click();
    }

    @Given("Kullanici bir user olarak acilan menuden register linkine tiklar")
    public void kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar() {
        us01Page.registerMenuLink.click();
    }

    @Given("Kullanici bir user olarak SSN textboxina {string} numarasini girer")
    public void kullanici_bir_user_olarak_SSN_textboxina_numarasini_girer(String string) {
        string = ReusableMethods.getNewRequestNumber(string);
        us01Page.ssnTextbox.sendKeys(string);
        us01Page.ssnTextbox.click();
    }

    @Then("Kullanici bir user olarak SSN textboxinin bir hata uyarisi vermedigini goruntuler")
    public void kullanici_bir_user_olarak_SSN_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler() {
        String adressTextBox = us01Page.ssnTextbox.getAttribute("class");
        Assert.assertFalse(adressTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak SSN textboxina gecersiz  {string} numarasini girer")
    public void kullanici_bir_user_olarak_SSN_textboxina_gecersiz_numarasini_girer(String string) {
        us01Page.ssnTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak {string} hata mesajini goruntuler")
    public void kullanici_bir_user_olarak_hata_mesajini_goruntuler(String string) {
        if(string.equalsIgnoreCase("Your SSN is invalid")) {
            Assert.assertEquals(string,us01Page.ssnHataMesaji.getText());
        }else if(string.equalsIgnoreCase("Your Last Name is required")) {
            Assert.assertEquals(string,us01Page.lastnameHataMesaji.getText());
        }else if(string.equalsIgnoreCase("Your mobile phone number is invalid")) {
            Assert.assertEquals(string,us01Page.mobilePhoneHataMesaji.getText());
        }

    }

    @Given("Kullanici bir user olarak First Name textboxina {string} ismini girer")
    public void kullanici_bir_user_olarak_First_Name_textboxina_ismini_girer(String string) {
        us01Page.firstnameTextbox.sendKeys(string);
    }

    @Then("Kullanici bir user olarak First Name textboxinin bir hata uyarisi vermedigini goruntuler")
    public void kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_uyarisi_vermedigini_goruntuler() {
       String firstnameTextBox = us01Page.firstnameTextbox.getAttribute("class");
       Assert.assertTrue(!firstnameTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak First Name textboxini {string} bos birakir")
    public void kullanici_bir_user_olarak_First_Name_textboxini_bos_birakir(String string) {
        us01Page.firstnameTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak {string} hata uyarisini goruntuler")
    public void kullanici_bir_user_olarak_hata_uyarisini_goruntuler(String string) {
       Assert.assertEquals(string,us01Page.firstnameHataMesaji.getText());
    }

    @Given("Kullanici bir user olarak Last Name textboxina {string} soyismini girer")
    public void kullanici_bir_user_olarak_Last_Name_textboxina_soyismini_girer(String string) {
       us01Page.lastnameTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak First Name textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_First_Name_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        String lastnameTextBox = us01Page.lastnameTextbox.getAttribute("class");
        Assert.assertFalse(lastnameTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak Last Name textboxini {string} bos birakir")
    public void kullanici_bir_user_olarak_Last_Name_textboxini_bos_birakir(String string) {
        us01Page.lastnameTextbox.sendKeys(string + Keys.ENTER);
    }

    @Given("Kullanici bir user olarak Address textboxina {string}  adresini girer")
    public void kullanici_bir_user_olarak_Address_textboxina_adresini_girer(String string) {
        us01Page.addressTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak Address textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Address_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        String adressTextBox = us01Page.addressTextbox.getAttribute("class");
        Assert.assertFalse(adressTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak Mobile Phone Number textboxina {string} cep telefonu numarasini girer")
    public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_cep_telefonu_numarasini_girer(String string) {
        us01Page.mobilePhoneTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak Mobile Phone Number textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        String mobilePhoneTextBox = us01Page.mobilePhoneTextbox.getAttribute("class");
        Assert.assertFalse(mobilePhoneTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak Mobile Phone Number textboxina tire olmadan {string} cep telefonu numarasini girer")
    public void kullanici_bir_user_olarak_Mobile_Phone_Number_textboxina_tire_olmadan_cep_telefonu_numarasini_girer(String string) {
        us01Page.mobilePhoneTextbox.sendKeys(string + Keys.ENTER);
    }

    @Given("Kullanici bir user olarak Username textboxina  {string} kullanici adini girer")
    public void kullanici_bir_user_olarak_Username_textboxina_kullanici_adini_girer(String string) {
        string = ReusableMethods.getNewRequestNumber(string);
        us01Page.usernameTextbox.sendKeys(string + Keys.ENTER);
        System.out.println("username : " +string);
    }

    @Then("Kullanici bir user olarak Username textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Username_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        String usernameTextBox = us01Page.usernameTextbox.getAttribute("class");
        Assert.assertFalse(usernameTextBox.contains("invalid"));
    }

    @Given("Kullanici bir user olarak Username textboxina  sadece sayilardan olusan {string} kullanici adini girer")
    public void kullanici_bir_user_olarak_Username_textboxina_sadece_sayilardan_olusan_kullanici_adini_girer(String string) {
        us01Page.usernameTextbox.sendKeys(string + Keys.ENTER);
        ReusableMethods.waitFor(2);

    }

    @Then("Kullanici bir user olarak Username textboxinin cerceve renginin kirmizi oldugunu goruntuler")
    public void kullanici_bir_user_olarak_Username_textboxinin_cerceve_renginin_kirmizi_oldugunu_goruntuler() {
        String color = us01Page.usernameTextbox.getCssValue("border-top-color");
        color = Color.fromString(color).asHex();
        Assert.assertEquals(color,color);


    }

    @Given("Kullanici bir user olarak Email textboxina {string} mail adresini girer")
    public void kullanici_bir_user_olarak_Email_textboxina_mail_adresini_girer(String string) {
        string = ReusableMethods.getNewEmail(string);
        us01Page.emailTextbox.sendKeys(string + Keys.ENTER);
    }

    @Then("Kullanici bir user olarak Email textboxinin bir hata mesaji vermedigini goruntuler")
    public void kullanici_bir_user_olarak_Email_textboxinin_bir_hata_mesaji_vermedigini_goruntuler() {
        String emailTextBox = us01Page.emailTextbox.getAttribute("class");
        Assert.assertFalse(emailTextBox.contains("invalid"));

    }

    @Given("Kullanici bir user olarak New password textboxina {string} sifresini girer")
    public void kullanici_bir_user_olarak_New_password_textboxina_sifresini_girer(String string) {
        us01Page.firstPasswordTextbox.sendKeys(string + Keys.ENTER);
    }

    @Given("Kullanici bir user olarak New password confirmation textboxina {string} sifresini girer")
    public void kullanici_bir_user_olarak_New_password_confirmation_textboxina_sifresini_girer(String string) {
        us01Page.secondPasswordTextbox.sendKeys(string + Keys.ENTER);
    }

    @Given("Kullanici bir user olarak Register butonuna tiklar")
    public void kullanici_bir_user_olarak_Register_butonuna_tiklar() {
        us01Page.registerButton.click();
    }

    @Then("Kullanici bir user olarak basarili bir kayit olusturulduguna dair mesaj goruntuler")
    public void kullanici_bir_user_olarak_basarili_bir_kayit_olusturulduguna_dair_mesaj_goruntuler() {
        ReusableMethods.waitForVisibility(us01Page.registrationSuccessMessage,10);
        Assert.assertTrue(us01Page.registrationSuccessMessage.isDisplayed());
    }


}
