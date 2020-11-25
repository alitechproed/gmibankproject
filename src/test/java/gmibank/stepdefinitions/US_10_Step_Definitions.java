package gmibank.stepdefinitions;

import gmibank.pages.US_10_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class US_10_Step_Definitions {
    US_10_Page us10Page = new US_10_Page();
    Actions actions = new Actions(Driver.getDriver());


    @Then("user clicks signIn link")
    public void user_clicks_signIn_link() {
        ReusableMethods.waitFor(1);
        us10Page.signinLink.click();
    }
    @Then("user clicks signIn button")
    public void user_clicks_signIn_button() {
       us10Page.signInButton.click();
    }
    @Then("user clicks myOperations link")
    public void user_clicks_myOperations_link() {
        us10Page.myOperationsLink.click();
    }
    @Then("user clicks manageCostomers link")
    public void user_clicks_manageCostomers_link() {
        us10Page.manageCostomersLink.click();
    }
    @Then("user clicks createNewCustomer link")
    public void user_clicks_createNewCustomer_link() {
        us10Page.createNewCostomersLink.click();
    }
    @Then("user enters admin username {string}")
    public void userEntersAdminUsername(String username) {
        us10Page.username.sendKeys(username);
    }
    @Then("user enters admin password {string}")
    public void userEntersAdminPassword(String pasword) {
        us10Page.password.sendKeys(pasword);
    }

    @Given("user send data to zipcode box {string}")
    public void userSendDataToZipcodeBox(String zipcode) {
        us10Page.zipcode.sendKeys(zipcode);
        actions.sendKeys(Keys.ENTER).perform();

    }

    @Then("user verifies valid data entry to zipcode box")
    public void userVerifiesValidDataEntryToZipcodeBox() {
        actions.sendKeys(Keys.ARROW_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.zipcode.getAttribute("class")
                .equals("is-touched is-dirty av-valid form-control"));
    }

    @Then("user signOut")
    public void userSignOut() {
        us10Page.userInfoLink.click();
        us10Page.signoutLink.click();
    }

    @Given("user send nothing to zipcode box")
    public void userSendNothingToZipcodeBox() {
        us10Page.zipcode.sendKeys("");
        actions.sendKeys(Keys.ENTER).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
    }

    @Then("user verifies invalid zipcode data entry")
    public void userVerifiesInvalidZipcodeDataEntry() {
        actions.sendKeys(Keys.ARROW_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.zipcode.getAttribute("class")
                .equals("is-touched is-pristine av-invalid is-invalid form-control"));
    }

    @Given("user send data to adress box {string}")
    public void userSendDataToAdressBox(String adress) {
        us10Page.adressBox.sendKeys(adress);
        actions.sendKeys(Keys.ENTER).perform();
    }

    @Then("user verifies valid data entry to adress box")
    public void userVerifiesValidDataEntryToAdressBox() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.adressBox.getAttribute("class")
                .equals("is-touched is-dirty av-valid form-control"));
    }

    @Given("user send nothing to adress box")
    public void userSendNothingToAdressBox() {
        us10Page.adressBox.sendKeys("");
        actions.sendKeys(Keys.ENTER).perform();
        actions.sendKeys(Keys.PAGE_DOWN).perform();
    }

    @Then("user verifies invalid acress data entry")
    public void userVerifiesInvalidAcressDataEntry() {
        actions.sendKeys(Keys.ARROW_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.adressBox.getAttribute("class")
                .equals("is-touched is-pristine av-invalid is-invalid form-control"));
    }

    @Given("user send data to city box {string}")
    public void userSendDataToCityBox(String city) {
        us10Page.city.sendKeys(city);
        actions.sendKeys(Keys.ENTER).perform();
    }

    @Then("user verifies valid data entry to city box")
    public void userVerifiesValidDataEntryToCityBox() {
        actions.sendKeys(Keys.ARROW_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.city.getAttribute("class")
                .equals("is-touched is-dirty av-valid form-control"));
    }

    @Given("user send nothing to city box")
    public void userSendNothingToCityBox() {
        us10Page.city.sendKeys("");
        actions.sendKeys(Keys.ENTER).perform();
        actions.sendKeys(Keys.ARROW_DOWN).perform();
    }

    @Then("user verifies invalid city data entry")
    public void userVerifiesInvalidCityDataEntry() {
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.city.getAttribute("class")
                .equals("is-touched is-pristine av-invalid is-invalid form-control"));
    }

    @Given("user select a country from dropbox")
    public void userSelectACountryFromDropbox() {
        Select options = new Select(us10Page.countryDropbox);
        options.selectByIndex(2);
        actions.sendKeys(Keys.PAGE_DOWN).perform();
    }

    @Then("user verifies a country can be selected")
    public void userVerifiesACountryCanBeSelected() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.countryDropbox.getAttribute("class")
                .equals("form-control is-untouched is-dirty av-valid form-control"));
    }

    @Given("user send data to state box {string}")
    public void userSendDataToStateBox(String state) {
            us10Page.state.sendKeys(state);
            actions.sendKeys(Keys.ENTER).perform();
    }

    @Then("user verifies valid data entry to state box")
    public void userVerifiesValidDataEntryToStateBox() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us10Page.state.getAttribute("class")
                .equals("form-control is-touched is-dirty av-valid form-control"));
    }

    @Given("user enters gmibank homepage")
    public void userEntersGmibankHomepage() {
        Driver.getDriver().get("http://www.gmibank.com/");
    }

    @Then("user clicks userEntry icon")
    public void userClicksUserEntryIcon() {
        us10Page.enterIcon.click();
    }

}
