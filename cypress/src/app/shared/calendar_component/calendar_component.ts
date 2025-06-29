export const CalendarComponent =
    `
<mat-form-field>
  <input matInput [matDatepicker]="picker" [(ngModel)]="selectedDate" data-testid="calendar">
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
`
    ;
