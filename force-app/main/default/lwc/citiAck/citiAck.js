import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import CITICLICK_ICON from '@salesforce/resourceUrl/cititick';



export default class CitiAck extends LightningElement {

    citiClickIconUrl = CITICLICK_ICON;

    @api h1;
    @api h2;

    connectedCallback () {
       // loadStyle(this, resourceName + '/citiflow.css');
    }
}