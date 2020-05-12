import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class CitiCmpHelloWorld extends LightningElement {
    @api FirstName;
    @api LastName;

    connectedCallback () {
       // loadStyle(this, resourceName + '/citiflow.css');
    }
}