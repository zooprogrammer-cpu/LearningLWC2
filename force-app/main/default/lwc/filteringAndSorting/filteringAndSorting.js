import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSorting extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData = [] // store the data in thie empty array
    filteredData = []
    timer
    @wire(getContactList)
    contactHandler({data,error}){
        if (data){
            console.log(data)
            this.fullTableData = data
            this.filteredData = data
        }
        if (error){
            console.error(error)
        }
    }

    filterHandler(event){
        const{value} = event.target
        if(value){
            window.clearTimeout(this.timer)
            this.timer = window.setTimeout(()=>{ //adding delay to the input field
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    //Note: This isObject.keys(eachObj) = ["Id", "Name", "Title", "Email"]
                    return Object.keys(eachObj).some(key=>{
                        return eachObj[key].toLowerCase().includes(value)
        
                    })
                })
            },500)
           
        }
        else{
            this.filteredData = [...this.fullTableData]
        }
      
    }

}