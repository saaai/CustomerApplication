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

  CustomerModels : Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();//clear UI
  }
}
 