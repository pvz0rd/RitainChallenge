class cartPage {

    checkout() {
        cy.get('#checkout').click()
    }

    goToCart() {
        cy.get('#shopping_cart_container').click()
    }
  
    addFirstName(firstName) {
        cy.get('#first-name').type(firstName)
    }

    addLastName(lastName) {
        cy.get('#last-name').type(lastName)
    }

    addPostalCode(postalCode) {
        cy.get('#postal-code').type(postalCode)
    }

    buttonContinue() {
        cy.get('#continue').click()
    }

    buttonFinish() {
        cy.get('#finish').click()
    }

    addAllData(firstName, lastName, postalCode) {
        this.addFirstName(firstName)
        this.addLastName(lastName)
        this.addPostalCode(postalCode)
        this.buttonContinue()
    }
}

module.exports = new cartPage();