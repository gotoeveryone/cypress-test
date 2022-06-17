context('トップ', () => {
  describe('タイトル', () => {
    it('Go to Everyone! が設定されている', () => {
      cy.visit('/');
      cy.title().should('equal', 'Go to Everyone!');
    });
  });
  describe('h1', () => {
    it('Go to Everyone! が設定されている', () => {
      cy.visit('/');
      cy.get('h1').contains('Go to Everyone!');
    });
  });
});
