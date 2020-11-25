@US_20 @SmokeTest
  Feature: system should allow to read all customers info using api end point

    Background: TC_2001 and TC_2002 background
      Given use api end point  "https://www.gmibank.com/api/tp-customers"
      And get all customers' information as De-Serialization

  @TC_2001
  Scenario: TC_2001 read all customers you created and validate them from your data set
    And find out how many customers are and verify

  @TC_2002
  Scenario: TC_2002 read all customers you created and validate them 1 by 1
    And verify first customer's "firstName" "emre"
    And verify second customer's "lastName" "North"
    And verify fifth customer's "UNITED STATES"
    And get last customer's id and verify

