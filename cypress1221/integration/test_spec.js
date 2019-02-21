describe('DUNIYADATA TEST', function() {
  it('visit home', function() {
      cy.visit('http://test.duniyadata.com')

      cy.contains('Marchés').click()  

      cy.url().should('include', '/marches') 
  })

  
})
