package gmibank.stepdefinitions;

import gmibank.pages.US_05_Page;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class US_05_Step_Definitions {
    US_05_Page us_05_page=new US_05_Page();

    @Then("assert error message")
    public void assert_error_message() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us_05_page.errorMesagge.isDisplayed());
    }

    @And("user click reset button")
    public void userClickResetButton() {
        us_05_page.resetButton.click();
    }

    @And("user write invalid mail")
    public void userWriteInvalidMail() {
        us_05_page.emailTextBox.sendKeys("kkskm@gmail.com");
    }

    @And("user click submit button")
    public void userClickSubmitButton() {
        us_05_page.submitButton.click();
    }

    @Then("assert succesful message")
    public void assertSuccesfulMessage() {
        Assert.assertTrue(us_05_page.emailMesaji.isDisplayed());
    }

    @Then("assert register button")
    public void assertRegisterButton() {
        Assert.assertTrue(us_05_page.registerNowButton.isDisplayed());
    }
}
