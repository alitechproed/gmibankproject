@US01 @SmokeTest
Feature: US01 tests

  Background: user is gmibank homepage
    Given user enters gmibank homepage
    Then user clicks userEntry icon
    Then user clicks register link


  @tc001
  Scenario: SSN number entry positive test
    Given user enters valid SSN number "156-56-9548"
    Then user verifies valid SSN number


  @tc002
  Scenario Outline: SSN number entry negative test
    Given user enters invalid SSN number"<invalid SSN>"
    Then user verifies invalid SSN number
    Examples:
      |invalid SSN  |
      |123-45-67819 |
      |854-88-95    |
      |8548895      |
      |8584-88-95   |

  @tc003
  Scenario: first name entry box positive test
    Given user enters valid name "nuri"
    Then user verifies valid first name entry
  @tc004
  Scenario: first name entry box negative test
    Given user enters nothing as name
    Then user verifies invalid first name entry


  @tc005
  Scenario: last name entry box positive test
    Given user enters valid last name "duman"
    Then user verifies valid last name entry
  @tc006
  Scenario: last name entry box negative test
    Given user enters nothing as last name last name
    Then user verifies invalid last name entry



  @tc007
  Scenario: Mobile phone number entry positive test
    Given user enters valid Mobile phone number number"456-956-12356"
    Then user verifies valid Mobile phone number number
  @tc010
  Scenario Outline: Mobile phone number entry negative test
    Given user enters invalid Mobile phone number number"<invalid tel number>"
    Then user verifies invalid Mobile phone number number
    Examples:
      |invalid tel number  |
      |123-45-67819 |
      |854-88-95    |
      |8548895      |
      |8584-88-95   |



  @tc011
  Scenario: username test
    Given user enters a valid username "aliveli"
    Then user verifies valid username


  @tc012
  Scenario: email entry positive test
    Given user enters valid email "aliveli@gmail.com"
    Then user verifies valid email
  @tc013
  Scenario Outline: email entry negative test
    Given user enters invalid email"<invalid email>"
    Then user verifies invalid email
    Examples:
    |invalid email|
    |ali             |
    |aliveli         |
    |ali@             |
    |aliveli@         |
    |ali@gmail        |
    |aliveli@g.        |
    |ali@gmail         |
    |alivelg.com        |



  @tc014
  Scenario Outline: password entry positive test
    Given user enters valid password "<valid password>"
    Then user verifies valid password
    Examples:
    |valid password|
    | 1234        |
    | samet       |
    | sa23gfd     |


  @tc015
  Scenario Outline: password entry negative test
    Given user enters invalid password "<invalid password>"
    Then user verifies invalid password
    Examples:
    |invalid password|
    |ert             |
    |123             |
    |sd2             |
    |34d             |



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
    Given user enters valid SSN number "156-56-9548"
    Given user enters valid name "nuri"
    Given user enters valid last name "duman"
    Given user enters valid Mobile phone number number"456-956-12356"
    Given user enters a valid username "aliveli"
    Given user enters valid email "aliveli@gmail.com"
    Given user enters valid password in both passBoxes
    Then user clicks register button














