
@key_presses
Feature: Page shows what key user has pressed

        Background:
            Given I am on "key_presses" page
        
        Scenario: User enter letters, numbers and special characters
             When I press <keyPressed> into the field
             Then I see <keyExpected> under the field
        Examples:
                  | keyPressed | keyExpected |
                  | V          | V           |
                  | m          | M           |
                  | E          | E           |
                  | D          | D           |
                  | !          | 1           |
                  | @          | 2           |
                  | /          | SLASH       |
                  | 0          | 0           |


