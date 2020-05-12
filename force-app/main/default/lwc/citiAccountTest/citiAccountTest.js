import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CitiAccountTest extends LightningElement {
    @api accountNumber;
    @api firstName;
    @api lastName;
    @api mobile;

    connectedCallback () {
        loadStyle(this, resourceName + '/citiflow.css');
    }    
}