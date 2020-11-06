@US01 @SmokeTest
Feature: US01 tests

  Background : user is gmibank homepage
    Given user enters gmibank homepage
    Then user clicks userEntry icon
    Then user clicks register link


  @tc001
  Scenario: SSN number entry positive test
    Given user enters valid SSN number
    Then user verifies valid SSN number

  @tc002
  Scenario: SSN number entry negative test
    Given user enters invalid SSN number
    Then user verifies invalid SSN number

  @tc003
  Scenario: first name entry box positive test
    Given user enters valid name
    Then user verifies valid first name entry
  @tc004
  Scenario: first name entry box negative test
    Given user enters invalid name
    Then user verifies invalid first name entry
  @tc005
  Scenario: first name entry box positive test
    Given user enters nothing as name
    Then user verifies invalid first name entry

  @tc006
  Scenario: last name entry box positive test
    Given user enters valid last name
    Then user verifies valid last name entry
  @tc007
  Scenario: last name entry box negative test
    Given user enters invalid last name
    Then user verifies invalid last name entry
  @tc008
  Scenario: last name entry box positive test
    Given user enters nothing as last name
    Then user verifies invalid last name entry

  @tc009
  Scenario: Mobile phone number entry positive test
    Given user enters valid Mobile phone number number
    Then user verifies valid Mobile phone number number
  @tc010
  Scenario: Mobile phone number entry negative test
    Given user enters invalid Mobile phone number number
    Then user verifies invalid Mobile phone number number

  @tc011
  Scenario: username test
    Given user enters a valid username
    Then user verifies valid username


  @tc012
  Scenario: email entry positive test
    Given user enters valid email
    Then user verifies valid email
  @tc013
  Scenario: email entry negative test
    Given user enters invalid email
    Then user verifies invalid email

  @tc014
  Scenario: password entry positive test
    Given user enters valid password
    Then user verifies valid password

  @tc015
  Scenario: password entry negative test
    Given user enters invalid password
    Then user verifies invalid password


  @tc016
  Scenario: password matching positive test
    Given user enters valid password to first pasword box
    Then user enters the same pasword to confirmation box
    Then user verifies passwords matched correctly
  @tc017
  Scenario: password entry negative test
    Given user enters valid password to first pasword box
    Then user enters the different pasword to confirmation box
    Then user verifies passwords dont matched correctly

  @tc018
  Scenario: user valid data entry test
    Given user enters valid SSN number
    Given user enters valid name
    Given user enters valid last name
    Given user enters valid Mobile phone number number
    Given user enters a valid username
    Given user enters valid email
    Given user enters valid password
    Then user enters the same pasword to confirmation box
    Then user clicks register button














