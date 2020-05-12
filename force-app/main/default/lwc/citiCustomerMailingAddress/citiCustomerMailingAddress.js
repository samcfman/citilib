import { LightningElement, api, track } from 'lwc';
import resourceName from '@salesforce/resourceUrl/citicss';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class CitiCustomerMailingAddress extends LightningElement {    

    @api uploadDescription;
    @api uploadLabel;
    @api uploadFileId;
    @api relatedRecordId;
    @api address1;
    @api address2;
    @api address3;
    @api city;
    @api postCode ;
    @api isChanged;


    @track showEdit = false;
    @track address1Temp;
    @track address2Temp;
    @track address3Temp;
    @track postCodeTemp;
    @track cityTemp;

    connectedCallback () {
       // loadStyle(this, resourceName + '/citiflow.css');
    }

    handleEdit(event){
        this.showEdit = true;
 
        this.address1Temp = this.address1;
        this.address2Temp = this.address2;
        this.address3Temp = this.address3;
        this.postCodeTemp = this.postCode;
        this.cityTemp = this.city;
 
    }

    handleApply(event){
        
        this.address1 = this.address1Temp;
        this.address2 = this.address2Temp;
        this.address3 = this.address3Temp;
        this.city = this.cityTemp;
        this.postCode = this.postCodeTemp;
        this.isChanged = true;
        this.showEdit = false;

        this.dispatchEvent(new FlowAttributeChangeEvent('isChanged', true));
        
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
            case 'Address 1':
                this.address1Temp = evtValue;
                break;
            case 'Address 2':
                this.address2Temp = evtValue;
                break;
            case 'Address 3':
                this.address3Temp = evtValue;
                break;
            case 'City':
                this.cityTemp = evtValue;
                break;                                  
            case 'Postal Code':
                this.postCodeTemp = evtValue;
                break;                                  
        }
    }

    handleFileUpload (event) {
        this.uploadFileId = event.detail;
        this.showEdit = false;
    }
/*    handleEdit(event){
        this.address1 = this.address1Temp;
        this.showEdit = true;
    }
*/
/*    connectedCallback(event){
        this.address1Temp = this.address1;
        this.address2Temp = this.address2;
        this.address3Temp = this.address3;
        this.postCodeTemp = this.postCode;
        this.cityTemp = this.city;
    }
*/
/*    okClick(event){
        this.address1 = this.address1Temp;
        this.address2 = this.address2Temp;
        this.address3 = this.address3Temp;
        this.city = this.cityTemp;
        this.postCode = this.postCodeTemp;

        this.showEdit = false;
    }
*/
/*
    btnClose(event){
        this.showEdit = false;
    }
*/

 /*   handleOnInputChange(event){
        console.log(event.target.id);
        console.log(event.target.value);
        //var eventId = (String) event.target.id;
        if(event.target.id.toString().includes('address1'))
            this.address1Temp = event.target.value;
            if(event.target.id.toString().includes('address2'))
            this.address2Temp = event.target.value;
            if(event.target.id.toString().includes('address3'))
            this.address3Temp = event.target.value;
            if(event.target.id.toString().includes('postCode'))
            this.postCodeTemp = event.target.value;
            if(event.target.id.toString().includes('city'))
            this.cityTemp = event.target.value;
        
    }
*/

}