@US_27 @SmokeTest
Feature: US_27 System should allow to delete states using api end point

  @TC_2701
  Scenario: TC_2701 Before DELETE request
    Given I send a GET request to REST API URL  "https://www.gmibank.com/api/tp-states/1801"
    Then HTTP Status Code should be "200"
    Then Before delete response format should be "application/json"
    Then id should be "1801"
    Then name should be "ALASKA"

  @TC_2702
  Scenario: TC_2702 check DELETE request
    When I send a DELETE request to REST API URL  "https://www.gmibank.com/api/tp-states/1801"
    Then After delete request HTTP Status Code should be "200"
    Then After delete request response format should be "application/json"
    Then response after delete should contain nothing