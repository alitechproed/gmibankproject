package gmibank.stepdefinitions;

import gmibank.pojos.Country;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class US_25_Step_Definitions {

    Response responseBeforePost;
    Response responseAfterPost;
    Response responseGetAfterPost;
    JsonPath json;
    List<Map<String, Object>> listOfCountries1;

    List<Map<String, Object>> listOfCountries2;

    //TC_2501  -----------------
    @Given("User enter REST API Endpoint as {string}")
    public void user_enter_REST_API_Endpoint_as(String endpoint) {
        responseBeforePost = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endpoint);

        //responseBeforePost.prettyPrint();

        json = responseBeforePost.jsonPath();
    }

    @Given("Before post request HTTP Status Code should be {string}")
    public void before_post_request_HTTP_Status_Code_should_be(String actualStatusCode) {
        int expectedStatusCode = Integer.parseInt(actualStatusCode);
        responseBeforePost.then().assertThat().statusCode(expectedStatusCode);
    }

    @Given("Before post request response format should be {string}")
    public void before_post_request_response_format_should_be(String contentType) {
        Assert.assertEquals(contentType, responseBeforePost.getContentType());
        System.out.println(responseBeforePost.getContentType());
    }

    @Given("Before post request user finds out the size of the country list")
    public void before_post_request_user_finds_out_the_size_of_the_country_list() {
        listOfCountries1 = responseBeforePost.as(ArrayList.class);
//      System.out.println("De-Serialization Data Type :" + listOfCountries);
        System.out.println("Total Number of Countries :" + listOfCountries1.size());
    }

    @Then("User send a POST request to REST API endpoint {string} as {string}")
    public void user_send_a_POST_request_to_REST_API_endpoint_as(String endpoint, String countryName) {
        Country country = new Country(countryName, null);
        responseAfterPost = given().
                contentType(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                body(country).
                when().
                post(endpoint);
        // responseAfterPost.prettyPrint();

        json = responseAfterPost.jsonPath();
    }

    //TC_2502  -----------------

    @Given("After creation send a GET request to REST API end point {string}")
    public void after_creation_send_a_GET_request_to_REST_API_end_point(String endpoint) {
        responseGetAfterPost = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endpoint);

        //responseGetAfterPost.prettyPrint();

        json = responseGetAfterPost.jsonPath();
    }

    @Given("After creation HTTP Status Code should be {string}")
    public void after_creation_HTTP_Status_Code_should_be(String actualStatusCode) {
        int expectedStatusCode = Integer.parseInt(actualStatusCode);
        responseGetAfterPost.then().assertThat().statusCode(expectedStatusCode);
        System.out.println(expectedStatusCode);
    }

    @Given("After creation user verifies the created country {string}")
    public void after_creation_user_verifies_the_created_country(String countryName) {
        String lastCreatedCountry = json.getString("name[-1]");
        System.out.println("Last Country created : " + lastCreatedCountry);
        Assert.assertEquals(countryName, lastCreatedCountry);
    }

    @Then("After creation user finds out the size of the country list")
    public void after_creation_user_finds_out_the_size_of_the_country_list() {

        listOfCountries2 = responseGetAfterPost.as(ArrayList.class);
//      System.out.println("De-Serialization Data Type :" + listOfCountries);
        System.out.println("Total Number of Countries :" + listOfCountries2.size());

        // Assert.assertTrue(listOfCountries1.size()<listOfCountries2.size());
   }

}
