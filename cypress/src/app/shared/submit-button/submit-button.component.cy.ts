import { SubmitButtonComponent } from "./submit-button.component";

describe('SubmitButtonComponent', () => {
    it('should trigger submit on click', () => {
        cy.mount(SubmitButtonComponent, {
            componentProperties: {
                onSubmit: cy.stub().as('submitStub'),
            },
        });

        cy.get('[data-testid="submit-btn"]').click();
        cy.get('@submitStub').should('have.been.calledOnce');
    });
});