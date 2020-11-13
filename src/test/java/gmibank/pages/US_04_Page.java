package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_04_Page {
    public US_04_Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//span[.='Sign in']")
    public WebElement signInButton;

    @FindBy(id = "username")
    public WebElement usernameTextBox;

    @FindBy(id = "password")
    public WebElement passwordTextBox;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement submitLoginButton;

    @FindBy(xpath = "//span[.='Cancel']")
    public WebElement cancelButton;

    @FindBy(xpath = "//span[.='Ali Smith']")
    public WebElement kullaniciIsmi;

    @FindBy(xpath = " //a[@href='/logout']")
    public WebElement logoutButton;





}
