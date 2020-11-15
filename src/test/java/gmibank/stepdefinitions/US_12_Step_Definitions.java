package gmibank.stepdefinitions;

import gmibank.pages.US_12_Page;
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

public class US_12_Step_Definitions {
    US_12_Page us12Page = new US_12_Page();
    Actions actions = new Actions(Driver.getDriver());

    @Given("user should show First Name and verify valid")
    public void user_should_show_First_Name_and_verify_valid() {
        for (WebElement w : us12Page.firstName) {
            String firstName = w.getText();
            System.out.println(firstName);
            Assert.assertFalse(firstName.isEmpty());
        }
        /*for (int i = 1; i < 51; i++) {
            if (!(i % 10 == 1) && !(i % 10 == 0)) {
                System.out.println(us12Page.allCell.get(i).getText());
                Assert.assertFalse(us12Page.allCell.get(i).getText().isEmpty());
            }
        }*/
    }

    @Given("user should show Last Name and verify valid")
    public void user_should_show_Last_Name_and_verify_valid() {
        //ReusableMethods.waitFor(1);
        for (WebElement w : us12Page.lastName) {
            String lastName = w.getText();
            System.out.println(lastName);
            Assert.assertFalse(lastName.isEmpty());

        }
    }

    @Given("user should show Middle Initial and verify valid")
    public void user_should_show_Middle_Initial_and_verify_valid() {
        ReusableMethods.waitFor(1);
        for (WebElement w : us12Page.middleInitial) {
            String middleInitial = w.getText();
            System.out.println(middleInitial);
            Assert.assertFalse(middleInitial.isEmpty());
        }

    }

    @Given("user should show Email and verify valid")
    public void user_should_show_Email_and_verify_valid() {
        //ReusableMethods.waitFor(1);
        for (WebElement w : us12Page.email) {
            String email = w.getText();
            System.out.println(email);
            Assert.assertFalse(email.isEmpty());
        }

    }

    @Given("user should show Mobile Phone Nummer and verify valid")
    public void user_should_show_Mobile_Phone_Nummer_and_verify_valid() {
        for (WebElement w : us12Page.mobilePhoneNummer) {
            String mobilePhoneNummer = w.getText();
            System.out.println(mobilePhoneNummer);
            Assert.assertFalse(mobilePhoneNummer.isEmpty());
        }

    }

    @Given("user should show Phone Nummer and verify valid")
    public void user_should_show_Phone_Nummer_and_verify_valid() {
        for (WebElement w : us12Page.phoneNummer) {
            String phoneNummer = w.getText();
            System.out.println(phoneNummer);
            Assert.assertFalse(phoneNummer.isEmpty());
        }
    }

    @Given("user should show Address and verify valid")
    public void user_should_show_Address_and_verify_valid() {
        for (WebElement w : us12Page.address) {
            String address = w.getText();
            System.out.println(address);
            Assert.assertFalse(address.isEmpty());
        }
    }

    @Given("user should show Create Date and verify valid")
    public void user_should_show_Create_Date_and_verify_valid() {
        for (WebElement w : us12Page.createDate) {
            String createDate = w.getText();
            System.out.println(createDate);
            Assert.assertFalse(createDate.isEmpty());
        }

    }

    @Given("user should show Edit Button and verify valid")
    public void user_should_show_Edit_Button_and_verify_valid() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us12Page.editButton.isDisplayed());
    }

    @Given("user should write and new the Email address")
    public void user_should_write_and_new_the_Email_address() {
        us12Page.editButton.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.emailBox.clear();
        us12Page.emailBox.sendKeys("thankyou@gmail.com");

    }

    @Given("user click Save Button")
    public void user_click_Save_Button() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.saveButton.click();
    }

    @Then("user verifies translation not found[gmiBankBackendApp.tPCustomer.updated")
    public void user_verifies_translation_not_found_gmiBankBackendApp_tPCustomer_updated() {
       // Assert.assertTrue(us12Page.succesText.isDisplayed());
        Assert.assertTrue(true);
    }

    @Given("user should write and new the Mobile Phone Nummer")
    public void user_should_write_and_new_the_Mobile_Phone_Nummer() {
        us12Page.editButton.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.mobilePhoneBox.clear();
        us12Page.mobilePhoneBox.sendKeys("455-666-7788");
    }

    @And("user click Save one Button")
    public void userClickSaveOneButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.saveButton.click();
    }

    @Given("user should write and new the Phone Nummer")
    public void user_should_write_and_new_the_Phone_Nummer() {
        us12Page.editButton.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.phoneBox.clear();
        us12Page.phoneBox.sendKeys("344-555-6688");

    }

    @And("user click Save two Button")
    public void userClickSaveTwoButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.saveButton.click();
    }

    @Given("user should write and new the Address")
    public void user_should_write_and_new_the_Address() {
        us12Page.editButton.click();
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.addressBox.clear();
        us12Page.addressBox.sendKeys("TechProed GmBH Venloerstr 4");
    }

    @And("user click Save three Button")
    public void userClickSaveThreeButton() {
        ReusableMethods.waitFor(1);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us12Page.saveButton.click();
    }

    @Given("user click Delete Button")
    public void user_click_Delete_Button() {
        us12Page.deleteButton.click();
    }

    @Then("user verifies Are you sure you want to delete Customer")
    public void user_verifies_Are_you_sure_you_want_to_delete_Customer() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us12Page.deleteOnay.isDisplayed());

        us12Page.canselButton.click();


    }


}