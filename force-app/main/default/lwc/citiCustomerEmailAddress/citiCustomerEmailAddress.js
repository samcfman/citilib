import { LightningElement, api, track } from 'lwc';
//import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class CitiCmpHelloWorld extends LightningElement {
    @api citiEmailPrimary;
    @api citiEmailSecondary;
    @track showEdit = false;

    @track emailPrimaryTemp;
    @track emailSecondaryTemp;


    //@api showEdit = false;
    
    handleEdit(event){
        this.showEdit = true;
        
        this.emailPrimaryTemp = this.citiEmailPrimary;
        this.emailSecondaryTemp = this.citiEmailSecondary;
    }

    handleApply(event){
        
        this.citiEmailPrimary =  this.emailPrimaryTemp;
        this.citiEmailSecondary = this.emailSecondaryTemp;
        this.showEdit = false;
        
    }

    handleCancel(event){
        this.showEdit = false;
    }
    
    connectedCallback () {
       // loadStyle(this, resourceName + '/citiflow.css');
    }


    handleValueChangeEvent (event) {
        var evtLabel;
        var evtValue;
        evtLabel= event.detail.label;
        evtValue= event.detail.value;

        switch (evtLabel) {
            case 'Primary Email':
                this.emailPrimaryTemp = evtValue;
                break;
            case 'Secondary Email':
                this.emailSecondaryTemp = evtValue;
                break;
        }
    }
}