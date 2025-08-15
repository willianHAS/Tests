describe('Página de Tarefas', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#lista-de-tarefas')

    cy.contains('Lista de Tarefas').should('be.visible')

    cy.get('input[placeholder="Digite uma tarefa..."]').type('Tarefa 1')

    cy.contains('button', 'Adicionar').click()
    
  })
})
