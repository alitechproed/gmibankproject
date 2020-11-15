package gmibank.stepdefinitions;

import gmibank.pages.US_04_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class US_04_Step_Definitions {

    US_04_Page us04Page = new US_04_Page();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(),10);

    @Given("Kullanici bir user olarak acilan menuden login linkine tiklar")
    public void kullanici_bir_user_olarak_acilan_menuden_login_linkine_tiklar() {
        us04Page.signInButton.click();
    }

    @Given("Kullanici acilan Sign in sayfasinda username textboxina {string} girer")
    public void kullanici_acilan_Sign_in_sayfasinda_username_textboxina_girer(String string) {
        us04Page.usernameTextBox.sendKeys(string);
    }

    @Given("Kullanici acilan Sign in sayfasinda password textboxina {string} girer")
    public void kullanici_acilan_Sign_in_sayfasinda_password_textboxina_girer(String string) {
        us04Page.passwordTextBox.sendKeys(string);
    }

    @Given("Kullanici acilan Sign in sayfasinda Login butonuna tiklar")
    public void kullanici_acilan_Sign_in_sayfasinda_Login_butonuna_tiklar() {
       us04Page.submitLoginButton.click();
    }

    @Then("Kullanici ismini kayit oldugu ismini acilan sayfada goruntuler")
    public void kullanici_ismini_kayit_oldugu_ismini_acilan_sayfada_goruntuler() {
        // Bug var success mesaji goruntulenmiyor.
        Assert.assertTrue(us04Page.kullaniciIsmi.isDisplayed());

        // Logout
        us04Page.kullaniciIsmi.click();
        us04Page.logoutButton.click();
    }

    @Then("Kullanici acilan Sign in sayfasinda Cancel butonunu goruntuler")
    public void kullanici_acilan_Sign_in_sayfasinda_Cancel_butonunu_goruntuler() {
        wait.until(ExpectedConditions.elementToBeClickable(us04Page.cancelButton));
        Assert.assertTrue(us04Page.cancelButton.isEnabled());
    }
}
