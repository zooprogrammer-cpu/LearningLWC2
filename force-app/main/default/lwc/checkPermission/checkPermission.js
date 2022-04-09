import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'

export default class checkPermission extends LightningElement {
    get hasViewAllDataAvail(){
        return hasViewAllData
    }
}