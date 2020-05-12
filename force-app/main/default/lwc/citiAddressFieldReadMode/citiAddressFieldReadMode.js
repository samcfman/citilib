import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CitiAddressFieldReadMode extends LightningElement {
    @api address1;
    @api address2;
    @api address3;
    @api city;
    @api postal;

    connectedCallback () {
      //  loadStyle(this, resourceName + '/citiflow.css');
    }
    
}