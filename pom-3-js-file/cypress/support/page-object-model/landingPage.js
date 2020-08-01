/// <reference types="cypress"/>

import addComputerPage from "./addComputerPage"

class landingPage{

    constructor(){
        cy.get('#add').should('be.visible')
    }
    clickAddButton(){
        cy.get('#add').click()
        return new addComputerPage()
    }
    verifyAddComputerButtonIsVisible(){
        cy.get('#add').should('be.visible')
        return this
    }
    verifyAlertMessage(alert){
        cy.get('.alert-message.warning').contains(alert)
        return this
    }
}
export default landingPage