describe('Blog edit journeys', () => {
  it('should be able to create a new post', () => {
    cy.visit('/blog')

    cy.get('[data-testid="blog-post-create-button"]').should('exist').click()
    cy.location('pathname').should('eq', '/blog/create')

    cy.get('#title').type('New post title')
    cy.get('#content').type('<h1>New post content</h1><br /><br /><p>Some content</p><br /><br /><p>Some more content</p>')
    cy.get('[data-testid="button-save-post"]').should('exist').click()
    cy.location('pathname').should('contain', '/blog/read')
  })

  it('should be able to edit a post', () => {
    cy.visit('/blog')

    cy.get('[data-testid="blog-post-item"]').should('exist').first().should('contain.html', 'React Canaries').find('a').click()
    cy.get('[data-testid="edit-post-button"]').should('exist').click()

    cy.get('#title').clear()
    cy.get('#title').type('Edited post title')
    cy.get('#content').clear()
    cy.get('#content').type('<h1>Edited post content</h1><br /><br /><p>Some content</p><br /><br /><p>Some more content</p>')
    cy.get('[data-testid="button-save-post"]').should('exist').click()
    cy.location('pathname').should('contain', '/blog/read')

    cy.get('[data-testid="post-title"]').should('contain.text', 'Edited post title')
    cy.get('[data-testid="post-content"]').should('contain.text', 'Edited post content')
  })
})
