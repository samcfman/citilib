import { LightningElement, api } from 'lwc';

export default class CitiNumber extends LightningElement {

    @api label;
    @api value;
    @api readonly=false;
    @api required=false;
    @api formatter;
    @api min;
    @api max;


    handleOnInputChange(event){
        this.value = event.target.value;

    }

}