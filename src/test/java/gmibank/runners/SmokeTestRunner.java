package gmibank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber4.json",
                "junit:target/xml-report/cucumber4.xml"
        },
        features = "src/test/resources/features",
        glue = "gmibank/stepdefinitions",
        tags = "@smoketest",
        dryRun = false
)


public class SmokeTestRunner {
}