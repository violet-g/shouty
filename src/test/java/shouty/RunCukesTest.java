package shouty;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, plugin = {"pretty", "html:target/cucumber", "rerun:target/rerun.txt", "json:target/cucumber.json", "io.cucumber.pro.JsonReporter"}, snippets = SnippetType.CAMELCASE, tags = "@wip")
public class RunCukesTest {
  // this is the adapter/bridge code
  // between cucumber jvm and junit
  // you do not need to edit this
}
