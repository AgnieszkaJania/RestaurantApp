class Customer{
   

    contructor(imie,nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.age;
    }
   
    setAge(age){
        this.age = age;
    }
    
}

let Jan = new Customer("Jan","Kowalski");
Jan.setAge(17);
console.log(Jan.age)