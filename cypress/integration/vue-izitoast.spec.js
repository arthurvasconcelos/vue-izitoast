/// <reference types="Cypress" />

context('Vue Izitoast.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })

  it('Should show toast after click and then be vanished after x amount of time.', () => {
    cy.get('#how-much-timeout')
      .clear()
      .type(1000)

    cy.get('.test-custom')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'this is a custom toast message')
      .wait(3000)
      .should('not.exist')  
  })

  it('Should show info toast.', () => {
    cy.get('.test-info')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Info Toast')
      .get('.iziToast-icon')
      .should('have.class', 'ico-info')
  })

  it('Should show success toast.', () => {
    cy.get('.test-success')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Success Toast')
      .get('.iziToast-icon')
      .should('have.class', 'ico-success')
  })

  it('Should show warning toast.', () => {
    cy.get('.test-warning')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Warning Toast')
      .get('.iziToast-icon')
      .should('have.class', 'ico-warning')
  })

  it('Should show error toast.', () => {
    cy.get('.test-error')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Error Toast')
      .get('.iziToast-icon')
      .should('have.class', 'ico-error')
  })

  it('Should show question toast.', () => {
    cy.get('.test-question')
      .click()

    cy.get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Question Toast')
      .get('.iziToast-icon')
      .should('have.class', 'ico-question')
  })

  it('Should show toast for each available position.', () => {
    cy.get('.test-bottomRight')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: bottomRight')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

    cy.get('.test-bottomLeft')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: bottomLeft')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

      cy.get('.test-topRight')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: topRight')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

      cy.get('.test-topLeft')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: topLeft')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

      cy.get('.test-topCenter')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: topCenter')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

      cy.get('.test-bottomCenter')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: bottomCenter')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')

      cy.get('.test-center')
      .click()
      .get('.iziToast')
      .should('have.css', 'display', 'inline-block')
      .should('contain.text', 'Toast positioned to: center')
      .wait(1000)
      .get('.iziToast-close')
      .click()
      .get('.iziToast')
      .should('not.exist')
  })
})
