package gmibank.stepdefinitions;

import gmibank.pages.US_10_Page;
import gmibank.pages.US_14_Page;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import org.openqa.selenium.interactions.Actions;

public class US_14_Step_Definitions {
    US_14_Page us14Page = new US_14_Page();
    Actions actions = new Actions(Driver.getDriver());



    //@TC1401
    @Given("user clicks manageAccounts link")
    public void user_clicks_manageAccounts_link() {

    }

    @Given("user clicks createANewAccount link")
    public void user_clicks_createANewAccount_link() {

    }

    @Given("user click calender icon and click today")
    public void user_click_calender_icon_and_click_today() {

    }

    @Given("user verifies date is correct")
    public void user_verifies_date_is_correct() {

    }

    //@TC1402
    @Given("user account send a date {string} and click tab")
    public void user_account_send_a_date_and_click_tab(String string) {

    }

    @Given("user account send a time {string} and user click tab")
    public void user_account_send_a_time_and_user_click_tab(String string) {

    }

    @Given("user account click tab")
    public void user_account_click_tab() {

    }

    @Given("user account verifies valid data entry to Create Date box")
    public void user_account_verifies_valid_data_entry_to_Create_Date_box() {

    }

    //@TC1403
    @Given("user clicks manageCustomers link")
    public void user_clicks_manageCustomers_link() {

    }

    @Given("user clicks createANewCustomer link")
    public void user_clicks_createANewCustomer_link() {

    }

    @Given("user customer send a date {string} and click tab")
    public void user_customer_send_a_date_and_click_tab(String string) {

    }

    @Given("user customer send a time {string} and user click tab")
    public void user_customer_send_a_time_and_user_click_tab(String string) {

    }

    @Given("user customer click tab")
    public void user_customer_click_tab() {

    }

    @Given("user customer verifies valid data entry to Create Date box")
    public void user_customer_verifies_valid_data_entry_to_Create_Date_box() {

    }

    //@TC1404
    @Given("user customer click user box and select a user")
    public void user_customer_click_user_box_and_select_a_user() {

    }

    @Given("user customer verifies valid selection of user")
    public void user_customer_verifies_valid_selection_of_user() {

    }

    //@TC1405
    @Given("user customer click Zelle Enrolled box")
    public void user_customer_click_Zelle_Enrolled_box() {

    }

    @Given("user click save button")
    public void user_click_save_button() {

    }

    @Given("user customer verifies that there is no allert message related to Zelle box")
    public void user_customer_verifies_that_there_is_no_allert_message_related_to_Zelle_box() {

    }






}
