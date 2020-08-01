/// <reference types="cypress" />

import { LandingPage } from "./LandingPage"

export class Page {

    gotoLandingPage (){
        cy.visit('https://computer-database.herokuapp.com/computers')
        return new LandingPage()
    }
}