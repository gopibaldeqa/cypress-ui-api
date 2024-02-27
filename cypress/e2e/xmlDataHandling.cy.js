import user from '../fixtures/sampleXmlData.xml'

it('loads the same object', () => {
    cy.fixture('user').then((userFixture) => {
        cy.log(userFixture)
    //   expect(user, 'the same data').to.deep.equal(userFixture)
    })
  })
