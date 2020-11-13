package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_07_Page {
    public US_07_Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//a[@href='#']")
    public WebElement registirationGirisImage;

    @FindBy(xpath = "//span[.='Sign in']")
    public WebElement signInMenu;

    @FindBy(xpath = "//input[@id='username']")
    public  WebElement usernameTextBox;

    @FindBy(xpath = "//input[@id='password']")
    public  WebElement passwordTextBox;

    @FindBy(xpath = "(//span[.='Sign in'])[3]")
    public  WebElement signinButton;

    @FindBy(xpath = "//span[.='User Info']")
    public WebElement userInfo;

    @FindBy(xpath = "//input[@id='email']")
    public WebElement emailTextBox;

    @FindBy(xpath = "//select[@id='langKey']")
    public WebElement languageDropdown;

}
