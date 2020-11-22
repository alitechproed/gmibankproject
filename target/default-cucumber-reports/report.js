$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/us_22.feature");
formatter.feature({
  "name": "System should allow to read states using api end point",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2201 Read all states you created and validate them from your data set",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2001"
    }
  ]
});
formatter.step({
  "name": "find out how many states are and verify",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.find_out_how_many_states_are_and_verify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify first state is \"Ile-de-France\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_first_state_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify id of Yozgat is (integer) \"19244\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_id_of_Yozgat_is_integer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains \u003cstates\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "states"
      ]
    },
    {
      "cells": [
        "Centre"
      ]
    },
    {
      "cells": [
        "Auvergne"
      ]
    },
    {
      "cells": [
        "Koblenz"
      ]
    },
    {
      "cells": [
        "Virginia"
      ]
    }
  ]
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Centre",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Centre()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Auvergne",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Auvergne()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Koblenz",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Koblenz()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_22 and TC_2002 background",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Use api end point \"https://www.gmibank.com/api/tp-states\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.use_api_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get all states as De-Serialization",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.get_all_states_as_De_Serialization()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_2202 read all states you created and validate them 1 by 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US_22"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@TC_2002"
    }
  ]
});
formatter.step({
  "name": "verify list of the states contains Virginia",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.US_22_Step_Definitions.verify_list_of_the_states_contains_Virginia()"
});
formatter.result({
  "status": "passed"
});
});