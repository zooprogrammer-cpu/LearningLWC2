import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    navigateToLwc(){
        var definition ={
            componentDef:'c:navigationLwcTarget'
        }
        this[NavigationMixin.Navigate]({
            type:'standard_webPage',
            attributes: {
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
}