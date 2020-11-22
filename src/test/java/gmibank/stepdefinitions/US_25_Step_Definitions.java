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
    List<Map<String,Object>> listOfCountries;

    //TC_2501  -----------------
    @Given("User enter REST API Endpoint as {string}")
    public void user_enter_REST_API_Endpoint_as(String string) {
        responseBeforePost = given().
                    contentType(ContentType.JSON).
                    auth().oauth2(ConfigurationReader.getProperty("token")).
                   when().
                    get(string);

        responseBeforePost.prettyPrint();

        json =responseBeforePost.jsonPath();
    }

    @Given("Before post request HTTP Status Code should be {string}")
    public void before_post_request_HTTP_Status_Code_should_be(String string) {
        int expectedStatusCode = Integer.parseInt(string);
        responseBeforePost.then().assertThat().statusCode(expectedStatusCode);
    }

    @Given("Before post request response format should be {string}")
    public void before_post_request_response_format_should_be(String string) {
        Assert.assertEquals(string,responseBeforePost.getContentType());
        System.out.println(responseBeforePost.getContentType());
    }

    @Given("Before post request user finds out the size of the country list")
    public void before_post_request_user_finds_out_the_size_of_the_country_list() {
        listOfCountries = responseBeforePost.as(ArrayList.class);
//      System.out.println("De-Serialization Data Type :" + listOfCountries);
        System.out.println("Total Number of Countries :" + listOfCountries.size());
    }

    @Then("User send a POST request to REST API endpoint {string} as {string}")
    public void user_send_a_POST_request_to_REST_API_endpoint_as(String string, String string2) {
        Country country = new Country(string2,null);
        responseAfterPost = given().
                            contentType(ContentType.JSON).
                            auth().oauth2(ConfigurationReader.getProperty("token")).
                            body(country).
                            when().
                            post(string);
        responseAfterPost.prettyPrint();

        json = responseAfterPost.jsonPath();
    }

    //TC_2502  -----------------

    @Given("After creation send a GET request to REST API end point {string}")
    public void after_creation_send_a_GET_request_to_REST_API_end_point(String string) {
        responseGetAfterPost = given().accept(ContentType.JSON).
                            auth().oauth2(ConfigurationReader.getProperty("token")).
                            when().
                            get(string);

        //responseGetAfterPost.prettyPrint();

        json = responseGetAfterPost.jsonPath();
    }

    @Given("After creation HTTP Status Code should be {string}")
    public void after_creation_HTTP_Status_Code_should_be(String string) {
        int expectedStatusCode = Integer.parseInt(string);
        responseGetAfterPost.then().assertThat().statusCode(expectedStatusCode);
        System.out.println(expectedStatusCode);
    }

    @Given("After creation user verifies the created country {string}")
    public void after_creation_user_verifies_the_created_country(String string) {
        String lastCreatedCountry = json.getString("name[-1]");
        System.out.println("Last Country created : " +lastCreatedCountry);
        Assert.assertEquals(string,lastCreatedCountry);
    }

    @Then("After creation user finds out the size of the country list")
    public void after_creation_user_finds_out_the_size_of_the_country_list() {
        listOfCountries = responseGetAfterPost.as(ArrayList.class);
//      System.out.println("De-Serialization Data Type :" + listOfCountries);
        System.out.println("Total Number of Countries :" + listOfCountries.size());

    }

}
