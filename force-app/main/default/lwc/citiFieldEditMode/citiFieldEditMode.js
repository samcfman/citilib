import { LightningElement, api } from 'lwc';

export default class CitiFieldEditMode extends LightningElement {
    @api label;
    @api value;
    @api pattern;
    @api msgpatternmismatch;


    handleOnInputChange(event){
        this.value = event.target.value;

        var param = {label:this.label, value:event.target.value};


        this.dispatchEvent(new CustomEvent('valuechange', {detail: param}));    
    }

    
}