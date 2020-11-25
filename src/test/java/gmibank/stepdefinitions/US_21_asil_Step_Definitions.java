package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.sl.In;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US_21_asil_Step_Definitions {


    Response response;
    List<HashMap <String, Object> >  listofcountries;
    JsonPath json;

    @Given("one user enter end point as {string}")
    public void one_user_enter_end_point_as(String string) {
        response=given().auth().oauth2(ConfigurationReader.getProperty("token")).when().get(string);

       // response.prettyPrint();

        json=response.jsonPath();

    }

    @Given("two user read all information of countries as Deserialization")
    public void two_user_read_all_information_of_countries_as_Deserialization() {
       listofcountries=response.as(ArrayList.class);
        System.out.println(listofcountries+" => after De-serialization");
        Assert.assertFalse(listofcountries.isEmpty());
    }

    @Then("three user find out all countires and verify")
    public void three_user_find_out_all_countires_and_verify() {


        System.out.println(listofcountries.size()+" countries number ");
        response.then().statusCode(200).contentType(ContentType.JSON);

        Assert.assertEquals(listofcountries.size(),37);

    }


    @And("four user verifies the first country whic USA {string} is")
    public void fourUserVerifiesTheFirstCountryWhicUSAIs(String usa) {
       String  isUsa=json.getString("name[0]");
       Assert.assertEquals(usa,isUsa);

    }

    @And("five user verifies the last country if is {string}")
    public void fiveUserVerifiesTheLastCountryIfIs(String lastCountry) {

      String isLastCountry=json.getString("name[-1]");
      Assert.assertEquals(lastCountry,isLastCountry);
    }

    @Then("six user verifies  the last id {int}")
    public void sixUserVerifiesTheLastId(int id) {

       int islasId=json.getInt("id[-1]");
       //int  isId=Integer.parseInt(islasId);
        System.out.println("ust kod  === "+islasId);
        Assert.assertEquals(id,islasId);
    }

    @And("seven user validate first five countries name {string}")
    public void sevenUserValidateFirstFiveCountriesName(String counrty) {

        for(int i=0;i<listofcountries.size();i++){

            String  deneme=listofcountries.get(i).get("name").toString();


            if (i==4) {
                if (deneme.equals(counrty)) {
                    Assert.assertEquals(deneme, counrty);
                    System.out.println("first five  country =  " + deneme);
                }
                break;
            }
        }


    }

    @Then("eigth user validate the states if are null or not {string}")
    public void eigthUserValidateTheStatesIfAreNullOrNot(String arg0) {




    }
}
