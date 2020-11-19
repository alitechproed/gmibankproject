package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_16_Page {
    public US_16_Page(){PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(id = "username")
    public WebElement username;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperationsLink;

    @FindBy(xpath = "//a[.='My Accounts']")
    public WebElement myAccountsLink;

    @FindBy(xpath = "//a[.='Transfer Money']")
    public WebElement transferMoneyLink;

}
