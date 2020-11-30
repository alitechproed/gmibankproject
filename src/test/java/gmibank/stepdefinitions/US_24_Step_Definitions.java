package gmibank.stepdefinitions;

import gmibank.pojos.US_24_Pojo;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.hamcrest.Matchers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class US_24_Step_Definitions {
   Response response;
    JsonPath json;
    List<Map<String,Object>> listOfStates;



    @Given("user enter REST API endpoint as {string}")
    public void user_enter_REST_API_endpoint_as(String endpoint) {
        response = given ().
                                 accept(ContentType.JSON).
                                 auth().oauth2(ConfigurationReader.getProperty("token")).
                               when().
                                 get(endpoint);
        response.prettyPrint();

        json = response.jsonPath();


    }

    @Given("Before post request should be HTTP Status Code {int}")
    public void before_post_request_should_be_HTTP_Status_Code(Integer expectedStatusCode) {

        response.then().
                              assertThat().
                              statusCode(expectedStatusCode);
    }
    @Given("Before post request should be response format {string}")
    public void before_post_request_should_be_response_format(String expectedContentType) {
        response.then().
                              assertThat().
                              contentType(expectedContentType);
    }
    @Given("Before post request user finds out the size of the state list")
    public void before_post_request_user_finds_out_the_size_of_the_state_list() {
        listOfStates = response.as(ArrayList.class);
        System.out.println("States: "+listOfStates.size());
    }
    @Then("User sends a POST request to REST API endpoint {string} as {string}")
    public void user_sends_a_POST_request_to_REST_API_endpoint_as(String endpoint, String state) {
        US_24_Pojo statePojo = new US_24_Pojo(state);
        response = given().
                                contentType(ContentType.JSON).
                                auth().oauth2(ConfigurationReader.getProperty("token")).
                                body(statePojo).
                             when().
                                post(endpoint);
        String idNumber = response.jsonPath().getString("id");
        System.out.println(idNumber);

    }

    @Given("After creation user sends a GET request to REST API endpoint {string}")
    public void after_creation_user_sends_a_GET_request_to_REST_API_end_point(String endpoint) {
        response = given().
                               contentType(ContentType.JSON).
                               auth().oauth2(ConfigurationReader.getProperty("token")).
                             when().
                               get(endpoint);
        json = response.jsonPath();
    }

    @Given("After state creation HTTP Status Code should be {int}")
    public void after_state_creation_HTTP_Status_Code_should_be(Integer statusCode) {
        response.then().
                                assertThat().
                                statusCode(statusCode);
    }

    @Given("After creation user verifies the created {string}")
    public void after_creation_user_verifies_the_created(String state) {
        String lastStateCreated = json.getString("id[-1]");
        System.out.println(lastStateCreated);
        int intId =Integer.parseInt(lastStateCreated);

        response.then().
                assertThat().
                body("id",Matchers.hasItem(intId));
    }

    @Given("After the creation request, the user sees the size of the status list")
    public void after_the_creation_request_the_user_sees_the_size_of_the_status_list() {
        listOfStates = response.as(ArrayList.class);
        System.out.println(listOfStates.size());



    }














}
