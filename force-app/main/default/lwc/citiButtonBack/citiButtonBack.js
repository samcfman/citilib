import { LightningElement, api } from 'lwc';
import {FlowAttributeChangeEvent, FlowNavigationBackEvent} from 'lightning/flowSupport';

export default class CitiButtonBack extends LightningElement {
    @api buttonlabel;
    
    handleBack(event){
        const nextNavigationEvent = new FlowNavigationBackEvent();
            this.dispatchEvent(nextNavigationEvent);
    }       


}