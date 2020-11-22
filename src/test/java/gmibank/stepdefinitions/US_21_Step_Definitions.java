package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US_21_Step_Definitions {

    Response response;
    List<Map<String, Object>> listofCountries;
    JsonPath json;

    @Given("use this api end point  {string}")
    public void useThisApiEndPoint(String endPoint) {
        response = given().
                auth().
                oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);

        json = response.jsonPath();

        response.prettyPrint();
    }

    @And("get all countries information as De-Serialization")
    public void getAllCountriesInformationAsDeSerialization() {
        listofCountries = response.as(ArrayList.class);
        System.out.println("De-Serialization Data Type : " +listofCountries);
    }

    @Given("find out how many countries are and verify")
    public void find_out_how_many_countries_are_and_verify() {
        System.out.println("Total Number of Countries : "+ listofCountries.size());
        int countries=listofCountries.size();
        Assert.assertTrue(listofCountries.size()==countries);
    }




    @And("verify eighth Country {string} is {string} and {string} is {string}")
    public void verifyEighthCountryIsAndIs(String id, String idNum, String name, String country) {
        String eighthID = listofCountries.get(8).get(id).toString();
        Assert.assertEquals(eighthID,idNum);

        String eighthName = listofCountries.get(8).get(name).toString();
        Assert.assertEquals(eighthName,country);


    }



    @And("verify all countries you created and validate them one by one")
    public void verifyAllCountriesYouCreatedAndValidateThemOneByOne() {
        List<Object> list=new ArrayList<>();
        for (int i=0;i<listofCountries.size();i++){

            list.add( listofCountries.get(i).get("name"));
        }
        System.out.println(list);
        int say=0;
        for (Object w:list) {
            Assert.assertEquals(w,listofCountries.get(say).get("name"));
            say++;
        }


    }

    @And("get all the information of the eighth contries")
    public void getAllTheInformationOfTheEighthContries() {
        String eighthCountry = listofCountries.get(8).toString();
        System.out.println("Eighth Country : " + eighthCountry);
    }
}
