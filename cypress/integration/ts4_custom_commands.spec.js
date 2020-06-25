describe('Create and mark-unmark as favorite', function () {
    it('Sign in', function () {
        cy.SignIn()
    })

    it('Create a post', function () {
        //cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark-unmark as favorite', function () {
        //cy.get('.nav-link').contains('naroji').click()
        cy.get('ul.navbar-nav').children().contains('naroji').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})