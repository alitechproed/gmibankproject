package gmibank.stepdefinitions;

import gmibank.pages.US_01_Page;
import gmibank.pages.US_04_Page;
import gmibank.pojos.Country;
import gmibank.pojos.LocalStorage;
import gmibank.pojos.States;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import gmibank.utilities.Driver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class Deneme {
    Country country = new Country("Belgium", null);
    Country country3 = new Country("Denmark", null);
    States statesPojo;

    List<Country> allCountries = new ArrayList<>();
    Map<String, Object> country2 = new HashMap<String, Object>();

    JsonPath json;

    @Test
    public void post() {
        country2.put("name", "Yozgat");
        country2.put("states", null);

        allCountries.add(country);
        allCountries.add(country3);


        for (Country w : allCountries) {
            Response responseBeforeDelete = given().
                    contentType(ContentType.JSON).
                    auth().oauth2(ConfigurationReader.getProperty("token")).
                    body(w).
                    when().
                    post("https://www.gmibank.com/api/tp-countries");
            responseBeforeDelete.prettyPrint();
            responseBeforeDelete.then().
                    assertThat().
                    statusCode(201);

            json = responseBeforeDelete.jsonPath();

            Assert.assertEquals(w.getStates(), json.getString("states"));
        }
    }

    @Test
    public void postStates() {
        String[] states = {"Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Alsace",
                "Aquitaine", "Auvergne", "Basse-Normandie ", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne",
                "Corse (Corsica)", "Franche-Comte", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais",
                "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote-d'Azur", "Rhone-Alpes"};
//        JSONObject jsonObject = new JSONObject();
//        for(int i= 0; i<21; i++ ) {
//            jsonObject.put("name",states[i]);
//        }
//        System.out.println("Body uzunlugu: " + jsonObject.length());


        for (String w : states) {

            statesPojo = new States(w, null);

            Response responseBeforeDelete = given().
                    contentType(ContentType.JSON).
                    auth().oauth2(ConfigurationReader.getProperty("token")).
                    body(statesPojo).
                    when().
                    post("https://www.gmibank.com/api/tp-states");

            responseBeforeDelete.prettyPrint();
            responseBeforeDelete.then().
                    assertThat().
                    statusCode(201);

        }
    }

    @Test
    public void delete() {

        String endPoint = "https://www.gmibank.com/api/tp-states";
        Response responseBeforeDelete = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);
        responseBeforeDelete.prettyPrint();
        JsonPath json = responseBeforeDelete.jsonPath();
        List<Integer> allId = json.getList("id");

        System.out.println(allId.size());

//        for (int i = 0; i <allId.size() ; i++) {
//            Response responseAfterDelete = given().
//                    accept(ContentType.JSON).
//                    auth().oauth2(ConfigurationReader.getProperty("token")).
//                    when().
//                    delete(endPoint+ "/" + allId.get(i));
//            responseAfterDelete.prettyPrint();
//            System.out.println("After Delete Response Body: " + responseAfterDelete.getBody().asString());
//        }
    }

    @Test
    public void checkIfNotExistAddToStates() {
        String[] states = {"Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Alsace",
                "Aquitaine", "Auvergne", "Basse-Normandie ", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne",
                "Corse (Corsica)", "Franche-Comte", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais",
                "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote-d'Azur", "Rhone-Alpes", "Yozgat :)"};

        String endPoint = "https://www.gmibank.com/api/tp-states";
        Response responseGet = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);
        JsonPath json = responseGet.jsonPath();
        List<String> allStates = json.getList("name");

        for (String w : states) {
            if (!allStates.contains(w)) {
                statesPojo = new States(w, null);

                Response responsePost = given().
                        contentType(ContentType.JSON).
                        auth().oauth2(ConfigurationReader.getProperty("token")).
                        body(statesPojo).
                        when().
                        post("https://www.gmibank.com/api/tp-states");

                responsePost.prettyPrint();
                responsePost.then().
                        assertThat().
                        statusCode(201);
            } else {
                System.out.println(w + " already exist on the API");
            }

        }

        Response responseAfterPost = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);
//        responseAfterPost.prettyPrint();
        JsonPath jsonAfterPost = responseAfterPost.jsonPath();
        List<String> allStatesAfterPost = jsonAfterPost.getList("name");
        System.out.println("Listedeki eleman sayisi: " + allStatesAfterPost.size());
    }

    @Test
    public void getToken() {
        US_04_Page us04Page = new US_04_Page();
        US_01_Page us01Page = new US_01_Page();
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_url"));
        us01Page.loginAndRegisterButton.click();
        us04Page.signInButton.click();
        us04Page.usernameTextBox.sendKeys("AAbc398");
        us04Page.passwordTextBox.sendKeys("A1b2C3");
        us04Page.submitLoginButton.click();

//        Cookie cookie = Driver.getDriver().manage().getCookieNamed("SESSION_ID");
//        String encodedToken  = cookie.getValue();
//        System.out.println(encodedToken);
//
//        SessionLogs sessionLogs = (SessionLogs) Driver.getDriver().manage().logs();

        JavascriptExecutor jsExecutor = (JavascriptExecutor) Driver.getDriver();
//
//        String itemFromStorage = (String) jsExecutor.executeScript( String.format("return window.localStorage.getItem('%s');", "jhi-authenticationToken"));
//        System.out.println(itemFromStorage);

//        LocalStorage localStorage = new LocalStorage(Driver.getDriver());
//        String token =localStorage.getItemFromLocalStorage("jhi-authenticationToken");
//        System.out.println(token);
        String abc = (String) jsExecutor.executeScript("window.localStorage.getItem('%s');", "jhi-authenticationToken");
        System.out.println(abc);

    }
}
