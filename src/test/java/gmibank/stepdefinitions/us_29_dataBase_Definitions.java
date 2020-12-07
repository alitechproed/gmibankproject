package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.DataBaseConnector2;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class us_29_dataBase_Definitions {

    String userDataQuery="SELECT * FROM "+ ConfigurationReader.getProperty("usersTableName");
    ResultSet resultSetUser;
    List<String>  userFirstNameList=new ArrayList<>();

    String countriesDataQueries="SELECT * FROM "+ConfigurationReader.getProperty("countriesTableName");
    ResultSet resultSetCountry;
    List<String>  countryList=new ArrayList<>();

    String stateDataQuery="SELECT * FROM "+ConfigurationReader.getProperty("statesTableName");
    ResultSet resultSetState;
    List<String>  stateList=new ArrayList<>();


    @Given("user  connecting GMI database")
    public void user_connecting_GMI_database() {
        resultSetUser= DataBaseConnector2.getResultSet(userDataQuery);  // Yukarida ki insantace  varilable get olarak doldurulmali

        resultSetCountry=DataBaseConnector2.getResultSet(countriesDataQueries);

        resultSetState=DataBaseConnector2.getResultSet(stateDataQuery);


    }

    @Given("user read all user data from database")
    public void user_read_all_user_data_from_database() throws SQLException {
       ResultSetMetaData userMetaData=resultSetUser.getMetaData();
       int coloumtCount=userMetaData.getColumnCount();  // column sayisi
        System.out.println(coloumtCount);

        for (int i=1; i<=coloumtCount; i++){

            System.out.println(userMetaData.getColumnName(i));
        }


        while (resultSetUser.next()){

            String firstname=resultSetUser.getString("first_name");

            userFirstNameList.add(firstname);

        }

        System.out.println(userFirstNameList);




    }

    @Then("user validate all user data")
    public void user_validate_all_user_data() throws SQLException {
        String userFirstNameQuery="SELECT first_name FROM "+ConfigurationReader.getProperty("usersTableName");
        resultSetUser=DataBaseConnector2.getResultSet(userFirstNameQuery);

        List<String> actualFirstNameList=new ArrayList<>();

        while (resultSetUser.next()){

            String firstName=resultSetUser.getString(1);

            actualFirstNameList.add(firstName);
        }


        System.out.println(actualFirstNameList);

        Assert.assertEquals(actualFirstNameList,userFirstNameList);
    }

    @Given("user read all countries infos from database")
    public void user_read_all_countries_infos_from_database() throws SQLException {
       ResultSetMetaData countriesMetaData=resultSetCountry.getMetaData();

       int columnCount=countriesMetaData.getColumnCount();
        System.out.println(columnCount);

       for (int i=1; i<=columnCount; i++){

           System.out.println(countriesMetaData.getColumnName(i));


       }

       while (resultSetCountry.next()){

           String country=resultSetCountry.getString("name");
           countryList.add(country);
       }

        System.out.println(countryList+" demirkan ");


    }

    @Then("user validate all countries infos")
    public void user_validate_all_countries_infos() throws SQLException {

        String countryNameQuery="SELECT name From "+ConfigurationReader.getProperty("countriesTableName");
        resultSetCountry=DataBaseConnector2.getResultSet(countryNameQuery);

        List<String> actualCountry=new ArrayList<>();

        while (resultSetCountry.next()){

            String countryName=resultSetCountry.getString("name");

            actualCountry.add(countryName);

        }

        Assert.assertEquals(countryList,actualCountry);
    }

    @Given("user read all states of related to USA from database")
    public void user_read_all_states_of_related_to_USA_from_database() throws SQLException {

        ResultSetMetaData stateMetaData=resultSetState.getMetaData();

        int stateColumnCount=stateMetaData.getColumnCount();

        System.out.println(stateColumnCount);

        for (int i=1; i<=stateColumnCount; i++){

            System.out.println(stateMetaData.getColumnName(i));

        }

        while (resultSetState.next()){

            String states=resultSetState.getString("name");
            stateList.add(states);
        }

        System.out.println(stateList);




    }

    @Then("user validate all states of related to USA")
    public void user_validate_all_states_of_related_to_USA() throws SQLException {

//        String stateName="SELECT * FROM tp_state ";
//
//        resultSetState=DataBaseConnector2.getResultSet(stateName);

        String statesDataQuery="SELECT * FROM tp_state WHERE name='Washington'";

        resultSetState=DataBaseConnector2.getResultSet(statesDataQuery);

        List<String>  actualStateList=new ArrayList<>();

        while (resultSetState.next()){

            String states=resultSetState.getString("name");

            actualStateList.add(states);


        }



        Assert.assertTrue(stateList.containsAll(actualStateList));
    }

}
