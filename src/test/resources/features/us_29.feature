@US_29  @SmokeTest
Feature: user tests create user page with database validation

  Background:
    Given user  connecting GMI database

  @TC_29_01
  Scenario: All users' information must be obtained database and verified

    And user read all user data from database
    Then user validate all user data

  @TC_29_02
  Scenario: All countries' info should be retrieved by database and validated

    And user read all countries infos from database
    Then user validate all countries infos

  @TC_29_03
  Scenario: All states should related to USA should be retrieved by database and validated
    And  user read all states of related to USA from database
    Then  user validate all states of related to USA