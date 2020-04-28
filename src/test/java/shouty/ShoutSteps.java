package shouty;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import static java.util.Collections.emptyMap;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;


public class ShoutSteps {
    private static final String ARBITRARY_MESSAGE = "Hello, world";

    @Autowired
    private ShoutyDriver shoutyDriver;

    @When("{word} shouts")
    public void user_shouts(String name) {
        shoutyDriver.shout(name, ARBITRARY_MESSAGE);
    }

    @Then("{word} should not hear {word}")
    public void user_should_not_hear_shouter(String listener, String shouter) {
        assertFalse(shoutyDriver.shouty.getShoutsHeardBy(listener).containsKey(shouter));
    }

    @Then("Lucy should hear Sean")
    public void lucy_should_hear_sean() {
        assertTrue(shoutyDriver.shouty.getShoutsHeardBy("Lucy").containsKey("Sean"));
    }

    @Then("{word} should hear nothing")
    public void user_should_hear_nothing(String name) {
        assertEquals(emptyMap(), shoutyDriver.shouty.getShoutsHeardBy(name));
    }

    @Then("{word} should hear {int} shouts from {word}")
    public void lucy_should_hear_shouts_from_sean(String listener, int expectedNumShouts, String shouter) {
        List<String> shoutsHeardFromShouter = shoutyDriver.shouty.getShoutsHeardBy(listener).get(shouter);
        assertEquals(expectedNumShouts, shoutsHeardFromShouter.size());
    }
}
