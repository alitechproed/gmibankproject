package gmibank.stepdefinitions;
import static io.restassured.RestAssured.*;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
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

//        response.prettyPrint();

    }

    @Given("get all customers' information as De-Serialization")
    public void get_all_customers_information_as_De_Serialization() {
        listofCustomers = response.as(ArrayList.class);
//        System.out.println("De-Serialization Data Type : " +listofCustomers);

    }

    @Given("find out how many customers are and verify")
    public void find_out_how_many_customers_are_and_verify() {
//        System.out.println("Total Number of Customer : "+ listofCustomers.size());
        Assert.assertTrue(listofCustomers.size()==20);

    }

    @And("get all the information of the seventh customer")
    public void getAllTheInformationOfTheSeventhCustomer() {
        String seventhCustomer = listofCustomers.get(6).toString();
//        System.out.println("Seventh Customer : " + seventhCustomer);

    }

    @And("verify seventh customers {string} and {string}")
    public void verifySeventhCustomersAnd(String ssnValue, String stateName) {
        String expectedSsnValue = listofCustomers.get(6).get(ssnValue).toString();
        Assert.assertEquals(expectedSsnValue,getSeventhCustomerSsn());

        String expectedStateValue = listofCustomers.get(6).get(stateName).toString();
        Assert.assertEquals(expectedStateValue, getSeventhCustomersState());
    }
    public String getSeventhCustomerSsn(){
        return listofCustomers.get(6).get("ssn").toString();
    }

    public String getSeventhCustomersState(){
        return listofCustomers.get(6).get("state").toString();
    }

    @And("verify first customer's {string}")
    public void verifyFirstCustomerS(String firstName) {
        String firstCustomerName = listofCustomers.get(0).get(firstName).toString();
        String expectedFirstNameOne = listofCustomers.get(0).get("firstName").toString();
        Assert.assertEquals(expectedFirstNameOne,firstCustomerName);

    }

    @And("verify second customer's {string}")
    public void verifySecondCustomerS(String lastName) {
        String lastNameOfSecondCustomer= listofCustomers.get(1).get(lastName).toString();
        String expectedLastNameTwo = listofCustomers.get(1).get("lastName").toString();
        Assert.assertEquals(expectedLastNameTwo, lastNameOfSecondCustomer);
    }

    @And("verify fifth customer's {string}")
    public void verifyFifthCustomerSCountry(String country) {
        country =fifthCustomersCountry();
        String expectedFifthCountry = json.getString("country[4].name");
        Assert.assertEquals(expectedFifthCountry,country);

    }

    public String fifthCustomersCountry(){
        return json.get("country[4].name");
    }

    @Given("get last customer's id and verify")
    public void get_first_customer_s_id_and_verify() {
        int actualLastId = json.getInt("id[-1]");
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
