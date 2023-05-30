class inventoryPage {

    addBackPackToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }

    addBikeLightToCart() {
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
    }
  
    addBoltShirtToCart() {
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    }

    addFleeceJacketToCart() {
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    }

    addOnesieToCart() {
        cy.get('#add-to-cart-sauce-labs-onesie').click()
    }

    addRedShirtToCart() {
        cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click()
    }
}

module.exports = new inventoryPage();