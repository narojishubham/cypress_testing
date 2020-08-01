/// <reference types ="cypress"/>

import { AddComputerPage } from "./AddComputerPage";

export class LandingPage {

    constructor(){
        cy.get('#add').should('be.visible');
    }
    clickAddButton(){
        cy.get('#add').click();
        return new AddComputerPage()
    }
    verifyAddComputerButtonVisible(){
        cy.get('#add').should('be.visible')
    }
    verifyAlertMessage(alert){
        cy.get('.alert-message.warning').should('contain',alert);
        return this;
    }

}