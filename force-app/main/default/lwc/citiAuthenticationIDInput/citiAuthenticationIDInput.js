import { LightningElement, api  } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CitiAuthenticationIDInput extends LightningElement {

    @api account;
    @api userId;
    @api password;

    connectedCallback () {
      //  loadStyle(this, resourceName + '/citiflow.css');
    }    
}