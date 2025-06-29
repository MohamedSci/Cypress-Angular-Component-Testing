import { LookupDropdownComponent } from './lookup-dropdown-component';
describe('LookupDropdownComponent', () => {
  it('should select an item from dropdown', () => {
    cy.mount(LookupDropdownComponent, {
      componentProperties: {
        items: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Orange' },
        ],
        selectedItem: 1,
      },
    });

cy.get('[data-testid="lookup-dropdown"]').select('2');
    cy.get('[data-testid="lookup-dropdown"]').should('have.value', '2');
  });
});