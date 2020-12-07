package gmibank.stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import gmibank.pojos.States;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.ReadTxt;
import gmibank.utilities.WriteToTxt;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class Us_24_Step_Definitions {

    Response responseFirst;
    JsonPath json1,json2;
    Response responseLast;
    List<Map<String,Object>> listOfStates;
    States[] states;


    @Given("user sent the request  in order to get the data {string}")
    public void user_sent_the_request_in_order_to_get_the_data(String url) {
        responseFirst=given().
                            accept(ContentType.JSON).
                            auth().oauth2(ConfigurationReader.getProperty("token")).
                            when().
                            get(url);
        responseFirst.prettyPrint();
        json1=responseFirst.jsonPath();
    }



    @Given("user validate the request  of status code {int}")
    public void user_validate_the_request_of_status_code(Integer int1) {
       responseFirst.then().assertThat().statusCode(int1).contentType(ContentType.JSON);
    }

    @Given("user read  all info  of state as deserialiazation")
    public void user_read_all_info_of_state_as_deserialiazation() throws IOException {
        listOfStates=responseFirst.as(ArrayList.class);
        ObjectMapper ob=new ObjectMapper();
        states=ob.readValue(responseFirst.asString(),States[].class);
        System.out.println(states[0].getName());
        System.out.println(listOfStates.size()+" kac ulke oldugu sayisi ");
        WriteToTxt.saveAllStates("ulke isimleri ",states);



    }
}
