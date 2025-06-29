import { PaginatorComponent } from './paginator_component';
describe('PaginatorComponent', () => {
  it('should emit page change', () => {
    cy.mount(PaginatorComponent, {
      componentProperties: {
        onPageChange: cy.stub().as('pageChange'),
      },
    });
cy.get('button.mat-paginator-navigation-next').click();
    cy.get('@pageChange').should('have.been.called');
  });
});