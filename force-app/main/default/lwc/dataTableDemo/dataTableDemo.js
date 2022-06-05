import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/tableController.getAccounts';
const COLUMNS = [
    {label:'Account Name', fieldName:'Name'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'currency', cellAttributes:{
        class:{fieldName:'amountColor'}
    }},
    {label:'Industry', fieldName:'Industry'},
    {label:'Phone', fieldName:'Phone'}
]
const COLUMNSLESSINDUSTRY = [
    {label:'Account Name', fieldName:'Name'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'currency'},
    {label:'Phone', fieldName:'Phone'}
]
export default class DataTableDemo extends LightningElement {
    tableData
    columns = COLUMNS
    columnsLessIndustry = COLUMNSLESSINDUSTRY

    showIndustry =true
    @wire(getAccounts) 
    accountsHandler({data,error}){
        if(data){
            this.tableData = data.map(item=>{
                let amountColor = item.AnnualRevenue < 500000 ? "slds-text-color_error": "slds-text-color_success"
                return {...item,"amountColor":amountColor}
            });
            console.log(this.tableData);
 
        }
        if(error){
            console.error(error)
        }
    }

}