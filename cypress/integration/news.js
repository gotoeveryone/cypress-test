context('Go News', () => {
  describe('タイトル', () => {
    it('Go News が含まれる', () => {
      cy.visit('/news');
      cy.title().should('include', 'Go News');
    });
  });
  describe('メインコンテンツ', () => {
    it('content-news クラスが設定されている', () => {
      cy.visit('/news');
      cy.get('div.content').should('have.class', 'content-news');
    });
  });
});
