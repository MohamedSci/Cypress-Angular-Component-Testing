export const PaginatorComponent =
    `
<mat-paginator
  [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 20]"
  (page)="onPageChange($event)">
</mat-paginator>
`
    ;
