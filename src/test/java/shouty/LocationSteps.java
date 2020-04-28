package shouty;

import cucumber.api.java.en.Given;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

public class LocationSteps {

    @Autowired
    private ShoutyDriver shoutyDriver;

    @Given("{word} is at {coordinate}")
    public void user_is_at(String name, Coordinate coordinate) {
        shoutyDriver.shouty.setLocation(name, coordinate);
    }

    @Given("people are located at")
    public void people_are_located_at(List<PersonLocation> locations) {
        for (PersonLocation personLocation : locations) {
            shoutyDriver.shouty.setLocation(personLocation.name, personLocation.getCoordinate());
        }
    }

}
