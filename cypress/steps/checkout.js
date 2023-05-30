import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const login = require("../pageobjects/loginPage")
const cart = require("../pageobjects/cartPage")
const inventory = require("../pageobjects/inventoryPage")

Given('the user are logged in the website', () => {
    cy.visit('/');
    login.login()
});

When('the user add to cart 1 backpack', () => {
    inventory.addBackPackToCart()
});

When('add 1 bike light', () => {
    inventory.addBikeLightToCart()
});

When('click in checkout button', () => {
    cart.goToCart()
    cart.checkout()
});

When('fill the first name, lastname and postalcode', () => {
    cart.addAllData('Pedro', 'Duarte', '38408482')
});
 
When('confirm all data in checkout overview', () => {
    cy.get('.summary_subtotal_label').contains('39.98')
    cy.get('.summary_tax_label').contains('3.20')
    cy.get('.summary_info_label.summary_total_label').contains('43.18')
});

When('finish the transaction', () => {
    cart.buttonFinish()
});
 
Then('the checkout must be complete and a message "Thank you for your order!" must be visible', () => {
    cy.get('.complete-header').contains('Thank you for your order!')
});
