/// <reference types="cypress"/>

import landingPage from "./landingPage"

class page{
    constructor(){

    }
    static goTOLandingPage(){
        cy.visit('https://computer-database.herokuapp.com/computers')
        return new landingPage()
    }
}
export default page