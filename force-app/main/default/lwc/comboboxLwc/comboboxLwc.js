import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboboxClass.getAccounts'; 

export default class ComboboxLwc extends LightningElement {
    @track value = '';
    @track optionsArray =[];

    get options() {
        // return [
        //     { label: 'New', value: 'new value' },
        //     { label: 'Salesforce', value: 'Sf Value' }
        // ];
        return this.optionsArray;
    }

    connectedCallback(){
        getAccounts()
        .then(result=>{
            let arr = [];
            for(let i = 0; i<result.length; i++){
                arr.push({label: result[i].Name , value: result[i].Id})
            }
            this.optionsArray = arr
        })
    }

    handleChanged(event){
        this.value = event.detail.value
    }



}