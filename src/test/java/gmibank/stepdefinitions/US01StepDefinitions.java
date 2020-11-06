package gmibank.stepdefinitions;

import gmibank.pages.US01Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.testng.annotations.BeforeTest;

public class US01StepDefinitions {

    @BeforeTest
    public void start (){
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_url"));
    }
    US01Page us01Page = new US01Page();
    @Given ("user enters gmibank homepage")
    public void Given_user_enters_gmibank_homepage(){
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_url"));
    }
    @Given ("user clicks userEntry icon")
    public void user_clicks_userEntry_icon(){
        us01Page.userEntryIcon.click();
    }
    @Given ("user clicks register link")
    public void user_clicks_register_link(){
        us01Page.registerLink.click();
    }

    @Given("user enters valid SSN number")
    public void user_enters_valid_SSN_number() {
        us01Page.ssNumber.click();
    }

    @Then("user verifies valid SSN number")
    public void user_verifies_valid_SSN_number() {

    }

    @Given("user enters invalid SSN number")
    public void user_enters_invalid_SSN_number() {

    }

    @Then("user verifies invalid SSN number")
    public void user_verifies_invalid_SSN_number() {

    }

    @Given("user enters valid name")
    public void user_enters_valid_name() {

    }

    @Then("user verifies valid first name entry")
    public void user_verifies_valid_first_name_entry() {

    }

    @Given("user enters invalid name")
    public void user_enters_invalid_name() {

    }

    @Then("user verifies invalid first name entry")
    public void user_verifies_invalid_first_name_entry() {

    }

    @Given("user enters nothing as name")
    public void user_enters_nothing_as_name() {

    }

    @Given("user enters valid last name")
    public void user_enters_valid_last_name() {

    }

    @Then("user verifies valid last name entry")
    public void user_verifies_valid_last_name_entry() {

    }

    @Given("user enters invalid last name")
    public void user_enters_invalid_last_name() {

    }

    @Then("user verifies invalid last name entry")
    public void user_verifies_invalid_last_name_entry() {

    }

    @Given("user enters nothing as last name")
    public void user_enters_nothing_as_last_name() {

    }

    @Given("user enters valid Mobile phone number number")
    public void user_enters_valid_Mobile_phone_number_number() {

    }

    @Then("user verifies valid Mobile phone number number")
    public void user_verifies_valid_Mobile_phone_number_number() {

    }

    @Given("user enters invalid Mobile phone number number")
    public void user_enters_invalid_Mobile_phone_number_number() {

    }

    @Then("user verifies invalid Mobile phone number number")
    public void user_verifies_invalid_Mobile_phone_number_number() {

    }

    @Given("user enters a valid username")
    public void user_enters_a_valid_username() {

    }

    @Then("user verifies valid username")
    public void user_verifies_valid_username() {

    }

    @Given("user enters valid email")
    public void user_enters_valid_email() {

    }

    @Then("user verifies valid email")
    public void user_verifies_valid_email() {

    }

    @Given("user enters invalid email")
    public void user_enters_invalid_email() {

    }

    @Then("user verifies invalid email")
    public void user_verifies_invalid_email() {

    }

    @Given("user enters valid password")
    public void user_enters_valid_password() {

    }

    @Then("user verifies valid password")
    public void user_verifies_valid_password() {

    }

    @Given("user enters invalid password")
    public void user_enters_invalid_password() {

    }

    @Then("user verifies invalid password")
    public void user_verifies_invalid_password() {

    }

    @Given("user enters valid password to first pasword box")
    public void user_enters_valid_password_to_first_pasword_box() {

    }

    @Then("user enters the same pasword to confirmation box")
    public void user_enters_the_same_pasword_to_confirmation_box() {

    }

    @Then("user verifies passwords matched correctly")
    public void user_verifies_passwords_matched_correctly() {

    }

    @Then("user enters the different pasword to confirmation box")
    public void user_enters_the_different_pasword_to_confirmation_box() {

    }

    @Then("user verifies passwords dont matched correctly")
    public void user_verifies_passwords_dont_matched_correctly() {

    }

    @Then("user clicks register button")
    public void user_clicks_register_button() {

    }

}
