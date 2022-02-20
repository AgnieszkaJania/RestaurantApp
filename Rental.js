import {Customer} from './Customer.js';

class Rental{
    constructor(date, customer){
        this.customer = customer;
        this.date = Date.now();
    }
}
