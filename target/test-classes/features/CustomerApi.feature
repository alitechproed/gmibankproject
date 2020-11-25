@AllCustomerInfo
  Feature: Validate all customers info


    @api
    Scenario: Read all customers
      Given users sets all response using api and en point "https://www.gmibank.com/api/tp-customers "
      And   user deserializes country data as json to java pojo
      Then  user validates the date