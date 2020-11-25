$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_16.feature");
formatter.feature({
  "name": "US16 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC1601 User should have at least 2 accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC1601"
    }
  ]
});
formatter.step({
  "name": "user clicks My Accounts link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_My_Accounts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify Account Type1 \"19669\" can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_verify_Account_Type1_can_be_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify Account Type2 \"19670\" can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_verify_Account_Type2_can_be_seen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC1602 User can select the first account as From dropdown where they receive their money from",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC1602"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the selected account can be seen",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_verify_the_selected_account_can_be_seen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC1603 User can select a balance that they want to proceed with",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC1603"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with index: 2\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.setSelectedByIndex(Select.java:297)\r\n\tat org.openqa.selenium.support.ui.Select.selectByIndex(Select.java:172)\r\n\tat gmibank.stepdefinitions.US_16_Step_Definitions.user_select_first_account_from_From_dropdown_menu_and_click(US_16_Step_Definitions.java:81)\r\n\tat ✽.user select first account from From dropdown menu and click(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_16.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click tab and verify the amount can be seen in Balance",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_click_tab_and_verify_the_amount_can_be_seen_in_Balance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP Pavilion\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d2db248a7f398a645d8a316794828b15\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link(US_10_Step_Definitions.java:21)\r\n\tat ✽.user clicks signIn link(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_16.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1604 User should provide a description for that transfer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC1604"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"transfer between accounts\" to Description and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_send_to_Description_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user enters gmibank homepage then sign in as a customer",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP Pavilion\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d2db248a7f398a645d8a316794828b15\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link(US_10_Step_Definitions.java:21)\r\n\tat ✽.user clicks signIn link(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_16.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters customer username \"aaabbb\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters customer password \"AaaBbb-21\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_enters_customer_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC1605 User can make sure transfer is done successfully validating the message an amount of the transaction\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US16"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@TC1605"
    }
  ]
});
formatter.step({
  "name": "user clicks Transfer Money link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_Transfer_Money_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select first account from From dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_first_account_from_From_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select other account from To dropdown menu and click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_select_other_account_from_To_dropdown_menu_and_click()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"100\" to Balance and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_send_to_Balance_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user send \"transfer between accounts\" to Description and click tab",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_send_to_Description_and_click_tab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Make Transfer link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_click_Make_Transfer_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks customer myOperations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_customer_myOperations_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks My Accounts link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_clicks_My_Accounts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click View Transaction link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_click_View_Transaction_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the transaction is accomplished",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.verify_the_transaction_is_accomplished()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user signOut from customer Website",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_16_Step_Definitions.user_signOut_from_customer_Website()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/us_17.feature");
formatter.feature({
  "name": "US17 tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP Pavilion\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d2db248a7f398a645d8a316794828b15\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link(US_10_Step_Definitions.java:21)\r\n\tat ✽.user clicks signIn link(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_17.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_1701 USER activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc_1701"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to USER",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_change_the_profile_to_USER()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin deactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminDeactivateUSER()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin reactivate USER",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateUSER()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP Pavilion\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d2db248a7f398a645d8a316794828b15\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link(US_10_Step_Definitions.java:21)\r\n\tat ✽.user clicks signIn link(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_17.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_1702 USER information verifying by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc_1702"
    }
  ]
});
formatter.step({
  "name": "admin clicks view buttons",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminClicksViewButtons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin assert all information",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminAssertAllInformation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Sign in\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SV7GREB\u0027, ip: \u0027192.168.2.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP Pavilion\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:55235}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d2db248a7f398a645d8a316794828b15\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Sign in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link(US_10_Step_Definitions.java:21)\r\n\tat ✽.user clicks signIn link(file:///C:/Users/HP%20Pavilion/IdeaProjects/gmibankproject/src/test/resources/features/us_17.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters admin username \"karak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminUsername(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin password \"DJabc21\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersAdminPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks signIn button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks administration link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_administration_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "ADMIN clicks userManagement link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_clicks_userManagement_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "tc_1703 EMPLOYEE activation by ADMIN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_17"
    },
    {
      "name": "@SmokeTest1"
    },
    {
      "name": "@tc_1703"
    }
  ]
});
formatter.step({
  "name": "admin change the profile to EMPLOYEE",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminChangeTheProfileToEMPLOYEE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin deactivate EMPLOYEE",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.admin_deactivate_EMPLOYEE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin reactivate EMPLOYEE",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminReactivateEMPLOYEE()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin signOut",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_17_Step_Definitions.adminSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "user anters gmibank homepage then reaches create new costomers link",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user enters gmibank homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userEntersGmibankHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks userEntry icon",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.userClicksUserEntryIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signIn link",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_10_Step_Definitions.user_clicks_signIn_link()"
});
