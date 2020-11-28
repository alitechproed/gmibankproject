package gmibank.pojos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.ToStringBuilder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "id",
        "firstName",
        "lastName",
        "middleInitial",
        "email",
        "mobilePhoneNumber",
        "phoneNumber",
        "zipCode",
        "address",
        "city",
        "ssn",
        "createDate",
        "zelleEnrolled",
        "country",
        "state",
        "user",
        "accounts"
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class Customer {

    @JsonProperty("id")
    private Integer id;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("middleInitial")
    private String middleInitial;
    @JsonProperty("email")
    private String email;
    @JsonProperty("mobilePhoneNumber")
    private String mobilePhoneNumber;
    @JsonProperty("phoneNumber")
    private String phoneNumber;
    @JsonProperty("zipCode")
    private String zipCode;
    @JsonProperty("address")
    private String address;
    @JsonProperty("city")
    private String city;
    @JsonProperty("ssn")
    private String ssn;
    @JsonProperty("createDate")
    private String createDate;
    @JsonProperty("zelleEnrolled")
    private Boolean zelleEnrolled;
    @JsonProperty("country")
    private Country country;
    @JsonProperty("state")
    private String state;
    @JsonProperty("user")
    private User user;
    @JsonProperty("accounts")
    private Object accounts;

    /**
     * No args constructor for use in serialization
     *
     */
    public Customer() {
    }

    /**
     *
     * @param lastName
     * @param mobilePhoneNumber
     * @param zipCode
     * @param country
     * @param address
     * @param city
     * @param zelleEnrolled
     * @param ssn
     * @param firstName
     * @param middleInitial
     * @param phoneNumber
     * @param id
     * @param state
     * @param accounts
     * @param user
     * @param email
     * @param createDate
     */
    public Customer(Integer id, String firstName, String lastName, String middleInitial, String email, String mobilePhoneNumber, String phoneNumber, String zipCode, String address, String city, String ssn, String createDate, Boolean zelleEnrolled, Country country, String state, User user, Object accounts) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.email = email;
        this.mobilePhoneNumber = mobilePhoneNumber;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.address = address;
        this.city = city;
        this.ssn = ssn;
        this.createDate = createDate;
        this.zelleEnrolled = zelleEnrolled;
        this.country = country;
        this.state = state;
        this.user = user;
        this.accounts = accounts;
    }

    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Integer id) {
        this.id = id;
    }

    @JsonProperty("firstName")
    public String getFirstName() {
        return firstName;
    }

    @JsonProperty("firstName")
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @JsonProperty("lastName")
    public String getLastName() {
        return lastName;
    }

    @JsonProperty("lastName")
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @JsonProperty("middleInitial")
    public String getMiddleInitial() {
        return middleInitial;
    }

    @JsonProperty("middleInitial")
    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    @JsonProperty("email")
    public String getEmail() {
        return email;
    }

    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }

    @JsonProperty("mobilePhoneNumber")
    public String getMobilePhoneNumber() {
        return mobilePhoneNumber;
    }

    @JsonProperty("mobilePhoneNumber")
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
    }

    @JsonProperty("phoneNumber")
    public String getPhoneNumber() {
        return phoneNumber;
    }

    @JsonProperty("phoneNumber")
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @JsonProperty("zipCode")
    public String getZipCode() {
        return zipCode;
    }

    @JsonProperty("zipCode")
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    @JsonProperty("address")
    public String getAddress() {
        return address;
    }

    @JsonProperty("address")
    public void setAddress(String address) {
        this.address = address;
    }

    @JsonProperty("city")
    public String getCity() {
        return city;
    }

    @JsonProperty("city")
    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty("ssn")
    public String getSsn() {
        return ssn;
    }

    @JsonProperty("ssn")
    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    @JsonProperty("createDate")
    public String getCreateDate() {
        return createDate;
    }

    @JsonProperty("createDate")
    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    @JsonProperty("zelleEnrolled")
    public Boolean getZelleEnrolled() {
        return zelleEnrolled;
    }

    @JsonProperty("zelleEnrolled")
    public void setZelleEnrolled(Boolean zelleEnrolled) {
        this.zelleEnrolled = zelleEnrolled;
    }

    @JsonProperty("country")
    public Country getCountry() {
        return country;
    }

    @JsonProperty("country")
    public void setCountry(Country country) {
        this.country = country;
    }

    @JsonProperty("state")
    public String getState() {
        return state;
    }

    @JsonProperty("state")
    public void setState(String state) {
        this.state = state;
    }

    @JsonProperty("user")
    public User getUser() {
        return user;
    }

    @JsonProperty("user")
    public void setUser(User user) {
        this.user = user;
    }

    @JsonProperty("accounts")
    public Object getAccounts() {
        return accounts;
    }

    @JsonProperty("accounts")
    public void setAccounts(Object accounts) {
        this.accounts = accounts;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", id).append("firstName", firstName).append("lastName", lastName).append("middleInitial", middleInitial).append("email", email).append("mobilePhoneNumber", mobilePhoneNumber).append("phoneNumber", phoneNumber).append("zipCode", zipCode).append("address", address).append("city", city).append("ssn", ssn).append("createDate", createDate).append("zelleEnrolled", zelleEnrolled).append("country", country).append("state", state).append("user", user).append("accounts", accounts).toString();
    }

}