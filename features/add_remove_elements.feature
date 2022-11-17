
@add_remove_elements
Feature: Add and remove elements page

    User can first add and then remove elements on the page.

        Background:
            Given I am on "add_remove_elements" page

        @add_one_element
        Scenario: User can add a Delete button
             When I click on the Add element button
             Then A Delete button appears on the page

        @add_several_elements
        Scenario: User can add <n> Delete buttons
             When I click on the Add element button <n> times
             Then <n> Delete buttons appear on the page
        Examples:
                  | n  |
                  | 1  |
                  | 2  |
                  | 3  |
                  | 5  |
                  | 10 |
        
        @add_and_delete_several_elements
        Scenario: User can remove Delete buttons
             When I click on the Add element button <n> times
             * I click on <n> Delete buttons
             Then  <n> Delete buttons are not on the page
        Examples:
                  | n  |
                  | 1  |
                  | 2  |
                  | 3  |
                  | 5  |
                  | 10 |
