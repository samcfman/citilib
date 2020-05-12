import { LightningElement, api } from 'lwc';

export default class CitiFieldEdit extends LightningElement {

    @api label;
    @api value;

    handleOnInputChange(event){
        this.value = event.target.value;

    }

}