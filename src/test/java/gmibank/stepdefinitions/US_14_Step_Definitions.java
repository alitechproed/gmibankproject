package gmibank.stepdefinitions;

import gmibank.pages.US_10_Page;
import gmibank.pages.US_14_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.security.Key;
import java.util.Date;

public class US_14_Step_Definitions {
    US_14_Page us14Page = new US_14_Page();
    Actions actions = new Actions(Driver.getDriver());

    @Then("user signOut from Website")
    public void user_signOut_from_Website() {
        us14Page.karaKartal.click();
        us14Page.signOutLink.click();
    }

    //@TC1401
    @Given("user clicks manageAccounts link")
    public void user_clicks_manageAccounts_link() {
        us14Page.manageAccountLink.click();
    }

    @Given("user clicks createANewAccount link")
    public void user_clicks_createANewAccount_link() {
        us14Page.createANewAccountLink.click();
    }

    @Given("user sends an earlier date")
    public void user_sends_an_earlier_date() {
        us14Page.createDateBox.click();
        ReusableMethods.waitFor(1);
        us14Page.createDateIcon.sendKeys("01012000"+ Keys.ENTER);
        System.out.println(us14Page.createDateIcon.getAttribute("value"));
    }

    @Given("user verifies date is an early date")
    public void user_verifies_date_is_an_early_date() {
        String dailyDateValue = us14Page.createDateIcon.getAttribute("value");
        System.out.println("Expected : " + dailyDateValue);
        String expectedYear=dailyDateValue.substring(0,4);
        System.out.println(expectedYear);
        int expectedYearInt = Integer.parseInt(expectedYear);

        Date date = new Date();
        String dateActual = date.toString();
        System.out.println("Actual : " + dateActual);
        String actualYear = dateActual.substring(dateActual.length()-4);
        System.out.println(actualYear);
        int actualYearInt = Integer.parseInt(actualYear);

        if (expectedYearInt<actualYearInt){
            System.out.println("Early Date can be selected");
        } else{
            System.out.println("Check further month, day and time");
        }
    }

    //@TC1402
    @Given("user account send a date {string} and click tab")
    public void user_account_send_a_date_and_click_tab(String string) {
        us14Page.createDateBox.click();
        us14Page.createDateIcon.sendKeys(string + Keys.TAB);
    }

    @Given("user account send a time {string} and user click tab")
    public void user_account_send_a_time_and_user_click_tab(String string) {
        us14Page.createDateIcon.sendKeys(string + Keys.TAB);
    }

    @Given("user account click tab")
    public void user_account_click_tab() {
        us14Page.createDateIcon.sendKeys(Keys.TAB);
    }

    @Given("user account verifies valid data entry to Create Date box")
    public void user_account_verifies_valid_data_entry_to_Create_Date_box() {
        String borderColor = ReusableMethods.getHexColor(us14Page.createDateBox,"border-color");
        System.out.println(borderColor);//#292929
        Assert.assertEquals(borderColor,"#292929");
    }

    //@TC1403
    @Given("user clicks manageCustomers link")
    public void user_clicks_manageCustomers_link() {
        us14Page.manageCustomerLink.click();
    }

    @Given("user clicks createANewCustomer link")
    public void user_clicks_createANewCustomer_link() {
        us14Page.getCreateANewCustomerLink.click();
    }

    @Given("user customer send a date {string} and click tab")
    public void user_customer_send_a_date_and_click_tab(String string) {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        ReusableMethods.waitFor(1);
        us14Page.createDateBoxCustomer.sendKeys(string + Keys.TAB);
    }

    @Given("user customer send a time {string} and user click tab")
    public void user_customer_send_a_time_and_user_click_tab(String string) {
        us14Page.createDateBoxCustomer.sendKeys(string + Keys.TAB);
    }

    @Given("user customer click tab")
    public void user_customer_click_tab() {
        actions.sendKeys(Keys.TAB).perform();
    }

    @Given("user customer verifies valid data entry to Create Date box")
    public void user_customer_verifies_valid_data_entry_to_Create_Date_box() {
        String borderColorCS = ReusableMethods.getHexColor(us14Page.createDateBoxCustomer,"border-color");
        System.out.println(borderColorCS);//#ced4da     alert color : #dc3545
        Assert.assertEquals(borderColorCS,"#ced4da");
    }

    //@TC1404
    @Given("user customer click user box and select a user")
    public void user_customer_click_user_box_and_select_a_user() {
        Select userSelection = new Select(us14Page.userSelectionBox);
        userSelection.selectByIndex(4);
        ReusableMethods.waitFor(2);
    }

    @Given("user customer verifies valid selection of user")
    public void user_customer_verifies_valid_selection_of_user() {
        String userName = us14Page.userSelectionBox.getAttribute("value");
        Assert.assertFalse(userName.isEmpty());
    }

    //@TC1405
    @Given("user customer click Zelle Enrolled box")
    public void user_customer_click_Zelle_Enrolled_box() {
        actions.sendKeys(Keys.PAGE_DOWN).perform();
        us14Page.zelleCheckBox.click();
        ReusableMethods.waitFor(1);
        Assert.assertTrue(us14Page.zelleCheckBox.isSelected());
    }

    @Given("user customer verifies that there is no allert message related to Zelle box")
    public void user_customer_verifies_that_there_is_no_allert_message_related_to_Zelle_box() {
        us14Page.zelleCheckBox.click();
        us14Page.saveButton.click();
        String textColorZelle = ReusableMethods.getHexColor(us14Page.zelleEnrolledText,"color");
        System.out.println(textColorZelle);//#292929
        Assert.assertEquals(textColorZelle,"#292929");
    }

}
