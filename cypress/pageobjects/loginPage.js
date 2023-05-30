class loginPage {

    insertUsername(username) {
        cy.get('#user-name').type(username)
    }

    insertPassword(password) {
        cy.get('#password').type(password)
    }
  
    clickLoginButton() {
        cy.get('#login-button').click()
    }

    visualizeProducts() {
        cy.url().should('contains', 'inventory.html')
    }

    login() {
        this.insertUsername('standard_user')
        this.insertPassword('secret_sauce')
        this.clickLoginButton()
    }
}

module.exports = new loginPage();