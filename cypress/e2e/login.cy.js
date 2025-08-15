describe('Página de Login', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#login')

    cy.contains('Login').should('be.visible')

    cy.get('input[placeholder="Digite seu usuário"]').type('admin')

    cy.get('input[placeholder="Digite sua senha"]').type('admin')

    cy.contains('button', 'Entrar').click()
    
  })
})
