import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login = require("../pageobjects/loginPage")

Given('the user need to login', () => {
    cy.visit('/');
});

When('i put the username {string}', (username) => {
    login.insertUsername(username);
});

When('put password {string}', (password) => {
   login.insertPassword(password)
});

When('click in login button', () => {
    login.clickLoginButton()
 });
 

Then('the user should login', () => {
    login.visualizeProducts();
});