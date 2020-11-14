package gmibank.stepdefinitions;

import gmibank.pages.US_09_Page;
import gmibank.utilities.Driver;
import gmibank.utilities.ReusableMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.asserts.SoftAssert;

import java.util.List;

public class US_09_Step_Definitions {

    US_09_Page us09Page=new US_09_Page();
    SoftAssert soft=new SoftAssert();
    Actions act=new Actions(Driver.getDriver());


    @Given("one Positiv user enter {string} SSN  sees then firstname , lastname,email,mobilnumber,phoneNumber,addres ,ssn ,createDate")
    public void one_Positiv_user_enter_SSN_sees_then_firstname_lastname_email_mobilnumber_phoneNumber_addres_ssn_createDate(String string) {

        us09Page.ssnSearchBox1.sendKeys(string);
        us09Page.searchButton.click();
        ReusableMethods.waitFor(2);
//        soft.assertTrue(us09Page.firstnameBox.isDisplayed()||us09Page.lastnameBox.isDisplayed()||us09Page.emailBox.isDisplayed());
//        soft.assertTrue(us09Page.mobilePhonBox.isDisplayed()||us09Page.adressBox.isDisplayed()||us09Page.ssnBox2.isDisplayed());
//        soft.assertTrue(us09Page.createDateBox.isDisplayed()||us09Page.phoneNumberBox.isDisplayed());

        WebElement yeni[]={us09Page.firstnameBox,us09Page.lastnameBox,us09Page.emailBox,us09Page.mobilePhonBox,us09Page.phoneNumberBox, us09Page.ssnBox2, us09Page.createDateBox};

        String data="";
        for (WebElement w:yeni){

            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            data=w.getAttribute("value");
            soft.assertEquals(w.getAttribute("value"),data);
            data="";
        }

        System.out.println(us09Page.ssnBox2.getText()+"deneneme1");
        soft.assertAll();
    }

    @Then("two Positiv user enter {string} SSN  and doesnt  see then the rest of  unfiiled Record in registration")
    public void two_Positiv_user_enter_SSN_and_doesnt_see_then_the_rest_of_unfiiled_Record_in_registration(String string) {
        us09Page.ssnSearchBox1.clear();
        ReusableMethods.waitFor(2);
        us09Page.ssnSearchBox1.sendKeys(string);
        us09Page.searchButton.click();

        String veri="";
        WebElement yeni[]={us09Page.zipBox, us09Page.stateBox, us09Page.countrySelectBox, us09Page.cityBox};
        for (WebElement w:yeni){
            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            veri=w.getAttribute("value");
            soft.assertEquals(w.getAttribute("value"),veri);
            veri="";
        }
        System.out.println(us09Page.zipBox.getAttribute("value")+"deneme2");

        soft.assertAll();
    }


    @Given("three Negativ user enter false SNN {string} doesnt  see any info of users")
    public void three_Negativ_user_enter_false_SNN_doesnt_see_any_info_of_users(String string) {

        us09Page.ssnSearchBox1.sendKeys(string);
        us09Page.searchButton.click();
        ReusableMethods.waitFor(2);

        WebElement yeni[]={us09Page.firstnameBox,us09Page.lastnameBox,us09Page.emailBox,us09Page.mobilePhonBox,us09Page.phoneNumberBox, us09Page.ssnBox2, us09Page.createDateBox};

        String data="";
        for (WebElement w:yeni){

            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            data=w.getAttribute("value");
            soft.assertEquals(w.getAttribute("value"),data);
            data="";
        }

        System.out.println(us09Page.ssnBox2.getText()+"deneneme1");
        soft.assertAll();

    }

    @Then("four  Negativ user enter incorrect SSN {string} and should see aller Error messaj")
    public void four_Negativ_user_enter_incorrect_SSN_and_should_see_aller_Error_messaj(String string) {

        us09Page.ssnSearchBox1.clear();
        us09Page.ssnSearchBox1.sendKeys(string);
        us09Page.searchButton.click();
        ReusableMethods.waitFor(2);
        System.out.println(us09Page.alertErrorMessage.getText());
        soft.assertTrue(us09Page.alertErrorMessage.isDisplayed());

    }

    @Given("five Positv user enters to firstname Box {string}")
    public void five_Positv_user_enters_to_firstname_Box(String string) {

        us09Page.firstnameBox.sendKeys(string+ Keys.ENTER);

    }

    @Then("six  Possitiv user doesnt see any of info of user")
    public void six_Possitiv_user_doesnt_see_any_of_info_of_user() {

        WebElement yeni[]={us09Page.lastnameBox,us09Page.emailBox,us09Page.mobilePhonBox,us09Page.phoneNumberBox, us09Page.ssnBox2};

        String data="";
        for (WebElement w:yeni){

            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            data=w.getAttribute("value");
            soft.assertTrue(data.isEmpty());
            data="";
        }

        soft.assertAll();
    }

    @Given("seven Negativ user selects from user Box a data")
    public void seven_Negativ_user_selects_from_user_Box_a_data() {

        Select userOptions=new Select(us09Page.userSelectBox);
        userOptions.selectByIndex(1);

        WebElement yeni[]={us09Page.lastnameBox,us09Page.emailBox,us09Page.mobilePhonBox,us09Page.phoneNumberBox, us09Page.ssnBox2};

        String data="";
        for (WebElement w:yeni){

            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            data=w.getAttribute("value");
            soft.assertTrue(data.isEmpty());
            data="";
        }

        soft.assertAll();



    }

    @Then("eigth Negativ user can select all usersname")
    public void eigth_Negativ_user_can_select_all_usersname() {



           Select yeni=new Select(us09Page.userSelectBox);
           List<WebElement > isimler=yeni.getOptions();

           for (WebElement w:isimler){

               System.out.println(w.getText());
               w.click();
               soft.assertTrue(w.isDisplayed());

           }



            System.out.println(yeni.getOptions().size());


           soft.assertAll();



    }

    @Then("nine  Negativ user  wont be see any data of users")
    public void nine_Negativ_user_wont_be_see_any_data_of_users() {

        Select userOptions=new Select(us09Page.userSelectBox);
        userOptions.selectByIndex(6);

        WebElement yeni[]={us09Page.firstnameBox,us09Page.lastnameBox,us09Page.emailBox,us09Page.mobilePhonBox,us09Page.phoneNumberBox, us09Page.ssnBox2};

        String data="";
        for (WebElement w:yeni){

            System.out.println(w.getAttribute("value"));
            ReusableMethods.waitFor(2);
            data=w.getAttribute("value");
            soft.assertEquals(w.getAttribute("value"),data);
            data="";
        }


        soft.assertAll();


    }

    @Given("ten user enter correct ssn data {string}")
    public void ten_user_enter_correct_ssn_data(String string) {
       us09Page.ssnSearchBox1.sendKeys(string);
       us09Page.searchButton.click();

    }

    @Then("eleven user fill miss box of data")
    public void eleven_user_fill_miss_box_of_data() {

        us09Page.zipBox.sendKeys(ReusableMethods.randomMethod(5,49,57));
        us09Page.cityBox.sendKeys(ReusableMethods.randomMethod(6,97,122));
        us09Page.adressBox.sendKeys(ReusableMethods.randomMethod(10,77,122));
        us09Page.phoneNumberBox.sendKeys("234-234-4556");
        us09Page.middleNameBox.sendKeys(ReusableMethods.randomMethod(6,97,122));
        Select country=new Select(us09Page.countrySelectBox);
        country.selectByIndex(3);
        Select account=new Select(us09Page.accountSelectBox);
        account.selectByIndex(1);


    }

    @Then("twelve user click save")
    public void twelve_user_click_save() {


       us09Page.saveButton.click();
       soft.assertFalse(us09Page.saveButton.isEnabled());
       soft.assertAll();

    }





}
