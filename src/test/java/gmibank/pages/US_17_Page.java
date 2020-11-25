package gmibank.pages;

import gmibank.stepdefinitions.US_17_Step_Definitions;
import gmibank.utilities.Driver;
import io.cucumber.java.de.Wenn;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class US_17_Page {
    public US_17_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//*[.='Administration']")
    public WebElement administrationLink;
    @FindBy(xpath = "//*[.='User management']")
    public WebElement userManagement;
    @FindBy(xpath = "(//span[.='Edit'])[1]")
    public WebElement editButtonFirst;
    @FindBy(xpath = "(//button[@class='btn btn-success'])[1]")
    public WebElement deActivateButton;
    @FindBy(xpath = "(//button[@class='btn btn-danger'])[1]")
    public WebElement activateButton;
    @FindBy(xpath = "//tbody/tr[1]/td[4]/button/span")
    public WebElement confirmationActiveOrDeactive;
    @FindBy(xpath = "//table/tbody/tr[1]/td[6]")
    public WebElement confirmationProfiles;
    @FindBy(xpath = "//span[.='Save']")
    public WebElement saveButtonCreateEditUser;
    @FindBy(id = "account-menu")
    public WebElement accountMenu;
    @FindBy(xpath = "//span[.='Sign out']")
    public WebElement signoutLink;
    @FindBy(xpath = "(//a[@class='btn btn-info btn-sm'])[1]")
    public WebElement viewButton;
    @FindBy(id = "example2")
    public WebElement fullData;
    @FindBy(xpath = "//dd")
    public List<WebElement> fullDataList;
    @FindBy(xpath = "//a[@class='btn btn-primary float-right jh-create-entity']")
    public WebElement createNewUserLink;
    @FindBy(id = "login")
    public WebElement loginTextBox;
    @FindBy(id = "firstName")
    public WebElement firstnameTextBox;
    @FindBy(id = "lastName")
    public WebElement lastnameTextBox;
    @FindBy(id = "email")
    public WebElement emailTextBox;
    @FindBy(id = "xxxxx")
    public WebElement newUserAllInformation;
    @FindBy(xpath = "(//a[@class='btn btn-danger btn-sm'])[1]")
    public WebElement dataDeletion;
    @FindBy(xpath = "//button[2]")
    public WebElement deleteButtonAlert;
    @FindBy(xpath = "//tr[1]/td[2]")
    public WebElement firstElementLoginName;
    @FindBy(xpath = "//option[@value='ROLE_USER']")
    public WebElement roleUser;
    @FindBy(xpath = "//option[@value='ROLE_ADMIN']")
    public WebElement roleAdmin;
    @FindBy(xpath = "//option[@value='ROLE_EMPLOYEE']")
    public WebElement roleEmployee;
    @FindBy(xpath = "//option[@value='ROLE_MANAGER']")
    public WebElement roleManager;
    @FindBy(xpath = "//option[@value='ROLE_CUSTOMER']")
    public WebElement roleCustomer;
}
