package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_14_Page {
    public US_14_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//span[.='Kara Kartal']")
    public WebElement karaKartal;

    @FindBy(xpath = "//span[.='Sign out']")
    public WebElement signOutLink;

    //TC1401 - TC1402  ---------------

    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageAccountLink;

    @FindBy(xpath = "//span[.='Create a new Account']")
    public WebElement createANewAccountLink;

    @FindBy(id= "tp-account-createDate")
    public WebElement createDateIcon;

    @FindBy(xpath = "//span[.='Create Date']")
    public WebElement createDateBox;

    @FindBy(xpath = "//select[@name='employee.id']")
    public WebElement employeeBox;

    //TC1403 ----------------

    @FindBy(xpath = "//span[.='Manage Customers']")
    public WebElement manageCustomerLink;

    @FindBy(xpath = "//span[.='Create a new Customer']")
    public WebElement getCreateANewCustomerLink;

    @FindBy(id = "tp-customer-createDate")
    public WebElement createDateBoxCustomer;

    //TC1404 ----------------

    @FindBy(id = "tp-customer-user")
    public WebElement userSelectionBox;

    //TC1405 ----------------

    @FindBy(id = "tp-customer-zelleEnrolled")
    public WebElement zelleCheckBox;

    @FindBy(xpath = "//span[.='Zelle Enrolled']")
    public WebElement zelleEnrolledText;

    @FindBy(id = "save-entity")
    public WebElement saveButton;


}
