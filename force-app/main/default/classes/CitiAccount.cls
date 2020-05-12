public class CitiAccount {

    @auraenabled
    public String recordID;   
         
    @auraenabled
    public String accountNo;
    
    @auraenabled
    public String firstName;
    
    @auraenabled
    public String lastName;

    @auraenabled
    public String primaryEmail;

    @auraenabled
    public String secondaryEmail;
    
    @auraenabled
    public String mobile;
    
    @auraenabled
    public String home;
    
    @auraenabled
    public String office;
    
    @auraenabled
	public CitiAddress MailingAddress;

	@auraenabled
    public String addressProofId ;	 
    
	@auraenabled
    public Decimal availableCreditLimit  ;	    
        
	@auraenabled
    public Decimal totalCreditLimit  ;
    
    @auraenabled
    public Decimal eligableLimit;
}