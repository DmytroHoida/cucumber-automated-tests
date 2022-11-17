@checkboxes
Feature: Tick and untick boxes on the page

        Background:
            Given I am on "checkboxes" page

        Scenario Outline: User tick the first checkbox and untick the second one
             When I click on the <which> box
             Then The <which> box gets <what>
        Examples:
                  | which | what     |
                  | 1     | ticked   |
                  | 2     | unticked |