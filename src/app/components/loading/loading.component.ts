import { Component, Input } from '@angular/core';

@Component({
    selector: '<app-loading>',
    template: `
        <section class="spinner-section">
            <mat-spinner *ngIf="loading" color="warn" mode="indeterminate" value="50"></mat-spinner>
        </section>
    `,
    styles: [
        `.spinner-section {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
        }`
    ]
})
export class LoadingComponent {
    @Input() 
    loading: boolean = false;
}