describe('PetStore endpoints', () => {
    it('GET method should retrieve all available pets', () => {
        cy.request('GET', `${Cypress.env("apiUrl")}/pet/findByStatus?status=available`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res).to.have.property('isOkStatusCode', true)
            expect(res.body.length).to.be.greaterThan(1)
        })
    })
    it('POST method should add a new pet', () =>{
        cy.fixture('request').then((req) => {
            cy.request('POST', `${Cypress.env("apiUrl")}/pet`, req).then((res) => {
                expect(res.status).to.eq(200);
                expect(res).to.have.property('isOkStatusCode', true)
                expect(res.body).to.have.property('id')
            })
        })
    })
    it('PUT method should modify the pet to status sold', () => {
        cy.fixture('modify').then((req) => {
            cy.request('POST', `${Cypress.env("apiUrl")}/pet`, req).then((res) => {
                expect(res.status).to.eq(200);
                expect(res).to.have.property('isOkStatusCode', true)
                expect(res.body).to.have.property('status', 'sold')
            })
        })
    })
    it('DELETE method should delete a pet', () => {
        cy.request('DELETE', `${Cypress.env("apiUrl")}/pet/10`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res).to.have.property('isOkStatusCode', true)
        })
    })
})