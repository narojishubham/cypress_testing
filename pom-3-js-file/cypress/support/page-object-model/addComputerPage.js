const { default: landingPage } = require("./landingPage")

class addComputerPage{
    constructor(){
        cy.get('.btn.primary').should('be.visible')
    }
    fillDetails(){
        cy.get('#name').type('test')
        cy.get('#introduced').type('2020-02-03')
        cy.get('#discontinued').type('2021-05-06')
        cy.get('#company').select('Samsung Electronics')
        return this
    }
    clickCreateComputer(){
        cy.get('.btn.primary').click()
        return this
    }
}
export default addComputerPage