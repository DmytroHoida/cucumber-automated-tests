@hovers
Feature: Additional information is shown underneath the pictures when user hovers over them

        Scenario:
            Given I am on "hovers" page
             When I hover over <which> picture
             Then I see information popping undeneath <which> picture
        Examples:
                  | which |
                  | 1     |
                  | 2     |
                  | 3     |
            

