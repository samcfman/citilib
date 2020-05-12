import { LightningElement, api } from 'lwc';
import userId from '@salesforce/user/Id';
export default class CitiFileUpload extends LightningElement {
    @api relatedrecordid=userId;   
   // @api myRecordId = userId;
    @api fileId;
    @api fileName;
    @api description; 
    @api uploadedFiles = [];
    @api hasFiles = false;
    @api downloadLinks = [];
    get acceptedFormats() {
        return ['.pdf', '.png','.jpg'];
    }


    baseURL = 'https://sdodemo-main-16109844f55-163-171a6cef12b.force.com/cumuluswealth'

    get fileurl () {

        return this.baseURL + '/sfc/servlet.shepherd/document/download/' + this.fileId;

    }            

    handleUploadFinished(event) {
        // Get the list of uploaded files
        this.uploadedFiles = event.detail.files;
        //console.log(typeof uploadedFiles);
        this.fileName = this.uploadedFiles[0].name;
        this.fileId = this.uploadedFiles[0].documentId;
        
       // console.log('this.fileId-->'+this.fileId);
        this.hasFiles = true;

    }

}