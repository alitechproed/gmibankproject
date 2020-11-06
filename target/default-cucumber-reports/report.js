$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US01.feature");
formatter.feature({
  "name": "US01 tests",
  "description": "  Background : user is gmibank homepage\n    Given user enters gmibank homepage\n    Then user clicks userEntry icon\n    Then user clicks register link",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "name": "SSN number entry positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc001"
    }
  ]
});
formatter.step({
  "name": "user enters valid SSN number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_SSN_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ssn\"}\n  (Session info: chrome\u003d86.0.4240.183)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMET-PC\u0027, ip: \u0027192.168.2.33\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\samet\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49664}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1a772c8037cdd7aceffefdaa8e116d67\n*** Element info: {Using\u003did, value\u003dssn}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_SSN_number(US01StepDefinitions.java:35)\r\n\tat ✽.user enters valid SSN number(file:///C:/Users/samet/IdeaProjects/gmibankproject/src/test/resources/features/US01.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verifies valid SSN number",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_SSN_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "SSN number entry negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc002"
    }
  ]
});
formatter.step({
  "name": "user enters invalid SSN number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_SSN_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid SSN number",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_SSN_number()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "first name entry box positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc003"
    }
  ]
});
formatter.step({
  "name": "user enters valid name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid first name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_first_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "first name entry box negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc004"
    }
  ]
});
formatter.step({
  "name": "user enters invalid name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid first name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_first_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "first name entry box positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc005"
    }
  ]
});
formatter.step({
  "name": "user enters nothing as name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_nothing_as_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid first name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_first_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "last name entry box positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc006"
    }
  ]
});
formatter.step({
  "name": "user enters valid last name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid last name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_last_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "last name entry box negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc007"
    }
  ]
});
formatter.step({
  "name": "user enters invalid last name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid last name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_last_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "last name entry box positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc008"
    }
  ]
});
formatter.step({
  "name": "user enters nothing as last name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_nothing_as_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid last name entry",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_last_name_entry()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile phone number entry positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc009"
    }
  ]
});
formatter.step({
  "name": "user enters valid Mobile phone number number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_Mobile_phone_number_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid Mobile phone number number",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_Mobile_phone_number_number()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile phone number entry negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc010"
    }
  ]
});
formatter.step({
  "name": "user enters invalid Mobile phone number number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_Mobile_phone_number_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid Mobile phone number number",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_Mobile_phone_number_number()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "username test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc011"
    }
  ]
});
formatter.step({
  "name": "user enters a valid username",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_a_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid username",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "email entry positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc012"
    }
  ]
});
formatter.step({
  "name": "user enters valid email",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid email",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "email entry negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc013"
    }
  ]
});
formatter.step({
  "name": "user enters invalid email",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid email",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_email()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "password entry positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc014"
    }
  ]
});
formatter.step({
  "name": "user enters valid password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "password entry negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc015"
    }
  ]
});
formatter.step({
  "name": "user enters invalid password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies invalid password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "password matching positive test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc016"
    }
  ]
});
formatter.step({
  "name": "user enters valid password to first pasword box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_password_to_first_pasword_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the same pasword to confirmation box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_the_same_pasword_to_confirmation_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies passwords matched correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_passwords_matched_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "password entry negative test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc017"
    }
  ]
});
formatter.step({
  "name": "user enters valid password to first pasword box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_password_to_first_pasword_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the different pasword to confirmation box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_the_different_pasword_to_confirmation_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies passwords dont matched correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_verifies_passwords_dont_matched_correctly()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user valid data entry test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@tc018"
    }
  ]
});
formatter.step({
  "name": "user enters valid SSN number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_SSN_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ssn\"}\n  (Session info: chrome\u003d86.0.4240.183)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAMET-PC\u0027, ip: \u0027192.168.2.33\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_272\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\samet\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49664}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1a772c8037cdd7aceffefdaa8e116d67\n*** Element info: {Using\u003did, value\u003dssn}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_SSN_number(US01StepDefinitions.java:35)\r\n\tat ✽.user enters valid SSN number(file:///C:/Users/samet/IdeaProjects/gmibankproject/src/test/resources/features/US01.feature:94)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters valid name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid last name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid Mobile phone number number",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_Mobile_phone_number_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a valid username",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_a_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid email",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the same pasword to confirmation box",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_enters_the_same_pasword_to_confirmation_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks register button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US01StepDefinitions.user_clicks_register_button()"
});
formatter.result({
  "status": "skipped"
});
});