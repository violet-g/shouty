package shouty;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("cucumber-glue")
public class ShoutyDriver {
    public final Shouty shouty = new Shouty();

    public void shout(String shouter, String shout) {
        shouty.shout(shouter, shout);
    }

}
