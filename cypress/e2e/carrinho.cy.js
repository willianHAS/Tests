describe('Página Carrinho', () => {
  it('Deve buscar um product e adicionar os dois primeiros itens ao carrinho', () => {
    cy.visit('https://qalabautomation.ddns.net/#carrinho-de-compras')

    cy.contains('Carrinho de Compras').should('be.visible')

    cy.get('input[placeholder="Buscar produto..."]').type('Fone Bluetooth')
    cy.contains('button', 'Buscar').click()

    cy.get('.product-card').should('have.length.greaterThan', 0)

    // Seleciona os dois primeiros produtos e adiciona ao carrinho
    cy.get('.product-card').each(($el, index) => {
      if (index < 2) { 
        cy.wrap($el).within(() => {
          cy.contains('button', 'Adicionar ao carrinho').click()
        })
      }
    })
    //Adiciona o CEP e calcula o frete
    cy.get('input[placeholder="Digite o CEP"]').type('85506130')
    cy.contains('button', 'Calcular Frete').click()

    //Adicionar desconto
    cy.get('input[placeholder="MEUDESCONTO10"]').type('MEUDESCONTO10')
    cy.contains('button', 'Aplicar').click()

    //Finalizar carrinho 
    cy.contains('button', 'Finalizar Compra').click()
  })
})
