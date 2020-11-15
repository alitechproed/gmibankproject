package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class US_12_Page {

    public US_12_Page() {
        PageFactory.initElements(Driver.getDriver(), this);
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

    @FindBy(xpath = "//tbody//tr//td[2]")
    public List<WebElement> firstName;

    @FindBy(xpath = "//tbody//tr//td[3]")
    public List<WebElement> lastName;

    @FindBy(xpath = "//tbody//tr//td")
    public List<WebElement> allCell;

    @FindBy(xpath = "// tbody//tr//td[4]")
    public List<WebElement> middleInitial;

    @FindBy(xpath = "// tbody//tr//td[5]")
    public List<WebElement> email;

    @FindBy(xpath = "// tbody//tr//td[6]")
    public List<WebElement> mobilePhoneNummer;

    @FindBy(xpath = "// tbody//tr//td[7]")
    public List<WebElement> phoneNummer;

    @FindBy(xpath = "// tbody//tr//td[8]")
    public List<WebElement> address;

    @FindBy(xpath = "// tbody//tr//td[9]")
    public List<WebElement> createDate;

    @FindBy(xpath = "(//a[@class='btn btn-primary btn-sm'])[1]")  //*[.='Edit']
    public WebElement editButton;

    @FindBy(xpath = "//a[@id='cancel-save']")
    public WebElement backButton;

    @FindBy(xpath = "//input[@id='tp-customer-email']")
    public WebElement emailBox;

    @FindBy(xpath = "//button[@id='save-entity']")
    public WebElement saveButton;

    @FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--success toastify-toast']")
    public WebElement succesText;

    @FindBy(xpath = "//input[@id='tp-customer-mobilePhoneNumber']")
    public WebElement mobilePhoneBox;

    @FindBy(xpath = "//input[@id='tp-customer-phoneNumber']")
    public WebElement phoneBox;

    @FindBy(xpath = "//input[@id='tp-customer-address']")
    public WebElement addressBox;

    @FindBy(xpath = "(//*[.='Delete'])[1]")
    public WebElement deleteButton;

    @FindBy(xpath = "//div[@id='gmibankfrontendApp.tPCustomer.delete.question']")
    public WebElement deleteOnay;

    @FindBy(xpath ="//button[@class='btn btn-secondary']")
    public WebElement canselButton;

}
