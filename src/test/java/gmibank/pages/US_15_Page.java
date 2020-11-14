package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class US_15_Page {
    public US_15_Page() { PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageAccountButton;

    @FindBy(xpath = "//tbody/tr/td[3]")
    public List<WebElement> balance;

    @FindBy(xpath = "//tbody/tr/td[4]/span")
    public List<WebElement> accountType;

    @FindBy(xpath = "//tbody/tr")
    public List<WebElement> transactions;

}
