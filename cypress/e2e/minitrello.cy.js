describe('Página Mini Trello', () => {
  it('Deve carregar corretamente e clicar no botão', () => {
    cy.visit('https://qalabautomation.ddns.net/#mini-trello')

    cy.contains('Mini Trello').should('be.visible')

    cy.get('input[placeholder="Nova tarefa..."]').type('Tarefa A')

    cy.contains('button', 'Adicionar').click()

    cy.get('.trello-col-title')
      .contains('A Fazer')
      .parent()
      .find('.trello-card')
      .should('contain.text', 'Tarefa A')

function moverCard(cardSelector, colunaDestinoSelector) {
  cy.get(cardSelector).first().should('be.visible').then($card => {
    cy.get(colunaDestinoSelector).should('exist').then($colunaDestino => {
      const card = $card[0];
      const colunaDestino = $colunaDestino[0];
      const dataTransfer = new DataTransfer();

      card.dispatchEvent(new DragEvent('dragstart', { bubbles: true, cancelable: true, dataTransfer }));
      
      cy.wait(200);
      
      colunaDestino.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer }));
      card.dispatchEvent(new DragEvent('dragend', { bubbles: true, cancelable: true, dataTransfer }));
    });
  });
}

// Mover de "A Fazer" → "Em Progresso"
moverCard('[data-testid^="card-"]', '[data-testid="coluna-Em Progresso"]');

// Mover de "Em Progresso" → "Concluído"
moverCard('[data-testid^="card-"]', '[data-testid="coluna-Concluído"]');

cy.get('[data-testid="coluna-Concluído"] .trello-card')
  .should('contain.text', 'Tarefa A');

  })
})
