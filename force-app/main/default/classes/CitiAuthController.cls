global  class CitiAuthController {
    global class AuthResults {
        @InvocableVariable
        global CitiAuthSession CitiAuthSession;
    }    
    
    global class AuthRequest {
        @InvocableVariable
        global String accountNo;
         @InvocableVariable
        global String userId;
         @InvocableVariable
        global String password;
        
    }
    
	@InvocableMethod(label='Citi Authentication' description='Return Authentication Session ID') 
    public static  List<AuthResults> Authenticate(List<AuthRequest> requests) {
        CitiAuthSession authResult = GetAuthenticationRequest (requests[0]);
        List<AuthResults> resultsList = new List<AuthResults> ();
        
       	AuthResults curResult = new AuthResults();
        curResult.CitiAuthSession = authResult;

        resultsList.add(curResult);
        return resultsList;                     
    }    


    private static CitiAuthSession GetAuthenticationRequest (AuthRequest r) {
 /*           Http http = new Http();
            HttpRequest request = new HttpRequest();          
            String account = r.accountId;
            request.setEndpoint(endpoint + account );
            request.setMethod('GET');
            HttpResponse response = http.send(request);
           
            Results curResult = new Results();
            String responseJSON = response.getBody();       */
        
       		CitiAuthSession auth = new CitiAuthSession();
        	auth.accountNo = r.accountNo;
        	auth.authSession = '11111111'; //dummy value for demo         
        	
        	return auth;
    }        
}