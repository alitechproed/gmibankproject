@US_26 @SmokeTest
Feature: US_26 System should allow to update countries using api end point
          "https://www.gmibank.com/api/tp-countries"

  @TC_2601
  Scenario: TC_2601 User can just update each country 1 by 1
    Given Use api end point  "https://www.gmibank.com/api/tp-countries/"
    And   User finds out the size of the country list
    Then  User update the countries
    Then User verify if the countries were updated