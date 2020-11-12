package gmibank.stepdefinitions;

import gmibank.pages.US_03_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.asserts.SoftAssert;

import java.util.concurrent.ThreadLocalRandom;

public class US_03_Step_Definitions {
    US_03_Page us03Page=new US_03_Page();

    Actions act=new Actions(Driver.getDriver());
    SoftAssert soft=new SoftAssert();
    static  char charechter = (char) ThreadLocalRandom.current().nextInt(33, 47);


    @Given("bir user sent data to new Password Box {string} and verify the level chart")
    public void bir_user_sent_data_to_new_Password_Box_and_verify_the_level_chart(String string) {

        us03Page.firstPasswordTextbox.sendKeys(string+charechter);

        ReusableMethods.waitFor(2);
        String color=ReusableMethods.getHexColor(us03Page.colorLevel.get(4),"background-color");
        soft.assertEquals(color,"#0ff0");
        soft.assertAll();
    }

    @Given("iki user sent to newPassword Box {string} and verify the level chart")
    public void iki_user_sent_to_newPassword_Box_and_verify_the_level_chart(String string) {

        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        String color=ReusableMethods.getHexColor(us03Page.colorLevel.get(4),"background-color");
        soft.assertEquals(color,"#dddddd");
        soft.assertAll();
    }

    @Given("uc user sent to newPass box {string} and verify the level chart")
    public void uc_user_sent_to_newPass_box_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        String color=ReusableMethods.getHexColor(us03Page.colorLevel.get(4),"background-color");
        System.out.println(color);
        boolean guvenliMi=true;

        if(color.equals("#dddddd") || color.equals("#0ff0")){

            soft.assertTrue(guvenliMi);
        }

        soft.assertAll();
    }

    @Given("dort user sent to newPassword field {string} and verify the level chart")
    public void dort_user_sent_to_newPassword_field_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        String color=ReusableMethods.getHexColor(us03Page.colorLevel.get(4),"background-color");
        System.out.println(color);
        soft.assertTrue(color.contains("#dddddd"));
        soft.assertNotEquals(color,"#0ff0");
        soft.assertAll();
    }

    @Given("bes user sent to newPassword field {string} and verify the level chart")
    public void bes_user_sent_to_newPassword_field_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        for (WebElement w: us03Page.colorLevel){
            ReusableMethods.waitFor(2);
            String color=ReusableMethods.getHexColor(w,"background-color");
            System.out.println(color);
            boolean guvenliMi=true;

            if(color.equals("#dddddd") || color.equals("#0ff0")){

                soft.assertTrue(guvenliMi);
            }
        }




        soft.assertAll();
    }

    @Given("alti user sent to newPassword  {string} and verify the level chart")
    public void alti_user_sent_to_newPassword_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        String color=ReusableMethods.getHexColor(us03Page.colorLevel.get(4),"background-color");
        System.out.println(color);
        soft.assertNotEquals(color,"#0ff0");
        soft.assertAll();




    }

    @Given("yedi user sent to newPASWORD box {string} and verify the level chart")
    public void yedi_user_sent_to_newPASWORD_box_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        for (WebElement w: us03Page.colorLevel){
            ReusableMethods.waitFor(2);
            String color=ReusableMethods.getHexColor(w,"background-color");
            System.out.println(color);
            boolean guvenliMi=true;

            if(color.equals("#0ff0")){

                soft.assertTrue(guvenliMi);
            }
        }




        soft.assertAll();
    }

    @Given("sekiz user sent to newPASvORD box {string} and verify the level chart")
    public void sekiz_user_sent_to_newPASvORD_box_and_verify_the_level_chart(String string) {
        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        for (WebElement w: us03Page.colorLevel){
            ReusableMethods.waitFor(2);
            String color=ReusableMethods.getHexColor(w,"background-color");
            System.out.println(color);
            soft.assertNotEquals(color,"#0ff0");

        }
        soft.assertAll();
    }

    @Given("dokuz user sent to newPassWORD box {string} and verify the level chart")
    public void dokuz_user_sent_to_newPassWORD_box_and_verify_the_level_chart(String string) {

        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        for (WebElement w: us03Page.colorLevel){
            ReusableMethods.waitFor(2);
            String color=ReusableMethods.getHexColor(w,"background-color");
            System.out.println(color);
            boolean guvenliMi=true;

            if(color.equals("#0ff0")){

                soft.assertTrue(guvenliMi);
            }
        }




        soft.assertAll();


    }

    @Given("on user sent to newPass field {string} and verify the level chart")
    public void on_user_sent_to_newPass_field_and_verify_the_level_chart(String string) {


        us03Page.firstPasswordTextbox.sendKeys(string);
        ReusableMethods.waitFor(2);
        for (WebElement w: us03Page.colorLevel){
            ReusableMethods.waitFor(2);
            String color=ReusableMethods.getHexColor(w,"background-color");
            System.out.println(color);
            soft.assertNotEquals(color,"#0ff0");

        }
        soft.assertAll();
    }



}
