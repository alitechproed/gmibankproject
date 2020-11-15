@US_10 @SmokeTest
  Feature: US10 tests

    Background: user anters gmibank homepage then reaches create new costomers link
      Given user enters gmibank homepage
      Then user clicks userEntry icon
      Then user clicks signIn link
      Then user enters admin username "sametyaprak"
      Then user enters admin password "Ankara06"
      Then user clicks signIn button
      And user clicks myOperations link
      And user clicks manageCostomers link
      And user clicks createNewCustomer link


      @tc1001
      Scenario Outline: zipcode positive test
        Given user send data to zipcode box "<zipcode>"
        Then user verifies valid data entry to zipcode box
        Then user signOut
        Examples:
        |zipcode|
        |123456 |
        |asdasd |
        |das455 |
        |4a     |

      @tc1002
      Scenario: zipcode negative test
        Given user send nothing to zipcode box
        Then user verifies invalid zipcode data entry
        Then user signOut




    @tc1003
    Scenario Outline: adress positive test
      Given user send data to adress box "<adress>"
      Then user verifies valid data entry to adress box
      Then user signOut
      Examples:
        |adress|
        |123456 |
        |asdasd |
        |das455 |
        |4a     |

    @tc1004
    Scenario: adress negative test
      Given user send nothing to adress box
      Then user verifies invalid acress data entry
      Then user signOut



    @tc1005
    Scenario Outline: city positive test
      Given user send data to city box "<city>"
      Then user verifies valid data entry to city box
      Then user signOut
      Examples:
        |city|
        |123456 |
        |asdasd |
        |das455 |
        |4a     |

    @tc1006
    Scenario: city negative test
      Given user send nothing to city box
      Then user verifies invalid city data entry
      Then user signOut



    @tc1007
    Scenario: country positive test
      Given user select a country from dropbox
      Then user verifies a country can be selected
      Then user signOut

    @tc1008
    Scenario Outline: state positive test
      Given user send data to state box "<state>"
      Then user verifies valid data entry to state box
      Then user signOut
      Examples:
        |state|
        |123456 |
        |asdasd |
        |das455 |
        |4a     |
