package gmibank.stepdefinitions;

import gmibank.pages.US_17_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

public class US_17_Step_Definitions {
    US_17_Page us_17_page = new US_17_Page();
    Actions actions = new Actions(Driver.getDriver());
    static protected String userInformation;
    static public String newUserdata = "xxxxx";
    static public String newUserEmail = "xxx@gmail.com";
    static private String ascendingURL = "http://www.gmibank.com/admin/user-management?page=1&sort=id,asc";
    static private String decendingURL = "http://www.gmibank.com/admin/user-management?page=1&sort=id,desc";
    @Then("ADMIN clicks administration link")
    public void admin_clicks_administration_link() {
        us_17_page.administrationLink.click();

    }

    @Then("ADMIN clicks userManagement link")
    public void admin_clicks_userManagement_link() {
        us_17_page.userManagement.click();
    }

    @Given("admin change the profile to USER")
    public void admin_change_the_profile_to_USER() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.editButtonFirst.click();
        actions.click(us_17_page.roleUser).perform();
        ReusableMethods.waitFor(1);
        us_17_page.saveButtonCreateEditUser.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us_17_page.confirmationProfiles.getText().contains("ROLE_USER"));
    }

    @Then("admin deactivate EMPLOYEE")
    public void admin_deactivate_EMPLOYEE() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        us_17_page.deActivateButton.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Deactivated");
    }

    @Then("admin reactivate USER")
    public void adminReactivateUSER() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(4);
        us_17_page.activateButton.click();
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Activated");
    }

    @Then("admin signOut")
    public void adminSignOut() {
        us_17_page.accountMenu.click();
        us_17_page.signoutLink.click();
    }

    @Then("admin clicks view buttons")
    public void adminClicksViewButtons() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.viewButton.click();
    }

    @Then("admin assert all information")
    public void adminAssertAllInformation() {
        Assert.assertTrue(userInformation.contains(us_17_page.fullDataList.get(2).getText()));
        Assert.assertTrue(userInformation.contains(us_17_page.fullDataList.get(3).getText()));
    }

    @Given("admin change the profile to EMPLOYEE")
    public void adminChangeTheProfileToEMPLOYEE() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.editButtonFirst.click();
        actions.click(us_17_page.roleEmployee).perform();
        ReusableMethods.waitFor(1);
        us_17_page.saveButtonCreateEditUser.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us_17_page.confirmationProfiles.getText().contains("EMPLOYEE"));
    }

    @Given("admin change the profile to MANAGER")
    public void adminChangeTheProfileToMANAGER() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.editButtonFirst.click();
        actions.click(us_17_page.roleManager).perform();
        ReusableMethods.waitFor(1);
        us_17_page.saveButtonCreateEditUser.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us_17_page.confirmationProfiles.getText().contains("MANAGER"));
    }

    @Given("admin change the profile to ADMIN")
    public void adminChangeTheProfileToADMIN() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.editButtonFirst.click();
        actions.click(us_17_page.roleAdmin).perform();
        ReusableMethods.waitFor(1);
        us_17_page.saveButtonCreateEditUser.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us_17_page.confirmationProfiles.getText().contains("ADMIN"));
    }

    @Given("admin change the profile to CUSTOMER")
    public void adminChangeTheProfileToCUSTOMER() {
        this.userInformation = us_17_page.fullData.getText();
        us_17_page.editButtonFirst.click();
        actions.click(us_17_page.roleCustomer).perform();
        ReusableMethods.waitFor(1);
        us_17_page.saveButtonCreateEditUser.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertTrue(us_17_page.confirmationProfiles.getText().contains("CUSTOMER"));
    }

    @Then("admin creates new ADMIN profile")
    public void adminCreatesNewADMINProfile() {
        us_17_page.createNewUserLink.click();
        us_17_page.loginTextBox.sendKeys(newUserdata);
        us_17_page.firstnameTextBox.sendKeys(newUserdata);
        us_17_page.lastnameTextBox.sendKeys(newUserdata);
        us_17_page.emailTextBox.sendKeys(newUserEmail);
        actions.click(us_17_page.roleAdmin).perform();
        us_17_page.saveButtonCreateEditUser.click();
    }

    @Then("admin assert new profile")
    public void adminAssertNewProfile() {
        Driver.getDriver().get(decendingURL);
        Assert.assertTrue(us_17_page.newUserAllInformation.getText().contains(newUserdata));
        Assert.assertTrue(us_17_page.newUserAllInformation.getText().contains(newUserEmail));
    }

    @Then("admin deletes new created profile")
    public void adminDeletesNewCreatedProfile() {
        Driver.getDriver().get(decendingURL);
        ReusableMethods.waitFor(2);
        us_17_page.dataDeletion.click();
        ReusableMethods.waitFor(2);
        us_17_page.deleteButtonAlert.click();
    }

    @Then("admin asserts new profile is deleted")
    public void adminAssertsNewProfileIsDeleted() {
        Driver.getDriver().get(decendingURL);
        Assert.assertFalse(us_17_page.firstElementLoginName.getText().contains(newUserdata));
    }

    @Then("admin creates new EMPLOYEE profile")
    public void adminCreatesNewEMPLOYEEProfile() {
        us_17_page.createNewUserLink.click();
        us_17_page.loginTextBox.sendKeys(newUserdata);
        us_17_page.firstnameTextBox.sendKeys(newUserdata);
        us_17_page.lastnameTextBox.sendKeys(newUserdata);
        us_17_page.emailTextBox.sendKeys(newUserEmail);
        actions.click(us_17_page.roleEmployee).perform();
        us_17_page.saveButtonCreateEditUser.click();
    }

    @Then("admin creates new MANAGER profile")
    public void adminCreatesNewMANAGERProfile() {
        us_17_page.createNewUserLink.click();
        us_17_page.loginTextBox.sendKeys(newUserdata);
        us_17_page.firstnameTextBox.sendKeys(newUserdata);
        us_17_page.lastnameTextBox.sendKeys(newUserdata);
        us_17_page.emailTextBox.sendKeys(newUserEmail);
        actions.click(us_17_page.roleManager).perform();
        us_17_page.saveButtonCreateEditUser.click();
    }

    @Then("admin creates new USER profile")
    public void adminCreatesNewUSERProfile() {
        us_17_page.createNewUserLink.click();
        us_17_page.loginTextBox.sendKeys(newUserdata);
        us_17_page.firstnameTextBox.sendKeys(newUserdata);
        us_17_page.lastnameTextBox.sendKeys(newUserdata);
        us_17_page.emailTextBox.sendKeys(newUserEmail);
        actions.click(us_17_page.roleUser).perform();
        us_17_page.saveButtonCreateEditUser.click();
    }

    @Then("admin creates new CUSTOMER profile")
    public void adminCreatesNewCUSTOMERProfile() {
        us_17_page.createNewUserLink.click();
        us_17_page.loginTextBox.sendKeys(newUserdata);
        us_17_page.firstnameTextBox.sendKeys(newUserdata);
        us_17_page.lastnameTextBox.sendKeys(newUserdata);
        us_17_page.emailTextBox.sendKeys(newUserEmail);
        actions.click(us_17_page.roleCustomer).perform();
        us_17_page.saveButtonCreateEditUser.click();
    }

    @Then("admin deactivate USER")
    public void adminDeactivateUSER() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        us_17_page.deActivateButton.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Deactivated");
    }

    @Then("admin reactivate EMPLOYEE")
    public void adminReactivateEMPLOYEE() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(4);
        us_17_page.activateButton.click();
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Activated");
    }

    @Then("admin deactivate MANAGER")
    public void adminDeactivateMANAGER() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        us_17_page.deActivateButton.click();
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Deactivated");
    }

    @Then("admin reactivate MANAGER")
    public void adminReactivateMANAGER() {
        Driver.getDriver().get(ascendingURL);
        ReusableMethods.waitFor(4);
        us_17_page.activateButton.click();
        ReusableMethods.waitFor(2);
        Assert.assertEquals(us_17_page.confirmationActiveOrDeactive.getText(),"Activated");
         }
    }

