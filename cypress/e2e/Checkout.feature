Feature: Checkout

    Scenario: Buy one backpack and one bike light
        Given the user are logged in the website
        When the user add to cart 1 backpack
        And add 1 bike light
        And click in checkout button
        And fill the first name, lastname and postalcode
        And confirm all data in checkout overview
        And finish the transaction
        Then the checkout must be complete and a message "Thank you for your order!" must be visible