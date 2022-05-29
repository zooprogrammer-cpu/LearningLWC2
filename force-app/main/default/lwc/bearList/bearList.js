import { LightningElement,wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';
import searchBears from '@salesforce/apex/BearController.searchBears';
export default class BearList extends LightningElement {
	//***Imperative Apex */ 
	// bears;
	// error;
	// appResources = {
	// 	bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	// };
	// connectedCallback() {
	// 	this.loadBears();
	// }
	// loadBears() {
	// 	getAllBears()
	// 		.then(result => {
	// 			this.bears = result;
	// 		})
	// 		.catch(error => {
	// 			this.error = error;
	// 		});
	// }

	//**Wired Apex */
	searchTerm='';
	@wire(searchBears,{searchTerm: '$searchTerm'}) bears;
	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	}; 

	handleSearchTermChange(event){
		// Debouncing this methid: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms. 
		// This is to avoid a very large number of Apex method calls. 
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value; 
		this.delayTimeout = setTimeout(()=>{
			this.searchTerm = searchTerm; 
		},300); 
	}

	get hasResults(){
		return (this.bears.data.length>0); 
	}



}