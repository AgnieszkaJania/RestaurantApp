class Customer{
   

    contructor(imie,nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.age;
    }
   
    setAge(age){
        this.age = age;
    }

    introduceCustomer(){
        return this.age == null ? `Hello ! My name is ${this.imie} ${this.nazwisko}. ` : `Hello ! My name is ${this.imie} ${this.nazwisko}. Mam ${this.age} lat `;
    }
    
}

let Jan = new Customer("Jan","Kowalski");
Jan.setAge(17);
console.log(Jan.age)