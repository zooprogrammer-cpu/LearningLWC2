import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToRealtedRelationship extends NavigationMixin(LightningElement) {
    navigateToRelatedList(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015f00000JSJQ7AAP',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })    
    }
}