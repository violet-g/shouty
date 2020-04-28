@wip
Feature: Hear Shout

  Shouts have a range of approximately 1000m

  Background:
    Given Lucy is at 0, 0

  @SpecialTest
  Scenario Outline: only hear in-range shouts
    And Sean is at <Sean's-location>
    When Sean shouts
    Then Lucy should hear <what-Lucy-hears>
    Examples: some simple examples
      | Sean's-location | what-Lucy-hears |
      | 0, 900 | Sean |
      | 800, 800 | nothing |

  Scenario: Multiple shouters
    Given people are located at
      | name | x | y |
      | Lucy | 0 | 0 |
      | Sean | 0 | 500 |
      | Oscar | 1100 | 0 |
    When Sean shouts
    And Oscar shouts
    Then Lucy should not hear Oscar
    But Lucy should hear Sean

  Scenario: Own shout is not heard
    When Lucy shouts
    Then Lucy should not hear Lucy

  Scenario: Multiple shouts from one person
    And Sean is at 0, 500
    When Sean shouts
    And Sean shouts
    Then Lucy should hear 2 shouts from Sean
