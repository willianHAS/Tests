describe('Página de Cadastro de Usuário', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#cadastro-usuario')

    cy.contains('Cadastro de Usuário').should('be.visible')

    cy.get('#nome-input').type('Willian Marchiori')

    cy.get('#email-input').type('seu_email@email.com')

    cy.get('#cpf-input').type('123.456.789-00')

    cy.get('#telefone-input').type('123456789')

    cy.get('#data-nascimento-input').type('2000-01-01', { force: true })

    cy.get('#sexo-select').select('Masculino')

    cy.get('#cargo-input').type('Analista')

    cy.contains('button', 'Salvar').click()
    
  })
})
