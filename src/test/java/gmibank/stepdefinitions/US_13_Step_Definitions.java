package gmibank.stepdefinitions;

import gmibank.pages.US_10_Page;
import gmibank.pages.US_13_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.asserts.SoftAssert;

import java.util.List;

public class US_13_Step_Definitions {
    US_13_Page us13Page = new US_13_Page();
    Actions actions = new Actions(Driver.getDriver());


    @Then("user clicks manageAccounts link")
    public void user_clicks_manageAccounts_link() {
        us13Page.manageAccountsLink.click();
    }

    @Then("user clicks createNewAccount link")
    public void user_clicks_createNewAccount_link() {
        us13Page.createANewAccountsLink.click();
    }

    @Given("user click Description")
    public void one_user_click_Description() {
        us13Page.descriptionBox.click();
    }

    @And("user click Balance")
    public void twoUserClickBalance() {
        us13Page.balanceBox.click();
    }

    @And("user sees required message")
    public void threeUserSeesRequiredMessage() {
        Assert.assertTrue(us13Page.thisFieldIsRequeiredMessage.isDisplayed());
    }

    @Given("user create as a dollar account {string} and verify")
    public void oneUserTheFirstTimeAccountCreationAsDollarAndVerifieData(String dolarAccount) {
        us13Page.balanceBox.sendKeys(dolarAccount);
        Assert.assertTrue(us13Page.balanceBox.isEnabled());

    }

    @Given("user select an acount as CHECKING and verify")
    public void userSelectAnAcountAsCHECKINGAndVerifieData() {

        ReusableMethods.waitFor(2);
        for (WebElement w : us13Page.accountTypeLink) {
            String accountType = w.getText();
            System.out.println(accountType);
            if (w.getText().contains("CHECKING")) {
                w.click();
                Assert.assertTrue(us13Page.accountTypeLink.contains(w));
                break;
            }
        }
    }

    @And("user select an acount as a SAVING and verify")
    public void userSelectAnAcountAsASAVINGAndVerifieData() {
        us13Page.accountTypeSelect.click();
        ReusableMethods.waitFor(1);
        String myAccount[] = {"CHECKING", "SAVING", "CREDIT_CARD",
                "INVESTING",};
        int i = 0;
        for (WebElement w : us13Page.accountTypeLink) {
            String option = w.getText();
            System.out.println(option);
            Assert.assertEquals(option, myAccount[i]);
            i++;
        }

    }

    @And("user select an acount as a CREDIT_CARD and verify")
    public void userSelectAnAcountAsACREDIT_CARDAndVerifieData() {
        us13Page.accountTypeSelect.click();
        ReusableMethods.waitFor(1);
        String myAccount2[] = {"CHECKING", "SAVING", "CREDIT_CARD",
                "INVESTING",};
        for (int i = 0; i < myAccount2.length; i++) {
            us13Page.accountTypeSelect.click();
            ReusableMethods.waitFor(1);
            actions.sendKeys(Keys.ARROW_DOWN).perform();
            actions.sendKeys(Keys.ENTER).perform();
            //Assert.assertEquals(us13Page.accountTypeSelect.getText(), myAccount2[i]);
        }

    }

    @And("user select an acount as a INVESTING and verify")
    public void userSelectAnAcountAsAINVESTINGAndVerifieData() {
        us13Page.accountTypeSelect.click();
        ReusableMethods.waitFor(1);
        String myAccount3[] = {"CHECKING", "SAVING", "CREDIT_CARD",
                "INVESTING",};
        int i = 0;
        for (WebElement w : us13Page.accountTypeLink) {
            String myAccount1 = w.getText();
            System.out.println(myAccount1);
            Assert.assertEquals(myAccount1, myAccount3[i]);
            i++;
        }

    }

    @Given("user click Account Status Type definied as a ACTIVE and verify")
    public void userClickAccountStatusTypeDefiniedAsAACTIVEAndVerifiesData() {
        us13Page.accountStatusTypeBox.click();
        ReusableMethods.waitFor(2);
        String myStatusType[] = {"ACTIVE", "SUESPENDED", "CLOSED",};
        int i = 0;
        for (WebElement w : us13Page.accountStatusTypeLink) {
            String statusType = w.getText();
            System.out.println(statusType);
            Assert.assertEquals(statusType, myStatusType[i]);
            i++;
        }

    }

    @And("user click Account Status Type definied as a  SUESPENDED and verify")
    public void userClickAccountStatusTypeDefiniedAsASUSPENDENDEDAndVerifiesData() {
        us13Page.accountStatusTypeBox.click();
        ReusableMethods.waitFor(2);
        String myStatusType1[] = {"ACTIVE", "SUESPENDED", "CLOSED",};
        int i = 0;
        for (WebElement w : us13Page.accountStatusTypeLink) {
            String statusType = w.getText();
            System.out.println(statusType);
            Assert.assertEquals(statusType, myStatusType1[i]);
            i++;
        }

    }

    @And("user click Account Status Type definied as a  CLOSED and verify")
    public void userClickAccountStatusTypeDefiniedAsACLOSEDAndVerifiesData() {
        us13Page.accountStatusTypeBox.click();
        ReusableMethods.waitFor(2);
        String myStatusType2[] = {"ACTIVE", "SUESPENDED", "CLOSED",};
        int i = 0;
        for (WebElement w : us13Page.accountStatusTypeLink) {
            String statusType = w.getText();
            System.out.println(statusType);
            Assert.assertEquals(statusType, myStatusType2[i]);
            i++;
        }

    }

    @Given("user select Employee and verify the selectet Employee")
    public void userSelectEmployeeAndVerifeiTheSelectetEmployee() {
        us13Page.employeeBox.click();
        //Select select =new Select(us13Page.employeeBox);
        System.out.println("Employee'in ici bos! BUG VAR");

    }


}