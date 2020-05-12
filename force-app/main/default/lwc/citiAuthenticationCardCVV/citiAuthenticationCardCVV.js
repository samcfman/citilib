import { LightningElement, api } from 'lwc';

export default class CitiAuthenticationCardCVV extends LightningElement {
    @api cardNumber;
    @api cvv;
    @api isCardLogin;
    @api otp;
    @api enterOTP = false;
    @api authenticationStatus;
    handleClick(event){
        this.enterOTP = true;
    }

    handleInput (event) {
        this.cvv = '123';
        this.authenticationStatus = true;
    }    

}