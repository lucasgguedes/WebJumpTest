//Acessando a URL de forma simplificada, podemos inserir uma função depois do nome do projeto também
describe('Projeto WebJump', function(){

    
    //Tudo dentro da mesma função
    it.only('Acesso',function(){
        cy.visit('https://magento2-demo.magebit.com')

        
        //criando a conta
        cy.contains('Create an Account').click()
        cy.get('#firstname').type('Lucas')
        cy.get('#lastname').type('Guedes')
        cy.get('#is_subscribed').check()
        cy.get('#email_address').type('lucas@teste.com.br')
        cy.get('#password').type('Mudar123!')
        cy.get('#password-confirmation').type('Mudar123!')
        cy.contains('.button', 'Create an Account').click()


        // //Realizando Login
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#pass').type('Mudar123!')
        
        //Adicionando item no carrinho
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-157-item-170').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div > a').click()

        //Finalização de compra
        cy.contains('.button', 'Proceed to Checkout').click()
        cy.get('#QE4A5NS').type('teste123')
        cy.get('#L6I6721').type('rua 1')
        cy.get('#NA4UMUC').type('rua 2')
        cy.get('#XH3NWO4').type('rua 3')
        cy.get('#uid')//passando ID da combobox
            .select('Uganda')

        cy.get('#AECO12X').type('Bauru')
        cy.get('#Y7P7T0I').type('12345-6789')
        cy.get('#JD9N3GL').type('14 99999-9999')
        cy.get(':nth-child(1) > :nth-child(1) > .radio')
            .check()

        cy.get('.button').click()

        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click


        //adicionando produto fluxo alternativo
        cy.get('#search').type('Hero Hoodie ').click('Search')

    })



    //Ou por módulos.

    //criando conta
    it('Criando conta'), function() {
        cy.contains('Create an Account').click()
        cy.get('#firstname').type('Lucas')
        cy.get('#lastname').type('Guedes')
        cy.get('#is_subscribed').check()
        cy.get('#email_address').type('lucas@teste.com.br')
        cy.get('#password').type('Mudar123!')
        cy.get('#password-confirmation').type('Mudar123!')
        cy.contains('.button', 'Create an Account').click()
    }
    //Inserindo o login
    it('Inserir Login'), function() {
        cy.get('#email').type('lucas@teste.com.br')
        cy.get('#pass').type('Mudar123!')
        cy.contains('.button', 'Sign In').click()      

    }

     //Adicionando item no carrinho
     it('Adicionando item no carrinho'), function(){
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-157-item-170').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div > a').click()
    }

    //Acessando checkout e finalizando compra
   
    it('Finalizando compra'), function(){
        cy.contains('.button', 'Proceed to Checkout').click()
        cy.get('#QE4A5NS').type('teste123')
        cy.get('#L6I6721').type('rua 1')
        cy.get('#NA4UMUC').type('rua 2')
        cy.get('#XH3NWO4').type('rua 3')
        cy.get('#uid')//passando ID da combobox
            .select('Uganda')

        cy.get('#AECO12X').type('Bauru')
        cy.get('#Y7P7T0I').type('12345-6789')
        cy.get('#JD9N3GL').type('14 99999-9999')
        cy.get(':nth-child(1) > :nth-child(1) > .radio')
            .check()

        cy.get('.button').click()

        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click
    }

   
     //adicionando produto fluxo alternativo
     it('Produtos Aleatórios'), function(){
     cy.get('#search').type('Hero Hoodie ').click('Search')
    }

})

