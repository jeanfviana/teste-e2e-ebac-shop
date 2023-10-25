class CheckoutPage {

    realizarComprasemcadastro(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').type(rua)
        cy.get('#billing_address_2').type(numero)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()
        
        
    }

    realizarCompraComCadastro(nome, sobrenome, empresa, pais, rua, numero, cidade, estado, cep, telefone, email){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').type(rua)
        cy.get('#billing_address_2').type(numero)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#createaccount').click()
        cy.get('#account_password').type('123456789')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        
        
    }

    

}

export default new CheckoutPage()