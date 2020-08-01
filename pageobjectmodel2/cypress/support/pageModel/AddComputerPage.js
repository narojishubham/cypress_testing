import { LandingPage } from "./LandingPage"

export class AddComputerPage {

    fillComputerDetails(){
        cy.get('#name').type('hello')
        cy.get('#introduced').type('2020-2-13')
        cy.get('#discountinued').type('2020-12-25')
        cy.get('#company').select('Nokia')
        return this;
    }
 clickCreateComputer(){
     cy.get('.btn.primary').click()
     return new LandingPage()
 }
}