package gmibank.stepdefinitions;

import gmibank.utilities.DatabaseConnector;
import org.junit.Test;

import java.sql.ResultSet;

public class DataBaseDeneme {

    @Test
    public void getUserData() {
        String customerData =   "SELECT * " +
                                "FROM public.tp_customer";

        String states = "SELECT * " +
                        "FROM public.tp_states";
        ResultSet resultSet =  DatabaseConnector.getResultSet(customerData);

        try {
            while (resultSet.next()) {
                String firstname = resultSet.getString("first_name");
//                System.out.println(firstname);

                System.out.println(firstname);


//                System.out.println(firstname);
//                System.out.println(customer.getRow() + ". " + firstname + " " + customer.wasNull());
//                System.out.println(customer.findColumn("SSN"));
            }
        } catch (Exception e) {

        }

        DatabaseConnector.closeConnection();
    }
}
