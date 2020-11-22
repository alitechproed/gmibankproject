package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US_22_Step_Definitions {

    Response response;
    List<Map<String, Object>> listofStates ;
    JsonPath json;

    @Given("Use api end point {string}")
    public void use_api_end_point(String string) {
        response = given().
                auth().
                oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(string);

        json = response.jsonPath();

      //  response.prettyPrint();
    }


    @Given("get all states as De-Serialization")
    public void get_all_states_as_De_Serialization() {
        listofStates = response.as(ArrayList.class);


    }

    @Given("find out how many states")
    public void find_out_how_many_states_are_and_verify() {
        int nbOfStates = listofStates.size();
        System.out.println(nbOfStates);


    }

    @Given("Verify first state is {string}")
    public void verify_first_state_is(String string) {
        String firstState= json.getString("name[0]");
        System.out.println(firstState);
        Assert.assertEquals(firstState,string);
    }

    @Given("Verify id of Yozgat is \\(integer) {string}")
    public void verify_id_of_Yozgat_is_integer(String string) {
        String url = "https://www.gmibank.com/api/tp-states/19244";
          Response response2 = given().
                                    auth().
                                    oauth2(ConfigurationReader.getProperty("token")).
                                     when().
                                get(url);

          json = response2.jsonPath();
          int id = json.getInt("id");
        int expectedId = Integer.parseInt(string);
        //System.out.println(id);

        Assert.assertEquals(id,expectedId);
    }

    @Given("verify list of the states contains Centre")
    public void verify_list_of_the_states_contains_Centre() {
        Assert.assertTrue(listofStates.toString().contains("Centre"));

    }

    @Given("verify list of the states contains Auvergne")
    public void verify_list_of_the_states_contains_Auvergne() {
        Assert.assertTrue(listofStates.toString().contains("Auvergne"));

    }

    @Given("verify list of the states contains Koblenz")
    public void verify_list_of_the_states_contains_Koblenz() {
        Assert.assertTrue(listofStates.toString().contains("Koblenz"));
    }

    @Given("verify list of the states contains Virginia")
    public void verify_list_of_the_states_contains_Virginia() {
        Assert.assertTrue(listofStates.toString().contains("Virginia"));
    }
}
