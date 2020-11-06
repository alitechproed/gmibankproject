package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US01Page {
    public US01Page() {
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//a[@href='#']")
    public WebElement userEntryIcon;
    @FindBy(xpath = "//span[.='Register']")
    public WebElement registerLink;
    @FindBy(id = "ssn")
    public WebElement ssNumber;

}
