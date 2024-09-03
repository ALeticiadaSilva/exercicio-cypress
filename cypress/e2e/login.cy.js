// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('CT001 - Validando Texto Login', () => {
    cy.get("h3").should('be.visible')
    .and('have.text', 'Login')
  })

  it('CT002 - Validar a url', () => {
    cy.url().should("eq", `${Cypress.config("baseUrl")}/login`)
  })

  it('CT003 - Validar o campo email', () => {
    cy.get("#email").should('be.visible')
  })

  it('CT004 - Validar o campo password', () => {
    cy.get("#password").should('be.visible')
  })

  it('CT005 - Login com e-mail e senha inválidos', () =>{
    cy.get("#email").type("teste@gmail.com.br")
    cy.get("#password").type("1234568.")
    cy.get("#login").click()
    cy.get("[class='MuiAlert-message css-1xsto0d']").should('be.visible')
   
  })

})