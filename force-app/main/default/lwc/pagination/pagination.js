import { LightningElement,api } from 'lwc';

export default class Pagination extends LightningElement {
    totalRecords
    @api recordSize = 5 
    get records(){
        return this.visibleRecords
    }
   // make the property public and catch the records property from paginationDemo parent
    //not just catch but we want to modify the data from the parent
    @api
    set records(data){
        if(data){
            this.totalRecords = data
            this.visibleRecords = data.slice(0,this.recordSize)
            this.totalPage = Math.ceil(data.length/this.recordSize)
            this.updateRecords()
        }    
    }
    previousHandler(){

    }

    nextHandler(){

    }

    updateRecords(){
        this.dispatchEvent(new CustomEvent('update',{
            detail:{
                records:this.visibleRecords
            }
        }
            
        ))
    }
}