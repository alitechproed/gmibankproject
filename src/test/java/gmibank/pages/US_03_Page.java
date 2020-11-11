package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class US_03_Page {
    public US_03_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }


    @FindBy(id = "firstPassword")
    public WebElement firstPasswordTextbox;

    @FindBy(xpath = "//li[@class='point']")
    public List<WebElement> colorLevel;
}
