package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_10_Page {
    public US_10_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@aria-haspopup='true']")
    public WebElement enterIcon;
    @FindBy(xpath = "//span[.='Sign in']")
    public WebElement signinLink;
    @FindBy(id = "username")
    public WebElement username;
    @FindBy(id = "password")
    public WebElement password;
    @FindBy(xpath = "//button[@class='btn btn-primary']")
    public WebElement signInButton;
    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperationsLink;
    @FindBy(xpath = "//span[.='Manage Customers']")
    public WebElement manageCostomersLink;
    @FindBy(xpath = "//span[.='Create a new Customer']")
    public WebElement createNewCostomersLink;
    @FindBy(id = "tp-customer-zipCode")
    public WebElement zipcode;
    @FindBy(xpath = "(//a[@href='#'])[2]")
    public WebElement userInfoLink;
    @FindBy(xpath = "//span[.='Sign out']")
    public WebElement signoutLink;
    @FindBy(id = "tp-customer-address")
    public WebElement adressBox;
    @FindBy(id = "tp-customer-city")
    public WebElement city;
    @FindBy(id = "tp-customer-country")
    public WebElement countryDropbox;
    @FindBy(id = "tp-customer-state")
    public WebElement state;
}

