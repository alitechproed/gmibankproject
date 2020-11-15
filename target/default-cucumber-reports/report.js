$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/zuhre.feature");
formatter.feature({
  "name": "gmiBank Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    }
  ]
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Go to login page negativePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative  username test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_003"
    }
  ]
});
formatter.step({
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be valid password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Then i should see the error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_004"
    }
  ]
});
formatter.step({
  "name": "User should be valid username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Then I should see the error message1",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative username and password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankTC_005"
    }
  ]
});
formatter.step({
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Then I should see the error message2",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Forget password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankTC_006"
    }
  ]
});
formatter.step({
  "name": "Click on the Did you forget your password?",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "provide email to checkbox",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on the Reset password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see the message reset your password",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "New Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_007"
    }
  ]
});
formatter.step({
  "name": "Click on the You don\u0027t have an account yet? Register a new account",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be see Registration",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});