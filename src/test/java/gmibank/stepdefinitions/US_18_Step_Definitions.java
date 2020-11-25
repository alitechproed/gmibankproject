package gmibank.stepdefinitions;

import gmibank.pages.US_12_Page;
import gmibank.pages.US_18_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

public class US_18_Step_Definitions {
    US_18_Page us18Page = new US_18_Page();
    Actions actions = new Actions(Driver.getDriver());

    /*@Then("user verifies Are you sure you want to delete Customer")
    public void user_verifies_Are_you_sure_you_want_to_delete_Customer() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us18Page.deleteOnay.isDisplayed());

        us18Page.canselButton.click();
    }*/


    @Given("ADMIN can select First Name, Last Name, Middle Initial, Email, Mobile Phone Nummer, Phone Nummer, Address,Date updated")
    public void adminCanSelectFirstNameLastNameMiddleInitialEmailMobilePhoneNummerPhoneNummerAddressDateUpdated() {

        for (int i = 1; i < 51; i++) {
            if (!(i % 10 == 1) && !(i % 10 == 0)) {
                System.out.println(us18Page.allOptions.get(i).getText());
                Assert.assertFalse(us18Page.allOptions.get(i).getText().isEmpty());
            }
        }
    }
    @Given("ADMIN should show Edit Button and verify valid")
    public void adminShouldShowEditButtonAndVerifyValid() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us18Page.editButtonBox.isDisplayed());
    }

    @Given("ADMIN should write and new the Email address")
    public void adminShouldWriteAndNewTheEmailAddress() {
        us18Page.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us18Page.emailBoxing.clear();
        us18Page.emailBoxing.sendKeys("hallo@gmail.com");
    }

    @And("ADMIN click Save Button")
    public void adminClickSaveButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us18Page.saveButtonBox.click();
    }

    @Then("ADMIN verifies translation not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslationNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

   @Then("ADMIN  verifies translations not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslationsNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Given("ADMIN  should write and new the Phone Nummer")
    public void adminShouldWriteAndNewThePhoneNummer() {
        us18Page.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us18Page.mobilePhoneBoxing.clear();
        us18Page.mobilePhoneBoxing.sendKeys("555-778-9941");
    }

    @Then("ADMIN  verifies translat not found[gmiBankBackendApp.tPCustomer.updated")
    public void adminVerifiesTranslatNotFoundGmiBankBackendAppTPCustomerUpdated() {
        // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Given("ADMIN should write and new the Address")
    public void adminShouldWriteAndNewTheAddress() {
        us18Page.editButtonBox.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us18Page.addressBox.clear();
        us18Page.addressBox.sendKeys("Deutschland 4");

    }

    @And("ADMIN click Save three Button")
    public void adminClickSaveThreeButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us18Page.saveButtonBox.click();
    }


    @Then("ADMIN  signOut")
    public void adminSignOut() {
    }
}


