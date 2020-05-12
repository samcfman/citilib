import { LightningElement, track, api } from 'lwc';

export default class CitiOTPVerify extends LightningElement {
    @track field1;
    @track field2;
    @track field3;
    @track field4;
    @track field5;
    @track field6;
    @api authenticationStatus;

    
    handleinput (event) {
        this.field1 = '1';
        this.field2 = '2';
        this.field3 = '3';
        this.field4 = '4';
        this.field5 = '5';
        this.field6 = '6';
        this.authenticationStatus = true;
    }

    connectedCallback () {
        this.authenticationStatus = true;
    }   
}