({
	init : function(component, event, helper) {
		var flow = component.find("flowData");
        var flowName= component.get ("v.flowName");
        var paramFlowName = helper.getURLParameterValue().flowname;
        
        if (paramFlowName !== undefined) {            
        	alert (paramFlowName);
            flowName = paramFlowName;            
        }
        
        if (flowName !== undefined) {
          flow.startFlow(flowName);    
        }
		      
	},
    
    
    getParamValue: function(component, event, helper) {
 
        //Get Id Parameter Value From Community URL
        var flownameValue = helper.getURLParameterValue().flowname;
        //console.log('Id-' + idParamValue);
 		return flownameValue;
        //Get Name Parameter Value From Community URL
        //var nameParamValue = helper.getURLParameterValue().name;
        //console.log('Name-' + nameParamValue);
    }    
})