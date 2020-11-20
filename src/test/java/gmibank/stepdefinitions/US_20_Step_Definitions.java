package gmibank.stepdefinitions;
import static io.restassured.RestAssured.*;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.sql.Array;
import java.util.*;



public class US_20_Step_Definitions {

    Response response;
    List<Map<String, Object>> listofCustomers ;
    JsonPath json;


    @Given("use api end point  {string}")
    public void use_api_end_point(String endPoint) {
        response = given().
                        auth().
                        oauth2(ConfigurationReader.getProperty("token")).
                   when().
                        get(endPoint);

        json = response.jsonPath();

        response.prettyPrint();

    }

    @Given("get all customers' information as De-Serialization")
    public void get_all_customers_information_as_De_Serialization() {
        listofCustomers = response.as(ArrayList.class);
        System.out.println("De-Serialization Data Type : " +listofCustomers);
    }

    @Given("find out how many customers are and verify")
    public void find_out_how_many_customers_are_and_verify() {
        System.out.println("Total Number of Customer : "+ listofCustomers.size());
        Assert.assertTrue(listofCustomers.size()==20);

    }

    @And("get all the information of the seventh customer")
    public void getAllTheInformationOfTheSeventhCustomer() {
        String seventhCustomer = listofCustomers.get(6).toString();
        System.out.println("Seventh Customer : " + seventhCustomer);

    }

    @And("verify seventh customers {string} is {string} and {string} is {string}")
    public void verifySeventhCustomersIsAndIs(String snn, String snnNumber, String state, String stateName) {
        String seventhCustomersSNN = listofCustomers.get(6).get(snn).toString();
        Assert.assertEquals(seventhCustomersSNN,snnNumber);

        String seventhCustomersState = listofCustomers.get(6).get(state).toString();
        Assert.assertEquals(seventhCustomersState,stateName);

    }

    @And("verify first customer's {string} {string}")
    public void verifyFirstCustomerS(String firstName, String expectedData) {
        String firstCustomerName = listofCustomers.get(0).get(firstName).toString();
        System.out.println(firstCustomerName);
        Assert.assertEquals(firstCustomerName,expectedData);
    }

    @And("verify second customer's {string} {string}")
    public void verifySecondCustomerS(String lastName, String expectedData) {
        String lastNameOfSecondCustomer= listofCustomers.get(1).get(lastName).toString();
        Assert.assertEquals(lastNameOfSecondCustomer,expectedData);
    }

    @And("verify fifth customer's country {string}")
    public void verifyFifthCustomerSCountry(String country) {
        String countryName = json.getString("country[4].name");
        System.out.println("First : "+countryName);
//        String countryName2 = json.getList("country.name").get(4).toString();
        Assert.assertEquals(countryName,country);

    }

    @Given("get last customer's id and verify")
    public void get_first_customer_s_id_and_verify() {
        int actualLastId = json.getInt("id[-1]");
        System.out.println("Last Id : "+ actualLastId); //6476 ,
        int expectedLastId = getLastId();
        Assert.assertEquals(actualLastId,expectedLastId);

    }
    public int getLastId(){
      Response responseGet = given().
                                auth().
                                oauth2(ConfigurationReader.getProperty("token")).
                             when().
                                 get("https://www.gmibank.com/api/tp-customers");
      json = responseGet.jsonPath();
      int lastId = json.getInt("id[-1]");


      return lastId;
    }

}
