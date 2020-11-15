package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_05_Page {
    public US_05_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//strong[.='Failed to sign in!']")
    public WebElement errorMesagge;

    @FindBy(xpath = "//span[.='Did you forget your password?']")
    public WebElement resetButton;

    @FindBy(id = "email")
    public WebElement emailTextBox;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement submitButton;

    @FindBy(xpath = "//div[@class='Toastify__toast-body']")
    public WebElement emailMesaji;

    @FindBy(xpath = "//span[.='Register a new account']")
    public  WebElement registerNowButton;
}
