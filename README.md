# Automated tests using Cucumber Framework and JavaScript

- Scenarios cover basic functionality of the the following pages:

1. [Add and remove elements](https://the-internet.herokuapp.com/add_remove_elements/)
2. [Checkboxes](https://the-internet.herokuapp.com/checkboxes)
3. [Key presses](https://the-internet.herokuapp.com/key_presses)
4. [Login page](https://the-internet.herokuapp.com/login)
5. [Hovers](https://the-internet.herokuapp.com/hovers)

- Scenarios can be found in the files with .feature extension which are located in `/features/` directory
- Tests have proper Gherkin syntax with a `Given-When-Then` structure
- Tests can also be run using specific tags
- Step definitions can be found in `/features/step-definitions/` directory in `steps.js`

## Tests

- Clone the repository to your local machine and make sure you have `yarn` and `Google Chrome` browser installed on your computer
- Run `yarn install` to install all the dependencies
- Run `yarn test` to run all the tests or `yarn test_+` name of a chosen feature file to run specific tests
