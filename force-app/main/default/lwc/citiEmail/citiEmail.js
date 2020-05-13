import { LightningElement, api } from 'lwc';

export default class CitiEmail extends LightningElement {

    @api label;
    @api value;
    @api readonly=false;
    @api required=false;
    @api msgmismatch;


    handleOnInputChange(event){
        this.value = event.target.value;

    }

}