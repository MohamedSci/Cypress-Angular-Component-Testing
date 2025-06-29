import { CalendarComponent } from './calendar_component';
describe('CalendarComponent', () => {
    it('should open calendar and select a date', () => {
        cy.mount(CalendarComponent);
        cy.get('[data-testid="calendar"]').click();
        cy.get('.mat-calendar-body-cell-content').contains('15').click();
        cy.get('[data-testid="calendar"]').should('contain.value', '15');
    });
});