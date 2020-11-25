package gmibank.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Countries {

    private int    id;
    private String ssn;
    private String firstName;
    private String lastName;
    private String address;
    private String mobilePhoneNumber;
    private String phoneNumber;
    private String username;
    private String email;
    private String zipCode;
    private String city;
    private String createDate;
    private boolean zelleEnrolled;

    public Country2[] getCountry() {
        return country;
    }

    public void setCountry(Country2[] country) {
        this.country = country;
    }

    Country2[] country;

    private String state;
    private String accounts;


}
