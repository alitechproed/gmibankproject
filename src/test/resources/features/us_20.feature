@US_20 @SmokeTest
  Feature: system should allow to read all customers info using api end point

    Background: TC_2001 and TC_2002 background
      Given use api end point  "https://www.gmibank.com/api/tp-customers"
      And get all customers' information as De-Serialization

  @TC_2001
  Scenario: TC_2001 read all customers you created and validate them from your data set
    And find out how many customers are and verify
    And get all the information of the seventh customer
    And verify seventh customers "ssn" is "321-54-9800" and "state" is ""


  @TC_2002
  Scenario: TC_2002 read all customers you created and validate them 1 by 1
    And verify first customer's "firstName" "John"
    And verify second customer's "lastName" "Stone"
    And verify fifth customer's country "UNITED STATES"
    And get last customer's id and verify

