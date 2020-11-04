package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Us_02_Page {
    public Us_02_Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[@href='#']")
    public WebElement registirationGirisImage;

    @FindBy(xpath = "//span[.='Register']")
    public WebElement registirationGirisMenu;

    @FindBy(xpath = "//input[@name='ssn']")
    public WebElement SsnTextBox;

    @FindBy(xpath = "//input[@name='mobilephone']")
    public WebElement mobileNumberTextBox;

    @FindBy(xpath = "//input[@name='email']")
    public WebElement emailTextBox;

    @FindBy(xpath = "(//span[.='Register'])[2]")
    public WebElement registirationButton;

    @FindBy(xpath ="//div[.='Your First Name is required']")
    public WebElement uyariTexti;

    @FindBy(xpath ="//label[.='Mobile Phone Number']")
    public WebElement mobileColor;

    @FindBy(xpath = "//div[.='This field is invalid']")
    public  WebElement emailInvalidMessage;
}
