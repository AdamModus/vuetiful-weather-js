describe('Main page', () => {
  it('Test and subtitle are visible', () => {
    cy.visit('/');
    cy.get('.v-toolbar__title > span').contains('Vuetiful Weather');
    cy.get('.caption').contains('Powered by Vue/tify');
  });
});
