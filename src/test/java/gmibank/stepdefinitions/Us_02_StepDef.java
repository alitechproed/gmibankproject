package gmibank.stepdefinitions;

import gmibank.pages.Us_02_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;
import java.util.concurrent.TimeUnit;

public class Us_02_StepDef {

    Us_02_Page us02Page=new Us_02_Page();
    Actions action=new Actions(Driver.getDriver());

    @Given("Kullanici bir user olarak gmibank anasayfasina gider")
    public void kullanici_bir_user_olarak_gmibank_anasayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_Bank_Url"));
    }

    @Given("Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar")
    public void kullanici_bir_user_olarak_sag_ust_kosede_bulunan_insan_simgesine_tiklar() {
        us02Page.registirationGirisImage.click();

    }

    @Given("Kullanici bir user olarak acilan menuden register linkine tiklar")
    public void kullanici_bir_user_olarak_acilan_menuden_register_linkine_tiklar() {
        us02Page.registirationGirisMenu.click();
    }

    @Given("kullanici textboxlari bos birakip register butonuna tiklar")
    public void kullanici_textboxlari_bos_birakip_register_butonuna_tiklar() throws InterruptedException {
        //action.sendKeys(Keys.PAGE_DOWN).build().perform();
        Thread.sleep(10000);
       us02Page.mobileNumberTextBox.sendKeys("abc");
       Thread.sleep(10000);
        //action.sendKeys(Keys.PAGE_DOWN).build().perform();
        action.sendKeys(Keys.ARROW_UP).perform();
        action.sendKeys(Keys.ARROW_UP).perform();
        us02Page.registirationButton.click();


    }

    @Then("kullanici bos birakilan textbox'larda uyari yazisi ciktigini dogrular")
    public void kullanici_bos_birakilan_textbox_larda_uyari_yazisi_ciktigini_dogrular() {
        Assert.assertTrue(us02Page.uyariTexti.isDisplayed());

    }

    @Given("kullanici SSN textboxina sayilar arasinda bosluk koyarak giris yapar")
    public void kullanici_SSN_textboxina_sayilar_arasinda_bosluk_koyarak_giris_yapar() {
        us02Page.SsnTextBox.sendKeys("111 22 3333");
    }

    @Then("invalid numara girildiginde textbox'in kenar rengi kirmizi gorulur")
    public void invalid_numara_girildiginde_textbox_in_kenar_rengi_kirmizi_gorulur() throws InterruptedException {
      String ssnBorderColor= us02Page.SsnTextBox.getCssValue("border-color");
        System.out.println(ssnBorderColor);

//        WebDriverWait wait= new WebDriverWait(Driver.getDriver(),20);
//        wait.until(ExpectedConditions.(us02Page.SsnTextBox));
      //  Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       Thread.sleep(3000);
        String hexColor= Color.fromString(ssnBorderColor).asHex();
        System.out.println(hexColor);
        Assert.assertEquals(ssnBorderColor,"#ced4da");


    }

    @Given("kullanici Mobile Phone Number textbox'ini sayilar arasinda ozel karakter kullanmadan doldurur")
    public void kullanici_Mobile_Phone_Number_textbox_ini_sayilar_arasinda_ozel_karakter_kullanmadan_doldurur() {
    us02Page.mobileNumberTextBox.sendKeys("1112223333" +Keys.ENTER);

    }

    @Then("invalid giris yapildiginda mobile phone number yazisi kirmizi olur")
    public void invalid_giris_yapildiginda_mobile_phone_number_yazisi_kirmizi_olur() throws InterruptedException {

        String mobileColor=us02Page.mobileColor.getCssValue("color");
        System.out.println(mobileColor);

        Thread.sleep(2000);

        String hexColor=Color.fromString(mobileColor).asHex();
        System.out.println(hexColor);

        Assert.assertEquals(hexColor,"#dc3545");

    }

    @Given("kullanici {string} adresini girer")
    public void kullanici_adresini_girer(String string) {
        us02Page.emailTextBox.sendKeys(string +Keys.ENTER);

    }

    @Then("kullanici invalid email girdiginde hata mesajini gorur")
    public void kullanici_invalid_email_girdiginde_hata_mesajini_gorur() {
    Assert.assertTrue(us02Page.emailInvalidMessage.isDisplayed());    }



}
