import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.component.html',
  styleUrls: ['./CustomerApp.component.css']
})

export class CustomerComponent { //created class named as AppComponent

  title = 'Customer Application'; //created variable named as title and it is assigned to Customer Application. We can consume this title on the UI using Expressions {{  }}.

  CustomerModel : Customer = new Customer(); // creating customer model object, first it is variable name and then customer = new customer();

  CustomerModels : Array<Customer> = new Array<Customer>(); // this is for the collection of customer's data. So this is going to be an array.
  //Array of Customer.

  Add(){ //when Add button is called, we would like to add the CustomerModel data to CustomerModels 
    this.CustomerModels.push(this.CustomerModel); // push the current customer model to this this.CustomerModels collection.
    this.CustomerModel = new Customer();//clear UI, to clear the current customer UI and be ready with fresh customer object.
  }
  
}
 