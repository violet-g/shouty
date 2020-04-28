package shouty;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ShoutyHooks {

    @Before(value = "@SpecialTest", order = 1)
    public void hello() {
        System.out.println("Hello");
    }

    @Before(value = {"@SpecialTest", "@wip"}, order = 2)
    public void helloYou() {
        System.out.println("You");
    }

    @After(value = "@SpecialTest")
    public void goodbye() {
        System.out.println("Goodbye");
    }
}
