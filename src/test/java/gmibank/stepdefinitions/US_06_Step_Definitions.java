package gmibank.stepdefinitions;

import gmibank.pages.US_06_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.rules.Timeout;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class US_06_Step_Definitions {

    US_06_Page us06Page = new US_06_Page();

    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);

    @Given("user clicks on the username on the top right")
    public void user_clicks_on_the_username_on_the_top_right() {
        us06Page.userIcon.click();

    }

    @Then("user clicks on user info link")
    public void user_clicks_on_user_info_link() throws InterruptedException {
        Thread.sleep(3000);
        us06Page.userInfoLink.click();

    }

    @Given("{string} must be entered as first name")
    public void must_be_entered_as_first_name(String ilkIsim)  {
        String firsNameText = us06Page.firstNameBox.getAttribute("value");
        Assert.assertEquals(firsNameText,ilkIsim);

    }

    @Given("{string} must be entered as last name")
    public void must_be_entered_as_last_name(String soyad) {
        String lastNameText = us06Page.lastNameBox.getAttribute("value");
        Assert.assertEquals(lastNameText,soyad);

    }

    @Given("{string} must be entered as email")
    public void must_be_entered_as_first_email(String email) {
        String emailText = us06Page.emailBox.getAttribute("value");
        Assert.assertEquals(emailText,email);

    }

    @And("{string} must be selected as language")
    public void mustBeSelectedAsLanguage(String language) {
        Select select = new Select(us06Page.selectLanguages);
        String firstLanguage = select.getFirstSelectedOption().getText();
        Assert.assertEquals(firstLanguage,language);

    }

    @Given("user select {string} language")
    public void user_select_language(String options) {

        int index = Integer.parseInt(options);

        Select select = new Select(us06Page.selectLanguages);
        select.selectByIndex(index);
        Actions actions = new Actions(Driver.getDriver());
        actions.sendKeys(Keys.ENTER).perform();
        Assert.assertTrue(us06Page.selectLanguages.isDisplayed());

    }

    @Given("user clears first name textbox")
    public void userClearsFirstNameTextbox()  {
        us06Page.firstNameBox.clear();

    }

    @Given("user updates first name as {string}")
    public void user_updates_first_name_as(String firstname) {
        wait.until(ExpectedConditions.visibilityOf(us06Page.firstNameBox));
        us06Page.firstNameBox.sendKeys(firstname);

    }

    @Given("user clears last name textbox")
    public void userClearsLastNameTextbox() {
        us06Page.lastNameBox.clear();

    }

    @Given("User updates last name as {string}")
    public void user_updates_last_name_as(String lastname) {
        wait.until(ExpectedConditions.visibilityOf(us06Page.lastNameBox));
        us06Page.lastNameBox.sendKeys(lastname);

    }

    @Given("user clears email textbox")
    public void userClearsEmailTextbox() {
        us06Page.emailBox.clear();
    }

    @Given("user uses the {string} sign when they update their email address")
    public void user_uses_the_sign_when_they_update_their_email_address(String symbolAt) {
        us06Page.emailBox.sendKeys("yeniEmail"+symbolAt+"gmail.com");

    }
    @And("user uses the new {string} sign when they update their email address")
    public void userUsesTheNewSignWhenTheyUpdateTheirEmailAddress(String symbolCom) {
        us06Page.emailBox.clear();
        us06Page.emailBox.sendKeys("denemeMail@gmail"+symbolCom);
    }

    @Given("user don't uses the @ sign when they update their email address")
    public void userDonTUsesTheSignWhenTheyUpdateTheirEmailAddress() {
        us06Page.emailBox.clear();
        us06Page.emailBox.sendKeys("denememail"+"gmail.com");
        Assert.assertTrue(us06Page.invalidMassage.isDisplayed());

    }

    @And("user don't uses the .com sign when they update their email address")
    public void userDonTUsesTheComSignWhenTheyUpdateTheirEmailAddress() {
        us06Page.emailBox.clear();
        us06Page.emailBox.sendKeys("denememail@gmail");
        Assert.assertTrue(us06Page.invalidMassage.isDisplayed());

    }

}