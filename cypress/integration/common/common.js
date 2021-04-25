import {Given, When} from 'cypress-cucumber-preprocessor/steps'

Given('that we use the file {string} as the request', function(file){
    cy.fixture(file).as('request');
})

When('we do a {string} call to {string}', function(method, endpoint){
    let url = `${Cypress.env("apiUrl")}${endpoint}`;
    if(this.request){
        cy.request(method, url, this.request).as('response');
    } else {
        cy.request(method, url).as('response');
    }
})

Then('the status code is {int}', function(num){
    cy.get('@response').should((res) => {
        expect(res.status).to.eq(num)
    });
})

Then('the response body should have the property {string} with the value {string}', function(prop, value){
    cy.get('@response').should((res) => {
        if(typeof res[prop] !== typeof value && value === 'true' || value === 'false'){
            expect(res.body).to.have.property(prop,Boolean(value));
        } else if (typeof res[prop] !== typeof value && !isNaN(Number(value))){
            expect(res.body).to.have.property(prop,Number(value));
        }
        else { expect(res.body).to.have.property(prop,value) }
    });
})

Then('the response should have the property {string}', function(prop){
    cy.get('@response').should((res) => {
        expect(res).to.have.property(prop)
    });
})