package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_01_Page {
    public US_01_Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@href='#']")
    public WebElement loginAndRegisterButton;

    @FindBy(xpath = "//span[.='Register']")
    public WebElement registerMenuLink;

    @FindBy(id = "ssn")
    public WebElement ssnTextbox;

    @FindBy(xpath = "//div[.='Your SSN is invalid']")
    public WebElement ssnHataMesaji;

    @FindBy(id = "firstname")
    public WebElement firstnameTextbox;

    @FindBy(xpath = "//div[.='Your First Name is required']")
    public WebElement firstnameHataMesaji;

    @FindBy(id = "lastname")
    public WebElement lastnameTextbox;

    @FindBy(xpath = "//div[.='Your Last Name is required']")
    public WebElement lastnameHataMesaji;








}
