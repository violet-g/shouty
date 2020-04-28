$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shouty/hear_shout.feature");
formatter.feature({
  "name": "Hear Shout",
  "description": "  Shouts have a range of approximately 1000m",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "only hear in-range shouts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpecialTest"
    }
  ]
});
formatter.step({
  "name": "Sean is at \u003cSean\u0027s-location\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "When "
});
formatter.step({
  "name": "Lucy should hear \u003cwhat-Lucy-hears\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "some simple examples",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Sean\u0027s-location",
        "what-Lucy-hears"
      ]
    },
    {
      "cells": [
        "0, 900",
        "Sean"
      ]
    },
    {
      "cells": [
        "800, 800",
        "nothing"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Lucy is at 0, 0",
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "only hear in-range shouts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SpecialTest"
    }
  ]
});
formatter.step({
  "name": "Sean is at 0, 900",
  "keyword": "And "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "When "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should hear Sean",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoutSteps.lucy_should_hear_sean()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Lucy is at 0, 0",
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "only hear in-range shouts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SpecialTest"
    }
  ]
});
formatter.step({
  "name": "Sean is at 800, 800",
  "keyword": "And "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "When "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should hear nothing",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoutSteps.user_should_hear_nothing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Lucy is at 0, 0",
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiple shouters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "people are located at",
  "rows": [
    {
      "cells": [
        "name",
        "x",
        "y"
      ]
    },
    {
      "cells": [
        "Lucy",
        "0",
        "0"
      ]
    },
    {
      "cells": [
        "Sean",
        "0",
        "500"
      ]
    },
    {
      "cells": [
        "Oscar",
        "1100",
        "0"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.people_are_located_at(PersonLocation\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "When "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Oscar shouts",
  "keyword": "And "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should not hear Oscar",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoutSteps.user_should_not_hear_shouter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should hear Sean",
  "keyword": "But "
});
formatter.match({
  "location": "ShoutSteps.lucy_should_hear_sean()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Lucy is at 0, 0",
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Own shout is not heard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Lucy shouts",
  "keyword": "When "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should not hear Lucy",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoutSteps.user_should_not_hear_shouter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Lucy is at 0, 0",
  "keyword": "Given "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiple shouts from one person",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Sean is at 0, 500",
  "keyword": "And "
});
formatter.match({
  "location": "LocationSteps.user_is_at(String,Coordinate)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "When "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sean shouts",
  "keyword": "And "
});
formatter.match({
  "location": "ShoutSteps.user_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucy should hear 2 shouts from Sean",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoutSteps.lucy_should_hear_shouts_from_sean(String,int,String)"
});
formatter.result({
  "status": "passed"
});
});