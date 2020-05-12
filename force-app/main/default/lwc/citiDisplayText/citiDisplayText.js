import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CitiDisplayText extends LightningElement {
    @api text;
    @api cssclass='citiText';

    connectedCallback () {
       // loadStyle(this, resourceName + '/citiflow.css');
    }   
}