import { LightningElement, api, track } from 'lwc';
//import { LightningElement, api } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class CitiCmpHelloWorld extends LightningElement {
    @api citiPhoneMobile;
    @api citiPhoneHome;
    @api citiPhoneOffice;
    @api citiPhoneOfficePattern;
    @api msgpatternmismatchoffice;
    @api citiPhoneHomePattern;
    @api msgpatternmismatchhome;
    @api citiPhoneMobilePattern;
    @api msgpatternmismatchmobile;


   // @api showEdit = false;

    @track showEdit = false;
    @track citiPhoneHomeTemp;
    @track citiPhoneMobileTemp;
    @track citiPhoneOfficeTemp;
    
    handleEdit(event){
        this.showEdit = true;
        
        this.citiPhoneHomeTemp = this.citiPhoneHome;
        this.citiPhoneMobileTemp = this.citiPhoneMobile;
        this.citiPhoneOfficeTemp = this.citiPhoneOffice;
    }

    handleApply(event){
        this.showEdit = false;
        this.citiPhoneHome = this.citiPhoneHomeTemp;
        this.citiPhoneMobile = this.citiPhoneMobileTemp;
        this.citiPhoneOffice = this.citiPhoneOfficeTemp;
    }
    
    handleCancel(event){
        this.showEdit = false;
    }

    handleValueChangeEvent (event) {
        var evtLabel;
        var evtValue;
        evtLabel= event.detail.label;
        evtValue= event.detail.value;

        switch (evtLabel) {
            case 'Mobile':
                this.citiPhoneMobileTemp = evtValue;
                break;
            case 'Home':
                this.citiPhoneHomeTemp = evtValue;
                break;
            case 'Office':
                this.citiPhoneOfficeTemp = evtValue;
                break;
        }
    }
    
    connectedCallback () {
      //  loadStyle(this, resourceName + '/citiflow.css');
    }
}