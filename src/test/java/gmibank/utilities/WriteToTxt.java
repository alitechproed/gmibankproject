package gmibank.utilities;
import gmibank.pojos.Customer;
import gmibank.pojos.States;
import io.restassured.internal.support.FileReader;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WriteToTxt {
    public static void saveDataInFile(String fileName, Customer[] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0;i<customers.length;i++)
                writer.append(customers[i].getSsn()+",\n");
            writer.close();
        } catch(Exception e){
        }
    }
    public static void saveDataInFileWithSSN(String fileName, Customer customer)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            writer.append(customer.getSsn());
            writer.close();
        } catch(Exception e){
        }
    }
    public static void saveDataInFileWithUserInfo(String fileName, Customer customer)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            writer.append(customer.getUser().getFirstName());
            writer.close();
        } catch(Exception e){
        }
    }
    public static void saveDataInFileWithAllCustomerInfo(String fileName, Customer[] customers)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i =0; i<customers.length;i++){
                writer.append(customers[i].getFirstName()+" , "+customers[i].getLastName()+"\n");
                if(customers[i].getUser() != null)
                    writer.append(customers[i].getUser().getFirstName());
                if(customers[i].getCountry() != null)
                    writer.append(customers[i].getCountry().getName());
            }
            writer.close();
        } catch(Exception e){
        }
    }
    public static void saveAllStates(String fileName, States[] states)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0; i<states.length; i++)
                writer.append(states[i].getName()+" , "+states[i].getId()+"\n");
            writer.close();
        } catch(Exception e){
        }
    }
    public static void saveAllStates2(String fileName, States[] states)  {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i=0; i<states.length; i++)
                writer.append(states[i].getName()+" , "+states[i].getId()+"\n");
            writer.close();
        } catch(Exception e){
        }
    }

    //ozkan beyin yorumlari

    public static void saveDataInFileWithPojo(String fileName, List<Customer> customer) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            for (int i = 0; i <customer.size() ; i++) {
                writer.append(customer.get(i).getFirstName() + " , " + customer.get(i).getLastName() + " , " + customer.get(i).getSsn() + "\n");
            }
            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithJsonListString(String fileName, List<String> json) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            writer.append( json + "\n");

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithJsonListMap(String fileName, List<Map<String,Object>> json) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i <json.size() ; i++) {
                writer.append(json.get(i).get("firstName") + " , " + json.get(i).get("LastName") + " , " + json.get(i).get("email") + "\n");
            }

            writer.close();
        } catch (Exception e) {

        }
    }

    public static void saveDataInFileWithListMapForDB(String fileName, List<Map<String,String>> queryDataListMap) {
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));

            for (int i = 0; i <queryDataListMap.size() ; i++) {
                writer.append(queryDataListMap.get(i).get("first_name") + " , " + queryDataListMap.get(i).get("last_name") + " , " + queryDataListMap.get(i).get("login") + "\n");
            }

            writer.close();
        } catch (Exception e) {

        }
    }

}
