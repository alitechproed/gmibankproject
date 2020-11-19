package gmibank.stepdefinitions;

import gmibank.pages.US_16_Page;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.interactions.Actions;

import javax.swing.*;

public class US_16_Step_Definitions {
    US_16_Page us_16_page = new US_16_Page();
    Actions actions = new Actions(Driver.getDriver());

    //Background ----------
    @Given("user enters customer username {string}")
    public void user_enters_customer_username(String username) {
        us_16_page.username.sendKeys(username);
    }

    @Given("user enters customer password {string}")
    public void user_enters_customer_password(String password) {
        us_16_page.password.sendKeys(password);
    }

    //@TC1601 -------------

    @Given("user clicks customer myOperations link")
    public void user_clicks_customer_myOperations_link() {
        us_16_page.myOperationsLink.click();
    }

    @Given("user clicks My Accounts link")
    public void user_clicks_My_Accounts_link() {
        us_16_page.myAccountsLink.click();
    }

    @Given("user verify Account Type1 {string} can be seen")
    public void user_verify_Account_Type1_can_be_seen(String accunt1) {

    }

    @Given("user verify Account Type2 {string} can be seen")
    public void user_verify_Account_Type2_can_be_seen(String accunt2) {

    }

    @Then("user signOut from customer Website")
    public void user_signOut_from_customer_Website() {

    }

    //@TC1602 -------------
    @Given("user clicks Transfer Money link")
    public void user_clicks_Transfer_Money_link() {

    }

    @Given("user select first account from From dropdown menu and click")
    public void user_select_first_account_from_From_dropdown_menu_and_click() {

    }

    @Given("user verify the selected account can be seen")
    public void user_verify_the_selected_account_can_be_seen() {

    }


    //@TC1603 -------------
    @Given("user select other account from To dropdown menu and click")
    public void user_select_other_account_from_To_dropdown_menu_and_click() {

    }

    @Given("user send {string} to Balance and click tab")
    public void user_send_to_Balance_and_click_tab(String string) {

    }

    @Given("user click tab and verify the amount can be seen in Balance")
    public void user_click_tab_and_verify_the_amount_can_be_seen_in_Balance() {

    }

    //@TC1604 -------------
    @Given("user send {string} to Description and click tab")
    public void user_send_to_Description_and_click_tab(String string) {

    }

    //@TC1605 -------------
    @Given("user click Make Transfer link")
    public void user_click_Make_Transfer_link() {

    }

    @Given("user verify the successful transfer message")
    public void user_verify_the_successful_transfer_message() {

    }

    @Given("user click View Transaction link")
    public void user_click_View_Transaction_link() {

    }

    @Given("verify the transaction is accomplished")
    public void verify_the_transaction_is_accomplished() {

    }

}
