import { Component } from '@angular/core';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styles: ['h2 {color:red}']
})


export class ProductComponents {
    addProduct=true;
    addProductStatu='no product added';
    enteredValue='Product';

    constructor() {
            setTimeout(() => {
                this.addProduct=false;
            },4000)
    }

    onClick() {
        this.addProductStatu="product added and entered value is: " + this.enteredValue;
    }

    onUpdateProductName(event:any) {
        console.log(event);
        this.enteredValue=(<HTMLInputElement>event.target).value;
    }
}