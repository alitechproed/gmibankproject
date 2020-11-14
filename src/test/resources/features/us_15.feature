@US015 @SmokeTests
Feature: System should allow user to manage their account

  Background: user anters gmibank homepage
    Given user enters gmibank homepage
    Then user clicks userEntry icon
    Then user clicks signIn link
    Then user enters admin username "vivi"
    Then user enters admin password "Betul2015."
    Then user clicks signIn button

  @tc1501
  Scenario: User should see all account types and balace populated
    Given user clicks myOperations link
    Given user clicks manage accounts
    Then can user see all account types and balace populated



  @tc1502
  Scenario: User can view transaction
    Given user clicks myOperations link
    Given user clicks manage accounts
    Then can user see all transaction