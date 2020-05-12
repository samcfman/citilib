global class CitiAccountController {
	@InvocableMethod(label='Get Account' description='Return the Account by Account No') 
    public static  List<Results> getAccount(List<Request> requests) {
        CitiAccount acct = GetAccountRequest (requests[0]);
        List<Results> resultsList = new List<Results> ();
        Results curResult = new Results();
        curResult.CitiAccount = acct;
        resultsList.add(curResult);
        return resultsList;
    }
    
    private static CitiAccount GetAccountRequest (Request r) {
 /*           Http http = new Http();
            HttpRequest request = new HttpRequest();          
            String account = r.accountId;
            request.setEndpoint(endpoint + account );
            request.setMethod('GET');
            HttpResponse response = http.send(request);
           
            Results curResult = new Results();
            String responseJSON = response.getBody();       */
        
        	CitiAccount curAccount = GetSimulatedResponse(r.accountNo);
        	return curAccount;
    }    
    
    private static CitiAccount GetSimulatedResponse (string accountNo) {
        CitiAccount acct = new CitiAccount();
		string firstname = 'Julie';
        string lastname = 'Morris';
		list<Account> lstAcct = [select ID, PersonMobilePhone,Office_Phone__c,PersonHomePhone,firstname,lastname,
                                 Citi_Mailing_Address_1__c, Citi_Mailing_Address_2__c, Citi_Mailing_Address_3__c,Citi_City__c,
                                 Citi_Postal_Code__c,PersonEmail,Secondary_Email__c from Account where firstname=:firstname and lastname=:lastname];
                                                    
        if (lstAcct.size() > 0) {  
            Account acctRecord = lstAcct[0];
			acct.accountNo = accountNo;
            acct.recordID = acctRecord.Id;
            acct.firstName = acctRecord.firstname;
            acct.lastName = acctRecord.lastname;
            acct.primaryEmail = acctRecord.PersonEmail;
            acct.secondaryEmail = acctRecord.Secondary_Email__c;
            acct.mobile = acctRecord.PersonMobilePhone;
            acct.home = acctRecord.PersonHomePhone;
            acct.office = acctRecord.Office_Phone__c;
            acct.totalCreditLimit = 12000;
            acct.availableCreditLimit = 12600;
            acct.eligableLimit = 30000;
            
            CitiAddress add = new CitiAddress();
            add.address1 = acctRecord.Citi_Mailing_Address_1__c;
            add.address2 = acctRecord.Citi_Mailing_Address_2__c;
            add.address3 = acctRecord.Citi_Mailing_Address_3__c;
            add.city = acctRecord.Citi_City__c;
            add.postCode = acctRecord.Citi_Postal_Code__c;
           
            acct.MailingAddress = add;        
        
        }
        
        
        
//		FinServ__FinancialAccount__c acctRecord;
/*		list<FinServ__FinancialAccount__c> lstAcct = [select ID, FinServ__FinancialAccountNumber__c,FinServ__PrimaryOwner__r.Id,FinServ__PrimaryOwner__r.PersonMobilePhone,
                                                    FinServ__PrimaryOwner__r.Office_Phone__c,FinServ__PrimaryOwner__r.PersonHomePhone,
                                                    FinServ__PrimaryOwner__r.firstname, FinServ__PrimaryOwner__r.lastname,
                                                    FinServ__PrimaryOwner__r.Citi_Mailing_Address_1__c,FinServ__PrimaryOwner__r.Citi_Mailing_Address_2__c,
                                                    FinServ__PrimaryOwner__r.Citi_Mailing_Address_3__c,FinServ__PrimaryOwner__r.Citi_City__c,
                                                    FinServ__PrimaryOwner__r.Citi_Postal_Code__c,
                                                    FinServ__PrimaryOwner__r.PersonEmail,FinServ__PrimaryOwner__r.Secondary_Email__c,
                                                    FinServ__AvailableCredit__c,FinServ__TotalCreditLimit__c,Eligible_Limit__c
                                                    from FinServ__FinancialAccount__c 
                                                    where FinServ__FinancialAccountNumber__c = :accountNo];        
*/ 
/*	if (lstAcct.size() >0) {
            acctRecord = lstAcct[0];

			acct.accountNo = accountNo;
            acct.recordID = acctRecord.FinServ__PrimaryOwner__r.Id;
            acct.firstName = acctRecord.FinServ__PrimaryOwner__r.firstname;
            acct.lastName = acctRecord.FinServ__PrimaryOwner__r.lastname;
            acct.primaryEmail = acctRecord.FinServ__PrimaryOwner__r.PersonEmail;
            acct.secondaryEmail = acctRecord.FinServ__PrimaryOwner__r.Secondary_Email__c;
            acct.mobile = acctRecord.FinServ__PrimaryOwner__r.PersonMobilePhone;
            acct.home = acctRecord.FinServ__PrimaryOwner__r.PersonHomePhone;
            acct.office = acctRecord.FinServ__PrimaryOwner__r.Office_Phone__c;
            acct.totalCreditLimit = acctRecord.FinServ__TotalCreditLimit__c;
            acct.availableCreditLimit = acctRecord.FinServ__AvailableCredit__c;
            acct.eligableLimit = acctRecord.Eligible_Limit__c;
            
            CitiAddress add = new CitiAddress();
            add.address1 = acctRecord.FinServ__PrimaryOwner__r.Citi_Mailing_Address_1__c;
            add.address2 = acctRecord.FinServ__PrimaryOwner__r.Citi_Mailing_Address_2__c;
            add.address3 = acctRecord.FinServ__PrimaryOwner__r.Citi_Mailing_Address_3__c;
            add.city = acctRecord.FinServ__PrimaryOwner__r.Citi_City__c;
            add.postCode = acctRecord.FinServ__PrimaryOwner__r.Citi_Postal_Code__c;
           
            acct.MailingAddress = add;
         

		}
        */
        return acct;
    }
    
    global class Request {
        @InvocableVariable
        global String accountNo;
        
    }
    
    global class Results {
        @InvocableVariable
        global CitiAccount CitiAccount;
    }    
    

    
}