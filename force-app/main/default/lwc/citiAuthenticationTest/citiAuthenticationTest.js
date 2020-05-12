import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class CitiAuthenticationTest extends LightningElement {
    @api accountNo = '1234567890123456';
    @api authenticationStatus = false;

    connectedCallback () {
        loadStyle(this, resourceName + '/citiflow.css');
    }
  //  accountNo ;
    authenticationStatus = true;
}