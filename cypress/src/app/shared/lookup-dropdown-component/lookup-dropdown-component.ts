export const LookupDropdownComponent =
    `
<select data-testid="lookup-dropdown" [(ngModel)]="selectedItem">
  <option *ngFor="let item of items" [value]="item.id">{{ item.name }}</option>
</select>
`
    ;
