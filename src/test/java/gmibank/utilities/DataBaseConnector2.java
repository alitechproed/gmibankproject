package gmibank.utilities;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataBaseConnector2 {

        private static final String dbusername = ConfigurationReader.getProperty("username");
        private static final String dbpassword = ConfigurationReader.getProperty("password");
        private static final String connectionUrl = ConfigurationReader.getProperty("db_url");

        private static Connection connection;
        private static Statement statement;
        private static ResultSet resultSet;


        public static ResultSet getResultSet(String query) {

            //Connection connection1 = DriverManager.getConnection(connectionUrl,dbusername,dbpassword);

            try {
                connection = DriverManager.getConnection(connectionUrl, dbusername, dbpassword);
                if (connection != null) {
                    System.out.println("EN: Connected to the database...");
                    System.out.println("TR: Database e baglanildi...");
                } else {
                    System.out.println("EN: Database connection failed");
                    System.out.println("TR: Database baglantisi kurulamadi.");
                }

                statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
                resultSet = statement.executeQuery(query);

            } catch (SQLException sqlEx) {
                System.out.println("SQL Exception:" + sqlEx.getStackTrace());
            }
            return resultSet;
        }


        public static void closeConnection() {
            try {
                if (resultSet != null) { //icten disa dogru kapatmak daha uygundur
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }

            } catch (SQLException ex) {
                ex.printStackTrace();
            }


        }

    //query sonucunu list map seklinde almak icin bu method kullanilabilir
    public static List<Map<String,String>> getQueryAsAListOfMaps(String query) throws SQLException {
        resultSet=getResultSet(query);
        ResultSetMetaData rsdm=resultSet.getMetaData();
        int sizeOfColumns=rsdm.getColumnCount();
        List<String> nameOfColumnsList=new ArrayList<>();
        for (int i=1;i<=rsdm.getColumnCount();i++){
            nameOfColumnsList.add(rsdm.getColumnName(i));
        }
        resultSet.beforeFirst();

        List<Map<String,String>> listOfResultset=new ArrayList<>();
        while (resultSet.next()){
            Map<String,String> mapOfEachRow=new HashMap<>();
            for (int j=0;j<sizeOfColumns;j++)
            {
                mapOfEachRow.put(nameOfColumnsList.get(j),resultSet.getString(nameOfColumnsList.get(j)));
            }
            listOfResultset.add(mapOfEachRow);
        }
        return listOfResultset;
    }
    }

