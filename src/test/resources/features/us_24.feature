@us_24
  Feature: us 24 System should allow to create new states using api end point "https://www.gmibank.com/api/tp-states" if not created already"

    @tc_2401
    Scenario: Tc_2401 User can Just create each state 1 by 1 and get all info
      Given  user sent the request  in order to get the data "https://www.gmibank.com/api/tp-states"
      And    user validate the request  of status code 200
      And    user read  all info  of state as deserialiazation


