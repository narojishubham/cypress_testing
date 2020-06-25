describe('test', function(){
    it('login', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('shubhamnaroji@gmail.com')
        cy.get('input[type="password"]').type('shubham1822')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})