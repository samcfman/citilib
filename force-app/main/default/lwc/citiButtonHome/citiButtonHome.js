import { LightningElement, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CitiButtonHome extends NavigationMixin(LightningElement) {
    @api buttonlabel = 'Go to Home';

    handleButtonClick () {
 //       alert ('button click');
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
            pageName: 'home'
            },
            state: {
            }    
        },
        true // Replaces the current page in your browser history with the URL
        );

    }    
}