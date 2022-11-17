const { Given, When, Then } = require("@wdio/cucumber-framework");

// Universal across .feature files
Given("I am on {string} page", async (page) => {
  if (page.localeCompare("add_remove_elements") == 0) {
    await browser.url(`https://the-internet.herokuapp.com/${page}/`);
  } else {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
  }
});

// Add and remove elements feature
When("I click on the Add element button", async () => {
  await $('//*[@id="content"]/div/button').click();
});

Then("A Delete button appears on the page", async () => {
  const elem = await $('//*[@id="elements"]/button');
  await expect(elem).toBeExisting();
  await expect(elem).toHaveTextContaining("Delete");
});

When("I click on the Add element button {int} times", async (times) => {
  for (let i = 0; i <= times; i++) {
    await $('//*[@id="content"]/div/button').click();
  }
});

Then("{int} Delete buttons appear on the page", async (deleteButtons) => {
  for (let i = 1; i <= deleteButtons; i++) {
    const elem = await $(`//*[@id="elements"]/button[${i}]`);
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining("Delete");
  }
});

When("I click on {int} Delete buttons", async (deleteButtons) => {
  for (let i = deleteButtons; i > 0; i--) {
    const elem = await $(`//*[@id="elements"]/button[${i}]`);
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining("Delete");
    await elem.click();
  }
});

Then("{int} Delete buttons are not on the page", async (deleteButtons) => {
  for (let i = deleteButtons; i > 0; i--) {
    const elem = await $(`//*[@id="elements"]/button[${i}]`);
    expect(elem).not.toBeExisting;
  }
});

// Checkboxes feature

When("I click on the {int} box", async (checkbox) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${checkbox}]`);
  await elem.click();
});

Then("The {int} box gets {word}", async (checkbox, action) => {
  const elem = await $(`//*[@id="checkboxes"]/input[${checkbox}]`);
  if (action.localeCompare("ticked") == 0) {
    await expect(elem).toBeSelected();
  } else {
    await expect(elem).not.toBeSelected();
  }
});

// Key presses feature
When("I press {} into the field", async (keyPressed) => {
  const elem = await $("//*[@id='target']");
  await expect(elem).toBeExisting();
  await browser.keys([`${keyPressed}`]);
});

Then("I see {} under the field", async (keyExpected) => {
  const elem = await $("//*[@id='result']");
  await expect(elem).toHaveText(`You entered: ${keyExpected}`);
});

// Hovers page
When("I hover over {int} picture", async (picture) => {
  const elem = await $(`//*[@id='content']/div/div[${picture}]`);
  await expect(elem).toBeExisting();
  await browser.pause(1000);
  await elem.moveTo();
  await browser.pause(1000);
});

Then("I see information popping undeneath {int} picture", async (picture) => {
  const elem = await $(`//*[@id="content"]/div/div[${picture}]/div`);
  await expect(elem).toBeDisplayed();
});

// Login page
When("I login with {word} and {word}", async (username, password) => {
  await $("#username").setValue(username);
  await $("#password").setValue(password);
  await $('button[type="submit"]').click();
});

Then("I should see a flash message saying {string}", async (message) => {
  await expect($("#flash")).toBeExisting();
  await expect($("#flash")).toHaveTextContaining(message);
});
