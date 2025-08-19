describe('Página de Quiz', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#perguntas-e-respostas')

    cy.contains('Perguntas e Respostas').should('be.visible')

    cy.contains('button', 'Médio').click()

    Cypress._.times(10, () => {
      cy.get('[data-cy="option-1"]').click()
      cy.contains('button', 'Próxima Pergunta').click()
    })

    cy.contains('button', 'Jogar Novamente').click()

  })
})
