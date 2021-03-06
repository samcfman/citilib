import { LightningElement, api } from 'lwc';

export default class CitiFieldEdit extends LightningElement {

    @api label;
    @api value;
    @api readonly=false;
    @api required=false;
    @api pattern;
    @api msgpatternmismatch;
    @api maxinputlength;

    handleOnInputChange(event){
        this.value = event.target.value;

    }

}