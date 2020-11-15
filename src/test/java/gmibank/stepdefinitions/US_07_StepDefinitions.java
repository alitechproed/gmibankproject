package gmibank.stepdefinitions;

import gmibank.pages.US_07_Page;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class US_07_StepDefinitions {

    US_07_Page us07Page=new US_07_Page();

    @Given("Kullanici bir user olarak acilan menuden signIn linkine tiklar")
    public void kullanici_bir_user_olarak_acilan_menuden_signIn_linkine_tiklar() {
       us07Page.signInMenu.click();
    }

    @Given("Kullanici username textboxina {string} girer")
    public void kullanici_username_textboxina_girer(String string) {
    us07Page.usernameTextBox.sendKeys(string);
    }

    @Given("Kullanici  password textboxina {string} girer")
    public void kullanici_password_textboxina_girer(String string) {
      us07Page.passwordTextBox.sendKeys(string);
    }

    @Given("Kullanici signin butonuna tiklar")
    public void kullanici_signin_butonuna_tiklar() {
    us07Page.signinButton.click();
    }

    @Given("Kullanici sag ustteki insan simgesine tekrar tiklar ve userInfo basligini secer")
    public void kullanici_sag_ustteki_insan_simgesine_tekrar_tiklar_ve_userInfo_basligini_secer() {
     us07Page.insanResmi.click();
     us07Page.userInfo.click();
    }

    @Given("Kullanici email textBoxina tiklar")
    public void kullanici_email_textBoxina_tiklar() {
        us07Page.emailTextBox.click();

    }

    @Given("Kullanici {string} girer")
    public void kullanici_girer(String string) {
        us07Page.emailTextBox.clear();
        us07Page.emailTextBox.sendKeys(string);

    }

    @Then("kullanici hatali email  girdiginde hata mesajini gorur")
    public void kullanici_hatali_email_girdiginde_hata_mesajini_gorur() {
        Assert.assertTrue(us07Page.hataMesaji.isDisplayed());
        us07Page.insanResmi.click();
        us07Page.signOut.click();

    }

    @Given("Kullanici language  secenegine tiklar")
    public void kullanici_language_secenegine_tiklar() {
       us07Page.languageDropdown.click();

    }

    @Given("Kullanici language dropDown'unun icinde sadece  {string} veya {string} dilleri oldugunu gorur")
    public void kullanici_language_dropDown_unun_icinde_sadece_veya_dilleri_oldugunu_gorur(String string, String string2) {
        Select select=new Select(us07Page.languageDropdown);
        List<WebElement> allLang=select.getOptions();
        System.out.println(allLang.size());
        List<String> allLangString=ReusableMethods.getElementsText(allLang);
        Assert.assertTrue(allLangString.contains(string) && allLangString.contains(string2));
        us07Page.insanResmi.click();
        us07Page.signOut.click();
    }







}
