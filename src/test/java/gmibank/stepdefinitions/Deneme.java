package gmibank.stepdefinitions;

import com.google.gson.Gson;
import gmibank.pojos.Country;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.JsonUtil;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class Deneme {
    Country country = new Country("Yunanistan",null);
    Map country2 = new HashMap<String,Object>();

    @Test
    public void post() {
        country2.put("name","Yozgat");
        country2.put("states",null);

        Response responseBeforeDelete = given().
                                            contentType(ContentType.JSON).
                                            auth().oauth2(ConfigurationReader.getProperty("token")).
                                            body(country2).
                                        when().
                                            post("https://www.gmibank.com/api/tp-countries");
        responseBeforeDelete.prettyPrint();
        responseBeforeDelete.then().
                                assertThat().
                                statusCode(201);
    }
}
