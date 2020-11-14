package gmibank.stepdefinitions;

import gmibank.pages.US_15_Page;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class US_15_Step_Definitions {
    US_15_Page us_15_page=new US_15_Page();

    @Given("user clicks manage accounts")
    public void user_clicks_manage_accounts() {
    us_15_page.manageAccountButton.click();
    }

    @Then("can user see all account types and balace populated")
    public void can_user_see_all_account_types_and_balace_populated() {
        for (WebElement w:us_15_page.accountType) {
            System.out.println(w.getText());
        }
        for (WebElement w:us_15_page.balance) {
            System.out.println(w.getText());
        }
        Assert.assertTrue(us_15_page.balance.size()>0);
        Assert.assertTrue(us_15_page.accountType.size()>0);
    }

    @Then("can user see all transaction")
    public void canUserSeeAllTransaction() {
        for (WebElement w:us_15_page.transactions) {
            System.out.println(w.getText());
        }
        Assert.assertTrue(us_15_page.transactions.size()>0);
    }
}
