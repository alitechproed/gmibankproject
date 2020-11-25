package gmibank.stepdefinitions;

import gmibank.pojos.Country;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.*;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.JSONObject;

import java.util.*;

import static io.restassured.RestAssured.given;

public class US_26_Step_Definitions {

    Response response;
    Response responseAfterPut;
    JsonPath json;
    List<Map<String,Object>> listOfCountries;
    Map country = new HashMap<String,Object>();

    @Given("Use api end point  {string}")
    public void use_api_end_point(String string) {
            response = given().
                             accept(ContentType.JSON).
                             auth().oauth2(ConfigurationReader.getProperty("token")).
                        when().
                             get(string);

       // response.prettyPrint();

            json =response.jsonPath();
    }

    @Given("User finds out the size of the country list")
    public void user_finds_out_the_size_of_the_country_list() {
        listOfCountries = response.as(ArrayList.class);
        System.out.println("Nb of countries :" + listOfCountries.size());
    }

    @Then("User send a Put request endpoint {string} as {string}")
    public void user_send_a_Put_request_endpoint_as(String endpoint, String updateCountryName) {

        country.put("id", 25562);
        country.put("name","Belgium");
        country.put("states",null);

        Response responsePut = given().
                                            contentType(ContentType.JSON).
                                            auth().oauth2(ConfigurationReader.getProperty("token")).
                                            body(country).
                                        when().
                                            put(endpoint);

        json =responsePut.jsonPath();
      /*  responsePut.then().
                assertThat().
                statusCode(200);

       */

    }


}
