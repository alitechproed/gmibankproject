@US_21_asilcan
  Feature: US_21_asil System should allow to read all countries info using api end point

    Background: TC_21 and TC_22 common points
      Given   one user enter end point as "https://www.gmibank.com/api/tp-countries"
      And     two user read all information of countries as Deserialization

    @TC_21_asil
    Scenario: Tc_21_asil  Read all countries you created and validate them from your data set
      Then    three user find out all countires and verify
      And     four user verifies the first country whic USA "UNITED STATES" is
      And     five user verifies the last country if is "Denmark"
      Then    six user verifies  the last id 18930

    @TC_22_asil
    Scenario Outline: Read all customers you created and validate them 1 by 1
      And     seven user validate first five countries name "<countries>"
      Then    eigth user validate the states if are null or not ""

      Examples:
      |countries|
      |UNITED STATES|
      |CANADA       |
      |MEXICO       |
      |GERMANY      |
      |UNITED KINGDOM|