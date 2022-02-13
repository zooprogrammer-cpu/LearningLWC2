import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSorting extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData = [] // store the complete data in this empty array
    filteredData = []  //store the filtered data in this empty array
    timer
    filterBy="Name"
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

    get FilterByOptions(){
        return [
            {label:"All", value:'All'},
            {label:"Id", value:'Id'},
            {label:"Name", value:'Name'},
            {label:"Title", value:'Title'},
            {label:"Email", value:'Email'},

        ]
    }

    filterbyHandler(event){
        this.filterBy = event.target.value
    }

    filterHandler(event){
        const{value} = event.target
        window.clearTimeout(this.timer)
        if(value){
            this.timer = window.setTimeout(()=>{ //adding delay fore debounce technique to the input field
                console.log(value)
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    if(this.filterBy === 'All'){
                      /**Below is the logic that will filter each and every property of object */
                    //Note: This isObject.keys(eachObj) = ["Id", "Name", "Title", "Email"]
                        return Object.keys(eachObj).some(key=>{
                            return eachObj[key].toLowerCase().includes(value)
                        })
                    }else{
                        /**Below is the logic that will filter only selected filterBy */
                        const val =  eachObj[this.filterBy]? eachObj[this.filterBy]:''   
                        return val.toLowerCase().includes(value)
                    }
                })
            },500)
        }
        else{
            this.filteredData = [...this.fullTableData] //show all data if there is no value in 
        }
      
    }

}