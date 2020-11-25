package gmibank.stepdefinitions;

import gmibank.pojos.Country;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.*;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.JSONObject;
import org.junit.Assert;

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

    @And("User send a Put request endpoint {string} as {string} for upddate Cekya")
    public void user_send_a_Put_request_endpoint_as_for_upddate_Cekya(String endpoint, String replaceContry) {

    /*    JSONObject putBoody = new JSONObject();
        putBoody.put("id", 25587);
        putBoody.put("name", replaceContry );
        putBoody.put("states",null);

     */

        Map<String, Object> putBody = new HashMap<>();

        putBody.put("id", 25587);
        putBody.put("name", replaceContry );
        putBody.put("states",null);

        Response responsePut = given().
                                        contentType(ContentType.JSON).
                                        auth().oauth2(ConfigurationReader.getProperty("token")).
                                        body(putBody).
                                     when().
                                        put(endpoint);

              responsePut.prettyPrint();

                responsePut.
                        then().
                        assertThat().
                        statusCode(200).
                        contentType(ContentType.JSON);

    }

    @Then("User verify the contry was updated")
    public void user_verify_the_contry_was_updated() {
       String url = "https://www.gmibank.com/api/tp-countries/25587";
       Response responseAfterPut = given().
                                        contentType(ContentType.JSON).
                                        auth().oauth2(ConfigurationReader.getProperty("token")).
                                    when().
                                        get(url);
                responseAfterPut.
                                then().
                                statusCode(200).
                                contentType(ContentType.JSON);
                JsonPath jsonPath = responseAfterPut.jsonPath();
                String county = jsonPath.getString("name");
        Assert.assertEquals(county, "Pays-Bas");

    }


}
