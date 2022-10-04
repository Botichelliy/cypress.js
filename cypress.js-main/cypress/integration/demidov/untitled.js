
describe('Автотесты для формы логина и пароля', function () {
   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('gena.demidov.1998@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#restoreEmailButton');
    })
})




describe('Автотесты для формы логина и пароля', function () {
   it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton');
    })
})




describe('Автотесты для формы логина и пароля', function () {
   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('irLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton');
    })
})




describe('Автотесты для формы логина и пароля', function () {
   it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ggerman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton');
    })
})




describe('Автотесты для формы логина и пароля на Staya', function () {
   it('Позитивный тест авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('gennadiy.demidov.1998@mail.ru')
        cy.get('.auth-form > form > [type="password"]').type('Elofram20')
        cy.get('.auth-form__submit > .s-button__content').click()
        cy.contains('Мои заказы');
        //cy.get('.auth-form > form > [type="email"]').type('iLoveqastudio1');
        //cy.get('#loginButton').click();
        //cy.contains('Такого логина или пароля нет');
        //cy.get('#exitMessageButton');

    })
})