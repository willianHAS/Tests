describe('Página de Calculadora', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#calculadora')

    cy.contains('Calculadora').should('be.visible')

    cy.contains('button', '7').click()

    cy.contains('button', '+').click()

    cy.contains('button', '5').click()

    cy.contains('button', '-').click()

    cy.contains('button', '5').click()

    cy.contains('button', '-').click()

    cy.contains('button', '2').click()

    cy.contains('button', '=').click()

    cy.get('.btn-limpar').click()

    cy.contains('button', '2').click()

    cy.contains('button', '-').click()

    cy.contains('button', '2').click()

    cy.contains('button', '2').click()

    cy.contains('button', '+').click()

    cy.contains('button', '5').click()

    cy.get('.btn-del').click()

    cy.contains('button', '6').click()

    cy.contains('button', '2').click()

    cy.contains('button', '=').click() 
  
  })
})
