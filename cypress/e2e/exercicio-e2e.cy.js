/// <reference types="cypress" />
import checkoutPage from "../support/page/checkout.page"
const { faker } = require('@faker-js/faker')
const dadosCheckout = require('../fixtures/perfilcheckout.json')


describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produto/')

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var quantidade1 = 3
        var quantidade2 = 4
        var quantidade3 = 6
        var quantidade4 = 1

        cy.addProdutos('Beaumont Summit Kit', 'S', 'Red', quantidade1)
        cy.addProdutos('Bruno Compete Hoodie', 'L', 'Green', quantidade2)
        cy.addProdutos('Frankie Sweatshirt', 'XS', 'White', quantidade3)
        cy.addProdutos('Chaz Kangeroo Hoodie', 'M', 'Gray', quantidade4)

        cy.fixture("perfilcheckout").then(dados => {
            checkoutPage.realizarComprasemcadastro(
                dados[1].nome,
                dados[1].sobrenome,
                dados[1].empresa,
                dados[1].pais,
                dados[1].rua,
                dados[1].numero,
                dados[1].cidade,
                dados[1].estado,
                dados[1].cep,
                dados[1].telefone,
                dados[1].email)
        })
        cy.wait(10000)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')


    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta com cadastro Faker', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let empresaFaker = faker.company.name()
        let emailFaker = faker.internet.email(nomeFaker)

        var quantidade1 = 3
        var quantidade2 = 4
        var quantidade3 = 6
        var quantidade4 = 1

        cy.addProdutos('Beaumont Summit Kit', 'S', 'Red', quantidade1)
        cy.addProdutos('Bruno Compete Hoodie', 'L', 'Green', quantidade2)
        cy.addProdutos('Frankie Sweatshirt', 'XS', 'White', quantidade3)
        cy.addProdutos('Chaz Kangeroo Hoodie', 'M', 'Gray', quantidade4)


        checkoutPage.realizarCompraComCadastro(
            nomeFaker,
            sobrenomeFaker,
            empresaFaker,
            dadosCheckout[1].pais,
            dadosCheckout[1].rua,
            dadosCheckout[1].numero,
            dadosCheckout[1].cidade,
            dadosCheckout[1].estado,
            dadosCheckout[1].cep,
            dadosCheckout[1].telefone,
            emailFaker)

        cy.wait(10000)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido')

    });


})
